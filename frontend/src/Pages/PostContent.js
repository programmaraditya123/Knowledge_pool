import React from 'react';
import '../Styles/PostContent.css';
import { FaTv } from "react-icons/fa";
import { TfiWrite } from "react-icons/tfi";
import { Link } from 'react-router-dom';
import { RiCalendarScheduleFill } from "react-icons/ri";
import { BsLightning } from "react-icons/bs";
import { GoLightBulb } from "react-icons/go";
import { PiShootingStarLight } from "react-icons/pi";
import { MdPostAdd } from "react-icons/md";
import { BsFileEarmarkPostFill } from "react-icons/bs";
import { MdOutlineDashboard } from "react-icons/md";
import { MdRoomPreferences } from "react-icons/md";
import { SiPostcss } from "react-icons/si";
import a from '../images/a.jpeg';
import { IoIosSpeedometer } from "react-icons/io";
import Ideasgenerator from '../Assets/Ideasgenerator';
import PostGenerator from '../Assets/PostGenerator';


const showelement = () => {
  document.getElementById('item0').style.display = 'none';
};


const hideAllElements = () => {
  for (let i =1 ; i <= 6; i++) {
    document.getElementById(`item${i}`).style.display = 'none';
  }
};
// hideAllElements();


  const post = () => {
    showelement();
    hideAllElements();
    document.getElementById('item1').style.display = 'block';
  }
  const idea = () =>{
    hideAllElements();
    document.getElementById('item2').style.display = 'block';
  }
  const posts = () =>{
    hideAllElements();
    document.getElementById('item3').style.display = 'block';
  }
  const inspiration = () =>{
    hideAllElements();
    document.getElementById('item4').style.display = 'block';
  }
  const postref = () =>{
    hideAllElements();
    document.getElementById('item5').style.display = 'block';
  };
  const schedule = () =>{
    hideAllElements();
    document.getElementById('item6').style.display = 'block';
  };

   
   


const PostContent = () => {

  
  return (
    <div className='maindiv'>
      <div className='ldiv'>
      <div className='lnavbar'><FaTv />Knowledge Pool </div>
      <div className='postbtn'>
        <div className='post'><TfiWrite /> Write Post</div>
        
        <div className='content'><TfiWrite /> Write Content</div>
        <div className='itemsrow'>
        <div className='litems'>
          {/* <Link to="/" className='link1' style={{ textDecoration: 'none'}}><MdOutlineDashboard /> <li>Dashboard</li></Link>  */}
          <li><Link to="/" className='link1' style={{ textDecoration: 'none'}}><MdOutlineDashboard /> Dashboard</Link></li>
          <li onClick={post}><PiShootingStarLight /> Post Generator</li>    
          <li onClick={idea}><GoLightBulb />Ideas Generator</li>
          <li onClick={posts}><MdPostAdd /> Posts</li>
          <li onClick={inspiration}><BsLightning /> Content Inspiration</li>
          <li onClick={postref}><BsFileEarmarkPostFill /> Posts For You</li>
          <li onClick={schedule}><RiCalendarScheduleFill /> Schedule</li>   
          </div>
          <div className='itemsdown'>
          <div className='itemsdown1'>
            <li> <MdRoomPreferences /> Preferences</li>
            <li> <SiPostcss /> Feature Requests</li>
            </div>
            <div className='gene'>
            <div>
              <li>Words Generated</li>
              <li>1.25K/50K</li>
              </div>
              <li className='li1'>Loader</li>
              <li className='li2'>Monthly usage reset in 29days</li>
              <button className='btn4'>Upgrade Plan</button>
            </div>
          </div>
          </div>
      </div>
      </div>
      <div className='rdiv'>
        <div className='rdivnav'>
          <div>Write Post / Write Content</div>
          <div className='rdivnav2'>
            <button className='btn5'><IoIosSpeedometer/> Check Score</button>
            <button className='btn5'><TfiWrite/> Writing Guidelines</button>
            <img src={a} alt='Profile'/>
          </div>
        </div>
        <div className='postbody'>
          <div id='item0'>This is the item Shown First</div>
          <div className='postgen' id='item1'><PostGenerator/></div>
          <div className='idea' id='item2'><Ideasgenerator/></div>
          <div className='posts' id='item3'>Here You can see all your posts</div>
          <div className='inspiration' id='item4'>Here is the content for inspiration</div>
          <div className='postref' id='item5'>Here is the posts for refrence</div>
          <div className='schedule' id='item6'>Here is the schedule for your Task</div>
        </div>
        
      </div>
       
    </div>
  )
}

export default PostContent;
