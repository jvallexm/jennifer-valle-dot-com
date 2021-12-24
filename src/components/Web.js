import { Row, Col } from "react-bootstrap";
import React from "react";
import Repo from "./Repo";

const repos = [
  { owner: "IBM", repo: "tfmdcli" },
  { owner: "jvallexm", repo: "quizfeed" },
  { owner: "Cloud-Schematics", repo: "openshift-hub-and-spoke-vpc-arch"}
];

function Web() {
  return (
    <Row>

      <Col className="left" md={6}>
        {repos.map((data, index) => (
          <Repo key={`repo-${index}`} repo={data} index={index} />
        ))}
      </Col>
      <Col md={6} className="mobile-bottom">
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
