import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CheckBoxes = ({titles}) => {

    const checkBoxesStyle = {
        display: 'flex',
        justifyContent: 'start',
        gap: '2em',
        margin: '2em',
        color: '#1e1e1e',
    }

    return (
    <>
        <div style={checkBoxesStyle}>
            {titles.map((title) => (
                <label key={title}>
                   <input type="checkbox" value={title}/>
                   {title} 
                </label>
            ))}
        </div>
        
    </>
    );
        
};

CheckBoxes.propTypes = {
    titles: PropTypes.array.isRequired
};

export default CheckBoxes;
