import React from 'react';

const ServiceCard = ({ title, description, skills}) =>{
    return(
        <div className='service-card'>
            <h3 className='card-title'>{title}</h3>
            <p className=' card-description'>{description}</p>
            <div className='skill-container'>
                {skills.map((skill,index) => (
                    <span key ={index} className='skill-tag'>
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default ServiceCard;