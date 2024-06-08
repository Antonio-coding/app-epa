// app/(pages)/(private-routes)/home/page.tsx
'use client'
import React from 'react';
import { CardWithForm } from "@/components/CardClass";
import { Pagination, PaginationContent, PaginationItem, PaginationPrevious, PaginationLink, PaginationNext } from '@/components/ui/pagination';
import { usePagination, CardData } from '@/lib/usePagination';
import { FaSearch } from 'react-icons/fa';

const HomePrivate: React.FC = () => {
  const { cards, currentPage, totalPages, handlePageChange } = usePagination();

  console.log('HomePrivate render');
  console.log('Current Page:', currentPage);
  console.log('Total Pages:', totalPages);
  console.log('Cards:', cards);

  return (
    <>
      <div className="flex flex-col border p-4">
            
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
      
        <div className="flex-grow overflow-y-auto mt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {cards.map((card: CardData, index: number) => (
              <CardWithForm key={card.id} {...card} />
            ))}
          </div>
      
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    onClick={() => handlePageChange(currentPage - 1)}
                    isActive={currentPage === 1}
                  />
                </PaginationItem>
                {[...Array(totalPages)].map((_, index) => (
                  <PaginationItem key={index}>
                    <PaginationLink
                      href="#"
                      onClick={() => handlePageChange(index + 1)}
                      isActive={currentPage === index + 1}
                    >
                      {index + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                <PaginationItem>
                  <PaginationNext
                    onClick={() => handlePageChange(currentPage + 1)}
                    isActive={currentPage === totalPages}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          
        </div>
      </div>
    </>
  );
};

export default HomePrivate;
