import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://react-backend-three.vercel.app/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});
