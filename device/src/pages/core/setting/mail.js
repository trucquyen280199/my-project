import React from "react";
function Mail(props) {
    return(
        <div className="pages pageTest importFiles d-flex align-items-start">
            <nav className="toc">
                <ul className="menu-main">
                    <li className="link">
                        <a href="#configuration-mail">Cấu hình mail</a>
                    </li>
                    <li className="link">
                        <a href="#compose">Soạn thư</a>
                    </li>
                    <li className="link">
                        <a href="#sent-messages">Thư đã gửi</a>
                    </li>
                </ul>
                <svg className="toc-marker" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
                    <path stroke="#444" strokeWidth="3" fill="transparent" strokeDasharray="0, 0, 0, 1000" strokeLinecap="round" strokeLinejoin="round" transform="translate(-0.5, -0.5)" />
                </svg>
            </nav>
            <article className="contents" id="contents">
                <h2 className="text-center">HỘP THƯ</h2>
                <section>
                    <div id="configuration-mail">
                        <h2>1.	Cấu hình mail</h2>
                        <div className="content-item" >
                            <img alt="images" src='./images/mail/mail-1.png' className="mb-3 w-25" />
                            <img alt="images" src='./images/mail/mail-2.png' className="mb-3 w-100" />
                            <p>Ghi chú:</p>
                            <table className="table table-list d-flex w-100 mt-3">
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Chọn mô-đun </td>
                                        <td>6</td>
                                        <td>Account type</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Out going server</td>
                                        <td>7</td>
                                        <td>Email (thư điện tử)</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Out mail server</td>
                                        <td>8</td>
                                        <td>Mật khẩu email</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Type encrypt connect </td>
                                        <td>9</td>
                                        <td>Lưu cấu hình</td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>Mail server</td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
                <section>
                    <div id="compose">
                        <h2>2.	Soạn thư</h2>
                        <div className="content-item" >
                            <img alt="images" src='./images/mail/mail-3.png' className="mb-3 w-25" />
                            <img alt="images" src='./images/mail/mail-4.png' className="mb-3 w-100" />
                            <p>Ghi chú:</p>
                            <table className="table table-list d-flex w-100 mt-3">
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Chọn mô-đun </td>
                                        <td>6</td>
                                        <td>Tiêu đề mail</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Mail gửi </td>
                                        <td>7</td>
                                        <td>Nội dung mail</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Mail nhận</td>
                                        <td>8</td>
                                        <td>Gửi thư</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Mail nhận CC</td>
                                        <td>9</td>
                                        <td>Đính kèm file</td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>Mail nhận BCC</td>
                                        <td>10</td>
                                        <td>Hủy bỏ đính kèm thư</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
                <section>
                    <div id="sent-messages">
                        <h2>3.	Thư đã gửi</h2>
                        <div className="content-item" >
                            <img alt="images" src='./images/mail/mail-5.png' className="mb-3 w-25" />
                            <img alt="images" src='./images/mail/mail-6.png' className="mb-3 w-100" />
                            <p>Ghi chú:</p>
                            <table className="table table-list d-flex w-100 mt-3">
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Chọn mô-đun </td>
                                        <td>3</td>
                                        <td>Nội dung mail</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Click xem nội dung mail</td>
                                        <td>4</td>
                                        <td>Danh sách mail đã gửi</td>
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
export default Mail;