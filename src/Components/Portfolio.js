import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class Portfolio extends Component {
  render() {
    if (this.props.data) {
      var projects = this.props.data.projects.map(function (projects) {
        var projectImage = "images/" + projects.image;
        return (
          <div key={projects.title} className="columns portfolio-item">
            <div className="item-wrap">
              <a href={projects.url} title={projects.title}>
                <img id="projectimg" alt={projects.title} src={projectImage} />
              </a>
              <div className="overlay m-2">
                <div className="portfolio-item-meta">
                  <a href={projects.url} title={projects.title}>
                    <h5>{projects.title}</h5>
                  </a>
                  <p>{projects.category}</p>
                </div>
              </div>
              <div>
                <span>
                  <a href={projects.github} title={projects.title}>
                    {projects.title}
                  </a>
                  Repository
                </span>
              </div>
            </div>
          </div>
        );
      });
    }

    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h2>Check Out Some of My Works.</h2>

            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              {projects}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
