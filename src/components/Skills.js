import React from 'react';
import Skillgif from '../images/Skillgif.gif'

const Skills = () => {
    return (
        <div id="skills">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6 skill-image-container">
              <img src={Skillgif} alt="" id="skillimage"/>
              </div>
              <div className="col-md-6 skillbar"> <span className="skill-title">Skills</span>
            <div className="progress">
                
                <div className="progress-bar progress-bar-striped progress-bar-animated bg-danger"  style={{width : "75%"}} role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"><span className="skillname">HTML</span></div>
                </div>
                <div className="progress">
                  <div className="progress-bar progress-bar-striped progress-bar-animated" style={{width : "65%"}}  role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><span className="skillname">CSS</span></div>
                </div>
                <div className="progress">
                  <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" style={{width : "60%"}}  role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"><span className="skillname">Javascript</span></div>
                </div>
                <div className="progress">
                  <div className="progress-bar progress-bar-striped progress-bar-animated bg-info" style={{width : "70%"}}  role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"><span className="skillname">Bootstrap</span></div>
                </div>
                <div className="progress">
                  <div className="progress-bar progress-bar-striped progress-bar-animated" style={{width : "65%"}}  role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"><span className="skillname">React</span></div>
                </div>
                <div className="progress">
                  <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" style={{width : "50%"}}  role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"><span className="skillname">NodeJS</span></div>
                </div>
                <div className="progress">
                  <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" style={{width : "65%"}}  role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"><span className="skillname">Express</span></div>
                </div>
                <div className="progress">
                  <div className="progress-bar progress-bar-striped progress-bar-animated bg-dark" style={{width : "60%"}}  role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"><span className="skillname">MongoDB</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Skills
