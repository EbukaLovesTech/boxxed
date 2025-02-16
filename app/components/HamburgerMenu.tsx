// app/components/HamburgerMenu.jsx
import { useState } from "react";
import { Link } from "@remix-run/react";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (

    <div className="relative">
    <header>
       <div className="flex justify-between items-center">
      {/* Hamburger Icon */}
         <p>Boxxed</p>
         <button
           onClick={toggleMenu}
           className="p-2 focus:outline-none">☰ 
         </button>
        </div>
      </header>
      {/* Menu */}
    <nav>
      <div
        className={`absolute right-0 mt-2 w-48 rounded-lg shadow-lg ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <ul className="py-2">
        <li>
          <Link to="/world-news">World News</Link>
        </li>
        <li>
            <Link to="/politics">Politics</Link>
        </li>
        <li>
          <Link to="/technology">Technology</Link>
        </li>
        <li>
          <Link to="/sports">Sports</Link>
        </li>
        </ul>
      </div>
      </nav>

    </div>
  );
}