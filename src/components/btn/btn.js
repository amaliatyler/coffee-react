import React from 'react';

import './btn.scss';

const Btn = ( { link } ) => {
    return (
        <a href={link} target="_blank" rel="noreferrer" className="outline-btn">
            More
        </a>
    )
}

export default Btn;