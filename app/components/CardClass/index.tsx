import ImgPath from "@/constants/imgPath";
import Image from "next/image";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export function CardWithForm() {
    return (
        <Card className="w-[300px]">
            <CardHeader>
                <CardTitle>Reforço de matematica</CardTitle>
                <Image className='bg-scroll' alt='Imagem' width={400} height={200} src={ImgPath.Img1} />
                <CardDescription>Deploy your new project in one-click.</CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            Disciplina
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            Nível da turma
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            Hora
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            Dia da semana
                        </div>

                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex justify-between">

            </CardFooter>
        </Card>
    )
}
