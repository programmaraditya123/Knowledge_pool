import React from 'react';
import {Link} from 'react-router-dom';
import '../Styles/HomePage.css';
import { IoIosSearch } from "react-icons/io";
import { FaTv } from "react-icons/fa";
import { FaRunning } from "react-icons/fa";
import a from '../images/a.jpeg';
import b from '../images/b.jpeg';
import c from '../images/c.jpeg';
import d from '../images/d.jpeg';
import e from '../images/e.png';
import { CiClock2 } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { FiMessageSquare } from "react-icons/fi";
import { FaRegStar } from "react-icons/fa";
import Footer from '../Components/Footer';


const HomePage = () => {
  return (
    <>
    {/* <div className='homepage'> */}
    <div className='navbar'>
      <div className='lnavbar'>
        <div className='llnavbar'><FaTv />Knowledge Pool </div>
        <div className='rlnavbar'>
          <li>Explore</li>
          <Link to='/tutorial' style={{textDecoration:'none'}}><li>Tutorials</li></Link>
          <li>Projects</li>
          <li>Resources</li>
          <Link to='/postcontent' style={{ textDecoration: 'none' }}><li>Write & Earn</li></Link>
        </div>
      </div>
      <div className='rnavbar'>
       
      <div className='inputfld'>
      <IoIosSearch /><input type='text'  placeholder='I want to learn ....' />
        </div>
        <div className='btns'>
        <button className='btn1'>Sign In</button>
        <button className='btn2'>Register</button>
        <div className='btn31'>
        <button className='btn3'>Go Premium</button>
        </div>
        </div>
       
       </div>
    </div>
    <div className='homepage'>
    <div className='mainbody'>
      <div className='leftbody'>
      <div className='tutlist1 ttlist'>
        <h3>Filter Tutorials</h3>
        <h4>TOPIC</h4>
        <div><p>All</p><p>256</p></div>
        <div><p>Animation</p><p>12</p></div>
        <div><p>Flat Design</p><p>25</p></div>
        <div><p>Graphic Design</p><p>36</p></div>
        <div><p>Illustration</p><p>22</p></div>
        <div><p>Pattern</p><p>35</p></div>
        <div><p>Pixels</p><p>57</p></div>
        <div><p>Photography</p><p>56</p></div>
        <div><p>Typography</p><p>2</p></div>
        <div><p>3D</p><p>2</p></div>
        </div>
        <div className='tutlist1'>
          <h4>PRICE</h4>
          <div className='tutlist2'>
            <div><p><input type='checkbox' value="all"/></p><p>All</p></div>
            <div><p><input type='checkbox' value="freetut"/></p><p>Free Tutorial</p></div>
            <div><p><input type='checkbox' value="premtut"/></p><p>Premium Tutorial</p></div>
           
             
          </div>
        </div>
        <div className='tutlist1'>
          <h4>Level</h4>
          <div className='tutlist2'>
            <div><p><input type='checkbox' value="all"/></p><p>All</p></div>
            <div><p><input type='checkbox' value="beginner"/></p><p>Beginner</p></div>
            <div><p><input type='checkbox' value="intermediate"/></p><p>Intermediate</p></div>
            <div><p><input type='checkbox' value="advanced"/></p><p>Advanced</p></div>
           
             
          </div>
        </div>
        <div className='tutlist1'>
          <h4>Type</h4>
          <div className='tutlist2'>
            <div><p><input type='checkbox' value="all"/></p><p>All</p></div>
            <div><p><input type='checkbox' value="Course"/></p><p>Course</p></div>
            <div><p><input type='checkbox' value="vedio"/></p><p>Vedio</p></div>
            <div><p><input type='checkbox' value="text"/></p><p>Text</p></div>
           
             
          </div>
        </div>
        
      </div>
      <div className='rightbody'>
        <div className='upperdiv'>
        <div className='farunning'><FaRunning /></div>
        <div>
          <h2>All Animation Tutorials</h2>
          <h5>Step-by-Step instruction to help you develop new design Skills</h5>
          </div>
        </div>
        <div className='lowerdiv'>
          <div className='crd1'>
            <img src={a} alt='this is tut'/>
            <div className='des'>
            <h4>Motion Graphics: Create a nice Typography Animation</h4>
            <h2>Give color to everything you want to say and turn it into amzing message with...</h2>
            </div>
            <div className='tutdes'>
            <div className='tutdes1'>
              <div><img src={a} alt='tutor'/></div>
              <div>
              <p>Created By</p>
              <p>Aditya</p>
              </div>
              </div>
              <div className='time'><CiClock2 />45 min</div>
            </div>
            <div className='rating'>
              <div><FaHeart />  5</div>
              <div><FiMessageSquare />  4</div>
              <div><FaRegStar /> <FaRegStar /> <FaRegStar /> <FaRegStar /> <FaRegStar /></div>
            </div>
            
          </div>
          <div className='crd1'> 
          <img src={b} alt='this is tut'/>
          <div className='des'>
            <h4>Motion Graphics: Create a nice Typography Animation</h4>
            <h2>Give color to everything you want to say and turn it into amzing message with...</h2>
            </div>
            <div className='tutdes'>
            <div className='tutdes1'>
              <div><img src={a} alt='tutor'/></div>
              <div>
              <p>Created By</p>
              <p>Aditya</p>
              </div>
              </div>
              <div className='time'><CiClock2 />45 min</div>
            </div>
            <div className='rating'>
              <div><FaHeart />  5</div>
              <div><FiMessageSquare />  4</div>
              <div><FaRegStar /> <FaRegStar /> <FaRegStar /> <FaRegStar /> <FaRegStar /></div>
            </div>
          </div>
          <div className='crd1'>
          <img src={c} alt='this is tut'/>
          <div className='des'>
            <h4>Motion Graphics: Create a nice Typography Animation</h4>
            <h2>Give color to everything you want to say and turn it into amzing message with...</h2>
            </div>
            <div className='tutdes'>
            <div className='tutdes1'>
              <div><img src={e} alt='tutor'/></div>
              <div>
              <p>Created By</p>
              <p>Aditya saini</p>
              </div>
              </div>
              <div className='time'><CiClock2 />45 min</div>
            </div>
            <div className='rating'>
              <div><FaHeart />  5</div>
              <div><FiMessageSquare />  4</div>
              <div><FaRegStar /> <FaRegStar /> <FaRegStar /> <FaRegStar /> <FaRegStar /></div>
            </div>
          </div>
          <div className='crd1'>
          <img src={d} alt='this is tut'/>
          <div className='des'>
            <h4>Motion Graphics: Create a nice Typography Animation</h4>
            <h2>Give color to everything you want to say and turn it into amzing message with...</h2>
            </div>
            <div className='tutdes'>
            <div className='tutdes1'>
              <div><img src={a} alt='tutor'/></div>
              <div>
              <p>Created By</p>
              <p>Aditya</p>
              </div>
              </div>
              <div className='time'><CiClock2 />45 min</div>
            </div>
            <div className='rating'>
              <div><FaHeart />  5</div>
              <div><FiMessageSquare />  4</div>
              <div><FaRegStar /> <FaRegStar /> <FaRegStar /> <FaRegStar /> <FaRegStar /></div>
            </div>
          </div>
          <div className='crd1'>
            <img src={e} alt='this is tut'/>
            <div className='des'>
            <h4>Motion Graphics: Create a nice Typography Animation</h4>
            <h2>Give color to everything you want to say and turn it into amzing message with...</h2>
            </div>
            <div className='tutdes'>
            <div className='tutdes1'>
              <div><img src={a} alt='tutor'/></div>
              <div>
              <p>Created By</p>
              <p>Aditya</p>
              </div>
              </div>
              <div className='time'><CiClock2 />45 min</div>
            </div>
            <div className='rating'>
              <div><FaHeart />  5</div>
              <div><FiMessageSquare />  4</div>
              <div><FaRegStar /> <FaRegStar /> <FaRegStar /> <FaRegStar /> <FaRegStar /></div>
            </div>
          </div>
          <div className='crd1'> 
          <img src={b} alt='this is tut'/>
          <div className='des'>
            <h4>Motion Graphics: Create a nice Typography Animation</h4>
            <h2>Give color to everything you want to say and turn it into amzing message with...</h2>
            </div>
            <div className='tutdes'>
            <div className='tutdes1'>
              <div><img src={a} alt='tutor'/></div>
              <div>
              <p>Created By</p>
              <p>Aditya</p>
              </div>
              </div>
              <div className='time'><CiClock2 />45 min</div>
            </div>
            <div className='rating'>
              <div><FaHeart />  5</div>
              <div><FiMessageSquare />  4</div>
              <div><FaRegStar /> <FaRegStar /> <FaRegStar /> <FaRegStar /> <FaRegStar /></div>
            </div>
          </div>
          <div className='crd1'>
          <img src={c} alt='this is tut'/>
          <div className='des'>
            <h4>Motion Graphics: Create a nice Typography Animation</h4>
            <h2>Give color to everything you want to say and turn it into amzing message with...</h2>
            </div>
            <div className='tutdes'>
            <div className='tutdes1'>
              <div><img src={a} alt='tutor'/></div>
              <div>
              <p>Created By</p>
              <p>Aditya</p>
              </div>
              </div>
              <div className='time'><CiClock2 />45 min</div>
            </div>
            <div className='rating'>
              <div><FaHeart />  5</div>
              <div><FiMessageSquare />  4</div>
              <div><FaRegStar /> <FaRegStar /> <FaRegStar /> <FaRegStar /> <FaRegStar /></div>
            </div>
          </div>
          <div className='crd1'>
          <img src={d} alt='this is tut'/>
          <div className='des'>
            <h4>Motion Graphics: Create a nice Typography Animation</h4>
            <h2>Give color to everything you want to say and turn it into amzing message with...</h2>
            </div>
            <div className='tutdes'>
            <div className='tutdes1'>
              <div><img src={a} alt='tutor'/></div>
              <div>
              <p>Created By</p>
              <p>Aditya</p>
              </div>
              </div>
              <div className='time'><CiClock2 />45 min</div>
            </div>
            <div className='rating'>
              <div><FaHeart />  5</div>
              <div><FiMessageSquare />  4</div>
              <div><FaRegStar /> <FaRegStar /> <FaRegStar /> <FaRegStar /> <FaRegStar /></div>
            </div>
          </div>
          <div className='crd1'>
            <img src={a} alt='this is tut'/>
            <div className='des'>
            <h4>Motion Graphics: Create a nice Typography Animation</h4>
            <h2>Give color to everything you want to say and turn it into amzing message with...</h2>
            </div>
            <div className='tutdes'>
            <div className='tutdes1'>
              <div><img src={a} alt='tutor'/></div>
              <div>
              <p>Created By</p>
              <p>Aditya</p>
              </div>
              </div>
              <div className='time'><CiClock2 />45 min</div>
            </div>
            <div className='rating'>
              <div><FaHeart />  5</div>
              <div><FiMessageSquare />  4</div>
              <div><FaRegStar /> <FaRegStar /> <FaRegStar /> <FaRegStar /> <FaRegStar /></div>
            </div>
          </div>
          <div className='crd1'> 
          <img src={b} alt='this is tut'/>
          <div className='des'>
            <h4>Motion Graphics: Create a nice Typography Animation</h4>
            <h2>Give color to everything you want to say and turn it into amzing message with...</h2>
            </div>
            <div className='tutdes'>
            <div className='tutdes1'>
              <div><img src={a} alt='tutor'/></div>
              <div>
              <p>Created By</p>
              <p>Aditya</p>
              </div>
              </div>
              <div className='time'><CiClock2 />45 min</div>
            </div>
            <div className='rating'>
              <div><FaHeart />  5</div>
              <div><FiMessageSquare />  4</div>
              <div><FaRegStar /> <FaRegStar /> <FaRegStar /> <FaRegStar /> <FaRegStar /></div>
            </div>
          </div>
          <div className='crd1'>
          <img src={c} alt='this is tut'/>
          <div className='des'>
            <h4>Motion Graphics: Create a nice Typography Animation</h4>
            <h2>Give color to everything you want to say and turn it into amzing message with...</h2>
            </div>
            <div className='tutdes'>
            <div className='tutdes1'>
              <div><img src={a} alt='tutor'/></div>
              <div>
              <p>Created By</p>
              <p>Aditya</p>
              </div>
              </div>
              <div className='time'><CiClock2 />45 min</div>
            </div>
            <div className='rating'>
              <div><FaHeart />  5</div>
              <div><FiMessageSquare />  4</div>
              <div><FaRegStar /> <FaRegStar /> <FaRegStar /> <FaRegStar /> <FaRegStar /></div>
            </div>
          </div>
          <div className='crd1'>
          <img src={d} alt='this is tut'/>
          <div className='des'>
            <h4>Motion Graphics: Create a nice Typography Animation</h4>
            <h2>Give color to everything you want to say and turn it into amzing message with...</h2>
            </div>
            <div className='tutdes'>
            <div className='tutdes1'>
              <div><img src={a} alt='tutor'/></div>
              <div>
              <p>Created By</p>
              <p>Aditya</p>
              </div>
              </div>
              <div className='time'><CiClock2 />45 min</div>
            </div>
            <div className='rating'>
              <div><FaHeart />  5</div>
              <div><FiMessageSquare />  4</div>
              <div><FaRegStar /> <FaRegStar /> <FaRegStar /> <FaRegStar /> <FaRegStar /></div>
            </div>
          </div>
          <div className='crd1'>
            <img src={a} alt='this is tut'/>
            <div className='des'>
            <h4>Motion Graphics: Create a nice Typography Animation</h4>
            <h2>Give color to everything you want to say and turn it into amzing message with...</h2>
            </div>
            <div className='tutdes'>
            <div className='tutdes1'>
              <div><img src={a} alt='tutor'/></div>
              <div>
              <p>Created By</p>
              <p>Aditya</p>
              </div>
              </div>
              <div className='time'><CiClock2 />45 min</div>
            </div>
            <div className='rating'>
              <div><FaHeart />  5</div>
              <div><FiMessageSquare />  4</div>
              <div><FaRegStar /> <FaRegStar /> <FaRegStar /> <FaRegStar /> <FaRegStar /></div>
            </div>
          </div>
          <div className='crd1'> 
          <img src={b} alt='this is tut'/>
          <div className='des'>
            <h4>Motion Graphics: Create a nice Typography Animation</h4>
            <h2>Give color to everything you want to say and turn it into amzing message with...</h2>
            </div>
            <div className='tutdes'>
            <div className='tutdes1'>
              <div><img src={a} alt='tutor'/></div>
              <div>
              <p>Created By</p>
              <p>Aditya</p>
              </div>
              </div>
              <div className='time'><CiClock2 />45 min</div>
            </div>
            <div className='rating'>
              <div><FaHeart />  5</div>
              <div><FiMessageSquare />  4</div>
              <div><FaRegStar /> <FaRegStar /> <FaRegStar /> <FaRegStar /> <FaRegStar /></div>
            </div>
          </div>
          <div className='crd1'>
          <img src={c} alt='this is tut'/>
          <div className='des'>
            <h4>Motion Graphics: Create a nice Typography Animation</h4>
            <h2>Give color to everything you want to say and turn it into amzing message with...</h2>
            </div>
            <div className='tutdes'>
            <div className='tutdes1'>
              <div><img src={a} alt='tutor'/></div>
              <div>
              <p>Created By</p>
              <p>Aditya</p>
              </div>
              </div>
              <div className='time'><CiClock2 />45 min</div>
            </div>
            <div className='rating'>
              <div><FaHeart />  5</div>
              <div><FiMessageSquare />  4</div>
              <div><FaRegStar /> <FaRegStar /> <FaRegStar /> <FaRegStar /> <FaRegStar /></div>
            </div>
          </div>
          <div className='crd1'>
          <img src={d} alt='this is tut'/>
          <div className='des'>
            <h4>Motion Graphics: Create a nice Typography Animation</h4>
            <h2>Give color to everything you want to say and turn it into amzing message with...</h2>
            </div>
            <div className='tutdes'>
            <div className='tutdes1'>
              <div><img src={a} alt='tutor'/></div>
              <div>
              <p>Created By</p>
              <p>Aditya</p>
              </div>
              </div>
              <div className='time'><CiClock2 />45 min</div>
            </div>
            <div className='rating'>
              <div><FaHeart />  5</div>
              <div><FiMessageSquare />  4</div>
              <div><FaRegStar /> <FaRegStar /> <FaRegStar /> <FaRegStar /> <FaRegStar /></div>
            </div>
          </div>
        </div>
      </div>
    </div>


      <div className='footer'><Footer/></div> 
       
    </div>
    </> 
  )
}

export default HomePage;
