import React, { useEffect,useState } from "react";
import { Link,  } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
import logo from "./images/collegpt-pink.svg";
import Welcome_Collegpt from "./collegptanimation";

const Header = () => {
 

 

  return (
    <>
   
    <header className="header">
      <section className="flex">
        <Link to="/">
          <a className=" logo-trans">
            <img className="  logo-header" src={logo} alt="College GPT" />
            College GPT
          </a>
        </Link>

    

        <Link to="/">
          {" "}
          <Welcome_Collegpt />{" "}
        </Link>
        <div className="icons">
  
          <div id="user-btn" className="fas fa-users"></div>
          <div id="toggle-btn" className="fas fa-sun"></div>
        </div>

       
          

      
      </section>
    </header>
    </>
  );
};

export default Header;
