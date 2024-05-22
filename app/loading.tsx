import { CgSpinner } from "react-icons/cg";

export default function Loading() {
  // Or a custom loading skeleton component
  return (

    <main className=" w-screen h-screen flex  flex-col  items-center justify-center border">
      <CgSpinner className="w-20 h-20 animate-spin text-primary-blue " />
      {/* @Caio cria um component e personaliza a tela de carregamento  */}
      <div className=' text-2xl text-bold text-primary-blue'>Carregando...</div>
    </main>

  )
}
