export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  image: string | null;
  background: string;
  createdAt: string;
  updatedAt: string;
  token?: string;
}
