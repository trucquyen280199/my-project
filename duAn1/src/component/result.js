import React, { Component } from 'react';

function Result(props) {
    
    function setStyle() {
        return {
            color: props.color,
            borderColor: props.color,
            fontSize: props.fontSize
        }
    }

    return (
        <div className="col-12 p-0">
            <div className="d-flex mb-3">
                <div className="col-6 text-left">
                    <span>
                        Color: { props.color }
                    </span>
                    <span>  -  </span>
                    <span>
                        FontSize: { props.fontSize }px
                    </span> 
                </div>
            </div>
            <div className="p-4 text-left mb-0" style={setStyle()} id="content">
                Nội dung setting
            </div>
        </div>
    );
}

export default Result;