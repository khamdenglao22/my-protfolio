import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTiktok } from "@fortawesome/free-brands-svg-icons";
import Img1 from "../assets/image-1.png";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <>
      <div className="w-full h-auto sm:h-full relative ">
        <div
          className="box-1 hidden sm:block text-[#07617F] shadow-lg w-[50%] pl-[5%] pr-[10px] py-[20px] absolute top-[50%] -translate-y-[50%] -left-[3%] rounded-[20px]"
          style={{ background: "rgba(166, 248, 250, 0.23)" }}
        >
          <h1 className="font-semibold text-2xl mb-1">
            Hello ! I am Khamdeng LAO
          </h1>
          <h2>Frontend Developer | Crafting Modern & Responsive Web Apps</h2>
          <p>
            I specialize in building visually appealing, user-friendly, and performance-optimized web applications using the latest technologies like React, Angular, Next js and Tailwind CSS.
          </p>
          <Link
            href="mailto:khamdenglao22@gmail.com"
            className="bg-[#fff] rounded-[20px] px-5 py-1 shadow-md mt-3 flex w-[20%] items-center justify-center"
          >
            Contact Me
          </Link>
        </div>

        <div className="hidden sm:block w-[400px] h-[400px]  bg-[#07617F] rounded-[50%] absolute z-0 right-0 bottom-0 -translate-x-[30%] translate-y-[10%] shadow-lg">
          <div className="w-full h-full relative z-10">
            <Image
              className="w-full absolute left-[50%] -translate-x-[50%] bottom-10 z-10"
              src={Img1}
              alt="image"
            />
          </div>
        </div>
        <div className="hidden sm:block w-[400px] h-[80px]  bg-[#98D0E9] absolute z-0 right-0 bottom-0 -translate-x-[30%] translate-y-[100%]"></div>

        <ul className="hidden sm:block absolute right-0 translate-x-[50%] top-[50%] -translate-y-[50%] flex flex-col gap-2">
          <li>
            <Link
              href="https://wa.me/+8562055049903"
              className="box-icon-1 p-3 bg-[#fff] w-[40px] h-[40px] hover:scale-125 duration-75 flex items-center justify-center rounded-[50%] shadow-lg"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.facebook.com/profile.php?id=100051499722182"
              className="box-icon-2 p-2 bg-[#fff] w-[40px] h-[40px] hover:scale-125 duration-75 flex items-center justify-center rounded-[50%] shadow-lg"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </Link>
          </li>
          <li>
            <Link
              href="https://tiktok.com/@qhuavaubtojsiab"
              className="box-icon-3 p-3 bg-[#fff] w-[40px] h-[40px] hover:scale-125 duration-75 flex items-center justify-center rounded-[50%] shadow-lg"
            >
              <FontAwesomeIcon icon={faTiktok} />
            </Link>
          </li>
        </ul>

        <div className="block sm:hidden">
          <div>
            <Image
              className="w-full"
              src={Img1}
              alt="image"
            />
          </div>
          <div className="p-4">
            <h1 className="font-bold text-[16px] mb-1">
              Hello ! I am Khamdeng LAO
          </h1>
            <h2 className="text-[14px] font-semibold mb-1">Frontend Developer | Crafting Modern & Responsive Web Apps</h2>
            <p>
              I specialize in building visually appealing, user-friendly, and performance-optimized web applications using the latest technologies like React, Angular, Next js and Tailwind CSS.
          </p>
            <Link
              href="mailto:khamdenglao22@gmail.com"
              className="bg-[#fff] rounded-[20px] px-5 py-1 shadow-md mt-3 flex w-[50%] items-center justify-center"
            >
              Contact Me
          </Link>
          </div>
          <ul className="flex items-center gap-2 px-5 pb-5">
            <li>
              <Link
                href="https://wa.me/+8562055049903"
                className="box-icon-1 p-3 bg-[#fff] w-[40px] h-[40px] hover:scale-125 duration-75 flex items-center justify-center rounded-[50%] shadow-lg"
              >
                <FontAwesomeIcon icon={faWhatsapp} />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.facebook.com/profile.php?id=100051499722182"
                className="box-icon-2 p-2 bg-[#fff] w-[40px] h-[40px] hover:scale-125 duration-75 flex items-center justify-center rounded-[50%] shadow-lg"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </Link>
            </li>
            <li>
              <Link
                href="https://tiktok.com/@qhuavaubtojsiab"
                className="box-icon-3 p-3 bg-[#fff] w-[40px] h-[40px] hover:scale-125 duration-75 flex items-center justify-center rounded-[50%] shadow-lg"
              >
                <FontAwesomeIcon icon={faTiktok} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
