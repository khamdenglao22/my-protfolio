"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Logo from "../../public/logo.png";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'


const NavLink = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`py-2 px-5 hover:bg-[#fff] hover:rounded-[5px] duration-150 ${
        isActive ? " bg-[#fff] rounded-[5px]" : ""
        }`}
    >
      {children}
    </Link>
  );
};


const NavLinkBar = ({ href, children, onClick }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      onClick={onClick}
      href={href}
      className={`flex py-2 px-5 hover:bg-[#fff] hover:rounded-[5px] duration-150 ${
        isActive ? "bg-[#fff] text-[#000] rounded-[5px]" : "text-[#fff]"
        }`}
    >
      {children}
    </Link>
  );
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavShow, setIsNavShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    console.log("test");
    const scrollTop = window.scrollY;
    setIsScrolled(scrollTop > 0); // You can adjust the scroll threshold as needed
  };
  return (
    <>
      <header
        className="text-[#07617F] shadow-lg mx-5 rounded-[10px] py-4 px-10 absolute right-0 left-0 -top-[22px] sm:top-[0%] sm:-translate-y-[50%] flex items-center justify-between z-30"
        style={{ background: "rgba(166, 248, 250, 0.23)" }}

      >
        <div className="hidden sm:block w-full">
          <ul className="flex items-center font-semibold justify-end w-full">
            <li>
              <NavLink href="/">Home</NavLink>
            </li>
            <li>
              <NavLink href="/about">About</NavLink>
            </li>
            <li>
              <NavLink href="/project">Projects</NavLink>
            </li>
            <li>
              <NavLink href="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
        <div className="sm:hidden block w-full">
          <div className="flex items-center font-semibold justify-end w-full">
            <FontAwesomeIcon onClick={() => setIsNavShow(!isNavShow)} icon={faBars} />
          </div>
        </div>
      </header>
      <nav className={`${isNavShow ? "nav-bar-header-active" : ""} nav-bar-header p-4 `}>
        <div className="bar-header">
          <h1 className="text-[#fff]">Menu</h1>
          <FontAwesomeIcon onClick={() => setIsNavShow(!isNavShow)} className="text-[#000] bg-[#fff] p-2" icon={faXmark} />
        </div>
        <ul >
          <li>
            <NavLinkBar onClick={() => setIsNavShow(!isNavShow)} href="/">Home</NavLinkBar>
          </li>
          <li>
            <NavLinkBar onClick={() => setIsNavShow(!isNavShow)} href="/about">About</NavLinkBar>
          </li>
          <li>
            <NavLinkBar onClick={() => setIsNavShow(!isNavShow)} href="/project">Projects</NavLinkBar>
          </li>
          <li>
            <NavLinkBar onClick={() => setIsNavShow(!isNavShow)} href="/contact">Contact</NavLinkBar>
          </li>
        </ul>
      </nav>

    </>
  );
};

export default Header;
