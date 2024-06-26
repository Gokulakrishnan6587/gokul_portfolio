import React from 'react'

function ProjectCard({src,link,h3}) {
  return (
    <div>
            <a href={link}>
            <img className='hover' src={src} alt="viber logo" />
            <h3>{h3}</h3>
            <p>Streaming app</p>
            </a>
    </div>
  )
}

export default ProjectCard
