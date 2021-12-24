import "./Header.css"
import {Row, Col } from "react-bootstrap";
import React from "react";

//16.13.0

function Header() {
  return (
    <header className="text-center container-fluid">
      <div id="head-content" className="text-center container-fluid">
        <Row id="face-row">
          <Col sm={2} id="face-box" xs={5}>
            <img id="my-face" src="assets/images/myface.jpeg" alt="jennifer valle"/>
          </Col>
          <Col id="title" sm={3} xs={6}>
            <h3 className="human-name">jennifer valle</h3>
            <p className="subtitle">human software developer</p>
            <p id="soci">
              <i
                className="fa fa-github"
                onClick={() => window.open(`https://github.com/jvallexm`)}
                title={"GitHub"}
              />
              <i
                className="fa fa-linkedin"
                onClick={() =>
                  window.open(`https://www.linkedin.com/in/jennifer-valle/`)
                }
                title={"Connect on LinkedIn"}
              />
              <i
                className="fa fa-envelope"
                onClick={() => window.open("mailto:jvallexm@gmail.com")}
              />
            </p>
          </Col>
        </Row>

        <Row>
          <Col className="bg-white left"></Col>
        </Row>
      </div>
    </header>
  );
}

export default Header;