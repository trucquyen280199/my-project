import React from "react";
import "../style.css";
function Singnal(props) {
    return(
        <div className="pages pageTest importFiles d-flex align-items-start">
            <nav className="toc d-none">
                <ul className="menu-main">
                    <li className="link"><a href="#report-by-elevato">Thêm hoặc sửa</a></li>
                </ul>
                <svg className="toc-marker" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
                    <path stroke="#444" strokeWidth="3" fill="transparent" strokeDasharray="0, 0, 0, 1000" strokeLinecap="round" strokeLinejoin="round" transform="translate(-0.5, -0.5)" />
                </svg>
            </nav>
            <article className="contents w-100" id="contents">
            <h2 className="text-center">Singnal</h2>
                <section>
                    <div >
                        <div className="content-item" >
                            <img src="./images/schedule-1.png" className="w-75 mb-3" /> 
                            <table className="table table-list d-flex w-100 mt-3">
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Thêm mới</td>
                                        <td>4</td>
                                        <td>Chọn danh sách cần xóa</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Xóa</td>
                                        <td>5</td>
                                        <td>Danh sách đã thêm</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Click xem chi tiết hoặc thay đổi thông tin</td>
                                        <td>6</td>
                                        <td>Tìm kiếm trong danh sách hiên tại</td>
                                    </tr>
                                </tbody>
                            </table> 
                            <p>
                                Sau khi chọn cửa, bạn có thể thực hiện các thao tác sau:<br/>
                                <b className="ml-3">▪	Xóa</b> : Xóa cửa đã chọn khỏi danh sách.
                            </p>
                        </div>
                    </div>
                </section>
                <section>
                    <div id="add-edit">
                        <h2>1.	Thêm hoặc sửa</h2>
                        <div className="content-item" >
                            <img src="./images/singnal-2.png" className="w-75 mb-3" />  
                            <p>Ghi chú:</p> 
                            <table className="table table-list d-flex w-100 mt-3">
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Tên</td>
                                        <td>4</td>
                                        <td>Thời gian mở (mili giây)</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Số lượng lặp</td>
                                        <td>5</td>
                                        <td>Thời gian đóng (mili giây)</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Thời gian trì hoãn</td>
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
export default Singnal;