import { useEffect, useState } from 'react';
import axios from 'axios';
import { ApiResponse } from '@/functions/fetch'; // Certifique-se de importar o tipo ApiResponse corretamente

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

interface PaginationResult {
    cards: CardData[];
    currentPage: number;
    totalPages: number;
    handlePageChange: (page: number) => void;
}

export const usePagination = (): PaginationResult => {
    const [cards, setCards] = useState<CardData[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState<any>(1); // Definindo o tipo de totalPages como number

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log(`Fetching data for page: ${currentPage}`);
                const res = await axios.get<ApiResponse<{ content: CardData[]; totalPages: number }>>(
                    `http://localhost:8080/Turma?page=${currentPage}&size=6`
                );
                const data = res.data.content;
                console.log('Data fetched:', data);
                setCards(data);
                setTotalPages(res.data.totalPages); // Corrigido para atribuir o valor correto de totalPages
            } catch (error) {
                console.error('Erro ao buscar dados da API:', error);
            }
        };

        fetchData();
    }, [currentPage]);

    const handlePageChange = (page: number) => {
        if (page > 0 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return { cards, currentPage, totalPages, handlePageChange };
};
