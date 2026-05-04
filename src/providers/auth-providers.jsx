import { createContext, useEffect, useState } from "react";

import { getCurrentUser } from "../services/auth";

export const AuthContext = createContext({
  user: null,
  setUser: () => { }
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const value = {
    user,
    setUser,
    isLoading
  };


  useEffect(() => {
    if (!user) {
      setIsLoading(true);

      const getUser = async () => {
        const user = await getCurrentUser();
        setUser(user);
        setIsLoading(false);
      }

      getUser();
    }
  }, []);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}