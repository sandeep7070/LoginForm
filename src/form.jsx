import React, { useState } from "react";
import SubmitBt from "./Submit";

function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) {
      return;
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Login Form</h1>
          </div>

          <div>
            <input 
              type="email" 
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <input 
              type="password" 
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>          
            <SubmitBt />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;