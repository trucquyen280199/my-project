import React, { Component } from 'react';

function SizeSetting(props) {

    function changedSize(value) {
        props.onChangedSize(value)
    }
    
    return (
        <div className="col-6 rounded ">
            <div className="card w-100" style={{overflow: "hidden"}}> 
                <div className="card-body p-0">
                    <div className="border-bottom bg-dark py-2">
                        Size: {props.fontSize}px
                    </div>
                    <div className="d-flex p-3" >
                        <button type="button" 
                            className="px-4 rounded bg-success mr-3" 
                            onClick={ () => changedSize(-2)}
                        >Giảm</button>

                        <button type="button" className="px-4 rounded bg-success"
                            onClick={ () => changedSize(2)}
                        >Tăng</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SizeSetting;
