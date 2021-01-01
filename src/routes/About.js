import React from "react";
import "./About.css"

function About(props){
    console.log(props);
    return <div className="about__container">
    <span>
      Movie Information with ReactJS
      <p>
      <a href="https://github.com/jjonyo/movie_app" target="_blank" rel="noreferrer">Source Code Here</a>
      </p>
    </span>
    <span>−jjonyo-</span>
  </div>
}

export default About;