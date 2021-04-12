import React, { Component, useState } from 'react';
import './App.css';
import ColorPiker from './component/colorPiker';
import SizeSetting from './component/sizeSetting';
import Reset from './component/reset';
import Result from './component/result';

function App() {

    let [color, setColor ] = useState('red');
    let [fontSize, setFontSize] = useState(12);
    
    function onsetColor(params){
        setColor(params);

    }

    function onChangedSize(value) {
        setFontSize( (fontSize + value >= 8 && fontSize + value <= 36) ? fontSize + value : fontSize )
    }

    function onSettingDefault(value) {
        if(value){
            setColor('red');
            setFontSize(12);
        }
    }

    return (
        <div className="App">
            <div className="container py-5">
                <div className="d-flex flex-wrap align-items-center">
                    <ColorPiker color={ color } onReceiveColor={ onsetColor } />
                    <SizeSetting fontSize={ fontSize } onChangedSize={ onChangedSize}  />
                    <div className="col-12 p-0">
                        <Reset onSettingDefault={ onSettingDefault } />
                        <Result color={ color } fontSize={ fontSize } />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
