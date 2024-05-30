import React from "react";
import { AuthorCard } from "@/components/AuthorCard";
import ImgPath from '@/constants/imgPath';
import Image from "next/image";
// Define uma interface para os autores
interface Author {
  name: string;
  img: string
  linkedin: string;
}


// Lista de autores
const authors: Author[] = [
  {
    name: "Caio Roberto",
    img: ImgPath.ImgCaio,
    linkedin: "https://www.linkedin.com/in/caio-roberto-187983256/",
  },
  {
    name: "Antonio Thiago",
    img: ImgPath.ImgThiago,
    linkedin: "https://www.linkedin.com/in/ant%C3%B4nio-thiago-b4694524b/",
  },
  {
    name: "Breno Fernandes",
    img: ImgPath.ImgBreno,
    linkedin: "https://www.linkedin.com/in/breno-fernandes-46b058238/",
  },
  {
    name: "Jerfferson Marques",
    img: ImgPath.ImgJeff,
    linkedin: "https://www.linkedin.com/in/jefferson-marques-a97bb577/",
  },
  {
    name: "Jorge Klisyman",
    img: ImgPath.ImgJorge,
    linkedin:
      "https://www.linkedin.com/in/jorge-klisyman-gomes-de-oliveira-950a55276/",
  },
];

const AuthorsPage: React.FC = () => {
  return (
    <>
      <div className="w-full h-[10rem] flex items-center justify-center bg-primary-blue md:clip_path relative">
        <div className="absolute top-0 mt-0 flex flex-col items-center">
          <Image
            width={500}
            height={500}
            className="h-32 w-32 object-contain mb-2"
            src={ImgPath.LogoBGBlue}
            alt="Logo"
          />
        </div>
      </div>
      <div>

        <h2 className=" justify-center text-2xl font-semibold text-center text-black  m-10">
          O EPA surge da necessidade de oferecer conhecimento para pessoas que
          precisam. Aulas como matemática, português etc, em grupo ou
          individual, online.{" "}
          <p>
            Esta é a equipe que trabalha por trás do projeto, Os Bug Hunters!
          </p>
        </h2>{" "}
      </div>

      <div className="my-40 mx-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {authors.map((item, index) => (
          <AuthorCard
            key={index}
            linkedin={item.linkedin}
            img={item.img}
            nome={item.name}
          />
        ))}
      </div>
    </>
  );
};

export default AuthorsPage;
