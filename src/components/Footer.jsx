import React from 'react'
import avatar from "../assets/avatar.png"
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiOutlineArrowUp } from 'react-icons/ai'
function Footer() {
    return (
        <footer>
            <div>
                <img src={avatar} alt="" />
                <h2>Aditya Kumar</h2>
                <p>Motivation is temporary, but discipline last forever.</p>
            </div>

            <aside>
                <h2>Social Media</h2>
                <article>
                    <a  href="https://www.github.com/aditya_kr_chaudhary"><AiFillInstagram /></a>
                    <a  href="https://www.github.com/TheKyban"><AiFillLinkedin /></a>
                    <a  href="https://www.github.com/TheKyban"><AiFillGithub /></a>
                </article>
            </aside>
            <a href="#home"><AiOutlineArrowUp /></a>
        </footer>
    )
}

export default Footer