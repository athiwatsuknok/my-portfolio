import facebook from "../assets/facebook.png";
import instragram from "../assets/instagram.png";
import github from "../assets/github.png";
import gmail from "../assets/gmail.png";

function Contact() {
  return (
    <div className="w-[100%] h-[40vh] bg-[#fafafa]">
      <div className="w-[80%] mx-auto">
        <h1 className="text-center text-[1.8rem] pt-[3rem] font-semibold text-slate-800">
          Contact Me
        </h1>
        <ul className="flex justify-center mt-[3rem]">
          <li className="place-content-center">
            <a href="#">
              <img className="w-[60px]" src={facebook} alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img className="w-[60px] ml-[5rem]" src={instragram} alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img className="w-[60px] ml-[5rem]" src={github} alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img className="w-[60px] ml-[5rem]" src={gmail} alt="" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
