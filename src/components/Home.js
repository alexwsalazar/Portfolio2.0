import React from "react";
import myphoto from "../images/myphoto.jpg"

function Home() {
  return (
    <div className="home-card">
      <section className="home-section">
          <h1 className="hero-heading">Hello I am  Alex</h1>
          <img  src={myphoto} className="home-img" alt="imgage of myself in New York"/>
     </section>
    </div>
  );
}

export default Home;