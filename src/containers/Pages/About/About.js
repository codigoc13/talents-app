import React from 'react'
import './About.css'
import description from '../../../Assets/images/description.jpg'

const About = () => {
  const titulo = 'El talento no debe tener estrato social'
  return (
    <div className="container-principal">
      <div className="container-about">
        <div className="container-titles">
          <h1 className="title-aboutUs">Escuela de Código Comuna C13</h1>
          <h2 className='slogan'>{titulo}</h2>
        </div>
      </div>

      <div>
        <iframe
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/Gx2EHOrCuZU"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="container-description">
        <img className="image-description" src={description} alt="" />
      </div>

      <div className="container-description">
        <iframe
          width="80%"
          height="500"
          src="https://www.youtube.com/embed/q2mg3QTxef0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}

export default About
