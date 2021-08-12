import React, { useRef, useEffect } from 'react'
import izquierda from '../../assets/png/002-izquierda.png'
import derecha from '../../assets/png/001-derecha.png'
import styled from 'styled-components'

const Slideshow = ({children}) => {
    const slideshow = useRef(null)
    const intervaloSlideshow = useRef(null);

    const siguiente = () => {
        if(slideshow.current.children.length > 0){
            const firstElement = slideshow.current.children[0];
            slideshow.current.style.transition = `300ms ease-out all`;
            const tamañoSlide = slideshow.current.children[0].offsetWidth;
            slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;
            const transicion = () => {
            slideshow.current.style.transition = 'none';
            slideshow.current.style.transform = `translateX(0)`;
            slideshow.current.appendChild(firstElement);

            slideshow.current.removeEventListener('transitionend', transicion);
        }
            slideshow.current.addEventListener('transitionend', transicion)
        }
    }
    
    const anterior = () => {
        if(slideshow.current.children.length > 0){
            const index = slideshow.current.children.length-1;
            const endElement = slideshow.current.children[index];
            slideshow.current.insertBefore(endElement, slideshow.current.firstChild);

            slideshow.current.style.transicion = 'none';
            const tamañoSlide = slideshow.current.children[0].offsetWidth;
            slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;

            setTimeout(() => {
                slideshow.current.style.transition = '300ms ease-out all';
                slideshow.current.style.transform = `translateX(0)`; 
            })
        }
    }
    
    useEffect(() => {
        intervaloSlideshow.current = setInterval(() => {
            siguiente();
        }, 5000);

        slideshow.current.addEventListener('mouseenter', () => {
            clearInterval(intervaloSlideshow.current);
        });
        
        slideshow.current.addEventListener('mouseleave', () => {
            intervaloSlideshow.current = setInterval(() => {
                siguiente();
            }, 5000);
        });
    }, [])
    
    return(
    <ContenedorPrincipal>
      <ContenedorSlideshow ref={slideshow}>
          {children}
      </ContenedorSlideshow>
          <Controles>
              <Boton onClick={anterior}>
                  <img src={izquierda} alt="" />
              </Boton>
              <Boton derecho onClick={siguiente}>
                  <img src={derecha} alt="" />
              </Boton>
          </Controles>
      </ContenedorPrincipal>
    )
}

const ContenedorPrincipal = styled.div`
      position: relative`;
const ContenedorSlideshow = styled.div`
      display: flex;
      flew-wrap: nowrap;
      `;
const Slide = styled.div`
      min-width: 100%;
      overflow: hidden;
      transition: .3s ease all;
      z-index: 10
      position: relative;

      img {
          width: 100%;
          vertical-aling: top;
      }
      `;

const Controles = styled.div`
      position: absolute;
      top: 180px;
      z-index: 20;
      width: 100%;
      height: 100%;
      pointer-events: none;
`;

const Boton = styled.button`
      pointer-events: all;
      background: none;
      border: none;
      cursor: pointer;
      outline: none;
      width: 50px;
      height: 100px;
      text-align: center;
      position: absolute;
      transition: .3s ease all;

      path {
          filter: ${props => props.derecha ? 'drop-shadow(-2px 0px 0px #fff )' : 'drop-shadow(2px 0px 0px #fff )' };
      }

      ${props => props.derecho ? 'right: 0': 'left: 0'}
`;

export { Slideshow, Slide };