import React, { Component, useState } from 'react';
import Search from './Search';
import Sort from './Sort';


function Control(props) {

    return (
        <div className="row col-12 my-2 px-0">
            <Search />
            <Sort />
        </div>
        );
}

export default Control;
