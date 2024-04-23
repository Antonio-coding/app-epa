"use client";

import React, { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="flex flex-row rounded-2xl shadow-xl overflow-hidden w-[1000px] h-[500px]">
      {/* Greeting Section */}
      <div className="bg-primary-blue text-white p-8 flex flex-col justify-center items-center w-1/2">
        <h2 className="text-3xl font-bold mb-30 text-center">Seja bem-vindo!</h2>
        <img src="/images/logo_login.svg" alt="Logo" className="w-[12rem] h-[12rem] sm:w-[16rem] sm:h-[16rem] cursor-pointer" />

      </div>
        {/* Login Section */}
        <div className="flex flex-col justify-between p-8 bg-white w-1/2">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Login</h2>
          <form className="space-y-4">
            <div className="space-y-2">
              {/* Social Icons */}
              <div className="flex justify-center gap-2">
                {/* Icons go here */}
              </div>
              <p className="text-sm text-center text-gray-600">or use your email password</p>
            </div>
            <div>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="Email"
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="Password"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input type="checkbox" name="remember" id="remember" className="h-4 w-4 text-blue-600" />
                <label htmlFor="remember" className="ml-2 text-sm text-gray-600">Remember me</label>
              </div>
              <a href="#" className="text-sm text-blue-600 hover:underline">Forgot Your Password?</a>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-950 text-white rounded-lg hover:bg-blue-700"
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}