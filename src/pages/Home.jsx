import { FaLinkedinIn } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import TechStocks from "../components/TechStocks";

const Home = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto text-[#FFFFFF] p-4 mt-10 md:mt-20 lg:mt-[164px] flex flex-col-reverse md:flex-row lg:flex-row justify-between items-center">
        <div>
          <div className="lora text-2xl md:text-4xl lg:text-6xl font-bold mb-3 mt-2">
            <h1>Frontend web</h1>
            <h1>developer !</h1>
          </div>
  
          <div className="mt-4">
            <p className="lg:w-2/3 text-sm md:text-lg lg:text-xl">
              Hi, I’m Enamul. A passionate Front-end Web Developer based in
              Bangladesh
            </p>
          </div>
  
          <div className="flex gap-6">
            <div className="mt-5  w-12 h-12 p-2 border rounded-full bg-[#FFFFFF]">
              <a className="text-black " target="blank" href="https://www.linkedin.com/feed/">
                <FaLinkedinIn size={30} />
              </a>
            </div>
            <div className="mt-5 w-12 h-12 p-2 border rounded-full bg-[#FFFFFF]">
              <a
                className="text-black" target="blank"
                href="https://github.com/devenamulshikder"
              >
                <FiGithub size={30} />
              </a>
            </div>
          </div>
        </div>
  
        <div className="rounded-full lg:h-1/2 lg:w-1/3 md:w-2/3">
          <img
            className="border-2 border-blue-400 rounded-full "
            src="https://i.postimg.cc/zB4LHqjy/MG-7431.jpg"
            alt="author"
          />
        </div>
      </div>
      <div><TechStocks/></div>
    </>
  );
};

export default Home;
