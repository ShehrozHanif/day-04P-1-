import Login from "../components/Login";
import Profile from "../components/Profile";
import UserContextProvider from "../context/UserContextProvider";
import React from "react";

function App() {
  return (
    <UserContextProvider>
      <h1 className="text-4xl font-bold text-center">React with Context API Example</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;


