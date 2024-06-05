// app/functions/fetchCards.ts

export const fetchCards = async (page: number, limit: number = 8) => {
    const response = await fetch(`http://localhost:8080/Turma?page=${page}&size=${limit}`);
    if (!response.ok) {
        throw new Error('Failed to fetch cards');
    }
    const data = await response.json();
    return data;
};
