import React from "react";

function LandingPageFooter(){
    return(
    <section className="footer">
    <div className="box-container">
        <div className="box">
            <h3>Navigation</h3>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/login">Login</a>
        </div>

        <div className="box">
            <h3>Contact Us</h3>
            <a href="mailto:R243Y0478@dicoding.org">Noviana</a>
            <a href="mailto:R378Y0942@dicoding.org">Arin Novia</a>
            <a href="mailto:R247X0507@dicoding.org">Agi Sahriza</a>
            <a href="mailto:R182X0312@dicoding.org">Alfin Wahyu</a>
        </div>

        <div className="box">
            <h3>Other</h3>
            <a href="https://www.dicoding.com/" target="_blank" rel="noreferrer">Dicoding</a>
            <a href="https://kampusmerdeka.kemdikbud.go.id/" target="_blank" rel="noreferrer">Kampus Merdeka</a>
        </div>

    </div>

    <div className="credit"> Copyright © 2022  <span>   Note IT! </span> | All Rights Reserved </div>

</section>
    )

}

export default LandingPageFooter;