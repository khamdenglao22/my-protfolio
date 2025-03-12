import Image from "next/image";
import React from "react";
import img1 from "../../assets/img4.png";
import img2 from "../../assets/project_2.png";
import img3 from "../../assets/project_3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

const Project = () => {
  return (
    <>
      <div className="w-[100%] h-[100%] grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 px-5 pt-10 pb-5">
        <div
          className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 shadow-lg rounded-[20px] p-5 hover:scale-102 duration-75"
          style={{ background: "rgba(166, 248, 250, 0.23)", cursor: "pointer" }}
        >
          <div className="flex justify-center">
            <Image src={img3} alt="project1" priority />
          </div>
          <div>
            <h3 className="text-[14px] sm:text-[18px] font-bold">ST Muang Thai Web Application</h3>
            <p className="text-[12px] sm:text-[16px]">
              <strong>Tech Stack:</strong> Angular, Node js, SCSS, HTML and Express js
            </p>
            <div className="flex items-center gap-4 mt-2">
              <a className="border-b font-bold text-[12px] sm:text-[16px]" href="https://stmuangthai.com/" target="_blank">
                Live Demo
            </a>
              <a className="border-b font-bold text-[12px] sm:text-[16px]" href="https://github.com/khamdenglao22/st_muangthai_customer" target="_blank">
                GitHub Repo
            </a>
            </div>
          </div>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 shadow-lg rounded-[20px] p-5 hover:scale-102 duration-75"
          style={{ background: "rgba(166, 248, 250, 0.23)", cursor: "pointer" }}
        >
          <div className="flex justify-center">
            <Image src={img2} alt="project1" priority />
          </div>
          <div>
            <h3 className="text-[14px] sm:text-[18px] font-bold">Lao EV Car Station Web Page</h3>
            <p className="text-[12px] sm:text-[16px]">
              <strong>Tech Stack:</strong> PHP, CSS, HTML and Javascript
            </p>
            <div className="flex items-center gap-4 mt-2">
              <a className="border-b font-bold text-[12px] sm:text-[16px]" href="https://laoevcarstation.la/?module=home" target="_blank">
                Live Demo
            </a>
              <a className="border-b font-bold text-[12px] sm:text-[16px]" href="https://github.com/khamdenglao22/ev_lao" target="_blank">
                GitHub Repo
            </a>
            </div>
          </div>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 shadow-lg rounded-[20px] p-5 hover:scale-102 duration-75"
          style={{ background: "rgba(166, 248, 250, 0.23)", cursor: "pointer" }}
        >
          <div className="flex justify-center">
            <Image src={img1} alt="project1" priority />
          </div>
          <div>
            <h3 className="text-[14px] sm:text-[18px] font-bold">Personal Portfolio</h3>
            <p className="text-[12px] sm:text-[16px]">A responsive portfolio showcasing my projects and skills.</p>
            <p className="text-[12px] sm:text-[16px]">
              <strong>Tech Stack:</strong> Next js and Tailwind CSS
            </p>
            <div className="flex items-center gap-4 mt-2">
              <a className="border-b font-bold text-[12px] sm:text-[16px]" href="/" target="_blank">
                Live Demo
            </a>
              <a className="border-b font-bold text-[12px] sm:text-[16px]" href="https://github.com/khamdenglao22/ev_lao" target="_blank">
                GitHub Repo
            </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
