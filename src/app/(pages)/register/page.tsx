
     // pages/Registro.js

import React from 'react';

const Registro = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Crie sua conta</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Nome de usuário
            </label>
            <input
              id="username"
              name="username"
              type="text"
              autoComplete="username"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Digite seu nome de usuário"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Digite seu email"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Senha
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Digite sua senha"
            />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              Confirme sua senha
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              autoComplete="current-password"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Digite sua senha novamente"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          >
            Cadastrar conta
          </button>
        </form>
      </div>
    </div>
  );
};

