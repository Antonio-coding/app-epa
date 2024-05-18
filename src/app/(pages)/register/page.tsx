"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import LogoWhite from "../../../../public/images/logo_login.svg";
export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex rounded-2xl shadow-xl overflow-hidden w-[1000px] h-[500px]">
        
        {/* Greeting Section */}
        <div className="bg-primary-blue text-white p-8 flex flex-col justify-center items-center w-1/2 space-y-4">
          <h2 className="text-3xl font-bold text-center">Crie uma conta!</h2>
          <img src="/images/logo_login.svg" alt="Logo" className="w-48 h-48" />
        </div>
        
        {/* Register Section */}
        <div className="flex flex-col justify-center p-8 bg-white w-1/2 space-y-6">
          <h2 className="text-3xl font-bold text-blue-950 text-center">Registro</h2>
          <p className="text-sm text-center text-gray-600">Preencha os campos abaixo para criar sua conta</p>
          <form className="space-y-4">
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="Nome"
            />
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
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="Senha"
            />
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="Confirmar Senha"
            />
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-950 text-white rounded-lg hover:bg-blue-700"
            >
              Registrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
