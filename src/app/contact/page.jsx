import React from "react";
import Link from "next/link";

const Contact = () => {
  return (
    <>
      <div className="flex items-center w-[100%] h-[100%]">
        <div className="p-[40px] sm:ps-[60px]">
          <h2 className="text-xl font-bold mb-4">Contact Me</h2>
          <p>
            Email: <Link className='border-b' href="mailto:khamdenglao22@gmail.com" target="_black">khamdenglao22@gmail.com</Link>
          </p>
          <p>
            Phone: <Link className='border-b' href="tel:+8560302836393" target="_black">030 2836393</Link>
          </p>
          <p>
            Whatsapp: <Link className='border-b' href='https://wa.me/+8562055049903' target="_black">020 55049903</Link>
          </p>
          <p>
            Facebook: <Link className='border-b' href='https://www.facebook.com/profile.php?id=100051499722182' target="_black">Qhuav Aub Toj Siab</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Contact;
