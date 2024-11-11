 "use client"

import React, { createContext } from "react";

// Define and export the User structure
export interface User {
  username: string;
  password: string;
}

interface UserContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  error: string | null;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
}

// Provide a default value with type or undefined
const userContext = createContext<UserContextType | undefined>(undefined);

export default userContext;
