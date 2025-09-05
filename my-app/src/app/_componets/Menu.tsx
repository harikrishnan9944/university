"use client";
import { useState } from "react";
import { Menu as MenuIcon, X } from "lucide-react"; 

export const Menu = () => {
  const [open, setOpen] = useState(false);

  const menu = [
    { name: "Event", link: "/event" },
    { name: "About", link: "/about" },
    // { name: "Coordinators", link: "/Coordinators" },
    { name: "Location", link: "/location" },
    { name: "Schedule", link: "/schedule" },
    { name: " Register", link: "/register" },
  ];

  return (
    <div
      className="sticky top-5 mx-auto  
      flex items-center justify-between px-6 py-4 
      rounded-full backdrop-blur-md bg-white/10 shadow-lg w-[90%] md:w-fit"
    >
      
      <div className="bg-blue-600 text-white h-10 w-10 flex items-center justify-center rounded-full font-bold">
        P
      </div>

      
      <div className="hidden md:flex space-x-8 px-6 text-white">
        {menu.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="text-gray-200 transition-all duration-200 
              hover:text-white hover:bg-gray-50/10 py-2 px-3 rounded-full 
              hover:-translate-y-1 transform hover:shadow-2xl"
          >
            {item.name}
          </a>
        ))}
      </div>


      <div className="md:hidden">
        <button onClick={() => setOpen(!open)} className="text-white">
          {open ? <X size={28} /> : <MenuIcon size={28} />}
        </button>
      </div>

      
      {open && (
        <div
          className="absolute top-20 left-1/2 transform -translate-x-1/2 
          w-4/5 bg-black backdrop-blur-lg rounded-2xl shadow-xl 
          flex flex-col space-y-4 p-6 md:hidden z-50"
        >
          {menu.map((item, index) => (
            <a
              key={index}
              href={item.link}
              onClick={() => setOpen(false)}
              className="text-gray-200 transition-all duration-200 
                hover:text-white hover:bg-gray-50/10 py-2 px-3 rounded-xl"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};
