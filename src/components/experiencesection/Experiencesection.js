import React from 'react'
import classes from './Experiencesection.module.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Fade } from "react-awesome-reveal";
import appClasses from '../../App.module.css';

function Experiencesection() {
  return (
    <Fade duration={900} triggerOnce={true}>
    <section className={appClasses.section} id="experience">
        <Container className={classes.section}>
            <Row className={classes.contentrow}>
              <h2 className={classes.h2class}>Experiences</h2>
            </Row>
            <Row className={classes.experiencecontainer}>
                    <p className={classes.desctext}>
                      <b>
                      Software Development Intern | The Verse | June 2023 - Present
                      </b>
                    </p>
                    <p className={classes.desctext}>
                      I'm currently building out a webapp for a wellness based video game using React.js. I'm also working on a backend API for tracking user's sound preferences with Express.js and Node.js. 
                    </p>
            </Row>
            <Row className={classes.experiencecontainer}>
                    <p className={classes.desctext}>
                      <b>
                      Software Team Member & Co-lead | University of Washington Underwater Robotics (UWROV) | Jan 2023 - June 2023
                      </b>
                    </p>
                    <p className={classes.desctext}>
                      I'm leading software implementation for the 2024 MATE ROV competition. Responsibilities also include working with new members, overseeing implementation for the MATE ML Challenge, helping manage the organization.
                    </p>
                    <p className={classes.desctext}>
                      Before co-leading software implementation, I led our desktop app for the 2023 MATE Competition's ML Challenge, where I created a Machine Learning project to detect underwater organisms through underwater robots' footage. I also worked on autonomous motion for our robot.
                    </p>
            </Row>
            <Row className={classes.experiencecontainer}>
                    <p className={classes.desctext}>
                      <b>
                      Undergraduate Research Assistant | University of Washington | Jan 2023 - July 2023
                      </b>
                    </p>
                    <p className={classes.desctext}>
                      I worked on a research paper studying accessibility solutions for sonification of online data visualizations alongside a PhD candidate and another undergrad. Our paper is pending review from a technical conference currently.
                    </p>
            </Row>
            <Row className={classes.experiencecontainer}>
                    <p className={classes.desctext}>
                      <b>
                      VR Research Intern | University of California Santa Barbara | June 2021 - July 2021
                      </b>
                    </p>
                    <p className={classes.desctext}>
                      During a summer research internship program, I was the student lead of a research project in the VR/AR field by managing a team that developed a series of simulations using C# and Unity. Our team presented in a formal research seminar and published a formal research paper. We were advised by Dr. You-Jin Kim.
                    </p>
            </Row>
        </Container>
    </section>
    </Fade>

  )
}

export default Experiencesection