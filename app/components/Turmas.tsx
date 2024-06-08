// components/Turmas.tsx
import React from 'react';

interface Localizacao {
    id: string;
    endereco: string;
    cidade: string;
    estado: string;
    cep: string;
}

interface Turma {
    id: string;
    nomeTurma: string;
    foto: string | null;
    nomeDisciplina: string;
    nivel: string;
    hora: string;
    data: string;
    localizacao: Localizacao;
}

interface TurmasProps {
    turmas: Turma[];
}

const Turmas: React.FC<TurmasProps> = ({ turmas }) => {
    return (
        <div className="p-4">
            {turmas.map((turma) => (
                <div key={turma.id} className="border p-4 mb-4">
                    <h2 className="text-2xl font-bold">{turma.nomeTurma}</h2>
                    <p>{turma.nomeDisciplina} - {turma.nivel}</p>
                    <p>Hora: {new Date(turma.hora).toLocaleString()}</p>
                    <p>Data: {new Date(turma.data).toLocaleDateString()}</p>
                    <div>
                        <h3 className="text-xl font-semibold">Localização:</h3>
                        <p>{turma.localizacao.endereco}</p>
                        <p>{turma.localizacao.cidade}, {turma.localizacao.estado}</p>
                        <p>CEP: {turma.localizacao.cep}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Turmas;
