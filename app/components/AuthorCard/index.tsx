interface IPropsAuthorCard {
  linkedin: string;
  img: string;

  nome: string;
}
export const AuthorCard = (props: IPropsAuthorCard) => {
  return (
    <div className="author-card bg-gray-100 border border-gray-300 rounded-lg p-4 text-center shadow-md transform transition-transform duration-300 hover:scale-125 hover:bg-white hover:shadow-2xl hover:z-10">
      <img
        className="rounded-full h-24 w-24 object-cover mb-3 mx-auto"
        src={props.img}
        alt={props.nome}
      />
      <div className="text-lg font-bold mb-2">{props.nome}</div>
   <a href={props.linkedin}> <div> {props.nome}  <img src = "/images/iconLikedin.png" width={20}  alt="" /></div> </a>
    </div>
  );
};
