import { Octokit } from "octokit";
import React from "react";
const octokit = new Octokit().rest.repos.get;

class Repo extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        repo: this.props.repo,
        display: null,
        index: this.props.index,
      };
    }
  
    componentDidMount() {
      octokit(this.state.repo).then((result) => {
        this.setState({
          display: {
            name: result.data.name,
            url: result.data.html_url,
            description: result.data.description,
            language: result.data.language,
            topics: result.data.topics,
          },
        });
      });
    }
  
    getStyle(index) {
      let style = {
        marginTop: "0px",
        marginBottom: "0px",
      };
      if (index !== 2) {
        style.marginBottom = "10px";
      }
      if (index !== 0) {
        style.marginTop = "5px";
      }
      return style;
    }
  
    render() {
      return (
        <div
          className="github-repos-item github-repos-box"
          style={this.getStyle(this.state.index)}
        >
          {this.state.display ? (
            <div className="github-repos-content">
              <span
                onClick={(e) => {
                  e.preventDefault();
                  window.open(this.state.display.url);
                }}
                className="react-github-repos-text link"
              >
                {this.state.display.name}
              </span>
              <p className="github-repos-desc">
                {this.state.display.description}
              </p>
              <p className="github-repos-language-p">
                <span className="github-repos-language-span">
                  <span
                    className="github-repos-langage-color"
                    style={{ backgroundColor: "#ccc", marginRight: "5px" }}
                  />
                  <span>{this.state.display.language}</span>
                </span>
              </p>
            </div>
          ) : (
            ""
          )}
        </div>
      );
    }
  }

  export default Repo;