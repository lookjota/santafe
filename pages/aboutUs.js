import React from 'react'
import Image from 'next/image'
import Art from '../public/images/art2.png'

function aboutUs() {
  return (
    <div id="about">
      <section className="bg-white pt-10 dark:bg-gray-900">
        <div className="container flex flex-col items-center px-4 py-12 mx-auto xl:flex-row">
            <div className="flex justify-center xl:w-1/2">
                <Image src={Art} height={400} width={400} className="h-80 w-80 sm:w-[28rem] sm:h-[28rem] flex-shrink-0 object-cover rounded-full" />
                {/* <img className="h-80 w-80 sm:w-[28rem] sm:h-[28rem] flex-shrink-0 object-cover rounded-full" src="/images/art2.png" alt="" /> */}
            </div>
            
            <div className="flex flex-col items-center mt-6 xl:items-start xl:w-1/2 xl:mt-0">

                <p className="font-bold text-blue-500 ">SOBRE</p>

                <h2 className="text-3xl font-bold tracking-tight text-gray-800 xl:text-4xl dark:text-white">
                  Gráfica Santa Fé
                </h2>

                <p className="block max-w-2xl mt-4 text-xl text-black dark:text-gray-300">Há mais de dez anos, a Gráfica Santa Fé entrega materiais e impressões de alta qualidade para diversos clientes de Brasília-DF e entorno. Atuando em diversas áreas, a Gráfica Santa Fé tem o que é necessário para atender às necessidades do seu negócio. </p>
                
                <div className="mt-6 sm:-mx-2">
                    <div className="inline-flex w-full overflow-hidden rounded-lg shadow sm:w-auto sm:mx-2 hover:scale-110 ">
                        <a href="https://api.whatsapp.com/send?phone=556199549-6939&text=Olá,%20Gostaria%20de%20fazer%20um%20orçamento.%20" target="_back" className="inline-flex items-center justify-center w-full px-5 py-3 text-base font-medium text-white bg-gradient-to-r from-rose-400 to-rose-600 hover:from-rose-600 hover:to-rose-600 sm:w-auto ">

                            <span className="mx-2 ">
                                Mandar Mensagem
                            </span>
                        </a>
                    </div>

                    {/* <div className="inline-flex w-full mt-4 overflow-hidden rounded-lg shadow sm:w-auto sm:mx-2 sm:mt-0">
                        <a href="#" className="inline-flex items-center justify-center w-full px-5 py-3 text-base font-medium text-white transition-colors duration-150 transform sm:w-auto bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-600 hover:to-blue-600">
                            <svg className="w-6 h-6 mx-2 fill-current" viewBox="-28 0 512 512.00075" xmlns="http://www.w3.org/2000/svg"><path d="m432.320312 215.121094-361.515624-208.722656c-14.777344-8.53125-32.421876-8.53125-47.203126 0-.121093.070312-.230468.148437-.351562.21875-.210938.125-.421875.253906-.628906.390624-14.175782 8.636719-22.621094 23.59375-22.621094 40.269532v417.445312c0 17.066406 8.824219 32.347656 23.601562 40.878906 7.390626 4.265626 15.496094 6.398438 23.601563 6.398438s16.214844-2.132812 23.601563-6.398438l361.519531-208.722656c14.777343-8.53125 23.601562-23.8125 23.601562-40.878906s-8.824219-32.347656-23.605469-40.878906zm-401.941406 253.152344c-.21875-1.097657-.351562-2.273438-.351562-3.550782v-417.445312c0-2.246094.378906-4.203125.984375-5.90625l204.324219 213.121094zm43.824219-425.242188 234.21875 135.226562-52.285156 54.539063zm-6.480469 429.679688 188.410156-196.527344 54.152344 56.484375zm349.585938-201.835938-80.25 46.332031-60.125-62.714843 58.261718-60.773438 82.113282 47.40625c7.75 4.476562 8.589844 11.894531 8.589844 14.875s-.839844 10.398438-8.589844 14.875zm0 0"></path></svg>
                            <span className="mx-2">
                                Get it on Google Play
                            </span> 
                        </a>
                    </div> */}
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default aboutUs