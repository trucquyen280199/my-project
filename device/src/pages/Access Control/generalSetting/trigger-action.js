import React from "react";
function TriggerAction(props) {
    return(
        <div className="pages pageTest groupCard d-flex align-items-start">
            <nav className="toc d-none">
                <ul className="menu-main">
                    <li className="link"><a href="#add-edit">Thêm hoặc sửa</a></li>
                </ul>
                <svg className="toc-marker" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
                    <path stroke="#444" strokeWidth="3" fill="transparent" strokeDasharray="0, 0, 0, 1000" strokeLinecap="round" strokeLinejoin="round" transform="translate(-0.5, -0.5)" />
                </svg>
            </nav>
            <article className="contents w-100" id="contents">
            <h2 className="text-center">KÍCH HOẠT HÀNH ĐỘNG</h2>
                <section>
                    <div>
                        <div className="content-item" >
                            <img alt="images" src="./images/trigger-action-1.png" className="w-25 mb-3" /> 
                            <img alt="images" src="./images/trigger-action-1-2.png" className="w-100 mb-3" /> 
                            <table className="table table-list d-flex w-100 mt-3">
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Thêm mới</td>
                                        <td>4</td>
                                        <td>Click xem chi tiết hoặc thay đổi thông tin</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Xóa</td>
                                        <td>5</td>
                                        <td>Danh sách đã thêm</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Chọn danh sách</td>
                                        <td>6</td>
                                        <td>Tìm kiếm trong danh sách hiên tại</td>
                                    </tr>
                                </tbody>
                            </table> 
                            <p>
                                Sau khi chọn danh sách, bạn có thể thực hiện các thao tác sau:<br/>
                                <b className="ml-3">▪	Xóa</b> : Xóa trigger action đã chọn khỏi danh sách.
                            </p>
                        </div>
                    </div>
                </section>
                <section>
                    <div id="add-edit">
                        <h2>1. Thêm hoặc sửa</h2>
                        <div className="content-item" >
                            <img alt="images" src="./images/trigger-action-2.png" className="w-100 mb-3" />  
                            <p>Ghi chú:</p> 
                            <table className="table table-list d-flex w-100 mt-3">
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Tên</td>
                                        <td>5</td>
                                        <td>Chọn thiết bị action</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Schedule</td>
                                        <td>6</td>
                                        <td>Chọn các tham số action</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Chọn loại trigger (Thiết bị/ Cửa/ Zone)</td>
                                        <td>7</td>
                                        <td>Đóng cửa sổ</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Chọn sự kiện trigger</td>
                                        <td>8</td>
                                        <td>Lưu</td>
                                    </tr>
                                </tbody>
                            </table>
                            <img alt="images" src="./images/trigger-action-3.png" className="w-100" />
                            <p>Ghi chú:</p>
                            <table className="table table-list d-flex w-100 mt-3">
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Tên</td>
                                        <td>2</td>
                                        <td>Schedule</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Chọn loại trigger (Thiết bị/ Cửa/ Zone)</td>
                                        <td>4</td>
                                        <td>Chọn sự kiện trigger</td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>Chọn phần mềm</td>
                                        <td>6</td>
                                        <td>Cấu hình nội dung email, sms</td>
                                    </tr>
                                    <tr>
                                        <td>7</td>
                                        <td>Thêm email</td>
                                        <td>8</td>
                                        <td>Xóa email</td>
                                    </tr>
                                    <tr>
                                        <td>9</td>
                                        <td>Nhập email</td>
                                        <td>10</td>
                                        <td>Lưu email</td>
                                    </tr>
                                    <tr>
                                        <td>11</td>
                                        <td>Hủy email</td>
                                        <td>12</td>
                                        <td>Số điện thoại sms</td>
                                    </tr>
                                    <tr>
                                        <td>13</td>
                                        <td>Xóa số điện thoại sms</td>
                                        <td>14</td>
                                        <td>Nhập số điện thoại sms</td>
                                    </tr>
                                    <tr>
                                        <td>15</td>
                                        <td>Lưu số điện thoại sms</td>
                                        <td>16</td>
                                        <td>Hủy số điện thoại sms</td>
                                    </tr>
                                    <tr>
                                        <td>17</td>
                                        <td>Đóng cửa sổ</td>
                                        <td>18</td>
                                        <td>Lưu</td>
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
export default TriggerAction;