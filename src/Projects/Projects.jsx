import React from 'react'
import styles from './ProjectsStyle.module.css'
import viber from '../assets/viberr.png'
import freshBurger from '../assets/fresh-burger.png'
import hippser from '../assets/hipsster.png'
import fitlift from '../assets/fitlift.png'


function Projects() {
  return (
    <section id='projects' className={styles.container}>
        <h1 className='sectiontitle'>Projects</h1>
        <div className={styles.projectContainer}>
        <a href="https://github.com/Gokulakrishnan6587/Adding_cart">
                <img className='hover' src={viber} alt="viber logo" />
                <h3>viber</h3>
                <p>Streaming</p>
            </a> 
            <a href="https://github.com/Gokulakrishnan6587/gokul_portfolio">
                <img className='hover' src={freshBurger} alt="viber logo" />
                <h3>Fresh Burger</h3>
                <p>Restarunt App</p>
            </a>
            <a href="https://github.com/Gokulakrishnan6587/gokul_portfolio">
                <img className='hover' src={hippser} alt="viber logo" />
                <h3>Hipster</h3>
                <p>Cooler Shop</p>
            </a>
            <a href="https://github.com/Gokulakrishnan6587/gokul_portfolio">
                <img className='hover' src={fitlift} alt="viber logo" />
                <h3>Fitlift</h3>
                <p>Fitness App</p>
            </a>
            </div>
    </section>
  )
}

export default Projects
