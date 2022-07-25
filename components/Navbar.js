import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-scroll";
import Image from "next/image";
import Logo from '../public/images/logo0.png'
import Whats from '../public/images/whats.svg'

function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	return (


    
		<div>
			<nav className=" fixed z-20 bg-white w-full rounded-lg">
				<div className="w-full">
					<div className="flex items-center h-16 w-full ">
						<div className="flex items-center  sm:mx-10 md:mx-20 justify-between w-full">
							<div className="flex justify-center items-center flex-shrink-0 ">
								<a href="#home" className=" font-bold text-xl cursor-pointer">
                  <div className="pl-5">
                    <Image src={Logo} height={50} width={110}  className=" hover:scale-110"/>
                  </div>
									  {/* <img className="h-14 hover:scale-110" src="/images/logo0.png"/> */}
                  
								</a>
							</div>
							<div className="hidden md:block">
								<div className="ml-10 flex items-baseline space-x-4">
									<Link
										activeClass="Home"
										to="home"
										smooth={true}
										offset={50}
										duration={500}
										className="cursor-pointer text-blue-500 px-3 py-2 text-md"
									>
										Principal
									</Link>
									<Link
										activeClass="services"
										to="services"
										smooth={true}
										offset={50}
										duration={500}
										className="cursor-pointer hover:text-blue-500 text-black  px-3 py-2"
									>
										Serviços
									</Link>
									<Link
										activeClass="work"
										to="projects"
										smooth={true}
										offset={50}
										duration={500}
										className="cursor-pointer hover:text-blue-500 text-black px-3 py-2"
									>
										Projetos
									</Link>

									<Link
										activeClass="Clients"
										to="about"
										smooth={true}
										offset={50}
										duration={500}
										className="cursor-pointer hover:text-blue-500 text-black px-3 py-2"
									>
										Sobre
									</Link>

									<Link
										activeClass="contact"
										to="contact"
										smooth={true}
										offset={50}
										duration={500}
										className="cursor-pointer hover:text-blue-500 text-black px-3 py-2"
									>
										Contatos
									</Link>
								</div>
							</div>

							<div className="flex justify-center items-center flex-shrink-0 ">
								<h1 className=" font-semibold text-lg cursor-pointer hidden md:block">
                  <a href="https://api.whatsapp.com/send?phone=556199549-6939&text=Olá,%20Gostaria%20de%20fazer%20um%20orçamento.%20" target="_back" className="">
                    <Image src={Whats}className="hover:scale-110"/>
                    {/* <img src="/images/whats.svg" className="hover:scale-110"/> */}
                  </a>
                  {/* <a href="#" className="block bg-rose-500 hover:bg-rose-500 py-1 px-2 text-lg text-white font-bold rounded-lg">
                    Enviar Mensagem
                  </a> */}
								</h1>
							</div>
						</div>
						<div className="mr-14 flex md:hidden ">
							<button
								onClick={() => setIsOpen(!isOpen)}
								type="button"
								className="bg-blue-500 inline-flex items-center justify-center p-2 rounded-md text-white  hover:bg-black focus:outline-none focus:ring-white"
								aria-controls="mobile-menu"
								aria-expanded="false"
							>
								<span className="sr-only">Open main menu</span>
								{!isOpen ? (
									<svg
										className="block h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M4 6h16M4 12h16M4 18h16"
										/>
									</svg>
								) : (
									<svg
										className="block h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								)}
							</button>
						</div>
					</div>
				</div>

				<Transition
					show={isOpen}
					enter="transition ease-out duration-100 transform"
					enterFrom="opacity-0 scale-95"
					enterTo="opacity-100 scale-100"
					leave="transition ease-in duration-75 transform"
					leaveFrom="opacity-100 scale-100"
					leaveTo="opacity-0 scale-95"
				>
					{(ref) => (
						<div className="md:hidden" id="mobile-menu">
							<div
								ref={ref}
								className="bg-white mx-4 mr-20 pt-4 pb-4 space-y-1"
							>
								<Link
									href="/home"
									activeClass="home"
									to="home"
									smooth={true}
									offset={50}
									duration={500}
									className="cursor-pointer hover:bg-blue-500 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
								>
									Principal
								</Link>
								<Link
									href="/services"
									activeClass="services"
									to="services"
									smooth={true}
									offset={50}
									duration={500}
									className="cursor-pointer hover:bg-blue-500 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
								>
									Serviços
								</Link>

								<Link
									href="/work"
									activeClass="work"
									to="projects"
									smooth={true}
									offset={50}
									duration={500}
									className="cursor-pointer hover:bg-blue-500 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
								>
									Projetos
								</Link>
								<Link
									href="/Clients"
									activeClass="Clients"
									to="about"
									smooth={true}
									offset={50}
									duration={500}
									className="cursor-pointer hover:bg-blue-500 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
								>
									Sobre
								</Link>

								<Link
									href="/contact"
									activeClass="contact"
									to="contact"
									smooth={true}
									offset={50}
									duration={500}
									className="cursor-pointer hover:bg-blue-500 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
								>
									Contatos
								</Link>

								<a
									href="https://api.whatsapp.com/send?phone=556199549-6939&text=Olá,%20Gostaria%20de%20fazer%20um%20orçamento.%20" target="_back"
									activeClass="hi"
									to=""
									smooth={true}
									offset={50}
									duration={500}
									className="cursor-pointer hover:bg-blue-500 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
								>
                  <Image src={Whats} height={55} width={55}  />
									{/* <img src="/images/whats.svg" className="h-14" /> */}
								</a>
							</div>
						</div>
					)}
				</Transition>
			</nav>
		</div>
	);
}

export default Navbar;
