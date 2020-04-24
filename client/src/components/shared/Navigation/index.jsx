import React, { useState } from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";

require('./styles.scss')


export default function Navagation(props) {
  const { darkColor, lightColor, menuItems } = props;
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  return (
    <div className="navigation">
      <input type="checkbox" class="navigation__checkbox" checked={checkboxChecked} onClick={() => setCheckboxChecked(!checkboxChecked)} id="nav-toggle"></input>
      <label for="nav-toggle" class="navigation__logo">
        <span className="navigation__icon"></span>
      </label>
      <div className="navigation__background" style={{ backgroundImage: `radial-gradient(${darkColor}, ${lightColor})` }}>&nbsp;</div>
      <nav className="navigation__nav">
        <ul className="navigation__list">
          {menuItems.map((item, index) =>
            <li key={index} className="navigation__item"><Link to={item.link} className="navigation__link" onClick={() => setCheckboxChecked(false)}>{item.name}</Link></li>
          )}
        </ul>
      </nav>

    </div>
  )
}
