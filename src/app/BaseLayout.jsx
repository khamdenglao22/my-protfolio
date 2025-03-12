import Header from "@/components/Header";
import Image from "next/image";
import React from "react";
import bgImage from "../assets/6.png";
import {
  faFacebook,
  faTiktok,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Img1 from "../assets/image-1.png";

const BaseLayout = ({ children }) => {
  return (
    <>
      <div className="overflow-auto bg-[#98D0E9] w-screen h-[100vh] pt-[10%] sm:pt-0 sm:flex sm:items-center sm:justify-center">
        <div className="bg-[#D1E6F7] w-[90%] h-auto sm:h-3/4 relative rounded-[20px] m-[0_auto] ms:m-0">
          <Header />
          {children}
        </div>
      </div>
    </>
  );
};

export default BaseLayout;
