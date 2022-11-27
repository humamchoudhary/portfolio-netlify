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
  const [activeNav,setActivenav] = useState("/Portfolio/#");
  return (
    <nav>
      <HashLink to="#" onClick={()=>setActivenav("/Portfolio/#")}  className={activeNav ==="/Portfolio/#"?'active':''} smooth><FiHome/></HashLink>
      <HashLink to="/Portfolio/#about" onClick={()=>setActivenav("/Portfolio/#about")} className={activeNav ==="/Portfolio/#about"?'active':''}><FiUser /></HashLink>
      <HashLink to="/Portfolio/#portfolio" onClick={()=>setActivenav("/Portfolio/#portfolio")} className={activeNav ==="/Portfolio/#portfolio"?'active':''}><AiOutlineFolderOpen/></HashLink>
      <HashLink to="/Portfolio/#experience" onClick={()=>setActivenav("/Portfolio/#experience")} className={activeNav ==="/Portfolio/#experience"?'active':''}><FaBusinessTime/></HashLink>
      <HashLink to="/Portfolio/#services" onClick={()=>setActivenav("/Portfolio/#services")} className={activeNav ==="/Portfolio/#services"?'active':''}><FaHandshake/></HashLink>
      <HashLink to="/Portfolio/#contact" onClick={()=>setActivenav("/Portfolio/#contact")} className={activeNav ==="/Portfolio/#contact"?'active':''}><AiOutlineContacts/></HashLink>
    </nav>
  )
}

export default Nav