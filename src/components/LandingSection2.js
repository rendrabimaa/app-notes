import React from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';

function LandingPageSection2({ image, title, subtitle, subtitle2}) {
    return (
            <section className="landing__section_2" id="about">
                <div className="row"> 
                    <div className="content">
                        <h3> {title} </h3>
                        <br></br>
                        <p>
                            {subtitle}
                        </p>
                        <p>
                           {subtitle2}
                        </p>              
                    </div>
                    <div className="img-container">
                        <LazyLoadImage
                            alt="section-img2"
                            src={image}
                            effect="opacity"
                        />
                    </div>
                </div>
            </section>   
    )
}

export default LandingPageSection2;