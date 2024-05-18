import { AuthorCard } from "@/components/AuthorCard";
import ImgPath from "@/constants/imgPath";
import React from "react";

// Define uma interface para os autores
interface Author {
  name: string;
  img: string;
  linkedin: string;
}

// Lista de autores
const authors: Author[] = [
  {
    name: "Caio Roberto",

    img: "/images/imgCaio.png",
    linkedin: "https://www.linkedin.com/in/caio-roberto-187983256/",
  },
  {
    name: "Antonio Thiago",
    img: "/images/imgThiago.png",
    linkedin: "https://www.linkedin.com/in/ant%C3%B4nio-thiago-b4694524b/",
  },
  {
    name: "Breno Fernandes",
    img: "/images/imgBreno.jpg",
    linkedin: "https://www.linkedin.com/in/breno-fernandes-46b058238/",
  },
  {
    name: "Jerfferson Marques",
    img: "/images/imgJeff.png",
    linkedin: "https://www.linkedin.com/in/jefferson-marques-a97bb577/",
  },
  {
    name: "Jorge Oliveira",
    img: "/images/imgJorge.png",
    linkedin:
      "https://www.linkedin.com/in/jorge-klisyman-gomes-de-oliveira-950a55276/",
  },
];

const AuthorsPage: React.FC = () => {
  return (
    <>
      <div className="w-[100%] h-[20rem] flex items-center justify-center flex-col bg-primary-blue md:clip_path">
        <div className=" absolute flex flex-col items-center">
          
          <h1>  
            <img  src="/images/logo_login.svg" alt=""></img>
          className="text-3xl font-bold " O Ensino por Amor</h1>
          <h2 className="text-xl font-semibold">
            Surgiu da necessidade de oferecer conhecimento para pessoas que
            precisam , aulas como matemática, português, entre outras, em grupo
            ou individual, online.
          </h2>
        </div>
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-200"></div>
      </div>

      <div className="my-20 mx-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
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
