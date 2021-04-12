import React, { Component } from 'react';

function ColorPiker(props) {
    let colors = ['red', 'green', 'blue', '#ccc'];

    function showColor(color){
        return{
            background: color
        };
    }

    function setActiveColor(color) {
        props.onReceiveColor(color)
    }

    // function setActiveColor(color){
    //     console.log(color);
    // }

    return (
        <div className="col-6 rounded ">
            <div className="card w-100" style={{overflow: "hidden"}}> 
                <div className="header-card bg-info py-2">Color Picker</div>
                <div className="card-body">
                    <ul className="d-flex mb-0 px-0" style={{listStyle: "none"}}>
                        { colors.map((color, index) => {
                           return <li 
                                    key={index} 
                                    className={ props.color === color ? 'active': ''}
                                    style={ showColor(color) }  
                                    onClick={ () => setActiveColor(color) }
                                />
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ColorPiker;
