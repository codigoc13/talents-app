import React, { useState, useEffect } from 'react'
import { getAllStudents } from '../../Helpers/Actions'
import './TalentCard.css'
import Swal from 'sweetalert2'
import { getSymbol } from '../../Helpers/symbols'

const TalentCard = () => {
  const [studentsInformation, setstudentsInformation] = useState([])
  const [symbols, setSymbols] = useState([])

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
                    
        </div>

        <div class="div-ruta">
          <p class="Curse">Desarrollo Web</p>
          <p class="program">${studentInfo.program}</p>
        </div>
        
        <div class="div-name">
            <p class="name">${studentInfo.name}</p>
        </div>

        <div class="social">
            <a target="_blank" href=${studentInfo.github} class="item-social" target="_blanck"><i class="ph-github-logo"></i>Github</a>
            <a target="_blank" href=${studentInfo.portafolio} class="item-social" target="_blanck"><i class="ph-globe"></i>Portafolio</a>
            <a target="_blank" href=${studentInfo.cv} class="item-social" target="_blanck"><i class="ph-file"></i>Resumen</a>
        </div>
      </div>
        `

    })
  }


  useEffect(() => {
    (async () => {
      setstudentsInformation(getAllStudents())
      setSymbols(getSymbol())

    })()

  }, [])

  return (
    <div >
      <h1 className='title'>Talents</h1>
      <div className='container-talents'>

        {
          studentsInformation.map(student => (
            <div key={student.id} className="card-talent" onClick={() => showAlert(student)}>
              <div className='ImageSymbol'>
                <img className='avatar' src={student.avatarUrl} alt="" />
               
                {
                  symbols.filter(name => name.program === student.program).map(filteredName => (
                  <img key={filteredName.id} className='symbol' src={filteredName.urlSymbol} alt=""/>
                  ))
                }
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