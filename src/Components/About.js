import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

class About extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var profilepic = "images/" + this.props.data.image;
      var bio = this.props.data.bio;
      var email = this.props.data.email;
    }

    return (
      <section className="about container my-3" id="about">
        <div className="row align-items-center">
          <div className="col-6">
            <img
              id="profilepic"
              src={profilepic}
              alt="Giang Do Profile Pic"
            />
          </div>
          <div className="col-6">
            <h2>About Me</h2>
            <p>{bio}</p>
            <div className="row">
              <div className="columns contact-details">
                <h4>Contact Details</h4>
                <p className="address">
                  <span>{name}</span>
                  <br />
                  <span>{email}</span>
                </p>                
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
