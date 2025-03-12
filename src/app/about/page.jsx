import React from "react";
import Image from "next/image";
import Img1 from "../../assets/img2.png";

const About = () => {
  return (
    <>
      <div className="flex justify-center items-center w-[100%] h-[100%]">
        <div className="grid grid-cols-1 sm:grid-cols-[300px_1fr] gap-4">
          <div className="mt-5 sm:mt-0 w-full flex justify-center">
            <Image width={250} src={Img1} alt="image-1" priority />
          </div>
          <div className="p-5">
            <h2 className="text-[16px] sm:text-2xl font-bold mb-1 sm:mb-3">About Me</h2>
            <p>
              I'm a passionate frontend developer with 2 years of experience in
              building dynamic and responsive web applications. I specialize in
              JavaScript frameworks like Angular, React js and Next js.
            </p>
            <p className="text-[14px] sm:text-[16px] font-bold mb-2 mt-2">My Skills:</p>
            <ul>
              <li>Angular, React js, Next js, JavaScript, PHP</li>
              <li>JAVA, C#, HTML, Node Js, SQL Server, CSS,</li>
              <li>My SQL, Tailwind CSS, Bootstrap, Material UI</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
