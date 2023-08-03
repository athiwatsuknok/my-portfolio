import iconFigma from "../assets/icon-figma.svg";
import iconGit from "../assets/icon-git.svg";
import iconJavascript from "../assets/icon-javscript.svg";
import iconMongodb from "../assets/icon-mongodb.svg";
import iconNode from "../assets/icon-nodejs.svg";
import iconPostgresql from "../assets/icon-postgresql.svg";
import iconReact from "../assets/icon-react.svg";
import iconSass from "../assets/icon-sass.svg";
import iconGithub from "../assets/icongithub.png";
import iconCss from "../assets/iconcss.png";

function Skill() {
  return (
    <div className="w-[100vw] h-[60vh] bg-[#fafafa]">
      <div className="skill w-[80%] h-[50vh] mx-auto">
        <div className="text-center ">
          <a className=" bg-[#e6e7eb] px-6 py-1.5 w-[32px] rounded-xl ">
            Skills
          </a>
          <p className="mt-8 tracking-wide">
            The skills, tool and technologies I am really good at:
          </p>
        </div>
        <div className="stack  mx-auto grid grid-cols-5 mt-[4.5rem]">
          <div className=" w-16 mx-auto">
            <img src={iconReact} alt="" />
            <p className="text-center mt-2">React</p>
          </div>
          <div className=" w-16 mx-auto">
            <img src={iconGit} alt="" />
            <p className="text-center mt-2">Git</p>
          </div>
          <div className=" w-16 mx-auto">
            <img className="ml-2" src={iconFigma} alt="" />
            <p className="text-center mt-2">Figma</p>
          </div>
          <div className=" w-16 mx-auto">
            <img src={iconJavascript} alt="" />
            <p className="text-center mt-2">Javascript</p>
          </div>
          <div className=" w-16 mx-auto ">
            <img className="ml-4" src={iconMongodb} alt="" />
            <p className="text-center mt-2">Mongodb</p>
          </div>
          <div className=" w-16 mx-auto mt-4">
            <img src={iconNode} alt="" />
            <p className="text-center mt-2">Nodejs</p>
          </div>
          <div className=" w-16 mx-auto mt-4">
            <img src={iconPostgresql} alt="" />
            <p className="text-center mt-2">Postgresql</p>
          </div>
          <div className=" w-16 mx-auto mt-4">
            <img src={iconSass} alt="" />
            <p className="text-center mt-2">Sass</p>
          </div>
          <div className=" w-16 mx-auto mt-4">
            <img src={iconGithub} alt="" />
            <p className="text-center mt-2">Github</p>
          </div>
          <div className=" w-16 mx-auto mt-4">
            <img src={iconCss} alt="" />
            <p className="text-center mt-2">Css</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;
