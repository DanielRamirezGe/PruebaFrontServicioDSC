import React from 'react'
import '../Footer/Footer.css'
import { IoEarth } from 'react-icons/io5'
import { MdCopyright } from 'react-icons/md'

const Footer = () =>{
    return (
      <div id="footer">
       <div id="footer-1">
        <div>
            <h3>Novedades</h3>
            <li><a href="#/">Microsoft 365</a></li>
            <li><a href="#/">Aplicaciones de Windows 10</a></li>
        </div>
        <div>
            <h3>Microsoft Store</h3>
            <li><a href="#/">Perfil de la cuenta</a></li>
            <li><a href="#/">Centro de descargas</a></li>
            <li><a href="#/">Soporte de Microsoft Store</a></li>
            <li><a href="#/">Devoluciones y reembolsos</a></li>
            <li><a href="#/">Seguimiento de pedidos</a></li>
        </div>
        <div>
           <h3>Educación</h3>
           <li><a href="#/">Office 365 para escuelas</a></li>
           <li><a href="#/">Microsoft Azure en educación</a></li>
        </div>
        <div>
            <h3>Grandes Empresas</h3>
            <li><a href="#/">Azure</a></li>
            <li><a href="#/">AppSource</a></li>
            <li><a href="#/">Automotriz</a></li>
            <li><a href="#/">Gobierno</a></li>
            <li><a href="#/">Atención para la salud</a></li>
            <li><a href="#/">Manufactura</a></li>
            <li><a href="#/">Servicio financieros</a></li>
            <li><a href="#/">Comercio directo</a></li>
        </div>
        <div>
            <h3>Desarrollador</h3>
            <li><a href="#/">Microsoft Visual Studio</a></li>
            <li><a href="#/">Centro de desarrollo</a></li>
            <li><a href="#/">Channel 9</a></li>
            <li><a href="#/">Centro para desarrolladores de <br /> Microsoft 365</a></li>
            <li><a href="#/">Programa para desarrolladores de <br />Microsoft 365</a></li>
        </div>
        <div>
            <h3>Compañia</h3>
            <li><a href="#/">Trabajos</a></li>
            <li><a href="#/">Acerca de Microsoft</a></li>
            <li><a href="#/">Privacidad en Microsoft</a></li>
            <li><a href="#/">Inversionistas</a></li>
        </div>
        </div>
        <div id="footer-2">
            <div>
              <a href="#/"><IoEarth size={22} />Español (México)</a>
            </div>
            <div id="f-2">
              <a href="#/">Ponte en contacto con Microsoft</a>
              <a href="#/">Privacidad</a>
              <a href="#/">Aviso legal</a>
              <a href="#/">Marcas Registradas</a>
              <a href="#/">Sobre nuestra publicidad</a>
              <a href="#/"><MdCopyright />Microsoft 2021</a>
            </div>
        </div>
      </div>
    )
}

export default Footer;