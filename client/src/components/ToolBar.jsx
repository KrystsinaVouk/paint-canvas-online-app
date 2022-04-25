import React from 'react';
import "../styles/toolbar.scss"

const ToolBar = () => {
    return (
        <div className="toolbar">
            <button className="toolbar__btn brush"/>
            <button className="toolbar__btn circle"/>
            <button className="toolbar__btn rect"/>
            <button className="toolbar__btn eraser"/>
            <input className="toolbar__palette" type='color' />
            <button className="toolbar__btn undo"/>
            <button className="toolbar__btn redo"/>
            <button className="toolbar__btn save"/>
        </div>
    );
};

export default ToolBar;
