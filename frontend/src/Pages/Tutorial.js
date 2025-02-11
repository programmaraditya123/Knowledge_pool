import React from 'react'
import '../Styles/Tutorial.css';
import LowerFooter from '../Components/LowerFooter';
import a from '../images/a.jpeg'; 

const Tutorial = () => {
  return (
    <>
    <div className='tutorial'>
    <div className='tutnavbar'><h1>this is tut navbar</h1></div>
    <div className='tutcarousel'><h1>this is carousel bar</h1></div>
    <div className='tutbody'>
      <div className='ltutbody'>
        <div className='ltutbodyitems'>
          <li>What is python?</li>
          <li>Python Data Types</li>
          <li>Python Comments</li>
          <li>Python Single Line </li>
          <li>Python Multiline</li>
          <li>Python Lists</li>
          <li>Python Operators</li>
          <li>Dictionary in python</li>
          <li>Hashing in python</li>
          <li>Trees in python</li>
          <li>Strings in python</li>
          <li>Tuples in python</li>
          <li>Graphs in python</li>
          <li>What is python?</li>
          <li>Python Data Types</li>
          <li>Python Comments</li>
          <li>Python Single Line </li>
          <li>Python Multiline </li>
          <li>Python Lists</li>
          <li>Python Operators</li>
          <li>Dictionary in python</li>
          <li>Hashing in python</li>
          <li>Trees in python</li>
          <li>Strings in python</li>
          <li>Tuples in python</li>
          <li>Graphs in python</li>
          <li>What is python?</li>
          <li>Python Data Types</li>
          <li>Python Comments</li>
          <li>Python Single Line</li>
          <li>Python Multiline</li>
          <li>Python Lists</li>
          <li>Python Operators</li>
          <li>Dictionary in python</li>
          <li>Hashing in python</li>
          <li>Trees in python</li>
          <li>Strings in python</li>
          <li>Tuples in python</li>
          <li>Graphs in python</li>
        </div>
      </div>
      <div className='ctutbody'> 
      <div className='ctutbodyitems'>
        <p>Python Tutorial | Learn Python Programming Language</p>
        <h4>Last Updated : 28 Jan, 2025</h4>
        <hr></hr>
        <div className='cont1'>
          <p>Python Tutorial - Python is one of the most popular programming languages today, known for its simplicity, extensive features and library support. Its clean and straightforward syntax makes it beginner-friendly, while its powerful libraries and frameworks makes it perfect for developers.</p>
          <li>A high-level, interpreted language with easy-to-read syntax.
          Used in various fields like web development, data science, artificial intelligence and automation.</li>
          <li>A high-level, interpreted language with easy-to-read syntax.
          Used in various fields like web development, data science, artificial intelligence and automation.</li>
        </div>
        <div className='cont2'>
        <img src={a} alt='logo'></img>
        <h2>First Python Program</h2>
        <p>Here is a simple Python code, printing a string. We recommend we to edit the code and try to print our own name.</p>
              
        </div>
      </div>
      </div>
      <div className='rtutbody'> this is the right body</div>

    </div>

       
    </div>
    <hr />
    <div className='footer'><LowerFooter/></div>
    </>
  )
}

export default Tutorial;
