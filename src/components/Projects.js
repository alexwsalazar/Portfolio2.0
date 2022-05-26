import React from "react";
import pokeshot from "../images/poke-home-screenshot.png"
import plantblog from "../images/project2img.png"
import DNDY from "../images/DNDY.png"

function Project() {
  return (
 <div className="card text-center">
    <section className="project-section ">
     <h1 className="project-heading">some of my projects</h1>
     <div className="container">
        <div className="row">
          <div className="col align-self-start">
            <div className="project-card">
            <img src={pokeshot} className= "project-img" alt="pokeshop home screen"/>
            <div className="project-content">
            <h1 className="project-title">poke-shop</h1>
            <p className="project-info">
            In this project we created a pokemon shop where you can buy candies and different range of pokemon priced by their rarity.
            </p>
            <div class="project-btn-grp">
            <a href="https://github.com/Vidalatan/poke-shop" class="project-btn github">github repo</a>
            <a href="https://alexwsalazar.github.io/group-project-poke-shop.html/" class="project-btn live">see live</a>
            </div>
         </div>    
       </div>
     </div>
     <div class="col align-self-center">
       <div class="project-card">
         <img src={plantblog}  class="project-img" alt="pokeshop home screen"/>
         <div class="project-content">
           <h1 class="project-title">Plant-Blog</h1>
           <p class="project-info ">
           In this project we made a blog where plant enthusiast can come together and share photos and information about all plant related things.</p>
           <div class="project-btn-grp">
             <a href="https://github.com/AlyssaRodri/plant-store" class="project-btn github">github repo</a>
             <a href="https://agile-atoll-06958.herokuapp.com/" class="project-btn live">see live</a>
           </div>
         </div>
       </div>
     </div>
     <div class="col align-self-center">
       <div class="project-card">
         <img src={DNDY}  class="project-img" alt="pokeshop home screen"/>
         <div class="project-content">
           <h1 class="project-title">DNDY</h1>
           <p class="project-info ">
           In this project we made a high end art gallery page where collectors and artist can come together to share and purchase art.</p>
           <div class="project-btn-grp">
             <a href="https://github.com/DNDYArt/DNDYArt" class="project-btn github">github repo</a>
             <a href="https://dndyfineart.herokuapp.com/" class="project-btn live">see live</a>
           </div>
         </div>
       </div>
     </div>
   </div>
  </div>  
 </section>    
</div>
  );
}

export default Project;