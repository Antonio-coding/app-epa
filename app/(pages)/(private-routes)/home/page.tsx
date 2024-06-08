// app/(pages)/(private-routes)/home/page.tsx
'use client'
import React from 'react';
import { CardWithForm } from "@/components/CardClass";
import { Pagination, PaginationContent, PaginationItem, PaginationPrevious, PaginationLink, PaginationNext } from '@/components/ui/pagination';
import { usePagination, CardData } from '@/lib/usePagination';

const HomePrivate: React.FC = () => {
  const { cards, currentPage, totalPages, handlePageChange } = usePagination();

  console.log('HomePrivate render');
  console.log('Current Page:', currentPage);
  console.log('Total Pages:', totalPages);
  console.log('Cards:', cards);

  return (
    <>
      <div className="flex flex-col border p-4">
        <div>Search pesquisa e filtro</div>
        <div className="flex-grow overflow-y-auto mt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {cards.map((card: CardData, index: number) => (
              <CardWithForm key={card.id} {...card} />
            ))}
          </div>
          <div className="flex justify-center mt-6">
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
      </div>
    </>
  );
};

export default HomePrivate;
