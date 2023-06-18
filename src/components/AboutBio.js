import React from "react";
import AboutCard from "./AboutCard";

function AboutBio() {
  return (
    <div className="about-bio">
      <AboutCard name="Agi Sahriza" img="agi.jpeg" instagram="https://instagram.com/agisahriza" linkedin="https://linkedin.com/in/agisahriza"/>
      <AboutCard name="Noviana" img="novi.jpeg" instagram="https://instagram.com/noviana.ng" linkedin="https://linkedin.com/in/noviana-ng"/>
      <AboutCard name="Arin Novia" img="arin.jpeg" instagram="https://instagram.com/rnnvw" linkedin="https://linkedin.com/in/arin-novia-widyanti"/>
      <AboutCard name="Alfin Wahyu" img="al.jpg" instagram="https://instagram.com/bgpinsahaa" linkedin="https://linkedin.com/in/alfin-wahyu-subekti" />
    </div>  
  )
}

export default AboutBio;