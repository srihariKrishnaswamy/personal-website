import React from "react";
import classes from "./Projectsection.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Fade } from "react-awesome-reveal";
import appClasses from "../../App.module.css";

function Projectsection() {
  return (
    <Fade duration={900} triggerOnce={true}>
      <section className={appClasses.section} id="projects">
        <Container className={classes.section}>
          <Row className={classes.contentrow}>
            <h2 className={classes.h2class}>Projects</h2>
            <h4 className={classes.h4class}>Feel free to click on one!</h4>
          </Row>
          {/* <p className={classes.desctext}>
                Go ahead and click on one!
            </p> */}
          <a href="https://github.com/srihariKrishnaswamy/calorie-tracker-frontend">
            <Row className={classes.experiencecontainer}>
              <p className={classes.desctext}>
                <b>KnowCal | Oct 2023</b>
              </p>
              <p className={classes.desctext}>
                A web app built with React, Node, Express & MySQL to help people track their
                track calorie goals & get motivated by friends. I wrote this app from scratch,
                making sure it was secure by implementing JWT token procedures. I implemented a 
                Trie for efficient searches, deployed a CRON script to update user data, and calculated users' calorie goals & visualized their progress.
              </p>
            </Row>
          </a>
          <div className={classes.paddingspace} />
          <a href="https://github.com/srihariKrishnaswamy/trap-deconstructed">
            <Row className={classes.experiencecontainer}>
              <p className={classes.desctext}>
                <b>Trap Deconstructed | June 2023 - July 2023</b>
              </p>
              <p className={classes.desctext}>
                A web app I built with PyTorch, Python and React that predicts
                the key, mode, feel and bpm of trap songs using deep
                Convolutional Neural Networks. It also implements the OpenAI API
                to prompt Chat-GPT based on the predicted labels.
              </p>
            </Row>
          </a>
          <div className={classes.paddingspace} />
          <a href="https://github.com/srihariKrishnaswamy/ML-Challenge">
            <Row className={classes.experiencecontainer}>
              <p className={classes.desctext}>
                <b>SeaScout | March 2023 - June 2023</b>
              </p>
              <p className={classes.desctext}>
                A desktop application built with Python for oceanographers that
                implements the Yolov5 object detection algorithm to detect
                deep-sea organisms. It detects deep-sea organisms for study by
                oceanographers.
              </p>
            </Row>
          </a>
          <div className={classes.paddingspace} />
          <a href="https://github.com/srihariKrishnaswamy/Job-Finder">
            <Row className={classes.experiencecontainer}>
              <p className={classes.desctext}>
                <b>Job Finder | Feb 2023</b>
              </p>
              <p className={classes.desctext}>
                A React Native mobile app to allow developers to find job
                postings implementing the JobSearch API. I mainly built this app
                to familiarize myself with React Native, but it is fully
                functional.
              </p>
            </Row>
          </a>
          <div className={classes.paddingspace} />
          <a href="https://github.com/srihariKrishnaswamy/PersonalWebsiteChatbotBackend">
            <Row className={classes.experiencecontainer}>
              <p className={classes.desctext}>
                <b>Personal Website | Aug 2023</b>
              </p>
              <p className={classes.desctext}>
                The website you're looking at right now! I wrote this in
                React.js one weekend and deployed it on vercel. A few weeks
                later, I decided to create a chatbot & hook it up to the
                website, which I did using Python, the OpenAI API & a quick
                flask server which I deployed on render.com.
              </p>
            </Row>
          </a>
          <div className={classes.paddingspace} />
          <a href="https://github.com/srihariKrishnaswamy/VolunteerVoucher">
            <Row className={classes.experiencecontainer}>
              <p className={classes.desctext}>
                <b>VolunteerVoucher | March 2022</b>
              </p>
              <p className={classes.desctext}>
                A mobile app I built with Flutter, Dart, Firebase Cloud
                Authentication and Google Firestore Database designed for
                volunteer organizations to keep track of their members and
                projects.
              </p>
            </Row>
          </a>
        </Container>
      </section>
    </Fade>
  );
}

export default Projectsection;
