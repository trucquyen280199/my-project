import React from "react";
function ListOfStaffTimekeep(props) {
    return(
        <div className="pages pageTest importFiles d-flex align-items-start">
            <nav className="toc">
                <ul className="menu-main">
                    <li className="link"><a href="#create-guide-image">Hình ảnh hướng dẫn</a></li>
                    <li className="link"><a href="#add-list-staff">Thêm danh nhân viên chấm công</a> </li>
                </ul>
                <svg className="toc-marker" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
                    <path stroke="#444" strokeWidth="3" fill="transparent" strokeDasharray="0, 0, 0, 1000" strokeLinecap="round" strokeLinejoin="round" transform="translate(-0.5, -0.5)" />
                </svg>
            </nav>
            <article className="contents" id="contents">
                <h2 className="text-center">DANH SÁCH NHÂN VIÊN CHẤM CÔNG</h2>
                <section>
                    <div id="create-guide-image">
                        <h2>1.	Hình ảnh hướng dẫn tạo</h2>
                        <div className="content-item" >
                            <img src='./images/list-of-staff-timekeep-1.png' className="mb-3 w-100" />
                            <p className="text-center">Hình 02</p>
                            <table className="tables mt-5 w-75">
                                <tr>
                                    <td>1</td>
                                    <td>Nhập và chọn để tìm </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </section>
                <section>
                    <div id="add-list-staff">
                        <h2>2.	Thêm danh nhân viên chấm công</h2>
                        <div className="content-item" >
                            <ul className="list">
                                <li> 
                                    <p><span className="icon">&#10146;</span> Bạn nhập và chọn vào ô 1 bên trên màn hình ( Hình 02 ) &minus;&#10095; Nhấn tìm enter để tìm thông tin</p>
                                    
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </article>
        </div>
    )
}
export default ListOfStaffTimekeep;