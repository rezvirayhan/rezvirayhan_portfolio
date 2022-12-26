import React from "react";
import img from "../../img/IMG_20220619_122501.jpg";

const Home = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(45deg, rgb(11 16 26), rgb(18 76 110 / 98%))",
        color: "white",
      }}
      className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4"
    >
      <div>
        <div className="ml-10 mt-5">
          <h2 className="text-5xl mt-2">
            {" "}
            Hi, I'm Md. <b>Abu Rayhan</b>
          </h2>
          <h2 className="text-3xl mt-2 ml-10"> MERN Stack Developer</h2>
          <h2 className="text-3xl mt-2 ml-10"> (React Expert)</h2>
        </div>
        <div className="ml-10 mt-10">
          <h2 className="text-4xl mt-2"> Education?:</h2>
          <h2 className="text-xl mt-2 ml-10">
            {" "}
            • Diploma in Engineering (Computer Since Technology)
          </h2>
          <h2 className="text-xl mt-2 ml-10">
            {" "}
            • Secondary School Certificate (SSC)
          </h2>
          <h2 className="text-xl mt-2 ml-10">
            {" "}
            • Junior School Certificate (JSC)
          </h2>
        </div>
        <div className="ml-10 mt-10">
          <h2 className="text-4xl mt-2">Previously:</h2>
          <h2 className="text-xl mt-2 ml-10">• MERN Stack Developer (Upwok)</h2>
          <h2 className="text-xl mt-2 ml-10">• Front-End Developer (Fiverr)</h2>
        </div>
      </div>
      <div>
        <img src={img}></img>
      </div>
    </div>
  );
};

export default Home;
