"use client";

import { useState } from 'react';
import { format } from 'date-fns';
import Image from 'next/image';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

type Turma = {
  nome: string;
  foto: string;
  disciplina: string;
  nivel: string;
  hora: string;
  data: string;
};

export default function CreateClass() {
  const [nome, setNome] = useState('');
  const [foto, setFoto] = useState<File | null>(null);
  const [disciplina, setDisciplina] = useState('');
  const [nivel, setNivel] = useState('');
  const [hora, setHora] = useState('');
  const [data, setData] = useState('');
  const [turmas, setTurmas] = useState<Turma[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nome || !foto || !disciplina || !nivel || !hora || !data) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    const novaTurma = { 
      nome, 
      foto: URL.createObjectURL(foto), 
      disciplina, 
      nivel, 
      hora, 
      data 
    };

    setTurmas([...turmas, novaTurma]);
    setNome('');
    setFoto(null);
    setDisciplina('');
    setNivel('');
    setHora('');
    setData('');
  };

  return (
    <div className="min-h-screen p-10 bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-8">Criar nova turma</h1>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white p-8 shadow-lg rounded-lg">
        <div className="mb-4">
          <label className="block text-gray-700">Nome da nova turma</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="w-full mt-2 p-2 border rounded"
            placeholder="Ex. Turma de Matemática"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Adicionar foto da Classe</label>
          <input
            type="file"
            onChange={(e) => setFoto(e.target.files?.[0] || null)}
            className="w-full mt-2 p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Adicionar nome da disciplina</label>
          <input
            type="text"
            value={disciplina}
            onChange={(e) => setDisciplina(e.target.value)}
            className="w-full mt-2 p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Escolher nível da turma</label>
          <select
            value={nivel}
            onChange={(e) => setNivel(e.target.value)}
            className="w-full mt-2 p-2 border rounded"
          >
            <option value="">Selecione</option>
            <option value="Fundamental">Fundamental</option>
            <option value="Médio">Médio</option>
            <option value="Superior (Graduação)">Superior (Graduação)</option>
            <option value="Pós-graduação">Pós-graduação</option>
            <option value="Mestrado">Mestrado</option>
            <option value="Doutorado">Doutorado</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Escolher a hora</label>
          <input
            type="time"
            value={hora}
            onChange={(e) => setHora(e.target.value)}
            className="w-full mt-2 p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Escolher o dia/mês/ano</label>
          <input
            type="date"
            value={data}
            onChange={(e) => setData(e.target.value)}
            className="w-full mt-2 p-2 border rounded"
          />
        </div>
        <button type="submit" className="w-full mt-4 p-2 bg-blue-600 text-white rounded">
          Criar Turma
        </button>
      </form>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Turmas Criadas</h2>
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
    </div>
  );
}
