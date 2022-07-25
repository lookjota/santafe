

function Footer() {
	return (


<footer id="contact" className="bg-white dark:bg-gray-800 w-full py-8">

    <div className="max-w-screen-xl mx-auto px-4">
        <ul className="max-w-screen-md mx-auto text-lg flex flex-wrap justify-between">
            <li className="my-2">
                <a className="text-blue-500 hover:scale-100 dark:text-gray-300 dark:hover:text-white transition-colors duration-200" href="#home">
                    Principal
                </a>
            </li>
            <li className="my-2">
                <a className="text-black hover:text-blue-500 dark:text-gray-300 dark:hover:text-white transition-colors duration-200" href="#services">
                    Serviços
                </a>
            </li>
            <li className="my-2">
                <a className="text-black hover:text-blue-500 dark:text-gray-300 dark:hover:text-white transition-colors duration-200" href="#projects">
                    Projetos
                </a>
            </li>
            <li className="my-2">
                <a className="text-black hover:text-blue-500 dark:text-gray-300 dark:hover:text-white transition-colors duration-200" href="#about">
                    Sobre
                </a>
            </li>
        </ul>
        <div className="pt-8 flex max-w-xs mx-auto items-center justify-between">
            <a href="https://api.whatsapp.com/send?phone=556199549-6939&text=Olá,%20Gostaria%20de%20fazer%20um%20orçamento.%20" target="_back" className=" hover:scale-110  dark:hover:scale-110 ">
              <img src="/images/whats.svg" />
            </a>
           
            <a href="#" className="hover:scale-110 duration-300 ">
              <img src="/images/location.png" />
            </a>
            <a href="https://api.instagram.com/grafica.santafe/" target="_back" className=" hover:scale-110  dark:hover:scale-110 ">
            <img src="/images/inst.svg" />
            </a>

        </div>

          <div className="flex flex-col items-center relative z-10">

              <div className="relative text-center md:text-left mb-16 lg:mb-0 w-full lg:w-1/5">
                <div className=" flex items-center justify-center lg:justify-start">
                  <img className="w-8"/>
                  <h5 className="text-center ml-2  font-black">
                    ADE QD 3 Conjunto B Lote 13 Loja 1 Pró DF - Ceilândia, Brasília - DF, 72237-320
                    <br/>
                    <span className="text-xl"> Phone: (61) 3377-1700 </span> 
                    <span className="text-xl"> Phone: (61) 99549-6939 </span> 
                  </h5>
                </div>
              </div>

          </div>

            <div className="text-center text-gray-500 dark:text-gray-200 pt-10 sm:pt-12 font-light flex items-center justify-center">
            © 2022 LisboaDev, Inc. All rights reserved Gráfica Santa Fé.
            </div>
        </div>
    </footer>










  //         <footer id="contact"className="bg-white">
  //   <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
  //     <nav className="flex flex-wrap justify-center -mx-5 -my-2">
  //       <div className="px-5 py-2">
  //         <a
  //           href="#about"
  //           className="text-base leading-6 text-gray-500 hover:text-gray-900"
  //         >
  //           About
  //         </a>
  //       </div>
       
  //       <div className="px-5 py-2">
  //         <a
  //           href="#"
  //           className="text-base leading-6 text-gray-500 hover:text-gray-900"
  //         >
  //           Team
  //         </a>
  //       </div>
  //       <div className="px-5 py-2">
  //         <a
  //           href="#shop"
  //           className="text-base leading-6 text-gray-500 hover:text-gray-900"
  //         >
  //           Pricing
  //         </a>
  //       </div>

  //       <div className="px-5 py-2">
  //         <a
  //           href="#"
  //           className="text-base leading-6 text-gray-500 hover:text-gray-900"
  //         >
  //           Terms
  //         </a>
  //       </div>
  //     </nav>
  //     <div className="flex justify-center mt-8 space-x-6">
  //       <a href="http://www.facebook.com/" target="_back" className="text-gray-400 hover:text-gray-500">
  //         <span className="sr-only">Facebook</span>
  //         <svg
            
  //           className="w-6 h-6"
  //           aria-hidden="true"
  //           fill="currentColor"
  //           viewBox="0 0 24 24"
  //         >
  //           <path
  //             fillRule="evenodd"
  //             d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
  //             clipRule="evenodd"
  //             className=""
  //           ></path>
  //         </svg>
  //       </a>
  //       <a href="https://wa.me/5561985576828?text=Welcome%20in%20here" target="__back" className="text-gray-400 hover:text-gray-500">
  //         <span className="sr-only">Whatsapp</span>
  //         {/* <Whatsapp/> */}
     
  //       </a>
  //       <a href="http://instagram.com" target="__back" className="text-gray-400 hover:text-gray-500">
  //         <span className="sr-only">Instagram</span>
  //         <svg
  //           className="w-6 h-6"
  //           aria-hidden="true"
  //           fill="currentColor"
  //           viewBox="0 0 24 24"
  //         >
  //           <path
  //             fillRule="evenodd"
  //             d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
  //             clipRule="evenodd"
  //           ></path>
  //         </svg>
  //       </a>

  //     </div>
  //     <p className="mb-0 mt-8 text-base leading-6 text-center text-gray-400">
  //       © 2021 J C Lisboa, Inc. All rights reserved.
  //     </p>
  //   </div>
  // </footer>

	);
}

export default Footer;
