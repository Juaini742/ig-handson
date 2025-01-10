import { axiosInstance } from "@/lib/axios.instance";
import { useRouter } from "expo-router";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  useTransition,
} from "react";
import * as SecureStore from "expo-secure-store";
import { User } from "@/lib/interfaces";

interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  handleInputChange: (field: string, value: string) => void;
  onSubmit: () => void;
  isPending: boolean;
  isLoading: boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isPending, startTransition] = useTransition();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const onSubmit = async () => {
    if (!formData.email || !formData.password) {
      console.log("Invalid form data");
      return;
    }
    startTransition(() => {
      axiosInstance
        .post("/auth/login", {
          email: formData.email,
          password: formData.password,
        })
        .then(async (res) => {
          await SecureStore.setItemAsync("token", res.data.data.token);
          setFormData({
            email: "",
            password: "",
          });
          router.push("/(tabs)");
        })
        .catch((err) => {
          console.error(err.response?.data || err.message);
        });
    });
  };

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      const token = await SecureStore.getItemAsync("token");
      if (token) {
        axiosInstance.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${token}`;
        try {
          const res = await axiosInstance.get("/user/me");
          setUser({
            ...res.data.data,
            token: token,
          });
          setIsLoading(false);
        } catch (err) {
          console.error((err as any).response?.data || (err as any).message);
        } finally {
          setIsLoading(false);
        }
      }
    })();
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        handleInputChange,
        onSubmit,
        isPending,
        isLoading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
