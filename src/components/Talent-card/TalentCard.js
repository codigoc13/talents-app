import React, { useState, useEffect } from 'react'
import { getAllStudents } from '../../Helpers/Actions'
import './TalentCard.css'
import Swal from 'sweetalert2'

const TalentCard = () => {
  const [studentsInformation, setstudentsInformation] = useState([])
  
  const showAlert = (studentInfo) => {
    Swal.fire({
      showConfirmButton: false,
      
      html:  
        `
      <div class="container-participant-popap">

        <div class="card-font">
        </div>

        <div>
          <img class="avatarUrl" src=${studentInfo.avatarUrl} alt=""/>
          <img  class="symbolUrl" src=${studentInfo.symbolUrl} alt=""/>
        </div>

        <div class="div-ruta">
          <p class="Curse">Desarrollo Web</p>
          <p class="program">${studentInfo.program}</p>
        </div>
        
        <div class="div-name">
            <p class="name">${studentInfo.name}</p>
        </div>

        <div class="social">
            <a href="" class="item-social"><i class="ph-github-logo"></i>Github</a>
            <a href="" class="item-social"><i class="ph-globe"></i>Portafolio</a>
            <a href=${studentInfo.cv} class="item-social"><i class="ph-file"></i>Resumen</a>
        </div>
      </div>
        ` 

    })
  }
  useEffect(() => {
    (async () => {
      setstudentsInformation(getAllStudents())
    })()

  }, [])

  return (
    <div >
      <h1 className='title'>Talents</h1>
      <div className='container-talents'>

      {
        studentsInformation.map(student => (
          <div key={student.id} className="card-talent" onClick={()=>showAlert(student)}>
            <div className='ImageSymbol'>
              <img className='avatar' src={student.avatarUrl} alt=""/>
              <img className='symbol' src={student.symbolUrl} alt=""/>
            </div>
            
            
            <div className='Name-program'>

            <h5 className='Name'>
              {student.nickName}
            </h5>

            <h4>
              {student.program}
            </h4>

            </div>
            
          </div>
        ))
      }
      </div>
    </div>
  )
}

export default TalentCard