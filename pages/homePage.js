import React from "react";
import Image from "next/image";
import Bg from '../public/images/bg.jpg'
import Logo from '../public/images/logo0.png'

function Home() {
	return (
<div className="">
    <div id="home" className="relative overflow-hidden h-1/4 rounded-3xl">
    {/* <div className=" relative overflow-hidden h-screen h-1/3 rounded-3xl"> */}
    <div className="absolute h-full w-full object-cover rounded-3xl">
      <Image src={Bg}layout="fill" />
    </div>
    {/* <img src="/images/bg.jpg" className="absolute h-full w-full object-cover rounded-3xl"/> */}
    <div className="inset-0 bg-grey-900 opacity-25 absolute">
    </div>
    <div className="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
        <div className="w-full flex flex-col items-center relative z-10">
            <h1 className="font-extrabold text-7xl text-center sm:text-8xl text-white leading-tight mt-4">
                <Image src={Logo} height={140} width={330} />
                {/* <img className="h-44" src="images/logo0.png"/> */}
            </h1>
            <p className="pt-1 font-semibold text-center">A Gráfica Santa Fé entrega materiais e impressões de alta qualidade em Brasília-DF.</p>
            {/* <h1 className="font-extrabold text-7xl text-center sm:text-8xl text-white leading-tight mt-4">
                Life-changing
            </h1> */}
            <a href="https://api.whatsapp.com/send?phone=556199549-6939&text=Olá,%20Gostaria%20de%20fazer%20um%20orçamento.%20" target="_back" className="block hover:scale-110 bg-rose-500 hover:bg-rose-600 py-3 px-4 text-lg text-white font-bold rounded-lg mt-10">
                Fazer Orçamento
            </a>
        </div>
    </div>
</div>
<div className="pb-10"></div>
</div>





		// <Element id="home" name="home">
    //   <div>
		// 	{/* <div className="bg-indigo-900 relative overflow-hidden h-screen">
    //     <img src="/images/bg.jpg" className="absolute h-full w-full object-cover" /> */}
    //     <div className=" text-center md:mx-20 md:pt-32 pt-28 ">
    //         <div className="text-center  text-gray-800 py-20 px-6">
    //            {/* <h1 className="text-5xl font-bold mt-0 mb-6">Heading</h1> */}
    //            <img className="inline-block  text-5xl h-44  font-bold mt-0 mb-6" src="images/logo0.png" />
    //           <h3 className="text-xl font-italic mb-8">Entregamos materiais e impressões de alta qualidade em Brasília-DF.</h3>
    //           {/* <h3 className="text-3xl font-bold mb-8">A Gráfica Santa Fé entrega materiais e impressões de alta qualidade em Brasília-DF.</h3> */}
    //             {/* <a className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">Get started</a> */}
    //             {/* <a
    //               href="#"
    //               className="inline-block font-semibold text-white md:mt-10 mt-5 pt-5 bg-rose-500 rounded-md w-60 h-16 text-lg hover:bg-rose-600 "
    //             >
    //               Fazer Orçamento
    //             </a>   */}
    //         </div>
		// 		</div>
		// 	</div>
      
		// </Element>
	);
}

export default Home;
