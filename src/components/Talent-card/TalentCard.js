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

        <section class="section-description-participant">

            <div class="program">
              <h1>${studentInfo.program}</h1>
            </div>

            <div class="name-participant">
              <h2>${studentInfo.name}</h2>
            </div>

            <div class="container-links-profiles">
              <a href="" class="links-profile">Github</a>
              <a href="" class="links-profile">Portafolio</a>
              <a href=${studentInfo.CV} class="links-profile" target="_blanck">Curriculum Vitae</a>
            </div>
        </section>

        <section>
            <div>
              <img class="img-popap" src=${studentInfo.avatarUrl} alt=${studentInfo.name}>
            </div>          
        </section>

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
            
            <img className='avatar' src={student.avatarUrl} alt=""/>
            
            <div className='Name-program'>

            <h5>
              {student.name}
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