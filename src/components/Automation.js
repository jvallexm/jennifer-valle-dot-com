import { Row, Col } from "react-bootstrap";
import React from "react";
import Repo from "./Repo";

const repos = [
  { owner: "Cloud-Schematics", repo: "gcat-vpc-hub-spoke-cluster" },
  { owner: "Cloud-Schematics", repo: "gcat-landing-zone-child-account" },
  { owner: "Cloud-Schematics", repo: "openshift-hub-and-spoke-vpc-arch"}
];

function Automation() {
  return (
    <Row>
      <Col md={6} className="mobile-bottom">
        <div className="left words github-repos-box middle-text tall">
          <p>
            Jennifer has created over 50 open-source Terraform templates for IBM
            Cloud, many of which can be found at the{" "}
            <span
              onClick={() => {
                window.open("https://github.com/Cloud-Schematics");
              }}
              className="react-github-repos-text link"
            >
              IBM Cloud Schematics Github
            </span>
            . These templates are used internally by the IBM Cloud Terraform
            Provider team and externally by IBM clients worldwide.
            <br />
            <br />
            In 2019, she recieved an IBM Outstanding Technical Achievement Award for
            contributions to open-source IBM Cloud Terraform templates.
          </p>
        </div>
      </Col>
      <Col className="left" md={6}>
        {repos.map((data, index) => (
          <Repo key={`repo-${index}`} repo={data} index={index} />
        ))}
      </Col>
    </Row>
  );
}

export default Automation;
