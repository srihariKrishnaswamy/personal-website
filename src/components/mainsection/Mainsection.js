import React from 'react';
import classes from './Mainsection.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Fade } from 'react-awesome-reveal';
import Typed from 'react-typed'; // Import react-typed

function Mainsection() {
  return (
    <Container className={classes.mainsection}>
      <Fade duration={900} triggerOnce>
        <Row>
          <Col className={classes.bigtextcol}>
            <h3 className={classes.h3class}>Hi I'm</h3>
            <h1 className={classes.h1class}>Srihari</h1>
            <div className={classes.movingtextcontainer}>
              <p className={classes.subtext}>I'm a</p>
              <Typed
                strings={['Developer', 'Student', 'Software Engineer', 'Music Producer']}
                typeSpeed={50}
                backSpeed={60}
                backDelay={1500}
                loop
                className={classes.movingtext}
              />
            </div>
          </Col>
        </Row>
      </Fade>
    </Container>
  );
}

export default Mainsection;