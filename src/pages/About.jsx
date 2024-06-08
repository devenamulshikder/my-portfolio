
import loader from '../assets/tech/loader_01.png'
const About = () => {
    return (
      <div className="max-w-5xl mx-auto mt-12 md:mt-24 lg:mt-40">
        <div className="flex justify-between">
          {/* about me */}
          <div className="">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold lora mb-5 md:mb-10 lg:mb-12">
              About Me
            </h1>
            <img src={loader} alt="loader" />
          </div>

          {/* paragraph */}
          <div className="w-[550px]">
            <h3 className="text-xl lora font-bold mb-6">
              Hi, I’m Enamul. A passionate Front-end Web Developer based in
              Bangladesh
            </h3>
            <p className="text-xl">
              I am a Front-end Web Developer with a passion for creating
              beautiful and functional websites. I have experience in HTML, CSS,
              JavaScript, and jQuery, and am always eager to learn new
              technologies and skills to improve my craft. My goal is to create
              websites that not only look great, but are user-friendly and
              accessible to everyone.I am outgoing, dedicated, and open-minded.
              I get across to people and adjust to changes with ease. I believe
              that a person should work on developing their professional skills
              and learning new things all the time. Currently, I am looking for
              new career opportunities.
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-8 lg:mt-16">
          <a href="https://drive.google.com/file/d/1fa_RGl8nUN9fM7rML_xZvRmAPkp-Pwjd/view" target='blank'>
            <button className="border py-3 px-6 rounded-full text-center hover:scale-105 duration-500">
              Download Resume!
            </button>
          </a>
        </div>
      </div>
    );
};

export default About;