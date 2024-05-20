import Link from 'next/link';
import Image from 'next/image';
import ImgPath from '@/constants/imgPath';

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
            <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
                <div className="flex flex-col items-center">
                    <Image src={ImgPath.Logo} alt="Logo" width={200} height={200} />
                    <h2 className="text-2xl font-bold mt-4">Página não encontrada</h2>
                </div>
                <div className="mt-6 text-center">
                    <p className="mb-4">
                        Não foi possível encontrar a página que você estava procurando.
                        Verifique se o URL digitado está correto ou tente pesquisar o
                        conteúdo que você procura.
                    </p>
                    <div className="flex flex-col items-center">
                        <Link href="/">
                            <a className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">Retornar ao Home</a>
                        </Link>
                        <div className="mt-4 w-full">
                            <input
                                type="text"
                                placeholder="Pesquisar..."
                                className="border rounded w-full py-2 px-3 mb-2"
                            />
                            <button
                                type="submit"
                                className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
                            >
                                Buscar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
