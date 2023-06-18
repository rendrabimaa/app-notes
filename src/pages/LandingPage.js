import React from "react";
import LandingPageFooter from "../components/Footer";
import LandingPageBody from "../components/LandingPageBody";
import LandingPageSection from "../components/LandingPageSection";
import LandingPageSection2 from "../components/LandingSection2";
import LandingPageSection3 from "../components/LandingSection3";
import Navigation from "../components/Navigation";



function LandingPage() {
    return (
        <>
            <Navigation />
            <LandingPageBody />
            <LandingPageSection
                image={"taking-notes.png"}
                title={"Synthesize & apply learned knowledge"}
                subtitle={
                    "Without taking notes, only 10% of what you hear may last in memory. With good note-taking, that number can go up to over 80%. Despite the benefits of note-taking, 1 out of every 3 students do not take notes."
                }
                subtitle2={"Cornell note-taking is one of the most frequently recommended note-taking formats by universities and high schools. It helps you take useful notes in an efficient way, allowing the notes to be used for review and self-quizzing. Take better notes with Note IT!."} />
            <LandingPageSection2
                image={"search-notes.png"} 
                title={"Search all your Notes Quickly"}
                subtitle={"Use the Cosmic Search to search through all your sheets, notes, and summaries in any folder. Results highlighted and filtered in real-time as you type. Click on a search result to be taken to its sheet."}
                subtitle2={"Implement your own tagging system just by using text and search. If you’ve written it, you can find it."}

            />
            <LandingPageSection
            image={"light-or-dark.png"}
            title={"Light or Dark"}
                subtitle={
                    "The sunlight hurts your eyes? Pulling an all-nighter? Don't want to wake up your roommate? Turn off the lights. Click the crescent moon on the upper right to step into the dark side"
                }
                subtitle2={"Step into the light by clicking the sun next to the moon. These settings will be remembered when you close the app."} />
            <LandingPageSection2 
            image={"Upload-bro.png"}
            title={"Export your Notes "}
                subtitle={"At any time, you can print your notes or export them as PDF to share with others or review outside of the app such as in Preview, or on another device. You can easily export your notes with Note IT!"}
                subtitle2={"Exported sheets are full-spec two-column Cornell notes, including the title, notes, and summary, and can be multiple pages."}

            />
            <LandingPageSection3 />
            <LandingPageFooter />
        </>
    )
}

export default LandingPage;