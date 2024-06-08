"use client";
import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';

export default function MyClass() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">Minhas turmas</h1>

      <div className="flex justify-center mb-8">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Pesquisar..."
          className="w-full max-w-md p-2 border border-gray-300 rounded-l-lg focus:ring-blue-500 focus:border-blue-500"
        />
        <button className="p-2 bg-blue-900 text-white rounded-r-lg">
          <FaSearch />
        </button>
      </div>

      {/* Cards de turmas criadas */}
      <div className="p-10 bg-gray-100 min-h-screen flex flex-col items-center">
        
        <div className="bg-white p-4 shadow-md rounded-lg">
          <h3 className="text-xl font-medium mb-2">Turma | Reforço de Matemática</h3>
        </div>
      </div>
    </div>
  );
}
