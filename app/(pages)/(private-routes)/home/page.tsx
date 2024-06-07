"use client";

import React from 'react';
import { CardWithForm } from "@/components/CardClass";
import { FaSearch } from 'react-icons/fa';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationEllipsis,
  PaginationNext,
} from '@/components/ui/pagination';

const HomePrivate: React.FC = () => {
  return (
    <div className="min-h-screen p-8 bg-gray-100">
      {/* Barra de Pesquisa */}
      <div className="flex items-center mb-8 justify-center">
        <input
          type="text"
          placeholder="Pesquisar..."
          className="w-full max-w-xs p-2 border border-gray-300 rounded-l-lg focus:ring-blue-500 focus:border-blue-500"
        />
        <button className="p-3 bg-blue-900 text-white rounded-r-lg">
          <FaSearch />
        </button>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap gap-4 justify-center mb-8">
        <CardWithForm />
        <CardWithForm />
        <CardWithForm />
      </div>

      {/* Paginação */}
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
    </div>
  );
};

export default HomePrivate;

