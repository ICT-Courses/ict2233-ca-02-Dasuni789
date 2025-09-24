import React from  "react";
import { Container,Row, Col, Image,Button } from "react-bootstrap";
import myphoto from '../assets/das.jpg';
import Projects from "../pages/Projects.jsx";

const Hero = () => {
    return(
        <Container className="text-center my-5">
            <Row className ="justify-content-center align-item-center">
                <Col md={4}>
   <Image
  src={myphoto}
  fluid
  style={{
    width: "350px",         
    height: "350px",        
    objectFit: "cover",      
    borderRadius: "50%",     
    display: "block",
    margin: "0 auto", 
    border: "3px solid #85b28aff"       
  }}
  className="my-photo mb-3"
  alt="My professional Photo"
/>

                </Col>
                <Col md={8}>
                 <h1 className=" myname display-6  fw-bold">  Hi, I'm E.T.M Dasuni Sandarekha </h1>
                 <p className="  myname-para text-muted">
                    A young professional who wants to create new solutions using modern technology.  </p>
                
               <div className="d-flex justify-content-center gap-2">
                 
                <Button className="my-view-btn mt-2" as="a" href="/projects">
                View My Work
                </Button>
                <Button className= "my-contct-btn mt-2"   as ="a" href="/contact">
                 Contact Me
                </Button>
               </div>
            </Col>
            </Row>
        </Container>
    );
};
export default Hero;