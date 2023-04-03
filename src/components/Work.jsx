import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"

import data from "../assets/data.json"

function Work() {
  return (
    <div id='work'>
        <h2>WORK</h2>
        <section>
            <article>
                <Carousel showArrows={false} showIndicators={false} showStatus={false}
                    showThumbs={false}
                    interval={2000}
                    infiniteLoop={true}
                    autoPlay={true}
                >
                    {
                        data.projects.map(i=> (
                            <div key={i.title} className='workItems'>
                                <img src={i.imgSrc} alt={i.title} />
                                <aside>
                                    <h3>{i.title}</h3>
                                    <p>{i.description}</p>
                                    <a href={i.url} rel="noreferrer" target='_blank'>View Demo</a>
                                </aside>
                            </div>
                        ))
                    }
                </Carousel>
            </article>
        </section>
    </div>
  )
}

export default Work