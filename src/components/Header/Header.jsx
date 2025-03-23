import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-md w-full py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img
            src="/icon_black_icero.png"
            alt="iCero Icon"
            className="h-8 mr-2"
            style={{ transform: "scale(2)" }}
          />
          <span className="text-2xl font-bold text-blue-600">iCero</span>
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link
                to="/"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                to="/video"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Video
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
