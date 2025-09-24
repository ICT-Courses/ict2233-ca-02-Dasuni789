import React from  "react";
import { Container,Row, Col, Image,Button } from "react-bootstrap";
import myphoto from '../assets/das.jpg';
import Projects from "../pages/Projects";

const Hero = () => {
    return(
        <Container className="text-center my-5">
            <Row className ="justify-content-center align-item-center">
                <Col md={4}>
                <Image src={myphoto}
                
                fluid
                style={{ width:"150px", heigh:"150px",objectFit:"cover"}}
                className=" my-photo mb-3"
                alt="My professional Photo"
                />
            
                </Col>
                <Col md={8}>
                 <h1 className="display-4 fw-bold">  Hi, I'm E.T.M Dasuni Sandarekha </h1>
                 <p className="text-muted">
                    A young professional who wants to create new solutions using modern technology.  </p>
                
               <div className="d-flex justify-content-center gap-2">
                 
                <Button className="my-view-btn mt-2" size="lg" as="a" href="/projects">
                View My Work
                </Button>
                <Button className= "my-contct-btn mt-2"  size="lg" as ="a" href="/contact">
                 Contact Me
                </Button>
               </div>
            </Col>
            </Row>
        </Container>
    );
};
export default Hero;