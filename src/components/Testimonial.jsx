import React from 'react'

function Testimonial() {
  return (
    <div id='testimonial'>
        <h2>Testimonials</h2>
        <section>
            <TestimonialCard name={"Aditya"} feedback={"Your Fronted skills is so good;"}/>
            <TestimonialCard name={"Aditya"} feedback={"Your Fronted skills is so good;"}/>

        </section>
    </div>
  )
}

const TestimonialCard = ({name,feedback}) => (
    <article>
        <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" />
        <h4>{name}</h4>
        <p>{feedback}</p>
    </article>
) 

export default Testimonial;