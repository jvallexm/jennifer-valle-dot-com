import { Row, Col } from "react-bootstrap";
import React from "react";
import Repo from "./Repo";

const repos = [
  { owner: "IBM", repo: "tfmdcli" },
  { owner: "jvallexm", repo: "quizfeed" },
  { owner: "jvallexm", repo: "okwhatever"}
];

function Web() {
  return (
    <Row>

      <Col className="left mobile-bottom" md={6} >
        {repos.map((data, index) => (
          <Repo key={`repo-${index}`} repo={data} index={index} />
        ))}
      </Col>
      <Col md={6} >
        <div className="left words github-repos-box middle-text tall">
          <p>
            Words
          </p>
        </div>
      </Col>

    </Row>
  );
}

export default Web;
