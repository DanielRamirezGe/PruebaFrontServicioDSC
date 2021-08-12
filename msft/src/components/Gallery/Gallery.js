import React from 'react'
import styled from 'styled-components'
import '../Gallery/Gallery.css'
import { BsChevronRight } from 'react-icons/bs';
import gallery1 from '../../assets/gallery-1.jpg'
import gallery2 from '../../assets/gallery-2.jpg'
import gallery3 from '../../assets/gallery-3.jpg'
import gallery4 from '../../assets/gallery-4.webp'

const Gallery = () => {
   return (
     <ContenedorPrincipal>
         <ContainerGallery>
         <Galleryshow>
                <a href="#/"><img src={gallery1} width="260px" height="160px" alt=""/></a>
                <TextGallery>
                    <h3>Surface Pro 7</h3>
                    <p>Más del Pro que conoces. Más potente que nunca, Surface Pro 7 incluye un procesador Intel® Core™ para portátil.</p>
                </TextGallery>
                <Button>
                   <a href="#/">Compra ahora<BsChevronRight size={20} /></a>
                </Button>
             </Galleryshow>
             <Galleryshow>
                <a href="#/"><img src={gallery2} width="260px" height="160px" alt=""/></a>
                <TextGallery>
                    <h3>Xbox Game Pass Ultimate</h3>
                    <p>Recibe el primer mes de tu membresía por $10. Juega con tus propios dispositivos. Incluye EA Play. Oferta disponible solo para los suscriptores nuevos.</p>
                </TextGallery>
                <Button>
                   <a href="#/">Suscríbite ahora<BsChevronRight size={20} /></a>
                </Button>
             </Galleryshow>
             <Galleryshow>
                <a href="#/"><img src={gallery3} width="260px" height="160px" alt=""/></a>
                <TextGallery>
                    <h3>Microsoft Edge</h3>
                    <p>Un rendimiento de categoría mundial con más privacidad, más productividad y más valor mientras navegas.</p>
                </TextGallery>
                <Button>
                   <a href="#/">Descargar ahora<BsChevronRight size={20} /></a>
                </Button>
             </Galleryshow>
             <Galleryshow>
                <a href="#/"><img src={gallery4} width="260px" height="160px" alt=""/></a>
                <TextGallery>
                    <h3>Microsoft OneDrive</h3>
                    <p>Guarda tus archivos y fotos en OneDrive y accede a ellos desde cualquier dispositivo y en cualquier lugar.</p>
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
      weight: 60%;
      margin-left: 65px;
      margin-right: 85px;
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

export default Gallery;