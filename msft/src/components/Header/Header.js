import React from 'react'
import Logo from '../../assets/logo.png';
import '../Header/Header.css'
import { IoCartOutline, IoPersonAddOutline, IoChevronDown } from 'react-icons/io5'
import { VscSearch } from 'react-icons/vsc'

const Header = () => {
        return(
           <header>
               <nav id="nav-header">
                       <div id="div-logo"> <img src={Logo} alt="Logo" width="140px" /></div>
                       <div id="div-menu">
                         <a href="#/">Microsoft 365</a>
                         <a href="#/">Office</a>
                         <a href="#/">Windows</a>
                         <a href="#/">Surface</a>
                         <a href="#/">Xbox</a>
                         <a href="#/">Soporte</a>
                       </div>
                       <div id="div-menu-1">
                         <div id="div-dinamic">
                           <a href="#/">Todo Microsoft <IoChevronDown size={12} /></a>
                         </div>
                         <a href="#/"><VscSearch size={22} /></a>
                         <a href="#/"><IoCartOutline size={22} /></a>
                         <a href="#/"><IoPersonAddOutline size={22} /></a>
                       </div>
               </nav>
           </header>
        )
}

export default Header;
