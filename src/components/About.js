import food from "../images/food-png.png"
const About = () => {
  return (
    <div className="min-h-screen">
      <div className="mx-auto mt-20 text-center"></div>
      <div className="flex flex-wrap justify-evenly items-center m-10 md:m-50">
        <div className="flex flex-wrap flex-col justify-start items-start overflow-y-hidden">
          <h1 className="text-7xl text-light-text-color">
           Step into <br /> Flavorful Fields of <br />
            <span className="inline-block bg-orange-500 px-4 py-1 rounded-lg text-light-white-text">Culinary Delight</span>
          </h1>
          <h4 className="text-lg mt-4 italic text-light-text-color">
            "Where Every Bite Tells a Story"
          </h4>
        </div>
        <div className="flex flex-wrap flex-col justify-center items-center overflow-y-hidden">
          <img src={food} alt="Food Image" className="w-[500]"/>
        </div>
      </div>
    </div>
  );
};

export default About;