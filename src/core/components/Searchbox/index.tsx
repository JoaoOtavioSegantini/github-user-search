import React from 'react';
import ButtonIcon from '../ButtonIcon';

import './styles.scss'

type search = {
    value: () => void;
}


const Searchbox = ({value}: search) => (
    <div className="searchbox-container">
        <div className="searchbox-title">
           <h1>Encontre um perfil Github</h1>
        
              <input placeholder="Usuário Github" type="text" className="searchbox-input"/>
         
          <ButtonIcon text="Encontrar" onClick={value}/>
        </div>
    </div>
);

export default Searchbox;