import React from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';


function LandingPageSection3() {
    return (
        <section className="icons-container">
            <div className="icons">
                <div className="info">
                    <h3>Retain more of what you study</h3>
                    <span>Take through notes in an efficient way.</span>
                    <br />
                    <br />
                    <h3>No prep-work required</h3>
                    <span>No more forcing a word processor to do what it wasn’t designed to do, or drawing lines on paper.
                    </span>
                    <br />
                    <br />
                    <h3>Take better notes</h3>
                    <span>During a meeting, while listening to a lecture, watching a film, or reading a book.
                    </span>
                </div>
            </div>
            <div className="icons">
                <div className="info_img">
                        <LazyLoadImage
                            alt="section-img2"
                            src="icon-cartoon.png"
                            effect="opacity"
                        />
                </div>
            </div>

            <div className="icons">
            <div className="info">
                    <h3>Easy Editing</h3>
                    <span>Notes are a work in progress. Go back and edit.</span>
                    <br />
                    <br />
                    <h3>Search Everything</h3>
                    <span>If you’ve written it in Note IT!, you can quickly find it using Search bar.
                    </span>
                    <br />
                    <br />
                    <h3>Keyboard shortcuts</h3>
                    <span>Navigate through a sheet, write, and apply formatting using just your keyboard.

                    </span>
                </div>
            </div>
        </section>

    )
}

export default LandingPageSection3;