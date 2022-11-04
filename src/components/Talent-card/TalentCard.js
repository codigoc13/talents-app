import React, { useState, useEffect } from 'react'
import { getAllStudents } from '../../Helpers/Actions'
import { FaGithub } from 'react-icons/fa'
import './TalentCard.css'
import Swal from 'sweetalert2'

const TalentCard = () => {
  const [studentsInformation, setstudentsInformation] = useState([])
  
  const showAlert = (studentInfo) => {
    Swal.fire({
      imageUrl: studentInfo.avatarUrl,
      imageWidth: 400,
      imageHeight: 300,
      imageAlt: 'A tall image',
      title: studentInfo.name,
      showConfirmButton: false,
      
      html:
        
        `<a href=${studentInfo.CV}>Curriculum Vitae</a> ` 

    })
  }
  useEffect(() => {
    (async () => {
      setstudentsInformation(getAllStudents())
    })()

  }, [])

  return (
    <div >
      <h1 className='title'>Students</h1>
      <div className='container-talents'>

      {
        studentsInformation.map(student => (
          <div key={student.id} className="card-talent" onClick={()=>showAlert(student)}>
            <h2>
              {
                student.name
              }
            </h2>
            <img className='avatar' src={student.avatarUrl} />
            <h3>
              {student.program}
            </h3>
            
          </div>
        ))
      }
      </div>
    </div>
  )
}

export default TalentCard