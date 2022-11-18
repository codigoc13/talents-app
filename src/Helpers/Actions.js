export const getAllStudents = () => {
     const students = [
          {
               id: 1,
               name: 'Isabella Zapata Pulgarin',
               nickName: 'Isabella Zapata',
               avatarUrl: "https://res.cloudinary.com/dk9ktxdpj/image/upload/v1668525693/Isabella_Zapata-PhotoRoom_wxqv16.png",              
               program:"FrontEnd",
               cv:"https://drive.google.com/file/d/1s7fR7BkEOjSvDO4Hprj1zN9MI7PWaOHD/view",
               github: "https://github.com/JMosqb11",
               portafolio: "https://jmosqb11.github.io/PORTAFOLIO/Portafolio.html"
          },
          {

               id: 2,
               name: 'Jhonier Andres Mosquera Benitez',
               nickName: 'Jhonier Mosquera',
               avatarUrl: "https://res.cloudinary.com/dk9ktxdpj/image/upload/v1668525693/Jhonier_Mosquera-PhotoRoom_jz0xh0.png",              
               program: "FrontEnd",
               cv:"https://drive.google.com/file/d/1s7fR7BkEOjSvDO4Hprj1zN9MI7PWaOHD/view",
               github: "https://github.com/JMosqb11",
               portafolio: "https://jmosqb11.github.io/PORTAFOLIO/Portafolio.html"
          },
          {

               id: 3,
               name: 'Stiven Arley Pareja Jimenez',
               nickName: 'Stiven Pareja',
               avatarUrl: "https://res.cloudinary.com/dk9ktxdpj/image/upload/v1668525693/Stiven_Pareja-PhotoRoom_tp2e6t.png",              
               program: "FrontEnd",
               cv:"https://drive.google.com/file/d/1s7fR7BkEOjSvDO4Hprj1zN9MI7PWaOHD/view",
               github: "https://github.com/JMosqb11",
               portafolio: "https://jmosqb11.github.io/PORTAFOLIO/Portafolio.html"
          },
          {

               id: 4,
               name: 'Lorena Valentina Montoya Estrada',
               nickName:'Lorena Montoya',
               avatarUrl: "https://res.cloudinary.com/dk9ktxdpj/image/upload/v1668525693/Lorena_Valentina_Montoya.-PhotoRoom_vpjgmx.png",
               program: "BackEnd",
               cv:"https://drive.google.com/file/d/1s7fR7BkEOjSvDO4Hprj1zN9MI7PWaOHD/view",
               github: "https://github.com/JMosqb11",
               portafolio: "https://jmosqb11.github.io/PORTAFOLIO/Portafolio.html"
          },
          {

               id: 5,
               name: 'Anderson Lozano Velásquez',
               nickName: 'Anderson Lozano',
               avatarUrl: "https://res.cloudinary.com/dk9ktxdpj/image/upload/v1668525692/Anderson_Lozano_V.-PhotoRoom_yngamf.png",
               program: "FullStack",
               cv:"https://drive.google.com/file/d/1s7fR7BkEOjSvDO4Hprj1zN9MI7PWaOHD/view",
               github: "https://github.com/JMosqb11",
               portafolio: "https://jmosqb11.github.io/PORTAFOLIO/Portafolio.html"
          },
          
          {

               id: 6,
               name: 'Wiston Alberto Mosquera Mosquera',
               nickName: 'Wiston Mosquera',
               avatarUrl: "https://res.cloudinary.com/dk9ktxdpj/image/upload/v1668525881/Wiston_Mosquera_M.-PhotoRoom_qn1ab6.png",
               program: "FrontEnd",
               cv:"https://drive.google.com/file/d/1s7fR7BkEOjSvDO4Hprj1zN9MI7PWaOHD/view",
               github: "https://github.com/JMosqb11",
               portafolio: "https://jmosqb11.github.io/PORTAFOLIO/Portafolio.html"
          },
          {

               id: 7,
               name: 'Estivinson Murillo Ayala',
               nickName: 'Estivinson Murillo',
               avatarUrl: "https://res.cloudinary.com/dk9ktxdpj/image/upload/v1668525881/Estivinson_Murillo_A.-PhotoRoom_llobqy.png",
               program: "FrontEnd",
               cv:"https://drive.google.com/file/d/1s7fR7BkEOjSvDO4Hprj1zN9MI7PWaOHD/view",
               github: "https://github.com/JMosqb11",
               portafolio: "https://jmosqb11.github.io/PORTAFOLIO/Portafolio.html"
          },
          {

               id: 8,
               name: 'Jhon Edwin Asprilla Guisao ',
               nickName: 'Jhon Edwin Asprilla',
               avatarUrl: "https://res.cloudinary.com/dk9ktxdpj/image/upload/v1668525692/Jhon_Edwin_Asprilla_G.-PhotoRoom_dspxhx.png",
              
               program: "FrontEnd",
               cv:"https://drive.google.com/file/d/1s7fR7BkEOjSvDO4Hprj1zN9MI7PWaOHD/view",
               github: "https://github.com/JMosqb11",
               portafolio: "https://jmosqb11.github.io/PORTAFOLIO/Portafolio.html"
          },
          {

               id: 9,
               name: 'Jhon Edwin Asprilla Guisao ',
               nickName: 'Jhon Edwin Asprilla',
               avatarUrl: "https://res.cloudinary.com/dk9ktxdpj/image/upload/v1668525692/Jhon_Edwin_Asprilla_G.-PhotoRoom_dspxhx.png",

               program: "FrontEnd",
               cv: "https://drive.google.com/file/d/1s7fR7BkEOjSvDO4Hprj1zN9MI7PWaOHD/view",
               github: "https://github.com/JMosqb11",
               portafolio: "https://jmosqb11.github.io/PORTAFOLIO/Portafolio.html"
          },
          {

               id: 10,
               name: 'Anderson Lozano Velásquez',
               nickName: 'Anderson Lozano',
               avatarUrl: "https://res.cloudinary.com/dk9ktxdpj/image/upload/v1668525692/Anderson_Lozano_V.-PhotoRoom_yngamf.png",
               program: "FullStack",
               cv: "https://drive.google.com/file/d/1s7fR7BkEOjSvDO4Hprj1zN9MI7PWaOHD/view",
               github: "https://github.com/JMosqb11",
               portafolio: "https://jmosqb11.github.io/PORTAFOLIO/Portafolio.html"
          }
          
     ]
     return students
}