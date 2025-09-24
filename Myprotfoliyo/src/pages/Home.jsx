import React from "react";
import Hero from "../components/Hero.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "../App.css";

const Home = () => {
    return(
        <div>
            <Hero/>
           <section className="What-i-do-section">
            <h2> What I Do </h2>
            <p className="section-description">
                I specilze in moder web development technologies and create engaging user experiences
                </p>
                <div className=" service-container d-flex justify-content-center gap-3">
                    <ServiceCard 
                        title="Frontend Development"
                        description="Building responsive and interactive user interface  with React,Node.js,HTML and modern CSS."
                        skills={["React" , "Node.js", "JavaScript"]}
                        /> 

                   <ServiceCard 
                        title="UI/UX Design"
                        description=" Creating beatutiful and intuitive design that provide excellent user experiences."
                        skills={["Figma","Tailwind CSS"]}

                        
                        />  
                </div>
        
           </section>
        </div>
    );
};
export default Home;