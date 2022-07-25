import Image from "next/image";
import One from "../public/images/01.png";
import Two from "../public/images/02.png";
import Three from "../public/images/03.png";
import Four from "../public/images/04.png";
import Five from "../public/images/05.png";
import Six from "../public/images/006.png";
import { Element } from "react-scroll";

function works() {
	return (
    <div>
		   <Element  id="projects" name="work"> 
       {/* <img className="w-full h-full object-cover absolute "  src="./images/bg.jpg" /> */}
       {/* <img className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex absolute"  src="./images/bg.jpg" /> */}
			<div className="w-full my-20 h-auto flex flex-col justify-center items-center  ">
				{/* <p className=" uppercase text-white uppercase font-bold">Portfolio</p> */}
				<p className=" uppercase text-blue-500 uppercase font-bold">Projetos</p>
				<h1 className="text-black text-6xl text-center">
					Trabalhos Realizados
				</h1>
				<div className="md:flex sm:flex-col md:flex-row justify-center items-center gap-10 mt-10">
					<div className="rounded w-80 h-60 shadow-xl relative">
						<Image
							src={One}
							alt="One"
							layout="fill"
							objectFit="cover"
							className="p-2 rounded cursor-pointer"
						/>
					</div>
					<div className="rounded w-80 h-60 shadow-xl relative">
						<Image
							src={Two}
							alt="two"
							layout="fill"
							objectFit="cover"
							className="p-2 rounded cursor-pointer"
						/>
					</div>
					<div className="rounded w-80 h-60 shadow-xl relative">
						<Image
							src={Three}
							alt="three"
							layout="fill"
							objectFit="cover"
							className="p-2 rounded cursor-pointer"
						/>
					</div>
				</div>
				<div className="md:flex sm:flex-col md:flex-row justify-center items-start sm:pb-10 md:gap-10 mt-10">
					<div className="rounded w-80 h-60 shadow-xl relative">
						<Image
							src={Four}
							alt="four"
							layout="fill"
							objectFit="cover"
							className="p-2 rounded cursor-pointer"
						/>
					</div>
					<div className="rounded w-80 h-60 shadow-xl relative">
						<Image
							src={Five}
							alt="five"
							layout="fill"
							objectFit="cover"
							className="p-2 rounded cursor-pointer"
						/>
					</div>
					<div className="rounded w-80 h-60 shadow-xl relative">
						<Image
							src={Six}
							alt="six"
							layout="fill"
							objectFit="cover"
							className="p-2 rounded cursor-pointer"
						/>
					</div>
				</div>

				<h1 className="text-blue-500 font-bold text-base my-10">
					Todos os direitos reservados{" "}
					<a href="#" className="text-black font-semibold">
						Gráfica Santa fé{" "}
					</a>
				</h1>
			</div>
		</Element>
    </div>
	);
}

export default works;
