import React from "react";
import "../css/HomePage.css";
import GlobeIcon from "../icons/GlobeIcon.js";
import RobotIcon from "../icons/RobotIcon";
import CodeIcon from "../icons/CodeIcon";
import CanvasIcon from "../icons/CanvasIcon";

function HomePage() {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-text">
          <h1>Create 3D Robot</h1>
          <p>
            This feature allows you make own robots with 3D objects on the
            canvas. You can unleash your creativity and bring your designs to
            life in a three-dimensional space.
          </p>
          <button>Learn More</button>
        </div>
        <img src="/images/robot2.png" alt="3D Robot" />
      </section>
      <section className="features">
        <div className="feature-card">
          <GlobeIcon />
          <h2>Personalized 3D Designs</h2>
          <img src=" images\robo.jpeg" alt="3d" />
          <p>Express Your Vision in 3D</p>
          <button>Get Started</button>
        </div>
        <div className="feature-card">
          <RobotIcon />
          <h2>Unique 3D Robot Creation</h2>
          <img src="images/Unique.jpeg" alt="3d" /> 
          <p>Bring Your Robot to Life in 3D</p>
          <button>Explore Now</button>
        </div>
        <div className="feature-card">
          <CodeIcon />
          <h2>Code-driven 3D Artistry</h2>

          <img src="images\codee.png" alt="3d" />  
          <p>Unleash Your Creativity with Code</p>
         
          <button>Discover More</button>
        </div>
        <div className="feature-card">
          <CanvasIcon />
          <h2>Custom 3D Canvas Experience</h2>
          <img src="images\custom.png" alt="3d" />  
          <p>Craft Your Unique 3D Canvas</p>
          <button>Start Creating</button>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
