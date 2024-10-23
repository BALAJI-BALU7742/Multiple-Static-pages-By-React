import React from 'react';
import './About.css'; // Import CSS for styling

const About = () => {
  return (
    <div className="about-container">
      <h1>About AKNU MSN Campus</h1>
      <p>
        Established in 2006, AKNU MSN Campus has become a center for academic excellence, focusing on innovation, research, and community development. 
        Our commitment to fostering an environment of learning has made us one of the leading educational institutions in the region.
      </p>
      <p>
        At AKNU MSN Campus, we offer a wide range of programs across various disciplines, preparing our students for a competitive global landscape. 
        Our experienced faculty members are dedicated to guiding students through their academic journey, providing mentorship and support.
      </p>

      <h2>Academic Groups</h2>
      <div className="groups-container">
        <div className="group-box">
          <h3>MCA</h3>
          <p>The Master of Computer Applications program focuses on advanced computing and software development, equipping students with in-demand skills.</p>
        </div>
        <div className="group-box">
          <h3>MBA</h3>
          <p>Our Master of Business Administration program nurtures leadership skills, business acumen, and strategic thinking for future business leaders.</p>
        </div>
        <div className="group-box">
          <h3>MA English</h3>
          <p>The Master of Arts in English program enhances critical thinking and communication skills while exploring literature and language.</p>
        </div>
        <div className="group-box">
          <h3>MSc Mathematics</h3>
          <p>The Master of Science in Mathematics program delves into advanced mathematical theories and applications, preparing students for research and teaching careers.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
