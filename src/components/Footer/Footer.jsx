import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">iCero</h3>
            <p className="text-gray-300">
              Informática desde cero - Lo barato no siempre sale caro.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces</h4>
            <ul className="flex flex-row space-x-4">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  to="/video"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Video promocional
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <p className="text-gray-300">Email: angelnks100@gmail.com</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-6 pt-6 text-center text-gray-400">
          &copy; {currentYear} iCero. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
