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
              <h2 className={classes.h2class}>Work Experience</h2>
            </Row>
            <Row className={classes.experiencecontainer}>
                    <p className={classes.desctext}>
                      <b>
                      Software Development Intern | Amazon | June 2024 - Present
                      </b>
                    </p>
                    <p className={classes.desctext}>
                    I built a full stack query system helping on-call devs handle tickets more efficiently, targeting cutting down on-call time by 4 hours/week & saving the team thousands of dollars per month. For that system, I scalably architected DynamoDB data store that supports more than 1 million new records per week.
                    </p>
                    <p className={classes.desctext}>
                    I also built a backend API using concurrent AWS lambda functions and AWS API Gateway to support hundreds of requests per second. 
                    </p>
                    <p className={classes.desctext}>
                    I implemented Amazon-internal auth practices in the frontend that's deployed with Amazon S3 and AWS CloudFront CDN.
                    Additionally, I handled tickets for our team's core services, optimizing their infrastructure, saving the team hundreds of dollars per month.
                    </p>
            </Row>
            <Row className={classes.experiencecontainer}>
                    <p className={classes.desctext}>
                      <b>
                      Undergraduate Teaching Assistant | Paul G. Allen School of Computer Science | March 2024 - Present
                      </b>
                    </p>
                    <p className={classes.desctext}>
                      I TA CSE 123, the 600 student, final intro series CS course, teaching students about OOP, Linked Lists, Binary Trees & Recursion. That means I teach 1-hour sections 2x weekly to 21 students, hold office hours to debug code, grade ~20 assignments per week.
                    </p>
            </Row>
            <Row className={classes.experiencecontainer}>
                    <p className={classes.desctext}>
                      <b>
                      Undergraduate Developer Intern | Makeability Lab @ The Paul G. Allen School | December 2023 - Present
                      </b>
                    </p>
                    <p className={classes.desctext}>
                    I work under Professor Jon Froelich & Lead Engineer Michael Saugstad on Project Sidewalk, a webapp designed to make travel more accessible for those with mobility-related disabilities with more than 1,500 users. I maintain the app and its related APIs.
                    </p>
                    <p className={classes.desctext}>
                    Through this, I've done a lot of full stack dev in JavaScript, Scala (Slick framework) & PostgreSQL, now mainly resolving backend tickets & pushing to production weekly.
                    Specifically, I've developed features to simplify users experience labeling sidewalks. I've created API Routes for tables collecting complex user data. 
                    </p>
            </Row>
            <Row className={classes.experiencecontainer}>
                    <p className={classes.desctext}>
                      <b>
                      Software Development Intern | The Verse | June 2023 - September 2023
                      </b>
                    </p>
                    <p className={classes.desctext}>
                      I'm built out a MERN webapp for a wellness based video game startup. I worked on it from all parts of the stack: I architected & created the MongoDB databse, wrote a secure REST API with Node & Express, and developed a custom frequency player based on solfeggio tones & mathematical principles on the frontend. Additionally, I initialized & managed the production environment for the REST API. I was also exposed to agile methodologies all through my time at the Verse.
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
                      Before co-leading software implementation, I led our desktop app for the 2023 MATE Competition's ML Challenge, where I created a Machine Learning project to detect underwater organisms through underwater robots' footage, winning 2nd place nationally among top colleges. I also worked on autonomous motion scripts for our robot.
                    </p>
            </Row>
            <Row className={classes.experiencecontainer}>
                    <p className={classes.desctext}>
                      <b>
                      Undergraduate Research Assistant | University of Washington | Jan 2023 - July 2023
                      </b>
                    </p>
                    <p className={classes.desctext}>
                      I worked on a research paper studying accessibility solutions for sonification of online data visualizations alongside a PhD candidate Ather Sharif and under prof. Jacob Wobbrock. Our paper is pending review from a technical conference currently.
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