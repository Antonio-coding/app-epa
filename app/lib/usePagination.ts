// app/lib/usePagination.ts
"use client"
import { useState, useEffect } from 'react';
import { fetchCards } from '../functions/fetchCards';

export interface CardData {
    id: string;
    nomeTurma: string;
    foto: string | null;
    nomeDisciplina: string;
    nivel: string;
    hora: string;
    data: string;
    localizacao: {
        endereco: string;
        cidade: string;
        estado: string;
        cep: string;
    };
}

export const usePagination = (initialPage: number = 1, limit: number = 9) => {
    const [cards, setCards] = useState<CardData[]>([]);
    const [currentPage, setCurrentPage] = useState(initialPage);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchCards(currentPage, limit);
            setCards(data.content);
            setTotalPages(data.totalPages);
        };

        fetchData();
    }, [currentPage, limit]);

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    return {
        cards,
        currentPage,
        totalPages,
        handlePageChange
    };
};
