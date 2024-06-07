"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { format } from 'date-fns';

type Turma = {
  nome: string;
  foto: string;
  disciplina: string;
  nivel: string;
  hora: string;
  data: string;
};

export default function ListClasses() {
  const [turmas, setTurmas] = useState<Turma[]>([]);

  useEffect(() => {
    const storedTurmas = localStorage.getItem('turmas');
    if (storedTurmas) {
      setTurmas(JSON.parse(storedTurmas));
    }
  }, []);

  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">Turmas Criadas</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {turmas.map((turma, index) => (
          <div key={index} className="bg-white p-4 shadow-md rounded-lg">
            <h3 className="text-xl font-bold mb-2">{turma.nome}</h3>
            {turma.foto && (
              <div className="mb-2">
                <Image src={turma.foto} alt="Foto da Classe" width={166} height={166} className="rounded" />
              </div>
            )}
            <p><strong>Disciplina:</strong> {turma.disciplina}</p>
            <p><strong>Nível:</strong> {turma.nivel}</p>
            <p><strong>Hora:</strong> {turma.hora}</p>
            <p><strong>Data:</strong> {format(new Date(turma.data), 'dd/MM/yyyy')}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
