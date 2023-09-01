import React from 'react';
import classes from './Aboutsection.module.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Fade } from "react-awesome-reveal";
import headshot from '../../images/headshot.png';
import appClasses from '../../App.module.css';

function Aboutsection() {
    return (
        <Fade duration={900} triggerOnce={true}>
            <section className={appClasses.section}id="About">
                <Container className={classes.aboutsection}>
                    <Row className={classes.contentrow}>
                        <Col xs={12} md={6} className={classes.imageContainer}>
                            <div className="p-md-5 p-5 d-flex justify-content-center ">
                                <img
                                    src={headshot}
                                    alt="headshot"
                                    className={classes.face}
                                />
                            </div>
                        </Col>
                        <Col xs={12} md={6} className={classes.textContainer}>
                            <div>
                                <h2 className={classes.h2class}>About Me</h2>
                                <p className={classes.desctext}>
                                    I'm Srihari Krishnaswamy and I'm a second year Computer Science major undergrad at the Allen School at the University of Washington. I enjoy problem solving and have a passion for building apps as well as Machine Learning. 
                                    Currently, I'm studying CS while learning about ML, working on personal projects, and serving as software co-lead of my school's underwater robotics club.
                                </p>
                                <p className={classes.desctext}>
                                    For fun, I like to produce music, play basketball, code and watch movies. I've recently gotten into signal processing and ML in the audio field related to music production! I also just like going new places and exploring.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Fade>
    );
}


export default Aboutsection;
