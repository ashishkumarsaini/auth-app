import { createContext, useEffect, useState } from "react";

import { getCurrentUser } from "../services/auth";

export const AuthContext = createContext({
  user: null,
  setUser: () => { },
  isLoading: true,
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
    const getUser = async () => {
      try {
        const fetchedUser = await getCurrentUser();
        setUser(fetchedUser.data);
      } catch (error) {
        console.error("Failed to fetch user:", error);
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    }

    getUser();
  }, []);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
