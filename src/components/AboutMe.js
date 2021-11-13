import React from "react";
import About from "../images/About.jpg";

const AboutMe = () => {
  return (
    <>
      <div id="about">
        <div className="container-fluid">
          <div className="row">
            <div className="col-4 social-media-content">
              <img src={About} alt="myphoto" id="myphoto" />
              <div className="socialmedia">
              <a href="https://github.com/TejasJizilwar" rel="noopener noreferrer" target="_blank"><i className="fa fa-github" aria-hidden="false"/></a>

              <a href="https://www.linkedin.com/in/tejas-jizilwar-0b8109208/"  rel="noopener noreferrer" target="_blank" ><i className="fa fa-linkedin-square" aria-hidden="false"/></a>

              <a href="mailto:tejasjizilwar07@gmail.com" rel="noopener noreferrer" target="_blank" ><i className="fa fa-envelope" aria-hidden="false"/></a>
              <a href="https://www.instagram.com/anuu_rag5/?hl=en" rel="noopener noreferrer" target="_blank" ><i className="fa fa-instagram" aria-hidden="false"/></a>
              <a href="https://www.facebook.com/619johnny/" rel="noopener noreferrer" target="_blank"><i className="fa fa-facebook-square" aria-hidden="false"/></a>
              </div>
            </div>

            <div className="col-4">
              <div className="abouttext">
              <div className="aboutmetext">About Me</div>
                <p className="somethingaboutme">
                  Always love the opportunity to interact with new tools and
                  learn new skills. I have Knowledge of modern web development
                  frameworks and tools. I love working with Front-End
                  technnology like React and also having a good knowledge of
                  Back-End technologies like NodeJS and database like MongoDB.
                </p>
              </div>
            </div>

            <div className="col-4 location-div">
              <div className="mylocation">
              <iframe id="location" title="mylocation" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1875.3293650519283!2d79.29772405202905!3d19.93878099734086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDU2JzE5LjYiTiA3OcKwMTcnNTUuMyJF!5e0!3m2!1sen!2sin!4v1635529055963!5m2!1sen!2sin"  allowfullscreen="" loading="lazy"/>
              <p className="location-details">Pathanpura Ward, Chandrapur, Maharashtra</p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
