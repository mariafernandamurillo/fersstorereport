import "./about.css"
import { useState } from "react";

function About(){

    /*Hide and show our e-mail*/

    const [displayEmail, setDisplayEmail] = useState(false);

    function toggleEmail(){
        console.log("im here");
        setDisplayEmail(true);
    }
    
    function getEmailSection(){
        if(displayEmail){
            return<h3>fernanda.murillo@uabc.edu.mx</h3>
        }
        else {
            return null;
        }
    }

    return(
        <div className="about">
            <label> Fernanda Murillo </label>
            {getEmailSection()}
            <button onClick={toggleEmail} className="email-btn">Show Email</button>
        </div>
    );
}

export default About;

