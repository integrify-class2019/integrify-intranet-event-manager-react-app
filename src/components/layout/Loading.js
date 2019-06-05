import React from 'react';

import '../../css/loading.css';

const Loading = () => {
    return (
        <div className="loader-container">
            <img src="../../assets/svg-loader/giphy.gif" alt="loader" className="loader" />;
        </div>
    );
};

export default Loading;
