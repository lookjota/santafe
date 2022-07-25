import React from "react";
import Image from 'next/image'
import Ss7 from '../public/images/ss7.png'
import Ss11 from '../public/images/ss11.png'
import Ss5 from '../public/images/ss5.png'
import Ss6 from '../public/images/ss6.png'
import Ss9 from '../public/images/ss9.png'
import Ss10 from '../public/images/ss10.png'
import Ss4 from '../public/images/ss4.png'
import Ss8 from '../public/images/ss8.png'
import Ss03 from '../public/images/ss3.png'
import Ss1 from '../public/images/ss1.png'
import Ss2 from '../public/images/ss2.png'

function fullServices() {
  return (
    // <div></div>
    <div id="services" className="flex-col justify-center items-center my-20">



    {/* <img src="/images/left.png" className="  bg-cover w-3/6 h-5/6 bg-no-repeat bg-left bg-fixed object-cover absolute mix-blend-overlay"/> */}



          {/* <div className=" text-center mb-20">
                <a
                  href="#"
                  className="inline-block font-semibold text-white md:mt-10 mt-5 pt-5 bg-rose-500 rounded-md w-60 h-16 text-lg hover:bg-rose-600 "
                >
                  Fazer Orçamento
                </a>  
            </div> */}
    <p className="text-blue-500 uppercase text-center font-bold">RECURSOS DE QUALIDADE</p>
    <h2 className="text-5xl  text-center">
    Serviços Gráficos
    </h2>
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-2 md:mx-0 mx-10 md:grid-cols-3 gap-5 my-20">
        <div className="group flex-col cursor-pointer justify-center items-center border hover:bg-blue-500 hover:shadow-lg  border-blue-100 rounded-md p-8 hover:border-blue-500">
          <div className="flex flex-col items-center relative z-10">
            <Image src={Ss7} height={45} width={45} />
            {/* <img className="h-12 text-4xl text-gray-600 group-hover:text-white" src="/images/ss7.png" /> */}
            {/* <MdWeb className="text-4xl text-gray-600 group-hover:text-white" /> */}
          </div>
          <h1 className="text-xl text-gray-800 text-center font-semibold group-hover:text-white my-2">
            Cartões de visita
          </h1>
        </div>
        <div className="group flex-col cursor-pointer justify-center items-center border hover:bg-blue-500 hover:shadow-lg  border-blue-100 rounded-md p-8 hover:border-blue-500">
          <div className="flex flex-col items-center relative z-10">
            <Image src={Ss11} height={45} width={45} />
            {/* <img className="h-12 text-4xl text-gray-600 group-hover:text-white" src="/images/ss11.png" /> */}
            {/* <AiOutlineAppstoreAdd className="text-4xl text-gray-600 group-hover:text-white" /> */}
          </div>
          <h1 className="text-xl text-center text-gray-800 font-semibold group-hover:text-white my-2">
            Adesivos
          </h1>
        </div>
        <div className="group flex-col cursor-pointer justify-center items-center border hover:bg-blue-500 hover:shadow-lg  border-blue-100 rounded-md p-8 hover:border-blue-500">
          <div className="flex flex-col items-center relative z-10">
            <Image src={Ss5} height={45} width={45} />
            {/* <img className="h-12 text-4xl text-gray-600 group-hover:text-white" src="/images/ss5.png" /> */}
            {/* <MdOutlineDesignServices className="text-4xl text-gray-600 group-hover:text-white" /> */}
          </div>
          <h1 className="text-center text-xl text-gray-800 font-semibold group-hover:text-white my-2">
            Banners
          </h1>
        </div>
        <div className="group flex-col cursor-pointer justify-center items-center border hover:bg-blue-500 hover:shadow-lg  border-blue-100 rounded-md p-8 hover:border-blue-500">
          <div className="flex flex-col items-center relative z-10">
            <Image src={Ss6} height={45} width={45} />
            {/* <img className="h-12 text-4xl text-gray-600 group-hover:text-white" src="/images/ss6.png" /> */}
            {/* <MdChatBubbleOutline className="text-4xl text-gray-600 group-hover:text-white" /> */}
          </div>
          <h1 className="text-center text-xl text-gray-800 font-semibold group-hover:text-white my-2">
            Blocos de Serviços
          </h1>
        </div>
        <div className="group flex-col cursor-pointer justify-center items-center border hover:bg-blue-500 hover:shadow-lg  border-blue-100 rounded-md p-8 hover:border-blue-500">
          <div className="flex flex-col items-center relative z-10">
            <Image src={Ss9} height={45} width={45} />
            {/* <img className="h-12 text-4xl text-gray-600 group-hover:text-white" src="/images/ss9.png" /> */}
            {/* <GiGrowth className="text-4xl text-gray-600 group-hover:text-white" /> */}
          </div>
          <h1 className=" text-center text-xl text-gray-800 font-semibold group-hover:text-white my-2">
          Cartaz
          </h1>
        </div>
        <div className="group flex-col cursor-pointer justify-center items-center border hover:bg-blue-500 hover:shadow-lg  border-blue-100 rounded-md p-8 hover:border-blue-500">
          <div className="flex flex-col items-center relative z-10">
            <Image src={Ss10} height={45} width={45} />
            {/* <img className="h-12 text-4xl text-gray-600 group-hover:text-white" src="/images/ss10.png" /> */}
            {/* <SiAzuredevops className="text-4xl text-gray-600 group-hover:text-white" />   */}
          </div>
          <h1 className="text-center text-xl text-gray-800 font-semibold group-hover:text-white my-2">
            Calendários
          </h1>
        </div>
        <div className="group flex-col cursor-pointer justify-center items-center border hover:bg-blue-500 hover:shadow-lg  border-blue-100 rounded-md p-8 hover:border-blue-500">
          <div className="flex flex-col items-center relative z-10">
            <Image src={Ss4} height={45} width={45} />
            {/* <img className="h-12 text-4xl text-gray-600 group-hover:text-white" src="/images/ss4.png" /> */}
            {/* <MdWeb className="text-4xl text-gray-600 group-hover:text-white" /> */}
          </div>
          <h1 className="text-center text-xl text-gray-800 font-semibold group-hover:text-white my-2">
            Cardápios
          </h1>
        </div>
        <div className="group flex-col cursor-pointer justify-center items-center border hover:bg-blue-500 hover:shadow-lg  border-blue-100 rounded-md p-8 hover:border-blue-500">
          <div className="flex flex-col items-center relative z-10">
            <Image src={Ss8} height={45} width={45} />
            {/* <img className="h-12 text-4xl text-gray-600 group-hover:text-white" src="/images/ss8.png" /> */}
            {/* <AiOutlineAppstoreAdd className="text-4xl text-gray-600 group-hover:text-white" /> */}
          </div>
          <h1 className="text-center text-xl text-gray-800 font-semibold group-hover:text-white my-2">
            Panfletos
          </h1>
        </div>
        <div className="group flex-col cursor-pointer justify-center items-center border hover:bg-blue-500 hover:shadow-lg  border-blue-100 rounded-md p-8 hover:border-blue-500">
          <div className="flex flex-col items-center relative z-10">
            <Image src={Ss03} height={45} width={45} />
            {/* <img className="h-12 text-4xl text-gray-600 group-hover:text-white" src="/images/ss3.png" /> */}
            {/* <SiAzuredevops className="text-4xl text-gray-600 group-hover:text-white" /> */}
          </div>
          <h1 className="text-center text-xl text-gray-800 font-semibold group-hover:text-white my-2">
            Mais Serviços
          </h1>
        </div>
      </div>
    </div>


        
        
        {/* <img src="/images/right.png" className=" w-auto h-auto bg-no-repeat bg-right-bottom bg-fixed object-cover absolute mix-blend-overlay"/> */}



    <p className="text-blue-500 uppercase text-center font-bold">RECURSOS DE QUALIDADE</p>
    <h2 className="text-5xl  text-center">
    Serviços de Carimbo
      {/* Our Best<span className="font-bold"> Services</span> */}
    </h2>
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-2 md:mx-0 mx-10 md:grid-cols-3 gap-5 my-20">
        <div className="group flex-col cursor-pointer justify-center items-center border hover:bg-blue-500 hover:shadow-lg  border-blue-100 rounded-md p-8 hover:border-blue-500">
          <div className="flex flex-col items-center relative z-10">
            <Image src={Ss1} height={45} width={45} />
            {/* <img className="h-12 text-4xl text-gray-600 group-hover:text-white" src="/images/ss1.png" /> */}
            {/* <MdWeb className="text-4xl text-gray-600 group-hover:text-white" /> */}
          </div>
          <h1 className="text-center text-xl text-gray-800 font-semibold group-hover:text-white my-2">
            Carimbos Manuais
          </h1>
        </div>
        <div className="group flex-col cursor-pointer justify-center items-center border hover:bg-blue-500 hover:shadow-lg  border-blue-100 rounded-md p-8 hover:border-blue-500">
          <div className="flex flex-col items-center relative z-10">
            <Image src={Ss2} height={45} width={45} />
            {/* <img className="h-12 text-4xl text-gray-600 group-hover:text-white" src="/images/ss2.png" /> */}
            {/* <AiOutlineAppstoreAdd className="text-4xl text-gray-600 group-hover:text-white" /> */}
          </div>
          <h1 className="text-center text-xl text-gray-800 font-semibold group-hover:text-white my-2">
            Carimbos Especiais
          </h1>
        </div>
        <div className="group flex-col cursor-pointer justify-center items-center border hover:bg-blue-500 hover:shadow-lg  border-blue-100 rounded-md p-8 hover:border-blue-500">
          <div className="flex flex-col items-center relative z-10">
            <Image src={Ss9} height={45} width={45} />
            {/* <img className="h-12 text-4xl text-gray-600 group-hover:text-white" src="/images/ss03.png" /> */}
            {/* <MdOutlineDesignServices className="text-4xl text-gray-600 group-hover:text-white" /> */}
          </div>
          <h1 className="text-center text-xl text-gray-800 font-semibold group-hover:text-white my-2">
            Carimbo de Bolso
          </h1>
        </div>
        <div className="group flex-col cursor-pointer justify-center items-center border hover:bg-blue-500 hover:shadow-lg  border-blue-100 rounded-md p-8 hover:border-blue-500">
          <div className="flex flex-col items-center relative z-10">
            <Image src={Ss5} height={45} width={45} />
            {/* <img className="h-12 text-4xl text-gray-600 group-hover:text-white" src="/images/ss5.png" /> */}
            {/* <MdChatBubbleOutline className="text-4xl text-gray-600 group-hover:text-white" /> */}
          </div>
          <h1 className="text-center text-xl text-gray-800 font-semibold group-hover:text-white my-2">
            Carimbos Automático
          </h1>
        </div>
        <div className="group flex-col cursor-pointer justify-center items-center border hover:bg-blue-500 hover:shadow-lg  border-blue-100 rounded-md p-8 hover:border-blue-500">
          <div className="flex flex-col items-center relative z-10">
            <Image src={Ss7} height={45} width={45} />
            {/* <img className="h-12 text-4xl text-gray-600 group-hover:text-white" src="/images/ss7.png" /> */}
            {/* <GiGrowth className="text-4xl text-gray-600 group-hover:text-white" /> */}
          </div>
          <h1 className="text-center text-xl text-gray-800 font-semibold group-hover:text-white my-2">
            Manutenção de Carimbo
          </h1>
        </div>
        <div className="group flex-col cursor-pointer justify-center items-center border hover:bg-blue-500 hover:shadow-lg  border-blue-100 rounded-md p-8 hover:border-blue-500">
          <div className="flex flex-col items-center relative z-10">
            <Image src={Ss11} height={45} width={45} />
            {/* <img className="h-12 text-4xl text-gray-600 group-hover:text-white" src="/images/ss11.png" /> */}
            {/* <SiAzuredevops className="text-4xl text-gray-600 group-hover:text-white" /> */}
          </div>
          <h1 className="text-center text-xl text-gray-800 font-semibold group-hover:text-white my-2">
            Tintas para Carimbo
          </h1>
        </div>
      </div>
    </div>



  </div>
  )
}

export default fullServices