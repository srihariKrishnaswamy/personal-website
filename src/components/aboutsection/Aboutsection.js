import React from 'react';
import classes from './Aboutsection.module.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Fade } from "react-awesome-reveal";
import headshot from '../../images/headshot.png';

function Aboutsection() {
  return (
    <Fade duration={900} triggerOnce={true}>
      <section id="About">
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
                  I'm a Computer Science major undergrad at the Allen School at the University of Washington. I enjoy problem solving and have a passion for building apps as well as machine learning.
                </p>
                <p className={classes.desctext}>
                  I'm looking forward to learning more about mobile development and ML this summer through internships and my own projects. I'm looking for internships in the SWE field, and if you'd like to contact me,
                  please email me at sriharik844@gmail.com.
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
