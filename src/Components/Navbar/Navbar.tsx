import React, {useState} from 'react';
import { LinkWrapper, NavBarWrapper } from './Navbar.Style';
import {AiOutlineHome, AiOutlineUser, AiOutlineMessage, AiOutlineFundProjectionScreen} from "react-icons/ai"
import {BiBook} from "react-icons/bi"


const Navbar = () => {
    const [page, setPage] = useState('home')
    
    const handleNavigation = (route : string) => {
        setPage(route)
    }
    return (
        <NavBarWrapper>
           <LinkWrapper 
                href='#home' 
                onClick={()=> handleNavigation("home")}
                className={`${page==="home" ? "active" : ''}`}>
                <AiOutlineHome />
           </LinkWrapper>
           <LinkWrapper 
                href='#about' 
                onClick={()=> handleNavigation("about")}
                className={`${page==="about" ? "active" : ''}`}>
                <AiOutlineUser />
           </LinkWrapper>
           <LinkWrapper 
                href='#experience' 
                onClick={()=> handleNavigation("experience")}
                className={`${page==="experience" ? "active" : ''}`}>
                <BiBook />
           </LinkWrapper>
           <LinkWrapper 
                href='#portfolio' 
                onClick={()=> handleNavigation("portfolio")}
                className={`${page==="portfolio" ? "active" : ''}`}>
                <AiOutlineFundProjectionScreen />
           </LinkWrapper>
           <LinkWrapper 
                href='#contact' 
                onClick={()=> handleNavigation("contact")}
                className={`${page==="contact" ? "active" : ''}`}>
                <AiOutlineMessage />
           </LinkWrapper>
        </NavBarWrapper>
    );
}



export default Navbar;