import React from "react";
import Navigation from "../components/Navigation";
import AboutBio from "../components/AboutBio";
import LandingPageFooter from "../components/Footer";

function About() {
  return (
    <>
      <Navigation />
      <section className="about-page">
        <div className="about-text">
          <h2>Our Team</h2>
          <h3>We make it easy for people to take a cornell notes</h3>
          <p>If you have any questions or suggestions, please do not hesitate to contact us at noteitapp@gmail.com</p>
        </div>
        <AboutBio />
    
      </section>
      <LandingPageFooter/>
    </>
  )
}

export default About;