import React from 'react';

import '../../css/loading.css';

const Loading = () => {
    return (
        <div className="loader-container">
            <img src="../../../src/assets/svg-loader/puff.svg" alt="loader" className="loader" />;
        </div>
    );
};

export default Loading;
