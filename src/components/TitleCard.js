import { Row, Col } from "react-bootstrap";
import React from "react";

const TitleCard = function (props) {
  return (
    <div className="text-center container-fluid pull">
      <Row>
        <Col className="left">
          <h1>{props.name}</h1>
        </Col>
      </Row>
    </div>
  );
};

export default TitleCard;
