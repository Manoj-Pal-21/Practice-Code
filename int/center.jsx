import React from 'react';

const App = () => {
    const outerDivStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid black",
        height: "100vh"
    };

    const innerDivStyle = {
        textAlign: "center"
    };

    return (
        <div style={outerDivStyle}>
            <div style={innerDivStyle}>Hello, World!</div>
        </div>
    );
};

export default App;
