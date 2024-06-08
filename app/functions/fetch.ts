// app/functions/fetch.ts

import axios, { AxiosResponse } from 'axios';

// Define o tipo genérico para os dados da resposta
export type ApiResponse<T> = {
    content: any;
    totalPages(totalPages: any): unknown;
    data: T;
};

// Função para fazer uma solicitação GET usando Axios e retornar os dados da resposta
export async function fetchWrapper<T = unknown>(input: string): Promise<T> {
    const url = `${process.env.NEXT_PUBLIC_BASE_URL}/${input}`;

    try {
        const response: AxiosResponse<ApiResponse<T>> = await axios.get<ApiResponse<T>>(url);

        // Verifica se a resposta foi bem-sucedida e se os dados estão presentes
        if (response && response.data && response.data.data) {
            return response.data.data;
        } else {
            throw new Error('Resposta inválida da API');
        }
    } catch (error) {
        // Lida com erros de solicitação ou resposta
        console.error('Erro na solicitação:', error);
        throw error;
    }
}
