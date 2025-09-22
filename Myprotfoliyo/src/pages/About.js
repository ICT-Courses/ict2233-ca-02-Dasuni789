import React from 'react';
import { FaUser, FaGraduationCap,FaCode,FaHeart } from 'react-icons/fa';
import style from "../App.css";

const About = () => {
    return (
        <section className='about-page'>
            <div className='about header'>
             <h1 className="header-abut">About Me</h1>
               <p className="header-para"> Get to know more about my background,skills, and passion .</p>
            </div>
            <div className='about-content'>
                <div className='info-cards-container'>
                    <div className='card'>
                        <div className='card-icon'><FaUser/></div>
                        <h2> Personal Background</h2>
                        <p> I'm an  enthusiatic and dedicated student currently pursing a Bachelor of Science in Information and communication Technology(BSc in ICT). My academic journey has ignited a strong passion for wep development, and I am committed to mastering modern web technology.</p>
                        <p> I thrive on the challenge of Building digital experience that are not only  aesthetically pleasing but also highly functional and user-friendly.Outside of my Coursework,I actively seek out opportunities to expand my knowledge by exploring new framework,contributing to Personal project and  staying updated on the latest industry trend.</p>        
                </div>
                 <div className='card'>
                    <div className='card-icon'><FaGraduationCap/></div>
                    <h2> Education</h2>
                    <p><strong> Bachelor of Science in Information and communication Technology</strong></p>
                    <p> University of Sri Jayewardenapura</p>
                    <p>2024 - Present </p>
                        <p> My curriculum cover core topic in software engineering , web application development, operating system, data strucure and aelgorithms with a focus on practical, project-based learning.</p>
                        <p><strong> ICT 2223 - Web Appliation Developmet</strong></p>
                        <p> Current Course </p>
                        <p> Gaining hands- on experience in modern web development using React,Node.js, and mastering deployment strategies.</p>
                        </div>
                    


                <div className='card'>
                    <div className='card-icon'><FaCode/></div>
                    <h2> Technical Skills</h2>
                    <div className='skill-grid'>
                        <div className='skill-category'>
                            <h6> Frontend Developer</h6>
                            <div className='skill-group-container'>
                            
                               <span className='skill-badge'>HTML</span> 
                               <span className='skill-badge'>CSS </span> 
                                <span className='skill-badge'>JavaScript </span> 
                            </div>
                        </div>
                         <div className='skill-category'>
                            <h6> Backend & Database</h6>
                            <div className='skill-group-container'>
                            <span className='skill-badge'>Node.js </span>
                            <span className='skill-badge'>Express.js </span>
                            <span className='skill-badge'>MongoDB </span>
                        </div>
                    </div>
                        <div className='skill-category'>
                             <h6> Deployment & DevOps</h6>
                           <div className='skill-group-container'>
                            <span className='skill-badge'>GitHub Pages</span>     
                        </div>
                    </div>  
                 </div> 
            </div> 
         <div className='skill-section'>
             <div className='card'>
             <div className='card-icon'><FaHeart/></div>
                    <h2> Soft Skills & Interests</h2>
                    <div className='skill-grid'>
                        <div className='soft-skill-list'>
                            <h6> Professional skills</h6>
                            <ul>
                                <li> Problem solving </li>
                                <li> analytical thinking </li>
                                <li> Collaborative teamwork and communication</li>
                                <li>Continuous learning and adaptability </li>
                                
                            </ul>
                            </div>
                             <div className='soft-skill-list'></div>
                             <h6> Interests & Hobbies</h6>
                             <ul>
                             <li> UI/UX design and building accessible user interfaces</li>
                             <li> Performance optimization </li>
                             <li>  Contributing to personal and  Open-source project </li>
                              <li> Staying update with industry best practices and trends</li>
                            </ul>
                            </div>
                            </div>  
                        </div>  
                       </div>
                       </div>
        </section>
    );
};
export default About;