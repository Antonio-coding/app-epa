// app/test/rest-api-test/page.tsx

'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { CardWithForm, CardWithFormProps } from '@/components/CardClass';

const RestApiTest = () => {
    const [turmas, setTurmas] = useState<CardWithFormProps[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('http://localhost:8080/Turma');
                const data = res.data.content;
                setTurmas(data);
            } catch (error) {
                console.error('Erro ao buscar dados da API:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1 className="text-3xl font-bold">Lista de Turmas</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                {turmas.map((turma) => (
                    <CardWithForm
                        key={turma.id}
                        id={turma.id}
                        nomeTurma={turma.nomeTurma}
                        foto={turma.foto}
                        nomeDisciplina={turma.nomeDisciplina}
                        nivel={turma.nivel}
                        hora={turma.hora}
                        data={turma.data}
                        localizacao={turma.localizacao}
                    />
                ))}
            </div>
        </div>
    );
};

export default RestApiTest;
