// app/components/CardClass/index.tsx

import ImgPath from "@/constants/imgPath";
import Image from "next/image";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export interface CardWithFormProps {
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

export const CardWithForm: React.FC<CardWithFormProps> = ({ nomeTurma, foto, nomeDisciplina, nivel, hora, data, localizacao }) => {
    return (
        <Card className="w-[300px]">
            <CardHeader>
                <CardTitle>{nomeTurma}</CardTitle>
                <Image className='bg-scroll' alt='Imagem' width={400} height={200} src={foto || ImgPath.Img1} />
                <CardDescription>{nomeDisciplina}</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                        <span>Disciplina:</span> <span>{nomeDisciplina}</span>
                    </div>
                    <div className="flex flex-col space-y-1.5">
                        <span>Nível da turma:</span> <span>{nivel}</span>
                    </div>
                    <div className="flex flex-col space-y-1.5">
                        <span>Hora:</span> <span>{new Date(hora).toLocaleString()}</span>
                    </div>
                    <div className="flex flex-col space-y-1.5">
                        <span>Data:</span> <span>{new Date(data).toLocaleDateString()}</span>
                    </div>
                    <div className="flex flex-col space-y-1.5">
                        <span>Localização:</span> <span>{`${localizacao.endereco}, ${localizacao.cidade}, ${localizacao.estado} - ${localizacao.cep}`}</span>
                    </div>
                </div>
            </CardContent>
            <CardFooter className="flex justify-between">
                <button className="btn-primary">Criar Turma</button>
            </CardFooter>
        </Card>
    );
};
