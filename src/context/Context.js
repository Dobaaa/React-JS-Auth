import { createContext, useState } from "react";

export const User = createContext({});

export default function UserProvider({ children }) {
  const [auth, SetAuth] = useState({});
  return <User.Provider value={{ auth, SetAuth }}>{children}</User.Provider>;
}
