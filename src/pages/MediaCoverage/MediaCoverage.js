import artical from './artical.png';
import './MediaCoverage.css';
import Gridrow from './Gridrow';
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/navbar/index.jsx";

export default function MediaCoverage(){
    return(
        <>
        <Navbar/>
        <div className="mediacover">
        <h1>Media Coverage</h1>
        <h5>"Where Expertise Meets SpotLight: Our Founders Shape the Conversation On Unlisted Shares Across Media Channels."</h5>
        </div>
        <div className="mediacover1">
            <div className="mediacover11">
                <p>Featured-Money Control, Business Standard, Financial Express, Live Mint, Ken and Inc 42</p>
                <h1>
                    Welcome To Unlistedzone India!
                </h1>
                <p>"Building Trust Through Expertise: Our Founder are regularly featured in media,offering credible insights on unlisted and pre-IPO shares for confident investing." </p>
            </div>
            <img src={artical} alt='articalimage'/>
        </div>
        <Gridrow/>
        <Footer/>
        </>
    )
}