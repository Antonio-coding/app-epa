"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import LogoWhite from "../../../../public/images/logo_login.svg";
import { useRouter } from 'next/navigation';
export default function Login() {
  const router = useRouter();

  const handleLogin = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Lógica de verificação de login (por exemplo, verificar credenciais, etc.)
    // Se o login for bem-sucedido, redirecione para o dashboard
    router.push('home');
  };


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex rounded-2xl shadow-xl overflow-hidden w-[1000px] h-[500px]">

        {/* Greeting Section */}
        <div className="bg-primary-blue text-white p-8 flex flex-col justify-center items-center w-1/2 space-y-4">
          <h2 className="text-3xl font-bold text-center">Seja bem-vindo!</h2>
          <img src="/images/logo_login.svg" alt="Logo" className="w-48 h-48" />
        </div>

        {/* Login Section */}
        <div className="flex flex-col justify-center p-8 bg-white w-1/2 space-y-6">
          <h2 className="text-3xl font-bold text-blue-950 text-center">Login</h2>
          <p className="text-sm text-center text-gray-600">Digite os seus dados de acesso nos campos abaixo</p>
          <form onSubmit={handleLogin} className="space-y-4">
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
            <div className="flex justify-between">
              <label className="flex items-center space-x-2">
                <input type="checkbox" name="remember" id="remember" className="text-blue-600" />
                <span className="text-sm text-gray-600">Manter-me logado</span>
              </label>
              <a href="#" className="text-sm text-blue-600 hover:underline">Esqueceu a senha?</a>
            </div>
            <button
              type="submit"

              className="w-full py-2 px-4 bg-blue-950 text-white rounded-lg hover:bg-blue-700"
            >
              Acessar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
