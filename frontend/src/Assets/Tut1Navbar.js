import React from "react";
import { FaSearch, FaBell } from "react-icons/fa"; // Import icons
import { IoMdArrowDropdown } from "react-icons/io"; // Dropdown arrow


const Navbar = () => {
  return (
    <>
      {/* Main Navbar */}
      <nav className="main-navbar">
        <div className="nav-left">
          <span className="nav-item">Courses <IoMdArrowDropdown /></span>
          <span className="nav-item">Tutorials <IoMdArrowDropdown /></span>
          <span className="nav-item">Data Science <IoMdArrowDropdown /></span>
          <span className="nav-item">Practice <IoMdArrowDropdown /></span>
        </div>

        {/* Logo (Replace with your own image/logo) */}
        <div className="nav-logo"> 
          <img src="https://www.geeksforgeeks.org/wp-content/uploads/gfg_200X200.png" alt="Logo" />
        </div>

        {/* Right Side Icons */}
        <div className="nav-right">
          <FaSearch className="icon" />
          <FaBell className="icon" />
          <div className="profile-circle">A</div>
        </div>
      </nav>

      {/* Sub Navbar */}
      <div className="sub-navbar">
        <span className="sub-item">Python Course</span>
        <span className="sub-item">Python Tutorial</span>
        <span className="sub-item">Interview Questions</span>
        <span className="sub-item">Python Quiz</span>
        <span className="sub-item">Python Projects</span>
        <span className="sub-item">Practice Python</span>
        <span className="sub-item">Data Science With Python</span>
        <span className="sub-item">Python Web Dev</span>
        <span className="sub-item">DSA with Python</span>
        <span className="sub-item">Python OOPs</span>
        <span className="sub-item">Lists</span>
        <span className="sub-item">Strings</span>
        <span className="sub-item">Dictionary</span>
      </div>
    </>
  );
};

export default Navbar;
