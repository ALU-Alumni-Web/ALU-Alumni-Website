import React from "react";
import classes from "./Header.module.scss";
import Slider from "./Slider";
import { SliderData } from "./SliderData";

export const Header = (props) => {
  return (
    <section>
      <header>
        <aside>
          <div className={classes.aside__content}>
            <nav className="container">
              <h1>ALU Alumni</h1>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/about">About Us</a>
                </li>
                <li>
                  <a href="/programs">Programs</a>
                </li>
                <li>
                  <a href="/programs">Blog</a>
                </li>
                <li>
                  <a href="/programs">Get Involved</a>
                </li>
                <li>
                  <a href="/programs">Gallery</a>
                </li>
                <li>
                  <a href="/programs">News & Event</a>
                </li>
              </ul>
            </nav>
          </div>
        </aside>
        <section className={classes.background_cover}></section>
      </header>
      <Slider slides={SliderData} />
    </section>
  );
};

export default Header;
