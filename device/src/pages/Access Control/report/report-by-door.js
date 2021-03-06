import React from "react";
function ReportByDoor(props) {
    return(
        <div className="pages pageTest importFiles d-flex align-items-start">
            <nav className="toc d-none">
                <ul className="menu-main">
                    <li className="link"><a href="#list-detail">Danh sách chi tiết</a></li>
                </ul>
                <svg className="toc-marker" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
                    <path stroke="#444" strokeWidth="3" fill="transparent" strokeDasharray="0, 0, 0, 1000" strokeLinecap="round" strokeLinejoin="round" transform="translate(-0.5, -0.5)" />
                </svg>
            </nav>
            <article className="contents w-100" id="contents">
            <h2 className="text-center">BÁO CÁO CỬA</h2>
                <section>
                    <div>
                        <div className="content-item" >
                            <img alt="images" src="./images/report-by-door-1.png" className="w-25" />   
                            <img alt="images" src="./images/report-by-door-1-2.png" className="w-100" />   
                            <table className="table table-list d-flex w-100 mt-3">
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Nhập để tìm kiếm và chọn người dùng</td>
                                        <td>6</td>
                                        <td>Đến ngày (tìm khoảng thời gian)</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Sự kiện</td>
                                        <td>7</td>
                                        <td>Nút tìm kiếm</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Cửa</td>
                                        <td>8</td>
                                        <td>Chức năng xuất tệp tin (định dạng: pdf, xlsx, docx)</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Cấp độ truy cập</td>
                                        <td>9</td>
                                        <td>Danh sách thống kê</td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>Từ ngày (tìm khoảng thời gian)</td>
                                        <td>10</td>
                                        <td>Click vào số liệu để xem danh sách chi tiết</td>
                                    </tr>
                                </tbody>
                            </table> 
                        </div>
                    </div>
                </section>
                <section>
                    <div id="list-detail">
                        <h2>1. Danh sách chi tiết</h2>
                        <div className="content-item" >
                            <img alt="images" src="./images/report-by-door-2.png" className="w-100 mb-3" />  
                            <p>Ghi chú:</p> 
                            <table className="table table-list d-flex w-100 mt-3">
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Cửa</td>
                                        <td>6</td>
                                        <td>Nút tìm kiếm</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Cấp độ truy cập</td>
                                        <td>7</td>
                                        <td>Chức năng xuất tệp tin (định dạng: pdf, xlsx, docx)</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Từ ngày (tìm khoảng thời gian)</td>
                                        <td>8</td>
                                        <td>Quay lại</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Đến ngày (tìm khoảng thời gian)</td>
                                        <td>9</td>
                                        <td>Danh sách chi tiết</td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>Sự kiện</td>
                                        <td></td>
                                        <td></td>
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
export default ReportByDoor;