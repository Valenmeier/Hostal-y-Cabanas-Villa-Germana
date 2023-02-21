import React, { useState, useEffect } from "react";
import "./estilos.css";
import { Link } from "react-router-dom";
import { RiHotelFill } from "react-icons/ri";

export const Navbar = () => {
  let [open, setOpen] = useState(false);
  let [transform, setTransform] = useState("");
  let openCloseMenu = () => {
    if (open === true) {
      let { menuBarTop, menuBarMid, menuBarBot } = transform;
      menuBarMid.className = `${menuBarMid.className} transformMid`;
      menuBarTop.className = `${menuBarTop.className} transformTop`;
      menuBarBot.className = `${menuBarBot.className} transformBot`;
      setOpen(false);
    } else {
      let { menuBarTop, menuBarMid, menuBarBot } = transform;
      menuBarTop.className = `menuBarTop`;
      menuBarMid.className = `menuBarMid`;
      menuBarBot.className = `menuBarBot`;
      setOpen(true);
    }
  };
  
  useEffect(() => {
    let menuBarTop = document.querySelector(".menuBarTop");
    let menuBarMid = document.querySelector(".menuBarMid");
    let menuBarBot = document.querySelector(".menuBarBot");
    let menuBars = {
      menuBarTop,
      menuBarMid,
      menuBarBot,
    };
    setTransform(menuBars);
  }, []);
  return (
    <div className="navbar">
      <div className="logo">
        <RiHotelFill />
        <h1>Villa Germana</h1>
      </div>
      <div className="menuMovil">
        <div className="menuBarTop" onClick={openCloseMenu}></div>
        <div className="menuBarMid" onClick={openCloseMenu}></div>
        <div className="menuBarBot" onClick={openCloseMenu}></div>
      </div>
      <nav></nav>
    </div>
  );
};
