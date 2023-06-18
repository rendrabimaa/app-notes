import React from "react";


function AboutCard({name, img, instagram, linkedin}) {
  return (
    <div className="about-card">
      <img src={img} alt={name}/>
      <h3>{name}</h3>
      <div>
        <a href={linkedin} target="_blank" rel="noreferrer"><i class="fa-brands fa-linkedin" ></i></a>
        <a href={instagram}target="_blank" rel="noreferrer"><i class="fa-brands fa-square-instagram" ></i></a>
        <br/><br/><br/><br/><br/><br/><br/>
      </div>
    </div>
  )
}

export default AboutCard;