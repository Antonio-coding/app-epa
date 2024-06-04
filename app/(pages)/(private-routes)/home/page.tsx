import React from 'react';
import { CardWithForm } from "@/components/CardClass";
import { Pagination, PaginationContent, PaginationItem, PaginationPrevious, PaginationLink, PaginationEllipsis, PaginationNext } from '@/components/ui/pagination';

const HomePrivate: React.FC = () => {
  return (
    <>
      <div className=" flex flex-col   border">
        <div >Search pesquisa e filtro  </div>
        <div className-='gap-4 w-screen flex flex-col items-center justify-center'>
          <div className='px-4  flex  gap-4 '>
            <CardWithForm />
            <CardWithForm />
            <CardWithForm />
          </div>
          {/* <div className='px-4  flex  gap-4 '>
            <CardWithForm />
            <CardWithForm />
            <CardWithForm />
          </div> */}
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

      </div>
    </>
  );
};

export default HomePrivate;
