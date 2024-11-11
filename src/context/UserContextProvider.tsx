"use client"

import React, { ReactNode, useState } from "react";
import userContext,  {User} from "./UserContext";

interface UserProviderProps {
  children: ReactNode;
}

const UserContextProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);

  return (
    <userContext.Provider value={{ user, setUser, error, setError }}>
      {children}
    </userContext.Provider>
  );
};

export default UserContextProvider;


