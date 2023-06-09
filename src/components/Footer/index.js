import React from 'react';
import styles from './style.css';
import logo from './logodsc.png';


export default function Footer() {

    return (      
    <div className='footer-body'>
        <div className='footer-one'>
        <div>
            <p className='logo'></p>
            <img src={logo} alt='logo' /> 
            </div>
            <h2 className='name-footer'>Digital Store</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do euismod tempod incididunt ut labore it dolore.</p>
            
            <a href='#' className='footer-link'>
            <p>colocar as redes aqui</p>
            </a>
        </div>

        <div className='footer-container'>
            <h3 className='footer-item1'>Informações</h3>
            <li>
                <a href='#' className='footer-link'>Sobre Drip Store</a>
            </li>
            <li>
                <a href='#' className='footer-link'>Sugurança</a>
            </li>
            <li>
                <a href='#' className='footer-link'>Wishlist</a>
            </li>
            <li>
                <a href='#' className='footer-link'>Blog</a>
            </li>
            <li>
                <a href='#' className='footer-link'>Trabalhe Conosco</a>
            </li>
            <li>
                <a href='#' className='footer-link'>Meus Pedidos</a>
            </li>
        </div>

        <div className='footer-container-item1'>
            <h3>Categorias</h3>
            
            <li>
                <a href='#' className='footer-link'>Camisetas</a>
            </li>
            <li>
                <a href='#' className='footer-link'>Calças</a>
            </li>
            <li>
                <a href='#' className='footer-link'>Bonés</a>
            </li>
            <li>
                <a href='#' className='footer-link'>HeadPhones</a>
            </li>
            <li>
                <a href='#' className='footer-link'>Tênis</a>
            </li>
        </div>

        <div className='footer-container-item2'>
            <h3>Contato</h3>
            <p>Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</p>
            <p>(85) 3051-3411</p>
        </div>

        <hr></hr>
        <div className='footer-container-item3'>
            @ 2022 Digital College
        </div>            
    </div>
    
  );
}
