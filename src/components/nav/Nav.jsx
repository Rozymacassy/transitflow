import React from 'react'
import './Nav.css'
import {AiOutlineDown} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'
import {ImTwitter} from 'react-icons/im'
import {AiFillLinkedin} from 'react-icons/ai'


const Nav = () => {
  return (
    <nav>
      <div className="nav-link">
      <a href="#" >Home</a>
      <a href="#" >About</a>
      <a href="#" >Pages <AiOutlineDown/></a>
      <a href="#" >Project</a>
      <a href="#" >Contact</a> 
      </div>

      <div className="socials">
        <a href="#"><AiOutlineInstagram/></a>
        <a href="#"><BsFacebook/></a>
        <a href="#"><ImTwitter/></a>
        <a href="#"><AiFillLinkedin/></a>
      </div>

      <button className='btn-nav'>
        <a href="#">
            Request Qoute
        </a>
      </button>


    </nav>
  )
}

export default Nav