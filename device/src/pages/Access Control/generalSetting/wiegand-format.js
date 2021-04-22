import React from "react";
function WiegandFormat(props) {
    return(
        <div className="pages pageTest d-flex align-items-start"> 
            <nav className="toc d-none">
                <div className="menu-main" style={{position: "relative"}}>
                    <ul className="menu-main">
                        <li className="link"><a href="#add-edit">Thêm hoặc sửa</a></li>
                    </ul>
                <svg className="toc-marker" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
                    <path stroke="#444" strokeWidth="3" fill="transparent" strokeDasharray="0, 0, 0, 1000" strokeLinecap="round" strokeLinejoin="round" transform="translate(-0.5, -0.5)" />
                </svg>
                </div>
            </nav>
            <article className="contents w-100" id="contents" style={{width: "100vw"}}>
                <h2 className="text-center">ĐỊNH DẠNG WIEGAND</h2>
                <section>
                    <div >
                        <div className="content-item" >
                            <img src="./images/wiegand-format-1.png" className="w-25 mb-3" />   
                            <img src="./images/wiegand-format-2.png" className="w-100 mb-3" />   
                            <table className="table table-list d-flex w-100 mt-3">
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Click xem chi tiết hoặc thay đổi thông tin</td>
                                        <td>3</td>
                                        <td>Xóa dữ liệu định dạng</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Danh sách định dạng</td>
                                        <td>4</td>
                                        <td>Tìm kiếm trong danh sách hiện tại</td>
                                    </tr>
                                </tbody>
                            </table> 
                        </div>
                    </div>
                </section>
                <section>
                    <div id="add-edit">
                        <h2>1.	 Xem hoặc sửa dữ liệu format</h2>
                        <div className="content-item" >
                            <img src="./images/wiegand-format-3.png" className="w-100 mb-3" />  
                            <p>Ghi chú:</p> 
                            <table className="table table-list d-flex w-100 mt-3">
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Tên định dạng</td>
                                        <td>7</td>
                                        <td>Xóa mã hệ thống</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Mô tả</td>
                                        <td>8</td>
                                        <td>Danh sách bit chẵn lẻ</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Tổng số bit (1-256 bit) </td>
                                        <td>9</td>
                                        <td>Thêm bit chẵn lẻ</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Trường mã cơ sở</td>
                                        <td>10</td>
                                        <td>Xóa bit chẵn lẻ</td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>Danh sách mã hệ thống </td>
                                        <td>11</td>
                                        <td>Đóng cửa sổ</td>
                                    </tr>
                                    <tr>
                                        <td>6</td>
                                        <td>Thêm mã hệ thống </td>
                                        <td>12</td>
                                        <td>Đồng ý</td>
                                    </tr>
                                </tbody>
                            </table> 
                        </div>
                    </div>
                </section>
            </article>
        </div>
    )
}
export default WiegandFormat;