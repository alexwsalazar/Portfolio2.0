import React from "react";

function Contact() {
  return (
    <div className="card text-center">
    <section className="contact-section">   
         <div className="container-lg">
             <img src="https://render.fineartamerica.com/images/rendered/default/poster/8/5.5/break/images-medium-5/downtown-dallas-skyline-reflections-matthew-visinsky.jpg" className="img-fluid rounded" alt="Dallas Skyline"/>

             <p className="text-white">
               You can reach my at my <a href= 'mailto:alexwsalazar@gmail.com' className="">email</a> for any additional information.
                  </p>
         </div>
     </section>
    </div>
  );
}

export default Contact;