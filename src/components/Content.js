import React from "react";
import "./Content.css"
import { Parallax } from "react-parallax";

const Content = function(props) {
    return (
        <Parallax bgImage={props.bgImage}>
        <div className="far text-center container-fluid big-big middle-text" id="auto">
          <div className="pull text-center container-fluid">
            {props.children}
          </div>
        </div>
      </Parallax>
    )
}
export default Content;