
/* eslint-disable react/no-unescaped-entities */

import profile from "../assets/contact/profile.png";
import linkedin from "../assets/contact/linkedin.png";
import location from "../assets/contact/location.png";

const Contact = () => {
    return (
      <div className="max-w-6xl mx-auto mt-6 md:mt-10 lg:mt-16 p-4">
        <h3 className="text-2xl md:text-4xl lg:text-5xl lora font-bold mb-7">
          Contact
        </h3>
        <div className="text-center">
          <h3 className="lora font-bold text-2xl md:text-3xl lg:text-3xl mb-9">
            Let’s Connect
          </h3>
          <p className="font-bold text-2xl">
            Don't be a stranger! Say hello and let's collaborate
          </p>
        </div>
        <div className="flex flex-col md:flex-row lg:flex-row justify-between">
          <div className="my-12 md:my-20 lg:my-32">
            <img className="ml-16" src={profile} alt="" />
            <p className="font-semibold text-xl">devenamulshikder@gmail.com</p>
          </div>
          <div className="my-12 md:my-20 lg:my-32">
            <img className="ml-2 md:w-[67%] lg:w-[68%] " src={location} alt="" />
            <p className="font-semibold text-xl">Dhaka, Bangladesh</p>
          </div>
          <div className="my-12 md:my-20 lg:my-32">
            <img  src={linkedin} alt="" />
            <p className="font-semibold text-xl">devEnamul.</p>
          </div>
        </div>
      </div>
    );
};

export default Contact;