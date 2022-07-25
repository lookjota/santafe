import React from 'react'
import Image from 'next/image'
import G4 from '../public/images/g4.jpg'

function doing() {
  return (
    
       <section className="bg-gray-50 dark:bg-gray-800">
        <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
                  <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
                <div className="text-dark sm:text-lg dark:text-gray-400">
                    <p className="font-bold text-blue-500">Nosso Trabalho</p>
                    <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">Processo Simples e Rápido</h2>
                    <p className="mb-8 text-dark lg:text-xl">Entre em contato conosco para entendermos suas demandas, Desenvolveremos o melhor design, rodamos o serviço com materiais de qualidade. Entregamos e instalamos com rapidez e agilidade.</p>
                    {/* <!-- List --> */}
                    <ul role="list" className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700">
                        <li className="flex space-x-3">
                            {/* <!-- Icon --> */}
                            <svg className="flex-shrink-0 w-5 h-5 text-rose-500 dark:text-rose-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                            <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">Entre em contato</span>
                        </li>
                        <li className="flex space-x-3">
                            {/* <!-- Icon --> */}
                            <svg className="flex-shrink-0 w-5 h-5 text-rose-500 dark:text-rose-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                            <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">Desenvolvemos a sua Arte</span>
                        </li>
                        <li className="flex space-x-3">
                            {/* <!-- Icon --> */}
                            <svg className="flex-shrink-0 w-5 h-5 text-rose-500 dark:text-rose-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                            <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">Rodamos o serviço com materiais de qualidade</span>
                        </li>
                        <li className="flex space-x-3">
                            {/* <!-- Icon --> */}
                            <svg className="flex-shrink-0 w-5 h-5 text-rose-500 dark:text-rose-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                            <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">Entregamos e instalamos com rapidez e agilidade</span>
                        </li>
                    </ul>
                    {/* <p className="mb-8 font-light lg:text-xl">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.</p> */}
                </div>
                <div className=" w-full mb-4 rounded-lg lg:mb-0 lg:flex">
                  <Image src={G4}  />
                </div>
                {/* <img className=" w-full mb-4 rounded-lg lg:mb-0 lg:flex" src="./images/g4.jpg" alt="dashboard feature image" /> */}
                {/* <img className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex" src="./images/g4.jpg" alt="dashboard feature image" /> */}
            </div>
    </div>
    </section>
  )
}

export default doing