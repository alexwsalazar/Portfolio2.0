import React from "react";
import {Parallax} from "react-parallax"
import myphoto from "../images/myphoto.jpg"
import resume from "../images/react-resume2.png"

function About() {
  return (
      <Parallax bgImage="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydGZvbGlvJTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60" strength={300} >
    <div className="card text-center" style={{height:800}}>
     <div className="about">
         <div className="about-img-container">
          <img src={myphoto} className="about-img" alt=""/>
          <a className="download-cv-btn" href="https://www.linkedin.com/in/alejandro-salazar-909a2623b/">linkedin</a>
          <a className="download-cv-btn" href="https://github.com/alexwsalazar">GitHub</a>
          <a className="download-cv-btn" href={resume}>Resume</a>
        </div>
        <p className="about-info"> I am a 31 year old Peruvian American. I came to this country when I was 4 years old and became an American Citizen at the age of 19. I fathered a son at the young age of 16, and had to start working right away. I started as a cable technician for AT&T right out of highschool and stayed in that type of field till recent. I have return to school to learn web development so that I can show my son a better life, and be able to help him reach higher goals and studies. 
        </p>
    </div>
  </div>
    </Parallax>
  );
}

export default About;