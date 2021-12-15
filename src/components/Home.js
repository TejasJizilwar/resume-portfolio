import React from "react";
import Homegif from "../images/Home.gif";

const Home = () => {
  return (
    <>
    <div id="homepage">
    <div className="home-page">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="home-gif">
                <img id="home-gif" src={Homegif} alt="home" />
              </div>
            </div>

            <div className="col-md-6">
              <div className="home-div">
                <span id="name">I'm Tejas Jizilwar</span>
                <p className="website-description">
                  This is my official Portfolio Website to show all my details
                  and work experiences of Web Development
                </p>
                <a
                  href="https://drive.google.com/file/d/15kx0G0tj9JgrnZ5Mt_xTiuwTHhj4N8Ol/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn btn-dark" type="button" id="download">
                    <i className="fa fa-download" /> Download Resume
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      
    </>
  );
};

export default Home;
