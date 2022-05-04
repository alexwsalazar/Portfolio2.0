import React from "react";

function Project() {
  return (
    <div className="card text-center">
    <section class="project-section ">
         <h1 class="project-heading">some of my projects</h1>
         <div class="container">
             <div class="row">
                 <div class="col align-self-start">
                     <div class="project-card">
                         <img src="./assets/images/poke-home-screenshot.png" class= "project-img" alt="pokeshop home screen"/>
                         <div class="project-content">
                             <h1 class="project-title">poke-shop</h1>
                             <p class="project-info">
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
                         <img src="./assets/images/project2img.png"  class="project-img" alt="pokeshop home screen"/>
                         <div class="project-content">
                             <h1 class="project-title">Plant-Blog</h1>
                             <p class="project-info ">
                             In this project we made a blog where plant enthusiast con come together and share photos and information about all plant related things.
                             </p>
                             <div class="project-btn-grp">
                                 <a href="https://github.com/AlyssaRodri/plant-store" class="project-btn github">github repo</a>
                                 <a href="https://agile-atoll-06958.herokuapp.com/" class="project-btn live">see live</a>
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