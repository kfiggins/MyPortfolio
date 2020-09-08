import React, { useState } from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";

require('./styles.scss')


export default function Navagation(props) {
  const { darkColor, lightColor, menuItems, isMobile } = props;
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  return (
    <div className="navigation">
      <input type="checkbox" class="navigation__checkbox" checked={checkboxChecked} onClick={() => setCheckboxChecked(!checkboxChecked)} id="nav-toggle"></input>
      <label for="nav-toggle" class="navigation__logo">
        <span className="navigation__icon"></span>
      </label>
      <div className="navigation__background" style={{ backgroundImage: `radial-gradient(${darkColor}, ${lightColor})` }}>&nbsp;</div>
      <nav className={isMobile ? "navigation__nav" :"navigation__nav navigation__nav__transition"} >
        <ul className={isMobile ? "navigation__list navigation__list__mobile" : "navigation__list"}>
          {menuItems.map((item, index) =>{
            if(isMobile && !item.isMobile) return null;
            if(item.externalLink) return <li key={index} className="navigation__item"><a href={item.externalLink} target="_" className="navigation__link" onClick={() => setCheckboxChecked(false)}>{item.name}</a></li>
            return <li key={index} className="navigation__item"><Link to={item.link} className="navigation__link" onClick={() => setCheckboxChecked(false)}>{item.name}</Link></li>
          }
          )}
        </ul>
      </nav>

    </div>
  )
}
