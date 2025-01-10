import { BaseStyle } from "@/constants/BaseStyle";
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  TextStyle,
  ViewStyle,
  GestureResponderEvent,
} from "react-native";

interface ButtonProps {
  children: React.ReactNode;
  style?: ViewStyle;
  textStyle?: TextStyle;
  onPress?: (event: GestureResponderEvent) => void;
  [key: string]: any;
  vertical?: number;
  horizontal?: number;
  type?: "primary" | "outline";
}

const Button: React.FC<ButtonProps> = ({
  children,
  style,
  vertical,
  horizontal,
  textStyle,
  type = "primary",
  ...props
}) => {
  return (
    <TouchableOpacity
      style={[
        type === "primary" ? styles.button : styles.buttonOutline,
        style,
        {
          paddingVertical: vertical ?? 10,
          paddingHorizontal: horizontal ?? 20,
        },
      ]}
      activeOpacity={0.7}
      {...props}
    >
      <Text style={[styles.text, textStyle]}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: BaseStyle.primaryColor,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonOutline: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: BaseStyle.primaryColor,
    borderRadius: 25,
  },
  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
});

export default Button;
