import { Img } from "@/app/components/Img";
import { Line } from "@/app/components/Line";
import { List } from "@/app/components/List";
import { Text } from "@/app/components/Text";


export default function Sobre() {
    return <>
        <div>
            <h1 className=" mt-10 text-blue-950 font-inter text-center text-[48px] font-semibold">Sobre</h1>
        </div>
        <div>
            <p className="mt-10 px-12 text-blue-950 font-inter text-[24px]">
            O Ensino por Amor surgiu da necessidade de oferecer conhecimento 
            para pessoas que precisam, aulas como matemática, português entre outras, em grupo ou individual,
            online ou presencial. Nosso jeito de amar é distrubuindo conhecimento.
            Somos a BUG HUNTERS, uma equipe do curso de Sistemas para Internet da Universidade Católica de Pernambuco (Unicap), idealizamos esse projeto a 
            partir da necessidade querer dar aula para ensinar e passar conhecimento e não saber como fazer, então surgiu a ideia do site para 
            conectar pessoas que desejam dar aula com pessoas que desejam ter aula.
            </p>
            
        </div>

        <div className="flex flex-col items-start mt-[60px] md:px-10 sm:px-5 px-[104px] w-full">
          <div className="flex flex-col items-center justify-start w-[73%] md:w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col gap-10 items-center justify-start w-full">
                <List
                  className="flex flex-col gap-9 items-center w-[99%]"
                  orientation="vertical"
                >
                  <div className="flex md:flex-col flex-row gap-[35px] items-start justify-start ml-1.5 mr-[61px] my-0 w-[92%] md:w-full">
                    <Img
                      className="h-[166px] md:h-auto object-cover w-[166px]"
                      src="images/img_71.png"
                      alt="SeventyOne"
                    />
                    <div className="flex flex-col items-start justify-start md:mt-0 mt-[27px] w-[72%] md:w-full">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[28px] text-blue-800"
                        size="txtInterSemiBold28"
                      >
                        Antônio Thiago Neto
                      </Text>
                     
                      <div className="flex sm:flex-col flex-row gap-[9px] items-end justify-start mt-2 w-full">
                       
                      </div>
                    </div>
                  </div>
                  <Line className="self-center h-px bg-blue_gray-100 w-full" />
                  <div className="flex md:flex-col flex-row gap-[35px] items-start justify-start ml-1.5 mr-[61px] my-0 w-[92%] md:w-full">
                    <Img
                      className="h-[166px] md:h-auto object-cover w-[166px]"
                      src="images/img_101.png"
                      alt="SeventyOne"
                    />
                    <div className="flex flex-col items-start justify-start md:mt-0 mt-[27px] w-[72%] md:w-full">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[28px] text-blue-800"
                        size="txtInterSemiBold28"
                      >
                        Caio Roberto
                      </Text>
                  
                    </div>
                    
                  </div>
                  <Line className="self-center h-px bg-blue_gray-100 w-full" />
                  <div className="flex my-0 relative w-full">
                    <Img
                      className="h-[166px] my-auto m-5 object-cover w-[166px]"
                      src="images/img_111.png"
                      alt="OneHundredOne"
                    />
                    
                    <div className="flex flex-col items-start justify-start mb-[7px] ml-[undefinedpx] mr-[61px] mt-auto w-[66%] z-[1]">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[28px] text-blue-800"
                        size="txtInterSemiBold28"
                      >
                        Jefferson Marques
                      </Text>
                      
                      
                    </div>
                  </div>
                  <Line className="self-center h-px bg-blue_gray-100 w-full" />
                </List>
                <List
                  className="flex flex-col gap-[39px] items-center pt-[11px] px-[11px] w-[99%]"
                  orientation="vertical"
                >
                  <div className="flex md:flex-col flex-row gap-[41px] items-center justify-start w-[95%] md:w-full">
                    <Img
                      className="h-[166px] md:h-auto object-cover w-[166px]"
                      src="images/img_85.png"
                      alt="OneHundredEleven"
                    />
                    <div className="flex flex-col items-start justify-start w-[71%] md:w-full">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[28px] text-blue-800"
                        size="txtInterSemiBold28"
                      >
                        Mirla Vieira

                        <div className="flex md:flex-col flex-row gap-[35px] items-start justify-start ml-1.5 mr-[61px] my-0 w-[92%] md:w-full">
                    <Img
                      className="h-[166px] md:h-auto object-cover w-[166px]"
                      src="images/img_71.png"
                      alt="SeventyOne"
                    />
                    <div className="flex flex-col items-start justify-start md:mt-0 mt-[27px] w-[72%] md:w-full">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[28px] text-blue-800"
                        size="txtInterSemiBold28"
                      >
                       jorge Klisyman
                      </Text>
                     
                      <div className="flex sm:flex-col flex-row gap-[9px] items-end justify-start mt-2 w-full">
                       
                      </div>
                    </div>
                  </div>

                  <div className="flex md:flex-col flex-row gap-[35px] items-start justify-start ml-1.5 mr-[61px] my-0 w-[92%] md:w-full">
                    <Img
                      className="h-[166px] md:h-auto object-cover w-[166px]"
                      src="images/img_71.png"
                      alt="SeventyOne"
                    />
                    <div className="flex flex-col items-start justify-start md:mt-0 mt-[27px] w-[72%] md:w-full">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[28px] text-blue-800"
                        size="txtInterSemiBold28"
                      >
                        Breno Fernandes
                      </Text>
                     
                      <div className="flex sm:flex-col flex-row gap-[9px] items-end justify-start mt-2 w-full">
                       
                      </div>
                    </div>
                  </div>
                      </Text>
                     
                    </div>
                  </div>
                  
                </List>
              </div>
            </div>
          </div>
        </div>

        
       
    </>
}