import React from 'react';

import './styles.scss'
type Props = {
    text: string;
    onClick?: () => void;
}

const ButtonIcon = ({ text, onClick }: Props) => (
    <button className="btn btn-primary btn-icon" onClick={onClick}>
        <h6>{text}</h6>
    </button>

);

export default ButtonIcon;