import { Row, Col } from "react-bootstrap";
import { Parallax } from "react-parallax";
import React from "react";

function Music() {
    return (            <Row>
        <Col sm={6}>
          <div>
            <Parallax
              bgImage={"assets/images/liveatpinhook.png"}
              className="snake cut-corners"
            >
              <h2 id="band-name">snake shaming</h2>
            </Parallax>
          </div>
        </Col>
        <Col sm={6}>
          <div className="">
            {/*<iframe
              className="cut-corners"
              src="https://open.spotify.com/embed/artist/3sQSwOZ0rjL8PK3XsffTsh?utm_source=generator&theme=0"
              height="288px"
              allowfullscreen=""
              allow="encrypted-media; fullscreen; picture-in-picture"
              title="spotify"
            ></iframe>*/}
          </div>
        </Col>
      </Row>)
}

export default Music;