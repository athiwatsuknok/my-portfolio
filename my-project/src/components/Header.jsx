import "../css/Header.css";
import { useState, useEffect } from "react";
import devImages from "../img/devimages-removebg-preview.png";
// import heroImg from "../img/heroImg 1.png";
function Header() {
  const [animatedText, setAnimatedText] = useState("");

  useEffect(() => {
    const textToAnimate = "Hi ! I’m Athiwat Suknok a FullStack Developer";
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      setAnimatedText(() => {
        if (currentIndex === textToAnimate.length) {
          clearInterval(intervalId);
        }
        currentIndex++;
        return textToAnimate.substring(0, currentIndex);
      });
    }, 100);

    return () => clearInterval(intervalId);
  }, [setAnimatedText]);

  return (
    <header className="header w-[100vw] h-[100vh] bg-[#fafafa]">
      <div className="">
        <nav className="logo flex justify-between w-[80%] h-[80px] mx-auto  items-center ">
          <h2 className="text-xl tracking-wide font-bold">PORTFOLIO</h2>
          <button className="bg-[#ff5971] px-4 py-2 rounded-lg text-white">
            Contact
          </button>
        </nav>
      </div>

      <div className="w-[80%] mx-auto flex items-center">
        <div className="content w-[50%] p-[1rem]">
          <h2 className="text-[6rem] mt-[1rem]">👋🏼</h2>
          <h1 className="animate-charcter font-bold text-[8rem]">Hello !</h1>
          <p className="text-[2rem] font-bold leading-10">{animatedText}</p>
          <p className="mt-[2rem] tracking-wide text-[#7d7d7d] leading-7">
            I graduated from Dhurakij Pundit University, majoring in Interactive
            Design and Game Development. Currently, I am a student at TechUp.
          </p>
        </div>
        <div className="img">
          <img src={devImages} alt="" />
        </div>
      </div>
    </header>
  );
}

export default Header;
