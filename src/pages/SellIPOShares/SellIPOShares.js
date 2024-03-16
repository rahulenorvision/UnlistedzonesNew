import React from "react";
// import ReactPlayer from 'react-player/youtube';
import invester from './invester.jpg';
import './SellIPOShares.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import dashboard from './dashboard.jpg';
import Button from '@mui/material/Button';
import together from './together.png';
import refresh from './refresh.png';
import clipboard from './clipboard.png';
import Accordianleft from './Accordianleft';
import mail from './mail.png';
import call from './call.png';
import location from './location.png';
import partner from './partner.jpg';
import Footer from "../../components/Footer/Footer.js";
import Navbar from "../../components/navbar/index.jsx";

export default function SellIPOShares (){
    return(
        <>
        <Navbar/>
               <div>
            <hr style={{width: "50em",margin: "0.5em 0em 0em 25em",color: "darkgray" }}/>
        <h1 style={{padding:"1.5em 0em 0em 6em",fontSize: "4em"}}>Become Our Partner</h1>
        <p style={{padding: "0em 0em 0em 17em",fontSize: "x-large"}}>Come And Join Unlistedzone's Partner Program</p>
        <img src={partner} alt="partnerImage" style={{width: "20em",height: "20em",    margin:"2em 0em 0em 31em"}}/>
        </div>
        <div style={{display:"flex",backgroundColor: "#9494ff38",margin:"1em"}}>
        <div style={{width: "40em",height:"35em",padding: "8em 0em 0em 4em"}}>
        <h1>Sell Pre IPO Shares and Earn Commission At <div style={{color:"green"}}>Zero</div> Investment</h1>
        <p>"Join Us And Transform Your Financial Future"</p>
        </div>
        <img src='https://unlistedzone.com/frontend/img/invester-partner.png' alt="investerphoto" style={{width:"30em",height: "25em",padding: "4em 0em 0em 0em",margin: "3em 0em 0em 6em",backgroundcolor:"#9494ff38"}}/>
        </div>
        <div>
            <h1 className="h1dash">Become Our Partner In 3 Easy Steps</h1>
        </div>
        <div className="bigboxipo">
            <div>
                <div className="greendot">1</div>
                <div className="textipo">Sign Up</div>
            </div>
            <div className="arrow"><ArrowForwardIcon style={{height: "4em",width:"3em",color: "#008000ba"}}/></div>
            <div>
                <div className="greendot">2</div>
                <div id="textipo2">Upload Documents</div>
            </div>
            <div><ArrowForwardIcon style={{height: "4em",width:"3em",color: "#008000ba"}}/></div>
            <div>
                <div className="greendot">3</div>
                <div className="textipo">Get Verified</div>
            </div>
        </div>
        <div className="sidedash">
        <div>
            <img className="lowdash" src={dashboard} alt="dashimage"/>
        </div>
        <div className="lowsidedash">
            <div><h1>Our Dashboard</h1>
            <p>Unlistedzone has introduced an online partner programme where you can quickly register and upload your documentation. After successful submission, our team will validate your documents and verify your as Unlistedzone Official Partner.</p>
            <Button variant="outlined" style={{width:"15em",height: "3em",color: "black",fontWeight: 600,border: "1px solid"}}>Primary</Button>
            </div>
        </div>
        </div>
        <div className="row1">
            <h1>Become Our Partner In 3 Easy Steps</h1>
            <p>"Elevate Your Financial Journey: Partner With Us In Just 3 Simple Steps For Limitless Earning Potential."</p>
            <Button variant="outlined" style={{width: "15em",height:"4em",padding:"0em 1em 0em 0em",margin:"4em 0em 5em 40em",color:"white",backgroundColor:"#14213D",border:"1px solid",borderRadius:"15px"}}>Join Now</Button>
        </div>
        <div className="youget">
            <div className="youget1">
                <h1>What You Get?</h1>
                <p>Research Report, Partner Dashboard and Daily News Of Unlisted Markets.</p>
                </div>
                <div className="youget2">
                <div className="youget22">
                    <img className="youget2img" src="https://unlistedzone.com/frontend/img/clipboard.png" alt="clip"/>
                    <h5 id="youget22h5">Reports</h5>
                    <p>Research Report on all unlisted Shares.</p>
                </div>
                <div className="youget22">
                    <img className="youget2img" src="https://unlistedzone.com/frontend/img/together.png" alt="clip"/>
                    <h5>Partner Report</h5>
                    <p>Creation Of leads, Check Daily Price <br/>movement of unlisted shares,<br/> knowledge center and check<br/> commission earned at one place.</p>
                </div>
                <div className="youget22">
                    <img className="youget2img" src="	https://unlistedzone.com/frontend/img/refresh.png" alt="clip"/>
                    <h5>Daily Updates</h5>
                    <p>Daily News and latest updates on unlisted market.</p>
                </div>
                </div>
        </div>
        <button className="yougetbutton">Currently, More Than 1000+ Partners Are Working With Unlistedzone</button>
        <div className="accordion">
        <h1>Frequently Asked Questions</h1>
        <p>Find Answers To Common Questions That You May Have In Your Mind.</p>
        </div>
        <Accordianleft/>

        <div className="textyoutube">
            <div className="textyoutube1"><h1>India's No. 1 Platform to Buy and Sell Pre-IPO</h1></div>
            <div className="reactplayer">
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/HEZczsRj7m0?si=EBJrPW3oR4l7O38_" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
        </div>
        <div className="formup">
            <h1>Reach Out To Us</h1>
            <p>Don't Be Shy Just Tell Us About Yourself And We'll Figure Out The Best Option For You And Your Project.<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Don't Like Filling Up Forms? Mail Us Then <a href="/">partners@unlistedzone.com</a></p>
            <form>
                <div className="input">
                <div className="input1">
                <label>Name </label><input  placeholder="Please Enter Your Name" type="text" /></div>
                <div className="input1"><label>Email </label><input placeholder="Please Enter Your E-Mail" type="email" /></div>
                </div>
                <div className="input"><div className="input1"><label>Number 
                    </label><input placeholder="Enter Your Number" type="number" /></div>
                <div className="input1"><label>Subject </label><input placeholder="Subject" type="text" /></div></div>
                <div className="input2"><label>Where Did You Find Us?</label><select>
                    <option>Select An Option</option>
                    <option>FaceBook</option>
                    <option>Google</option>
                    <option>NewsPaper</option>
                    <option>Word Of Mouth</option>
                    <option>Others</option>
                </select>
                </div>
                <div className="input3">
                <label>Your Message </label><input type="text" />
                </div>
            </form>
            <button className="formbutton" type="button">Submit</button>
        </div>
        <div className="navup">
            <div className="navup1">
                <img id="navup1img" src={location}/>
                <h4 id="navup1h">Visit Us</h4>
                <p>828,Sector 2B, Vasundhara, Ghaziabad-India<br/> 201012 </p>
                </div>
                <div id="navup12" className="navup1">
                <img src={call}/>
                <h4>Call Us</h4>
                <p>+91-9953774031</p>
                </div>
                <div className="navup1">
                <img src={mail}/>
                <h4>Email Us</h4>
                <p>Partners@Unlistedzone.com</p>
                </div>
            </div>
            <Footer/>
        </>
    )
}