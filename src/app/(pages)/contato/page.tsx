"use client";
import { useState } from 'react';
import Image from 'next/image'; // Importar Image do Next.js

// Importar a imagem usando require() para garantir que o webpack a inclua na build
const LogoWhite = require('../../../../public/images/logo_login.svg');

export default function Contato() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => { // Remover any e definir o tipo do evento
    e.preventDefault();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex rounded-2xl shadow-xl overflow-hidden w-[1000px] h-[500px]">
        
        {/* Greeting Section */}
        <div className="bg-primary-blue text-white p-8 flex flex-col justify-center items-center w-1/2 space-y-4">
          <h2 className="text-3xl font-bold text-center">Entre em Contato</h2>
          {/* Imagem do logo - usando a tag <Image> do Next.js */}
          <Image src={LogoWhite} alt="Logo" width={48} height={48} />
        </div>
        
        {/* Contato Section */}
        <div className="flex flex-col justify-center p-8 bg-white w-1/2 space-y-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="nome"
              id="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
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
            <textarea
              name="mensagem"
              id="mensagem"
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="Mensagem"
            ></textarea>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-950 text-white rounded-lg hover:bg-blue-700"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
