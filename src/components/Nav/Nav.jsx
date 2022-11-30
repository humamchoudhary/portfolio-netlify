import React from 'react'
import "./nav.css"
import { FiHome } from "react-icons/fi"
import { FiUser } from "react-icons/fi"
import {HashLink} from 'react-router-hash-link'
import { AiOutlineFolderOpen } from "react-icons/ai"
import { FaBusinessTime } from "react-icons/fa"
import { AiOutlineContacts } from "react-icons/ai"
import { FaHandshake } from "react-icons/fa"
import { useState } from 'react'

const Nav = () => {
  const [activeNav,setActivenav] = useState("/#");
  var r = document.querySelector(':root');
  r.style.setProperty('--blue', window.innerHeight);
  return (
    <nav>
      <HashLink to="#" onClick={()=>setActivenav("/#")}  className={activeNav ==="/#"?'active':''} smooth><FiHome/></HashLink>
      <HashLink to="/#about" onClick={()=>setActivenav("/#about")} className={activeNav ==="/#about"?'active':''}><FiUser /></HashLink>
      <HashLink to="/#portfolio" onClick={()=>setActivenav("/#portfolio")} className={activeNav ==="/#portfolio"?'active':''}><AiOutlineFolderOpen/></HashLink>
      <HashLink to="/#experience" onClick={()=>setActivenav("/#experience")} className={activeNav ==="/#experience"?'active':''}><FaBusinessTime/></HashLink>
      <HashLink to="/#services" onClick={()=>setActivenav("/#services")} className={activeNav ==="/#services"?'active':''}><FaHandshake/></HashLink>
      <HashLink to="/#contact" onClick={()=>setActivenav("/#contact")} className={activeNav ==="/#contact"?'active':''}><AiOutlineContacts/></HashLink>
    </nav>
  )
}

export default Nav