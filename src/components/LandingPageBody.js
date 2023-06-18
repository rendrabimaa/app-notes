import React from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';

function LandingPageBody() {
    return (
        <main>
            <section className="home" id="home">
                <div className="content">
                    <h3> CORNELL NOTE TAKING </h3>
                    <span> A METHOD TO TAKE GREAT NOTES</span>
                    <p> </p>
                    <a href="/login" className="button-home" > Get Started</a>
                </div>
                <div className="overlay"></div>


            </section>
            <section className="about" id="about">
                <h1 className="heading">
                    The missing <span> Cornell Notes </span> app.
                </h1>
                <h2 className="heading-2"> Now available on website</h2>
                <div className="row">
                    <div className="img-container">
                        <LazyLoadImage
                            alt="section-img"
                            src="CornellNotes.webp"
                            effect="opacity"
                        />

                    </div>


                </div>
                <div className="content">
                    <p>
                        No more forcing a word processor to do what it wasn’t designed to do. Take Cornell notes, complete with title, cue column, detail column, and summary. Use custom text formatting to give your notes structure and make the important points stand out. Edit and rearrange your notes as you go. Organize your sheets into folders so you can take notes for all of your classes or for different projects. Use the Cosmic Search bar to search through all your sheets, notes, and summaries. Results are filtered and highlighted in real-time as you type. Star sheets so you can get to them fast. And when you’re done, export to your printer or to PDF.

                    </p>

                </div>



            </section>
        </main>

    );
}

export default LandingPageBody;