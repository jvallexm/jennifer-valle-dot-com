import "./App.css";
import "./react-github-repos.css";
import { Navbar, Container, Row, Col } from "react-bootstrap";

import React from "react";
import Header from "./components/Header";
import Automation from "./components/Automation";
import Web from "./components/Web";
import Content from "./components/Content";
import Music from "./components/Music";
import TitleCard from "./components/TitleCard";
import { Parallax } from "react-parallax";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Navbar bg="light">
          <Container>welcome</Container>
        </Navbar>
        {/*<Parallax
          bgImage={"assets/images/placeholder.jpg"}
          bgStyle={{ height: "100%" }}
        >*/}
        <Header />

        <div id="stuff" className="text-center container-fluid">
          <TitleCard name="enterprise infrastructure automation" />
          <Content bgImage="assets/images/wires.jpg">
            <Automation />
          </Content>
          <TitleCard name="web development" />
          <Content bgImage="assets/images/web-web.jpg">
            <Web />
          </Content>
          <div className="far text-center container-fluid"></div>
          <TitleCard name="music" />
          <Content bgImage="assets/images/guitar.jpg">
            <Music />
          </Content>
          <TitleCard name="contact" />
          <Parallax bgImage={"assets/images/phone.jpg"}>
            <div
              className=" text-center container-fluid big-big middle-text"
              id="contact"
            >
              jennifer can be reached at jvallexm@gmail.com
            </div>
          </Parallax>
        </div>
        {/*</Parallax>*/}
      </div>
    );
  }
}

export default App;
