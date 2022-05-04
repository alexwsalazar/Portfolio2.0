import React from "react";
import {Parallax} from "react-parallax"

function About() {
  return (
      <Parallax bgImage="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydGZvbGlvJTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60" strength={0} >
    <div className="card text-center" style={{height:800}}>
     <div className="about">
         <div class="about-img-container">
          <img src="/images/myphoto.jpg" class="about-img" alt=""/>
          <a class="download-cv-btn" href="https://www.linkedin.com/">linkedin</a>
          <a class="download-cv-btn" href="https://github.com/alexwsalazar">GitHub</a>
          <a class="download-cv-btn" href="https://docs.google.com/document/d/1uO1rUCA6JFOE0SradsdRcTyVSypsnU6_RgtqhM3y50I/edit#heading=h.gjdgxs">Resume</a>
        </div>
        <p class="about-info">Lorem ipsum dolor sit amet consectetur, 
        adipisicing elit. Quasi eligendi repudiandae totam repellat, 
        dolor amet laboriosam quam deleniti possimus laudantium obcaecati modi, 
        aspernatur voluptates quaerat fugit illum. Corrupti, fugiat esse!
        </p>
    </div>
  </div>
    </Parallax>
  );
}

export default About;