import React from 'react';

import './Backdrop.css';

const Backdrop = ({ handleBackdropClick }) => {
    return <div className="backdrop" onClick={handleBackdropClick} />;
};

export default Backdrop;
