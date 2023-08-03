import fullstack from "../assets/backend.png";
import collaboration from "../assets/collaboration.png";
import problemSolving from "../assets/problem-solving.png";
import "../css/Abilitysection.css";

function AbilitySection() {
  return (
    <section className="w-[100vw] h-[80vh] bg-[#fafafa]">
      {/* <h1></h1> */}
      <h1 className="text-center text-[1.8rem] pt-[3rem] font-semibold text-slate-800">
        Why Hire Me 👨🏽‍💻
      </h1>
      <p className="tracking-wide text-center mt-4">
        Here are the reasons why you should consider hiring me
      </p>

      <div className="w-[80%] mx-auto grid grid-cols-3 gap-8 mt-[4rem]">
        <div className="box px-[2.5rem] py-[2rem] hover:scale-110 hover:duration-300">
          <img className="w-[50px]" src={fullstack} alt="" />
          <h3 className="mt-[2rem] font-semibold">Technical Expertise</h3>
          <p className="mt-[1rem]">
            As a full-stack developer, I have honed my skills in both front-end
            and back-end technologies.
          </p>
        </div>

        <div className="box px-[2rem] py-[2rem] hover:scale-110 hover:duration-300">
          <img className="w-[50px]" src={collaboration} alt="" />
          <h3 className="mt-[2rem] font-semibold">
            Collaboration and Teamwork
          </h3>
          <p className="mt-[1rem]">
            {" "}
            I understand the importance of effective communication, active
            listening, and respecting diverse perspectives
          </p>
        </div>

        <div className="box px-[2.5rem] py-[2rem] hover:scale-110 hover:duration-300">
          <img className="w-[50px]" src={problemSolving} alt="" />
          <h3 className="mt-[2rem] font-semibold">Problem-Solving</h3>
          <p className="mt-[1rem]">
            I am skilled at breaking down complex issues into manageable
            components, devising innovative solutions
          </p>
        </div>
      </div>
    </section>
  );
}

export default AbilitySection;
