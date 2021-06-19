import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

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
      var reoderSkills = this.props.data.skills.sort((a, b) =>
        a.level < b.level ? 1 : -1
      );
      var skills = reoderSkills.map(function (skills) {
        return (
          <div className="bg-light" key={skills.name}>
            <div className="row bg-light px-2">{skills.name}</div>
            <div className="progress row bg-light px-2">
              <div
                style={{ width: skills.level }}
                className="progress-bar bg-success"
                role="progressbar"
                aria-valuenow=""
                aria-valuemin="0"
                aria-valuemax="100"
              >
                {skills.level}
              </div>
            </div>
          </div>
        );
      });
    }

    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h2>
              <span>Education</span>
            </h2>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">{education}</div>
            </div>
          </div>
        </div>

        <div className="row work">
          <div className="three columns header-col">
            <h2>
              <span>Work</span>
            </h2>
          </div>

          <div className="nine columns main-col">{work}</div>
        </div>

        <div className="row skill">
          <div className="three columns header-col">
            <h2>
              <span>Skills</span>
            </h2>
          </div>

          <div className="nine columns main-col">
            <p>{skillmessage}</p>

            <div className="bars d-flex justify-content-center my-2 py-2">
              <div className="skills col-5">{skills}</div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
