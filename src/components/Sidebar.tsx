import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="md:hidden">
        <button onClick={toggleSidebar} className="bg-gray-800 text-white">
          Menu
        </button>
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
              to="/add-contact"
              className="block p-4 hover:bg-gray-700"
              onClick={() => setIsOpen(false)}
            >
              Add Contact
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="block p-4 hover:bg-gray-700"
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
