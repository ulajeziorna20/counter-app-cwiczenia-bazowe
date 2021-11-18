import React from "react";
import './ButtonsPanel.css';


function ButtonsPanel(props) {

    return (
        <div>
            {/* Sprawdziłam czy mój component się wgl podpiął: Hejo ButtonsPanel! */}
            <button onClick={() => {
                // console.log(`add clicked!`);
                props.buttonMethod(`add`);
            }}>Add 1</button>
            <button onClick={() => {
                props.buttonMethod(`reinit`);
            }}>ReInit</button>
            <button onClick={() => {
                props.buttonMethod(`reset`);
            }}>Reset</button>
        </div>
    )
}

export default ButtonsPanel;