import React from 'react'
import {AiOutlineMenu} from "react-icons/ai"
function Header({menuOpen,setMenuOpen}) {
    return (
        <nav>
            <NavContent />
            <button onClick={()=>setMenuOpen(!menuOpen)}>
                <AiOutlineMenu />
            </button>
        </nav>
    )
}

const NavContent = () => {
    return (
        <>
            <h2>Aditya.</h2>
            <div>
                <a href="#home">Home</a>
                <a href="#work">Work</a>
                <a href="#experience">Experience</a>
                <a href="#services">Services</a>
                <a href="#testimonial">Testimonial</a>
                <a href="#contact">Contact</a>
            </div>

            <a href="mailto:aaditya1392@gmail.com">
                <button>Email</button>
            </a>
        </>
    )
}

export function HeaderPhone() {
    return (
      <div className="navPhone">
          <navContent />
      </div>
    )
  }
export default Header