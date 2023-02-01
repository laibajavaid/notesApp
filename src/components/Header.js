import React from "react";

const Header = ({ handleToggleMode }) => {
    return (
        <div className="headerContainer">
            <h1>Notes</h1>
            <button onClick={() => handleToggleMode((previousMode) => !previousMode)} className="toggleModeButton">Toggle Mode</button>
        </div>
    )
}

export default Header; 