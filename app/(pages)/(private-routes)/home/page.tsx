import React from 'react';

const HomePrivate: React.FC = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="bg-gray-800 w-60 flex flex-col">
        <ul className="flex-1 overflow-y-auto">
          <li className="mt-4 px-8 py-2 text-white hover:bg-gray-700">Início</li>
          <li className="px-8 py-2 text-white hover:bg-gray-700">Agenda</li>
          <li className="px-8 py-2 text-white hover:bg-gray-700">Minhas inscrições</li>
          <li className="px-8 py-2 text-white hover:bg-gray-700">Pendentes</li>
          <li className="px-8 py-2 text-white hover:bg-gray-700">Turmas</li>
          <li className="px-8 py-2 text-white hover:bg-gray-700">Configurações</li>
        </ul>
      </div>
      {/* Main */}
      <div className="flex-1 p-8">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-4 shadow-md rounded-lg">Card 1</div>
          <div className="bg-white p-4 shadow-md rounded-lg">Card 2</div>
          <div className="bg-white p-4 shadow-md rounded-lg">Card 3</div>
          <div className="bg-white p-4 shadow-md rounded-lg">Card 4</div>
        </div>
      </div>
    </div>
  );
};

export default HomePrivate;
