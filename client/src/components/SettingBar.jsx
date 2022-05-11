import React from 'react';
import toolState from "../store/toolState";

const SettingBar = () => {

    return (
        <div className="settingbar">
            <label htmlFor="line-width">Line width</label>
            <input
                style={{margin: '0 10px'}}
                id="line-width"
                type="number"
                defaultValue={1}
                min={1}
                max={10}
                onChange={(e => toolState.setLineWidth(e.target.value))}
            />
            <label htmlFor="border-color">Border color</label>
            <input
                style={{margin: '0 10px'}}
                id="border-color"
                type="color"
                onChange={e => toolState.setStrokeColor(e.target.value)}
            />
        </div>
    );
};

export default SettingBar;
