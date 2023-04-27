import React from 'react';

import './divider.scss';
import whiteBeans from '../../img/icons/beans_white.svg';

const Divider = () => {
    return (
        <div className="divider">
            <span className="divider__left"></span>
            <img src={whiteBeans} alt="coffee beans icon" className="divider__icon"></img>
            <span className="divider__right"></span>
        </div>
    )
}

export default Divider;

