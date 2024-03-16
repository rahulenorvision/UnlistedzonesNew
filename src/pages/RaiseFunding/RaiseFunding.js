import './RaiseFunding.css';
import raisefunding from './Raisefunding.png';
import build from './build.png';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Button from '@mui/material/Button';
import raising from './raising.png';
import raisingsme from './raisingsme.png';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import archit from './archit.png';
import sambhav from './sambhv.png';
import insolare from './insolare.png';
import gre from './gre.png';
import madhur from './madhur.jpeg';
import tbiCorn from './tbiCorn.png';
import AccordionRaiseFunding from './Accordian';
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/navbar/index.jsx";

export default function RaiseFunding(){
    return(
        <>
        <Navbar/>
        <div className='decktop'>
        <hr />
        <h1>Help Companies With Deck To Raise Funds</h1>
        <p>"Partnering With The Best Founders In Their Startup Journey At Every Stage."</p>
        <img src={raisefunding} alt='raisefundingimage'/>
        </div>
        <div className='letsbuild'>
            <div className='letsbuild1'>
            <h1> Let Us Build Together</h1>
            <div className='letsbuild11'>
                <CheckCircleIcon sx={{color: "green"}}/>
                <p>Empowering SMEs Promoters With Growth Capital.</p>
            </div>
            <div className='letsbuild11'>
            <CheckCircleIcon sx={{color: "green"}}/>
                <p>Empowering SMEs Promoters With Growth Capital.</p>
            </div>
            <div className='letsbuild11'>
            <CheckCircleIcon sx={{color: "green"}}/>
                <p>Empowering SMEs Promoters With Growth Capital.</p>
            </div>
            <Button variant="contained" sx={{backgroundColor: "black"}}>Raise Funds</Button>
            </div>
                <img src={build} alt='buildImage'/>
        </div>
        <div className='raisefund'>
            <img src={raising} alt='raisingimage'/>
            <div className='raisefund1'>
                <h1>Get Ready To Raise Fund</h1>
                <p>At Unlistedzone, Our Expert Team Thoroughly evaluates SMEs, Offering Clear And Helpful Feedback. We Aid In Crafting Impactful Company Presentation And Facilitate Timely Funding From Suitable Investors.</p>
                <div className='letsbuild11'>
                <CheckCircleIcon sx={{color: "green"}}/>
                <p>FundRaising Via SME IPO or Pre-IPO Round.</p>
            </div>
            <div className='letsbuild11'>
                <CheckCircleIcon sx={{color: "green"}}/>
                <p>Create Investors Presentation.</p>
            </div>
            <div className='letsbuild11'>
                <CheckCircleIcon sx={{color: "green"}}/>
                <p>Structured Learning Program For Early Stage Success.</p>
            </div>
            </div>
        </div>
        <div className='raisingsme'>
            <div className='raisingsme1'>
            <h1>Raise Fund Vis SME IPOs</h1>
            <p>Unlock Growth Potential With SME IPOs; Our Expertise Guides Companies In Successful Fund-Raising And Market Expansion. </p>
            <div className='letsbuild11'>
                <CheckCircleIcon sx={{color: "green"}}/>
                <p>At Least Three Year Track Record.</p>
            </div>
            <div className='letsbuild11'>
                <CheckCircleIcon sx={{color: "green"}}/>
                <p>Paid Upto Capital &lt; 25 cr.</p>
            </div>
            <div className='letsbuild11'>
                <CheckCircleIcon sx={{color: "green"}}/>
                <p>Net Tangible Asset 3cr.</p>
            </div>
            </div>
            <img src={raisingsme} alt='raisingsmeImage'/>
        </div>
        <div className='raisefundvia'>
            <h1>How To Raise Fund Via SME IPOs</h1>
            <p>Recommended whoever Wants To Deal With Unlisted Equities. </p>
            <div>
            <div className="bigboxipofund">
            <div>
                <div className="greendot">1</div>
                <div className="textipo">Sign Up</div>
            </div>
            <div className="arrow"><ArrowForwardIcon style={{height: "4em",width:"3em",color: "#008000ba"}}/></div>
            <div>
                <div className="greendot" id='greendotfund'>2</div>
                <div id="textipo2">Get Your StartUp Evaluated</div>
            </div>
            <div><ArrowForwardIcon style={{height: "4em",width:"3em",color: "#008000ba"}}/></div>
            <div>
                <div className="greendot" id='greendotfund3'>3</div>
                <div className="textipo">Connect with UZ Experts</div>
            </div>
            <div className="arrow"><ArrowForwardIcon style={{height: "4em",width:"3em",color: "#008000ba"}}/></div>
            <div>
                <div className="greendot" id='greendotfund'>4</div>
                <div id="textipo2">Plot Your Growth Journey</div>
            </div>
        </div>
            </div>
            <Button variant="contained" sx={{backgroundColor: "black",width: "14em",height: "3.5em",margin: "6em 0em 0em 40em"}}>Get Started</Button>
            </div>
            <div className='fundraisingstories'>
                <h1>Fund Raising Success Stories With Our Pitch Decks</h1>
                <div className='fundraisingstories1'>
                <div className='fundraisingstories11'>
                    <img src={archit} alt='architimage'/>
                </div>
                <div className='fundraisingstories11'>
                    <img src={sambhav} alt='architimage'/>
                </div>
                <div className='fundraisingstories11' id='fundraisingstories112'>
                    <img src={insolare} alt='architimage'/>
                </div>
                <div className='fundraisingstories11' id='fundraisingstories113'>
                    <img src={gre} alt='architimage'/>
                </div>
                <div className='fundraisingstories11' id='fundraisingstories114'>
                    <img src={tbiCorn} alt='architimage'/>
                </div>
                <div className='fundraisingstories11' id='fundraisingstories115'>
                    <img src={madhur} alt='architimage'/>
                </div>
                
                </div>
                </div>
                <div className='reachmain'>
                    <h1>Reach Out To Us</h1>
                    <div className='reach'>
                        <div id='para1'>1. Company Details</div>
                        <div id='para2'>2. Personal Details</div>
                    </div>
                        <hr/>
                       <form>
                        <div className='reach11'>
                        <label>Name Of The Company</label>
                        <input placeholder='Name Of The Company' type='text'/>
                        </div>
                        <div className='reach11'>
                        <label>Last Year Turnover (in cr.)</label>
                        <input placeholder='Last Year Turnover' type='number'/>
                        </div>
                        <div className='reach1'>
                        <div className='reach11' id='reach111'>
                        <label>Year Of Formation</label>
                        <input placeholder='Year Of Formation' type='number'/>
                        </div>
                        <div className='reach11' id='reach111'>
                        <label>Fund Required (in Cr.)</label>
                        <input placeholder='Fund Required' type='number'/>
                        </div>
                        </div>
                       </form>

                       <Button variant="contained" sx={{backgroundColor:"green",margin: "0em 0em 0em 12em" }}>Continue To Personal Details</Button>
                </div>
                <div className='accordianraisingfunds'>
                    <h1>Frequently Asked Questions</h1>
                    <p>Find Answers To Common Questions That You May Have In Your Mind</p>
                    <AccordionRaiseFunding/>
                </div>
                <Footer/>
        </>
    )
}