import html from '../assets/tech/html-5.png'
import css from '../assets/tech/css3.png'
import js from '../assets/tech/js.png'
import nodejs from '../assets/tech/nodejs.png'
import react from '../assets/tech/react.png'
import firebase from '../assets/tech/firebase.png'
import figma from '../assets/tech/figma.png'
const TechStocks = () => {
    return (
      <div className="text-center my-8 md:mt-16 lg:mt-20 max-w-2xl mx-auto">
        <h4 className="font-semibold text-xl mb-11">Tech Stocks</h4>
        <div className="flex gap-10 w-14">
          <img  src={html} alt="html" />
          <img  src={css} alt="css" />
          <img  src={js} alt="js" />
          <img  src={nodejs} alt="nodejs" />
          <img  src={react} alt="react" />
          <img  src={figma} alt="figma" />
          <img  src={firebase} alt="firebase" />
        </div>
      </div>
    );
};

export default TechStocks;