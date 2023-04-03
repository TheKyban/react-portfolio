import React, { useRef } from 'react'
import { animate, motion } from "framer-motion";
import Typewriter from 'typewriter-effect';
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs"
import me from "../assets/avatar.png"

function Home() {

    const clientCount = useRef(null)
    const projectCount = useRef(null)

    const animationClientCount = () => {
        animate(0, 100, {
            duration: 1,
            onUpdate: (v) =>  clientCount.current = v.toFixed()
        })
    }
    const animationProjectCount = () => {
        animate(0, 500, {
            duration: 1,
            onUpdate: (v) => projectCount.current = v.toFixed()
        })
    }
   
    const animations = {
        h1: {
            initial: {
                x: "-100%",
                opacity: 0,
            },
            whileInView: {
                x: 0,
                opacity: 1,
            }
        },
        button: {
            initial: {
                y: "-100%",
                opacity: 0,
            },
            whileInView: {
                y: 0,
                opacity: 1,
            }
        }
    }
    return (
        <div id="home">
            <section>
                <div>
                    <motion.h1
                        {...animations.h1}
                    >
                        Hi, I Am <br /> Aditya Kumar
                    </motion.h1>

                    <Typewriter options={{
                        strings: ["A Developer", "A Designer", "A Creator"],
                        autoStart: true,
                        loop: true,
                        cursor: "",
                        wrapperClassName: "typewriterpara"
                    }} />

                    <div>
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=aaditya1392@gmail.com" target='blank'>Hire Me</a>
                        <a href="#work"> Projects  <BsArrowUpRight /> </a>
                    </div>

                    <article>
                        <p>
                            +<motion.span whileInView={animationClientCount()} ref={clientCount}></motion.span>
                        </p>
                        <span>Clients WorldWide</span>
                    </article>

                    <aside>
                        <article>
                            <p>
                                +<motion.span whileInView={animationProjectCount()} ref={projectCount}></motion.span>
                            </p>
                            <span>Projects</span>
                        </article>

                        <article data-special>
                            <p>Contact</p>
                            <span>aaditya1392@gmail.com</span>
                        </article>
                    </aside>
                </div>
            </section>

            <section>
                <img src={me} alt="Aditya" />
            </section>
            <BsChevronDown />
        </div>
    )
}

export default Home