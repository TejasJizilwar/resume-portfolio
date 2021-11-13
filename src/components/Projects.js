import React from "react";
import Runningcar from '../images/runningcar.png';
import Bulb from '../images/bulb-on-off.png';
import Netflix from '../images/Netflix.png';
import Flipkart from '../images/Flipkart.png';
import Greeting from '../images/Greeting.png';
import API from '../images/API.png';
import Thermometer from '../images/Thermometer.png';
import TempConverter from '../images/Temp-converter.png';
import WebsiteTemplate from '../images/WebsiteTemplate.png';

const Projects = () => {
  return (
    <>
      <div id="projects">
        <h1 className="projects-name">Projects</h1>
        <p className="projects-paragraph">Here are some projects made by me</p>
      <div className="cards"> 
      <div className="card">
        <img src={Runningcar} alt="Running Car" className="card-img"/>
        <div className="card-info">
          <h3 className="card-title"> Running Car</h3>
          <p className="card-category">In this project, I implemented a car running on a track using HTML, CSS and Javascript  </p>
          <a href="https://tejasjizilwar.github.io/runningcar/" target="__blank">
             <button className="project-button"> Open Now</button>
          </a>
        </div>
      </div>
     </div>

     <div className="cards"> 
      <div className="card">
        <img src={Bulb} alt="Bulb" className="card-img"/>
        <div className="card-info">
          <h3 className="card-title"> Turn Bulb On and Off</h3>
          <p className="card-category"> Simple mini project that will turn a bulb ON and OFF on user’s click </p>
          <a href="https://tejasjizilwar.github.io/Turn-Bulb-on-and-off/" target="__blank">
             <button className="project-button"> Open Now</button>
          </a>
        </div>
      </div>
     </div>

     <div className="cards"> 
      <div className="card">
        <img src={Netflix} alt="Netflix" className="card-img"/>
        <div className="card-info">
          <h3 className="card-title"> Netflix Website - React</h3>
          <p className="card-category">Simple Netflix website showcasing top 6 TV Shows</p>
          <a href="https://tejasjizilwar.github.io/Netflix-Website-React/" target="__blank">
             <button className="project-button"> Open Now</button>
          </a>
        </div>
      </div>
     </div>

     <div className="cards"> 
      <div className="card">
        <img src={Flipkart} alt="Flipkart" className="card-img"/>
        <div className="card-info">
          <h3 className="card-title"> Flipkart Clone Template</h3>
          <p className="card-category">Basic template design of Flipkart which is responsive </p>
          <a href="https://tejasjizilwar.github.io/Flipkart-clone-website/" target="__blank">
             <button className="project-button"> Open Now</button>
          </a>
        </div>
      </div>
     </div>

     <div className="cards"> 
      <div className="card">
        <img src={Greeting} alt="Greeting" className="card-img"/>
        <div className="card-info">
          <h3 className="card-title">Greeting Website</h3>
          <p className="card-category"> Its a Greeting Website that says Good morning, good afternoon or good evening, depending upon the time they visit the website.</p>
          <a href="https://tejasjizilwar.github.io/Greeting-Website/" target="__blank">
             <button className="project-button"> Open Now</button>
          </a>
        </div>
      </div>
     </div>

     <div className="cards"> 
      <div className="card">
        <img src={API} alt="API" className="card-img"/>
        <div className="card-info">
          <h3 className="card-title">know your Personality - API Project</h3>
          <p className="card-category">This website will show your personality based on your name with the help of API. (Just for fun)</p>
          <a href="https://tejasjizilwar.github.io/AvatarAPI/" target="__blank">
             <button className="project-button"> Open Now</button>
          </a>
        </div>
      </div>
     </div>

     <div className="cards"> 
      <div className="card">
        <img src={Thermometer} alt="Thermometer" className="card-img"/>
        <div className="card-info">
          <h3 className="card-title"> Animated Thermometer</h3>
          <p className="card-category">This is an animated Thermometer created with Html, CSS and Javascript with the help of font-awesome icons. </p>
          <a href=" https://tejasjizilwar.github.io/Animated-Thermometer/" target="__blank">
             <button className="project-button"> Open Now</button>
          </a>
        </div>
      </div>
     </div>

     <div className="cards"> 
      <div className="card">
        <img src={TempConverter} alt="TempConverter" className="card-img"/>
        <div className="card-info">
          <h3 className="card-title"> Temperature Converter</h3>
          <p className="card-category">Temperature converter website that can convert: Celsius to Fahrenheit and Fahrenheit to Celcius</p>
          <a href="https://tejasjizilwar.github.io/Temperature-Converter/" target="__blank">
             <button className="project-button"> Open Now</button>
          </a>
        </div>
      </div>
     </div>

     <div className="cards"> 
      <div className="card">
        <img src={WebsiteTemplate} alt="WebsiteTemplate" className="card-img"/>
        <div className="card-info">
          <h3 className="card-title"> Bootstrap Responsive Template Design</h3>
          <p className="card-category">Responsive Website Design Using Bootstrap</p>
          <a href="https://tejasjizilwar.github.io/Bootstrap-Responsive-Template-Design/" target="__blank">
             <button className="project-button"> Open Now</button>
          </a>
        </div>
      </div>
     </div>

    
      </div>
    </>
  );
};

export default Projects;
