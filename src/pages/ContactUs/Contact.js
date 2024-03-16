import Footer from "../../components/Footer/Footer.js";
import Navbar from "../../components/navbar/index.jsx";
import './Contact.css'

export default function Contact(){
    return(
        <>
        <Navbar/>
        <div className="formup">
        <h1>Contact Us</h1>
        <p id='contpara'> Dont Be Shy Just Tell Us About Yourself And We'll Figure Out The Best Option For You And Your Project.Don't Like Filling Up Forms? Mail Us Then <a href="/">partners@unlistedzone.com</a></p>
        <form>
            <div className="input">
            <div className="input1">
            <label>Name </label><input  placeholder="Please Enter Your Name" type="text" /></div>
            <div className="input1"><label>Email </label><input placeholder="Please Enter Your E-Mail" type="email" /></div>
            </div>
            <div className="input"><div className="input1"><label>Number 
                </label><input placeholder="Enter Your Number" type="number" /></div>
            <div className="input1"><label>Subject </label><input placeholder="Subject" type="text" /></div></div>
            <div  id='input2contact'><label>Where Did You Find Us?</label><select>
                <option>Select An Option</option>
                <option>FaceBook</option>
                <option>Google</option>
                <option>NewsPaper</option>
                <option>Word Of Mouth</option>
                <option>Others</option>
            </select>
            </div>
            <div className="input3" id='inputcontact'>
            <label>Your Message </label><input type="text" />
            </div>
        </form>
        <button id="formbuttoncontact" type="button">Submit</button>
    </div>
    <Footer/>
    </>
    )
}