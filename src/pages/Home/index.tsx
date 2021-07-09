import React from 'react'
import './styles.scss'

import ButtonIcon from 'core/components/ButtonIcon'
import { Link } from 'react-router-dom';

const Home = () => (
    <div className="home-container body-color">
            <div className="home-text">
                <h1 className="text-title">Desafio do Capítulo 3, <br />  Bootcamp DevSuperior</h1>
                <div className="text-subtitle">Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior.< br/><br /><div >Favor observar as instruções passadas no capítulo sobre a elaboração deste projeto. < p/><p>Este design foi adaptado a partir de Ant Design System for Figma, de Mateusz Wierzbicki: <span>antforfigma@gmail.com</span></p>
        </div>
              <Link to="/search"><ButtonIcon text="Começar" /></Link>
            </div>
        </div>

    </div>
   
);

export default Home;