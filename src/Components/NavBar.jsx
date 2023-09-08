import React, { useReducer, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CgSearch } from "react-icons/cg";
import { FaUserNinja } from "react-icons/fa";
import { BsFillCartFill } from "react-icons/bs";
import { IconContext } from "react-icons";
import "../App.css";
import { ToastContainer } from "react-toastify";

const NavBar = ({ user, setToken, setUser }) => {
  const [activeLink, setActiveLink] = useState("");
  const [isScrolledDown, setIsScrolledDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 0) {
        setIsScrolledDown(true);
      } else {
        setIsScrolledDown(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <section className="Navbar">
      <div className="logoContainer">
        <h3 className="logo">
          jeremie<span className="apostrophe">'</span>s
        </h3>
        <h5 className="logoSubtext">craft designer cakes </h5>
      </div>
      <ul className="Links">
        <Link
          to="/"
          className={activeLink === "home" ? "active" : ""}
          onClick={() => handleLinkClick("home")}
        >
          Home
        </Link>
        <Link
          to={{
            pathname: "/routines",
            state: {},
          }}
          className={activeLink === "routines" ? "active" : ""}
          onClick={() => handleLinkClick("routines")}
        >
          About us
        </Link>

        <Link
          to="/activities"
          className={activeLink === "activities" ? "active" : ""}
          onClick={() => handleLinkClick("activities")}
        >
          Treats
        </Link>
        <Link
          to="/myRoutines"
          className={activeLink === "myRoutines" ? "active" : ""}
          onClick={() => handleLinkClick("myRoutines")}
        >
          Custom Cake
        </Link>
        <Link
          to="/myRoutines"
          className={activeLink === "myRoutines" ? "active" : ""}
          onClick={() => handleLinkClick("myRoutines")}
        >
          Contacts
        </Link>
      </ul>
      <ul className="NavIcons">

        <IconContext.Provider
          value={{  className: "react-icons" }}
        >
          <div>
          <CgSearch />
          </div>
          <div>
          <FaUserNinja />
          </div>
          <div>
          <BsFillCartFill />
          </div>
        </IconContext.Provider>
        
      </ul>

      <div className="toast">
        {" "}
        <ToastContainer />
        {isScrolledDown && (
          <button id="scroll-to-top-btn" onClick={handleScrollToTop}>
            &#8593;
          </button>
        )}
      </div>
    </section>
  );
};

export default NavBar;
