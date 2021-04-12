import React, { Component } from 'react';

function Reset(props) {
    
    const onResetDefault = () => {
        props.onSettingDefault(true);
    }

    return (
        <button type="button" onClick={ onResetDefault } className="rounded bg-primary mt-3 px-3 py-2" >Reset</button>
    );
}

export default Reset;
