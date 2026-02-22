import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [open, setopen] = useState(false);

  const links = ["Home", "Skills", "Projects", "Certifications", "About"];

  return (
    <nav
      id="navbar"
      className="navbar fixed top-0 left-0 w-full z-50 flex items-center lg:px-24 h-20 bg-blue-50 backdrop-blur-md text-slate-700"
    >
      {/* Logo */}
      <div className="heading flex flex-1">
        <div className="font-bold text-xl pl-8">
          Satya<span className="text-blue-500">Narayana</span>
        </div>
      </div>

      {/* Desktop Links */}
      <div className="Links flex-1">
        <ul className="hidden md:flex justify-center gap-12">
          {links.map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                onClick={() => setActive(item)}
                className={`cursor-pointer transition-colors duration-200 ${
                  active === item
                    ? "text-blue-800 font-semibold"
                    : "hover:text-blue-700"
                }`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Desktop Contact Button */}
      <div className="hidden md:flex flex-1 justify-end">
        <button className="btn">
          <a href="#Contact">contact</a>
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden pr-8 relative"
        onClick={() => setopen(!open)}
      >
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden w-[200px] animate-navright flex flex-col items-center gap-6 pb-6 bg-blue-50 shadow-lg absolute top-16 right-4">
          {links.map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                onClick={() => {
                  setActive(item);
                  setopen(false);
                }}
                className={`text-lg ${
                  active === item
                    ? "text-blue-800 font-semibold"
                    : "hover:text-blue-700"
                }`}
              >
                {item}
              </a>
            </li>
          ))}

          <a
            href="#Contact"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg"
            onClick={() => setopen(false)}
          >
            Contact
          </a>
        </ul>
      )}
    </nav>
  );
}