import React from "react";
import "./intro.css";
import Me from "../../assets/Me.png";
import Scroll from "../../assets/scroll.svg";

const Intro = () => {
  return (
    <div className="i">
      <div className="i__left">
        <div className="i__left-wrapper">
          <h2 className="i__intro">Hello, My name is</h2>
          <h1 className="i__name">Indra Prasetyo</h1>

          <div className="i__title">
            <div className="i__title-wrapper">
              <div className="i__title-item">Web Developer</div>
              <div className="i__title-item">Frontend Engineer</div>
              <div className="i__title-item">Backend Engineer</div>
              <div className="i__title-item">Full Stack Engineer</div>
            </div>
          </div>
          <div className="i__desc">
            I design and develope for customers of all size, specialing in
            modern website, web services and online stores.
          </div>
        </div>
      </div>
      <img src={Scroll} alt="" className="i__scroll" />
      <div className="i__right">
        <div className="i__right-bg"></div>
        <img src={Me} alt="Indra Prasetyo" className="i__right-img" />
      </div>
    </div>
  );
};

export default Intro;
