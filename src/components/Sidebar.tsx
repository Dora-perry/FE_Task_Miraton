import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import close from "../assets/Closeicon.png";
import hamburger from "../assets/hamburger-menu.png";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="md:hidden">
        <div
          onClick={toggleSidebar}
          className="text-white w-8 h-8 object-contain"
        >
          {isOpen ? (
            <img src={close} alt="Close Menu" className="w-8 h-8" />
          ) : (
            <img src={hamburger} alt="Open Menu" className="w-8 h-8" />
          )}
        </div>
      </div>
      <div
        className={`fixed md:relative z-50 h-screen bg-gray-800 text-white transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } w-full md:w-44 md:translate-x-0`}
      >
        <div className="p-4">My Dashboard</div>
        <ul>
          <li>
            <Link
              to="/"
              className={`block p-4 hover:bg-gray-700 ${
                location.pathname === "/" ? "bg-gray-700" : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              Add Contact
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard"
              className={`block p-4 hover:bg-gray-700 ${
                location.pathname === "/dashboard"
                  ? "bg-gray-700"
                  : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              Dashboard
            </Link>
          </li>
        </ul>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
