import React from 'react';
import  '../Styles/Footer.css';
import { MdOutlineArrowForward } from "react-icons/md";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import { GiNetworkBars } from "react-icons/gi";
 
const Footer = () => {
  return (
    
     <div className='footerdiv'>
     <div className='innerfooterdiv'>
        <div className='ffdiv'>
            <div className='ffldiv'>Every Day <br/> Counts Towards <br/> <span className='yellow'>Your Future</span> <br/></div>
            <div className='ffcdiv'><TfiLayoutLineSolid style={{ fontSize:"11rem",margin:"0",padding:"0",color:"yellow"}}/><MdOutlineArrowForward style={{ fontSize:"8rem",margin:"-22px",padding:"0",color:"yellow"}}/></div>
            <div className='ffrdiv'>
                <p><span className='yellow'>Free</span> courses to enroll</p>
                <p><span className='yellow'>Ultimate</span> level of learning</p>
                <p><span className='yellow'>Gain 5x</span> problem solving skills</p>
                <button className='btn-5'>Enroll in courses , today</button>
            </div>
        </div>
        <div className='fsdiv'>
          <div className='fsidiv'>Tips once a week for your effective your learning </div>
          <div className='fssdiv'><input type='text' placeholder='your email address'></input></div>
          <div className='fstdiv btn-6'>Sign up!</div>
        </div>
        <div className='ftdiv'>
          <div className='ftddiv'>
          <div className='itemhead'>Company</div>
            <ul>
              <li>Savings plan guide</li>
              <li>Savings plan guide</li>
              <li>Savings plan guide</li>
              <li>Savings plan guide</li>
            </ul>
          </div>
          <div className='ftddiv'>
          <div className='itemhead'>Company</div>
            <ul>
              <li>Savings plan guide</li>
              <li>Savings plan guide</li>
              <li>Savings plan guide</li>
              <li>Savings plan guide</li>
            </ul>
          </div>
          <div className='ftddiv'>
          <div className='itemhead'>Company</div>
            <ul>
              <li>Savings plan guide</li>
              <li>Savings plan guide</li>
              <li>Savings plan guide</li>
              <li>Savings plan guide</li>
            </ul>
          </div>
          <div className='ftddiv'>
          <div className='itemhead'>Company</div>
            <ul>
              <li>Savings plan guide</li>
              <li>Savings plan guide</li>
              <li>Savings plan guide</li>
              <li>Savings plan guide</li>
            </ul>
          </div>
          
        </div>
        <div className='ffourthdiv'>
          <div className='logo'><GiNetworkBars style={{fontSize:"10rem"}} /></div>
          <div className='logoname'>Programmer Aditya</div>
        </div>
         
        </div>
     </div>
  )
}

export default Footer;

// css description 
// ffdiv - footer first div
// fsdiv - footer second 
// ftdiv - footer third 
// ffdiv  - footer fourth
