import React from 'react'
import styled from "styled-components";

require('./styles.scss')

const tempLinks = [
  { name: "Components", link: "#" },
  { name: "Kanban App", link: "#" },
  { name: "To-Do App", link: "#" },
  { name: "Blog", link: "#" },
]

export default function Navagation(props) {
  const { darkColor, lightColor, primaryColor } = props;
  return (
    <div className="navigation">
      <input type="checkbox" class="navigation__checkbox" id="nav-toggle"></input>

      <label for="nav-toggle" class="navigation__logo">
        <span className="navigation__icon"></span>
      </label>

      <div className="navigation__background" style={{ backgroundImage: `radial-gradient(${darkColor}, ${lightColor})` }}>&nbsp;</div>

      <nav className="navigation__nav">
        <ul className="navigation__list">
          {tempLinks.map((link, index) =>
            <li key={index} className="navigation__item"><a href="" className="navigation__link">{link.name}</a></li>
          )}
        </ul>
      </nav>

    </div>
  )
}
