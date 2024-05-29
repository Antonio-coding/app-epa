import React from 'react';
import { CardClass } from '@/components/ui/cardClass';
import { Pagination, PaginationContent, PaginationItem, PaginationPrevious, PaginationLink, PaginationEllipsis, PaginationNext } from '@/components/ui/pagination';

const HomePrivate: React.FC = () => {
  return (
    <div className=" flex flex-col  border">
      <div >Search pesquisa e filtro  </div>
      <div className='grid grid-cols-3  '>
        <CardClass />
        <CardClass />
        <CardClass />
        <CardClass />
        <CardClass />
        <CardClass />
        <CardClass />
        <CardClass />
      </div>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>

      {/* Sidebar */}
      {/* <div className="bg-gray-800 w-60 flex flex-col">
        <ul className="flex-1 overflow-y-auto">
          <li className="mt-4 px-8 py-2 text-white hover:bg-gray-700">Início</li>
          <li className="px-8 py-2 text-white hover:bg-gray-700">Agenda</li>
          <li className="px-8 py-2 text-white hover:bg-gray-700">Minhas inscrições</li>
          <li className="px-8 py-2 text-white hover:bg-gray-700">Pendentes</li>
          <li className="px-8 py-2 text-white hover:bg-gray-700">Turmas</li>
          <li className="px-8 py-2 text-white hover:bg-gray-700">Configurações</li>
        </ul>
      </div> */}
      {/* Main */}
      {/* <div className="flex-1 p-8">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-4 shadow-md rounded-lg">Aulas</div>
          <div className="bg-white p-4 shadow-md rounded-lg">Sala de aula</div>
          <div className="bg-white p-4 shadow-md rounded-lg">Cursos</div>
          <div className="bg-white p-4 shadow-md rounded-lg">Tira-dúvidas</div>
        </div>
      </div> */}
    </div>
  );
};

export default HomePrivate;
