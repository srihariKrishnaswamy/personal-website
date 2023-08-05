import React, { useEffect, useRef } from 'react'
import classes from './Mainsection.module.css'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { init } from "ityped";
import { Fade } from "react-awesome-reveal";

function Mainsection() {
    const textRef = useRef("");
    useEffect(() => {
      init(textRef.current, {
        showCursor: false,
        typeSpeed: 50,
        backSpeed: 60,
        backDelay: 1500,
        strings: [
          "Developer",
          "Software Engineer",
          "Music Producer",
        ],
      });
    }, []);
  return (

        <Container className={classes.mainsection}>
            <Fade duration={900} triggerOnce="true">
                <Row>
                    <Col className={classes.bigtextcol}>
                        <h3 className={classes.h3class}>Hi I'm</h3>
                        <h1 className={classes.h1class}>Srihari</h1>
                        <div className={classes.movingtextcontainer}>
                            <p className={classes.subtext}>I'm a</p>
                            <span className={classes.movingtext} ref={textRef}></span>
                        </div>
                    </Col>
                </Row>
            </Fade>
        </Container>


  )
}

export default Mainsection