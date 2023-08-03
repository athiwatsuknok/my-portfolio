import iconData from "../data/icon";

function Skill() {
  return (
    <div className="w-[100vw] h-[65vh] bg-[#fafafa]">
      <div className="skill w-[80%] h-[50vh] mx-auto">
        <div className="text-center ">
          <a className=" bg-[#e6e7eb] px-6 py-1.5 w-[32px] rounded-xl ">
            Skills
          </a>
          <p className="mt-8 tracking-wide">
            The skills, tool and technologies I am really good at:
          </p>
        </div>
        <div className="stack   grid grid-cols-5 mt-[4.5rem]">
          {iconData.map((item, index) => {
            return (
              <div
                className=" w-16 mx-auto flex flex-col items-center justify-center mt-8"
                key={index}
              >
                <img className="hover:animate-spin" src={item.image} alt="" />
                <p className="text-center  mt-3">{item.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Skill;
