import React from 'react';

function Sort(props) {
   return(
    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div className="dropdown">
            <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                Sắp Xếp 
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                <li className="pl-2">
                    <a role="button">Tên A-Z</a>
                </li>
                <li className="pl-2">
                    <a role="button">Tên Z-A </a>
                </li>
                <li  role="separator" className="divider pl-2"></li>
                <li className="pl-2"><a role="button">Trạng Thái Kích Hoạt</a></li>
                <li className="pl-2"><a role="button">Trạng Thái Ẩn</a></li>
            </ul>
        </div>
    </div>
   )  
}
export default Sort;