import React, { Component } from 'react';

class Sort extends Component {
    
    onClick = (sortBy, sortValue)=>{
       
        this.props.onSort(sortBy,sortValue );
    }

    render(){
        return(
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="dropdown">
                    <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                        Sắp Xếp 
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                        <li className="pl-2" onClick={ () => this.onClick('name', 1) }>
                            <a role="button" className={ (this.props.sortBy === "name" & this.props.sortValue === 1) ? "sort-selected" : "" }>
                                Tên A-Z
                            </a>
                        </li>
                        <li className="pl-2" onClick={ () => this.onClick('name', -1) }>
                            <a role="button" className={ (this.props.sortBy === "name" & this.props.sortValue === -1) ? "sort-selected" : "" }>Tên Z-A </a>
                        </li>
                        {/* <li  role="separator" className="divider pl-2"></li> */}
                        <li className="pl-2"><a role="button" onClick={ () => this.onClick('status', 1) } className={ (this.props.sortBy === "status" & this.props.sortValue === 1) ? "sort-selected" : "" }>Trạng Thái Kích Hoạt</a></li>
                        <li className="pl-2"><a role="button" onClick={ () => this.onClick('status', -1) } className={ (this.props.sortBy === "status" & this.props.sortValue === -1) ? "sort-selected" : "" }>Trạng Thái Ẩn</a></li>
                    </ul>
                </div>
            </div>
        )    
    }
}
export default Sort;