import { FiGithub } from "react-icons/fi";
import bookVibe from "../assets/projects/booksVibe.png";
import pottery from "../assets/projects/pottery.png";
import dream from "../assets/projects/dreamsites.png";
const Portfolio = () => {
  return (
    <div className="max-w-6xl mx-auto mt-6 md:mt-10 lg:mt-16 p-4">
      <h3 className="text-2xl md:text-4xl lg:text-5xl lora font-bold mb-7">
        Portfolio
      </h3>
      {/* first projects */}
      <div className="flex flex-col md:flex-row lg:flex-row gap-10 lg:gap-16 ld:mb-32  lg:mb-48">
        {/* project screen short */}
        <div className=" flex-1 ">
          <img className=" rounded-2xl h-[320px]" src={bookVibe} alt="" />
        </div>

        {/* projects details */}
        <div className=" flex-1 ">
          <h3 className="lora font-semibold text-2xl text-center mb-5">
            Books Vibes
          </h3>
          <p>
            The modern pricing card I created using HTML and CSS is a sleek and
            professional tool for businesses looking to showcase their pricing
            plans. The design is visually appealing and easy to navigate, with a
            consistent color scheme and clear, easy-to-read fonts.The pricing
            plans are clearly outlined, with a detailed breakdown of the
            features and benefits of each plan. This allows potential customers
            to quickly and easily compare the different options and choose the
            plan that best meets their needs.
          </p>
          <div className="flex items-center">
            <button className="py-1 px-8 border rounded-full mt-4 mr-10">
              <a
                href="https://books-vibe-with-react-router.netlify.app/"
                target="blank"
              >
                View
              </a>
            </button>
            <div className="flex items-center gap-1 mt-4">
              <p>
                <FiGithub size={30} />
              </p>
              <a
                className="hover:underline"
                target="blank"
                href="https://github.com/devenamulshikder/book-vibes.git"
              >
                Git code
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* second production */}

      <div className="flex flex-col md:flex-row-reverse lg:flex-row-reverse gap-10 lg:gap-16 ld:mb-32  lg:mb-48">
        {/* project screen short */}
        <div className=" flex-1 ">
          <img className=" rounded-2xl h-[320px]" src={pottery} alt="" />
        </div>

        {/* projects details */}
        <div className=" flex-1 ">
          <h3 className="lora font-semibold text-2xl text-center mb-5">
            Pottery Palette
          </h3>
          <p>
            The modern pricing card I created using HTML and CSS is a sleek and
            professional tool for businesses looking to showcase their pricing
            plans. The design is visually appealing and easy to navigate, with a
            consistent color scheme and clear, easy-to-read fonts.The pricing
            plans are clearly outlined, with a detailed breakdown of the
            features and benefits of each plan. This allows potential customers
            to quickly and easily compare the different options and choose the
            plan that best meets their needs.
          </p>
          <div className="flex items-center">
            <button className="py-1 px-8 border rounded-full mt-4 mr-10">
              <a href="https://pallete-paradise.web.app/" target="blank">
                View
              </a>
            </button>
            <div className="flex items-center gap-1 mt-4">
              <p>
                <FiGithub size={30} />
              </p>
              <a className="hover:underline" target="blank" href="">
                Git code
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* third  */}
      <div className="flex flex-col md:flex-row lg:flex gap-10 lg:gap-16 ld:mb-32  lg:mb-48">
        {/* project screen short */}
        <div className=" flex-1 ">
          <img className=" rounded-2xl h-[320px]" src={dream} alt="" />
        </div>

        {/* projects details */}
        <div className=" flex-1 ">
          <h3 className="lora font-semibold text-2xl text-center mb-5">
            Dream Sites
          </h3>
          <p>
            The modern pricing card I created using HTML and CSS is a sleek and
            professional tool for businesses looking to showcase their pricing
            plans. The design is visually appealing and easy to navigate, with a
            consistent color scheme and clear, easy-to-read fonts.The pricing
            plans are clearly outlined, with a detailed breakdown of the
            features and benefits of each plan. This allows potential customers
            to quickly and easily compare the different options and choose the
            plan that best meets their needs.
          </p>
          <div className="flex items-center">
            <button className="py-1 px-8 border rounded-full mt-4 mr-10">
              <a
                href="https://assignment-9-real-estate-c65a0.web.app/"
                target="blank"
              >
                View
              </a>
            </button>
            <div className="flex items-center gap-1 mt-4">
              <p>
                <FiGithub size={30} />
              </p>
              <a className="hover:underline" target="blank" href="##">
                Git code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
