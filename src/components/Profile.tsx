 "use client"

import userContext from "../context/userContext";
import { useContext } from "react";
import React from "react";

function Profile() {
  const { user, error } = useContext(userContext) || {};

  return (
    <div className="flex items-center justify-center h-96 bg-gradient-to-r from-green-500 to-blue-500">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Profile</h2>

        {error && (
          <p className="text-red-500 text-center mb-4">
            {error}
          </p>
        )}

        {user ? (
          <div className="text-center">
            <p className="text-gray-700 text-lg font-semibold">
              Welcome 😊 <br /> <span className="font-normal">{user.username}</span>
            </p>
            <p className="text-gray-700 text-lg font-semibold mt-2">
              {/* Password: <span className="font-normal">{user.password}</span> */}
            </p>
          </div>
        ) : (
          <p className="text-gray-600 text-center mt-4">
            No user logged in
          </p>
        )}
      </div>
    </div>
  );
}

export default Profile;

