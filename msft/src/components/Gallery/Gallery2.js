import React from 'react'
import styled from 'styled-components'
import '../Gallery/Gallery.css'
import { BsChevronRight } from 'react-icons/bs';
import gallery5 from '../../assets/gallery-5.webp'
import gallery6 from '../../assets/gallery-6.webp'
import gallery7 from '../../assets/gallery-7.webp'
import gallery8 from '../../assets/gallery-8.webp'

const Gallery2 = () => {
   return (
     <ContenedorPrincipal>
         <ContainerGallery>
         <Galleryshow>
                <a href="#/"><img src={gallery5} width="260px" height="160px" alt=""/></a>
                <TextGallery>
                    <h3>Surface para empresas</h3>
                    <p>No importa lo que hagas, tenemos un Surface para ayudarte.</p>
                </TextGallery>
                <Button>
                   <a href="#/">Compra ahora<BsChevronRight size={20} /></a>
                </Button>
             </Galleryshow>
             <Galleryshow>
                <a href="#/"><img src={gallery6} width="260px" height="160px" alt=""/></a>
                <TextGallery>
                    <h3>Microsoft Teams</h3>
                    <p>Chatea, reúnete, llama y colabora.</p>
                </TextGallery>
                <Button>
                   <a href="#/">Más información<BsChevronRight size={20} /></a>
                </Button>
             </Galleryshow>
             <Galleryshow>
                <a href="#/"><img src={gallery7} width="260px" height="160px" alt=""/></a>
                <TextGallery>
                    <h3>Windows 10 Enterprise</h3>
                    <p>Descarga la evaluación gratuita de 90 días para profesionales de TI.</p>
                </TextGallery>
                <Button>
                   <a href="#/">Descargar ahora<BsChevronRight size={20} /></a>
                </Button>
             </Galleryshow>
             <Galleryshow>
                <a href="#/"><img src={gallery8} width="260px" height="160px" alt=""/></a>
                <TextGallery>
                    <h3>Soluciones de trabajo híbrido</h3>
                    <p>Conoce nuestra estrategia, las lecciones que Microsoft va aprendiendo sobre la marcha, además de cómo ayudar a tus empleados y cómo satisfacer las necesidades nuevas de los clientes.</p>
                </TextGallery>
                <Button>
                   <a href="#/">Más información<BsChevronRight size={20} /></a>
                </Button>
             </Galleryshow>
          </ContainerGallery>
     </ContenedorPrincipal>
   )
}

const ContenedorPrincipal = styled.div`
      weight: 80%;
      margin-left: 60px;
      margin-right: 80px;
      padding: 15px;
      `;

const ContainerGallery = styled.div`
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      `;

const Galleryshow = styled.div`
      width: 23%;
`;

const TextGallery = styled.div`
      
`;

const Button = styled.button`
      border: 0;
      background: #fff;
      padding-top: 10px;
`;

export default Gallery2;