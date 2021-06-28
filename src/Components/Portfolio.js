import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css"

class Portfolio extends Component {
  render() {
    if (this.props.data) {
      var projects = this.props.data.projects.map(function (projects) {
        var projectImage = "images/" + projects.image;
        return (
          <div key={projects.title} className="col-6 portfolio-item">
            <div className="item-wrap">
              <a href={projects.url} title={projects.title}>
                <img id="projectimg" alt={projects.title} src={projectImage} />
              </a>
              <div className="overlay m-2">
                <p>{projects.category}</p>
                <div className="portfolio-item-meta">
                  <button className="btn bg-success mx-2">
                    <a
                      className="text-white"
                      href={projects.url}
                      title={projects.title}
                    >
                      Link
                    </a>
                  </button>
                  <button className="btn bg-success mx-2">
                    <a
                      className="text-white"
                      href={projects.github}
                      title={projects.title}
                    >
                      Source Code
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      });
    }

    return (
      <section className="container" id="portfolio">
        <div className="row my-2">
          <div className="col-12 collapsed my-2 py-2">
            <h2>Check Out Some of My Works.</h2>
            <div id="portfolio-wrapper" className="col-12">
              <div className="row"> {projects}</div>
            </div>
          </div>
        </div>  
      </section>
    );
  }
}

export default Portfolio;
