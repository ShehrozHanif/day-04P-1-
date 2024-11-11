 "use client"

import userContext from "../context/userContext";
import { useState, useContext } from "react";
import React from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser, setError, error } = useContext(userContext) || {};

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();

   

  //   // if (setError) setError("Please enter both username and password.");
  //   // if (setUser) setUser(null); // Clear previous user data if there’s an error

  //   // // If login is successful:
  //   // if (setUser) setUser({ username, password });
  //   // if (setError) setError(null); // Clear error if login is successful


  //   // if (!username || !password) {
  //   //   setError && setError("Please enter both username and password.");
  //   //   setUser && setUser(null); // Clear previous user data if there’s an error
  //   // } else {
  //   //   setUser && setUser({ username, password });
  //   //   setError && setError(null); // Clear error if login is successful
  //   // }

 
  // };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  
    if (!username || !password) {
      if (setError) setError("Please enter both username and password.");
      if (setUser) setUser(null); // Clear previous user data if there’s an error
    } else {
      if (setUser) setUser({ username, password });
      if (setError) setError(null); // Clear error if login is successful
    }
  };
  
  return (
    <div className="flex items-center justify-center h-96 bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Login</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full py-2 mt-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300"
          >
            Submit
          </button>
        </form>

        {error && (
          <p className="text-red-500 text-center mt-4">{error}</p>
        )}
      </div>
    </div>
  );
}

export default Login;
