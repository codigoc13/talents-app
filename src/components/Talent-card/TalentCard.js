import React, { useState, useEffect } from 'react'
import { getAllStudents } from '../../Helpers/Actions'
import './TalentCard.css'

const TalentCard = () => {
  const [studentsInformation, setstudentsInformation] = useState([])

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
          <div key={student.id} className="card-talent">
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