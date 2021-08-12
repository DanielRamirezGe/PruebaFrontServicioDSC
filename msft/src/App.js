import './index.css';
import React from "react";
import { IoLaptopOutline } from 'react-icons/io5';
import { SiMicrosoft, SiWindows, SiXbox, SiLinkedin, SiTwitter } from 'react-icons/si';
import { BsChevronRight } from 'react-icons/bs';
import {Slideshow, Slide} from "./components/Slider/SliderShow";
import Footer from './components/Footer/Footer';
import Gallery from './components/Gallery/Gallery';
import Gallery2 from './components/Gallery/Gallery2';
import Header from "./components/Header/Header";

import img1 from '../src/assets/12.png'
import img2 from '../src/assets/2.jpg'
import img3 from '../src/assets/LaptopMicrosoft1.png';

function App() {
  return (
      <div>
        <header>
          <Header />
        </header>
        <main>
          <Slideshow>
            <Slide>
              <a href="#/"><img src={img1} alt="" /></a>
            </Slide>
            <Slide>
              <a href="#/"><img src={img2} alt="" /></a>
            </Slide>
          </Slideshow>
        </main>
        <div className="Component-1">
          <div>
            <div id="Icon">
            <SiMicrosoft  size={40}/>
            </div>
            <a href="#/">Elige tu Microsoft 365</a>
          </div>
          <div >
            <div id="Icon">
               <IoLaptopOutline size={40} />
            </div>
            <a href="#/">Comprar Surface</a>
          </div>
          <div>
            <div id="Icon">
              <SiXbox size={40} />
            </div>
             <a href="#/">Comprar Xbox</a>
          </div>
          <div>
             <div id="Icon">
               <SiWindows size={40} />
              </div>
             <a href="#/">Obtener Windows 10</a>
          </div>
        </div>
        <Gallery />
            
        <div id="container-img">
          <div id="c-img">
             <a href="#/"><img src={img3} alt="" /></a>
          </div>
          <div id="c-text">
            <h2>Actialización de Windows 10</h2>
            <p>Nuevas caracteristicas que te ayudaran a dedicarte a lo que te <br /> apasiona,
              a conectarte más, y a devolver un poco de tu tiempo
            </p>
             <button id="c-button">
               <a href="#/">Más informacion <BsChevronRight size={20} /></a> 
             </button>
          </div>
        </div>
        <Gallery2 />
        <div id="div-covid">
           <h1>La respuesta de Microsoft a la COVID-19</h1>
           <p>Lee cómo estamos respondiendo al brote de COVID-19 y encuentra resursos para
             ayudarte
           </p>
           <a href="#/">Más informacion <BsChevronRight size={20} /></a>
        </div>
        <div id="red-1">
           <p>Seguir Microsoft</p>
           <a href="#/"><SiTwitter size={25} style={{color: '#1DA1F2'}}/></a>
           <a href="#/"><SiLinkedin size={25} style={{color: '#0A66C2'}} /></a>
        </div>
        <footer><Footer /></footer>
        
      </div>
  );
}

export default App;
