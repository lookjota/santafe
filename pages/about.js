import React from 'react'
import Image from 'next/image'
import Pattern from '../public/images/patternBG.png'

function about() {
  return (
    // <div className="bg-[url('/public/images/patternBG.png)] ">
    <section className=" bg-rose-500 h-96 w-full relative"       >
      <div className="absolute h-full w-full object-cover rounded-3xl">
        <Image src={Pattern}  layout="fill" />
      </div>
      {/* <img src="/images/patternBG.png" className="absolute h-full w-full object-cover rounded-3xl" /> */}
    {/* <section className="bg-gray-50 dark:bg-gray-800"> */}
        <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-24 lg:px-6">
            <figure className="max-w-screen-md mx-auto">
                <svg className="h-12 mx-auto mb-3 text-white dark:text-white" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
                </svg> 
                <blockquote>
                    <p className="text-xl font-medium text-white md:text-2xl dark:text-white"> Pequenos detalhes fazem uma grande impressão. Faça simples. Faça memorável. Faça convidativo ao olhar. Faça divertido para ler. </p>
                </blockquote>
                <figcaption className="flex items-center justify-center mt-6 space-x-3">
                    <img className="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture" />
                    <div className="flex items-center divide-x-2 divide-white dark:divide-white">
                        <div className="pr-3 font-medium text-white dark:text-white">Leandro Miqueias</div>
                        <div className="pl-3 text-sm font-light text-white dark:text-white">CEO e fundador Santa Fé Gráfica</div>
                    </div>
                </figcaption>
            </figure>
        </div>
      </section>
    // </div>
  )
}

export default about