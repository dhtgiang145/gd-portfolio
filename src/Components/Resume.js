import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

class Resume extends Component {
  render() {
    if (this.props.data) {
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function (education) {
        return (
          <div key={education.school}>
            <h4>{education.school}</h4>
            <p className="info">
              {education.degree} <span>&bull;</span>
              <em className="date">{education.graduated}</em>
            </p>
            <p>{education.description}</p>
          </div>
        );
      });
      var work = this.props.data.work.map(function (work) {
        return (
          <div key={work.company}>
            <h4>{work.company}</h4>
            <p className="info">
              {work.title}
              <span>&bull;</span> <em className="date">{work.years}</em>
            </p>
            <p>{work.description}</p>
          </div>
        );
      });
      var skills = this.props.data.skills.map(function (skills) {
        return (
          <div key={skills.name}>
            <div className="row px-2">
              <b> {skills.name}:</b>
              <p>{skills.skill}</p>
            </div>
          </div>
        );
      });
    }

    return (
      <section className="container" id="resume">
        <div className="education row align-items-center my-1">
          <div className="col-6">
            <h2>
              <span>Education</span>
            </h2>
          </div>
          <div className="edulist col-6">
            <div className="row">
              <div>{education}</div>
            </div>
          </div>
        </div>

        <div className="work row align-items-center my-2">
          <div className="col-6">
            <h2>
              <span>Work</span>
            </h2>
          </div>
          <div className="worklist col-6">{work}</div>
        </div>

        <div className="skills row align-items-center my-2">
          <div className="col-6">
            <h2>  
              <span className="text-white">Skills</span>
            </h2>
          </div>

          <div className="skillist col-6">
            <p>{skillmessage}</p>
            <div>
              <div>{skills}</div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
