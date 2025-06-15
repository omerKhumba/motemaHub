import Header from "../components/Header";
import Apropos from "../components/landingPage/Apropos";
import Hero from "../components/landingPage/hero";
import Objectifs from "../components/landingPage/Objectifs";
import StatsSection from "../components/landingPage/StatsSection";
import Technologies from "../components/landingPage/Tech";

export default function LandingPage()
{

    return (
        <div className="container-fluid" >
            <Header />
            <Hero />
            <Apropos />
            <StatsSection /> 
            <Technologies />
            <Objectifs />
        </div>
    )
}