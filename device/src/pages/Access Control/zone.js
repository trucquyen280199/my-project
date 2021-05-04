import React from "react";
function Zone(props) {
    return(
        <div className="pages pageTest d-flex align-items-start">
            <nav className="toc">
                <ul className="menu-main">
                    <li className="link"><a href="#anti-passback-zone">Anti-passback Zone</a></li>
                    <li className="link"><a href="#fire-alarm-zone">Cảnh báo cháy</a></li>
                    <li className="link"><a href="#scheduled-lock-zone">Khóa theo lịch trình</a></li>
                    <li className="link"><a href="#scheduled-unlock-zone">Mở khóa theo lịch trình</a></li>
                    <li className="link"><a href="#interlock-zone">Khóa liên động</a></li>
                </ul>
                <svg className="toc-marker" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
                    <path stroke="#444" strokeWidth="3" fill="transparent" strokeDasharray="0, 0, 0, 1000" strokeLinecap="round" strokeLinejoin="round" transform="translate(-0.5, -0.5)" />
                </svg>
            </nav>
            <article className="contents" id="contents">
            <h2 className="text-center">ZONE</h2>
                <p>Trên trang <b>ZONE</b> , bạn có thể thêm tính năng chống trả về, báo cháy, khóa lịch và lập lịch vùng mở khóa cũng như định cấu hình cài đặt.</p>
                <section>
                    <div id="anti-passback-zone">
                        <h2>1.	Anti-passback</h2>
                        <div className="content-item" >
                            <img src='./images/anti-passback-zone.png' className="w-25" />
                            <img src='./images/anti-passback-zone-1-2.png' className="mb-3 w-100" />
                            <b>Ghi chú:</b>
                            <table className="table table-list ">
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Thêm mới</td>
                                        <td>5</td>
                                        <td>Chọn danh sách zone</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Hoạt động</td>
                                        <td>6</td>
                                        <td>Click xem chi tiết hoặc thay đổi thông tin</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Không hoạt động</td>
                                        <td>7</td>
                                        <td>Danh sách đã thêm</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Xóa</td>
                                        <td>8</td>
                                        <td>Tìm kiếm trong danh sách hiện tại</td>
                                    </tr>
                                </tbody>
                            </table>
                            <p>
                                Sau khi chọn zone, bạn có thể thực hiện các thao tác sau:<br/>
                                <b className="ml-3">-	Xóa </b>: Xóa zone đã chọn khỏi danh sách.<br/>
                                <b className="ml-3">-	Hoạt động</b>: Thay đổi trạng thái của zone<br/>
                                <b className="ml-3">-	Không hoạt động</b>: Thay đổi trạng thái của zone<br/><br/>
                                •	Thêm hoặc sửa zone
                            </p>
                            <img src='./images/anti-passback-zone-2.png' className="mb-3 w-100" />
                            <p className="font-weight-bold">Ghi chú:</p>
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Tên</td>
                                        <td>2</td>
                                        <td>Loại</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Chế độ: Có thể đặt <b>Local</b> hoặc <b>Global</b>  
                                        cho phạm vi ứng dụng vùng. Nếu <b>Local</b> được đặt, vùng chỉ có thể được đặt với 
                                        các thiết bị đầu vào và thiết bị được kết nối với RS-485 và nếu được đặt <b>Global</b> , vùng có thể được đặt với tất cả các thiết bị đã đăng ký
                                        </td>
                                        <td>4</td>
                                        <td><b>Loại chống trả về</b> : Chọn loại Chống trả về.</td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>Thiết bị lối vào</td>
                                        <td>6</td>
                                        <td><b>Hành động lỗi mạng</b> : Có thể thiết lập hoạt động cửa trong trường hợp liên lạc 
                                            giữa BioStar 2 và thiết bị đặt tính năng chống trả về bị mất. 
                                            Cài đặt khả dụng khi <b>Toàn cầu</b> được đặt cho <b>Chế độ</b> . 
                                            Khi <b>Mở bằng xác thực</b> được đặt, cửa sẽ mở ra khi người dùng đã được xác thực bình thường. 
                                            Khi <b>Nhật ký APB Mở bằng xác thực &amp; ghi</b> được thiết lập, cảnh báo vi phạm chống trả về sẽ xảy ra và cửa sẽ mở. 
                                            Khi <b>Cửa khóa &amp; ghi nhật ký APB</b> được thiết lập, cảnh báo vi phạm chống trả lại xảy ra và cửa không mở.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>7</td>
                                        <td><b>Hoạt động / Không hoạt động</b> : Bạn có thể tắt vùng chống trả về. Chọn Hoạt động để kích hoạt nó.</td>
                                        <td>8</td>
                                        <td><b>Thời gian đặt lại</b> : Bạn có thể đặt khoảng thời gian để có thể xóa tất cả các vi
                                         phạm chống trả về. Điều này cho phép người dùng được cấp quyền truy cập sau một khoảng thời gian. 
                                         Thời lượng tối đa có thể là 7 ngày (10080 phút). Nếu được đặt thành <b>0</b> , 
                                         các vi phạm chống mật khẩu sẽ không bị xóa và những người dùng đã vi phạm quy tắc chống trả về trước đó sẽ không được cấp 
                                         quyền truy cập.</td>
                                    </tr>
                                    <tr>
                                        <td>9</td>
                                        <td>Thiết bị lối ra</td>
                                        <td>10</td>
                                        <td>Thêm cảnh báo</td>
                                    </tr>
                                    <tr>
                                        <td>11</td>
                                        <td>Sửa cảnh báo</td>
                                        <td>12</td>
                                        <td>Xóa cảnh báo</td>
                                    </tr>
                                    <tr>
                                        <td>13</td>
                                        <td>Chọn cấp độ truy cập. Người dùng có cấp độ truy cập sẽ không bị giới hạn bởi quy tắc chống trả về.</td>
                                        <td>14, 15</td>
                                        <td>Đóng cửa sổ/ Đồng ý</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
                <section>
                    <div id="fire-alarm-zone">
                        <h2>2.	Cảnh báo cháy</h2>
                        <div className="content-item" >
                            <img src='./images/fire-alarm-zone-1.png' className="mb-3 w-25" />
                            <img src='./images/fire-alarm-zone-1-2.png' className="mb-3 w-100" />
                            <p className="font-weight-bold">Ghi chú:</p>
                            <table className="table table-list d-flex w-100 mt-3">
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Thêm mới</td>
                                        <td>5</td>
                                        <td>Chọn danh sách zone</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Hoạt động</td>
                                        <td>6</td>
                                        <td>Click xem chi tiết hoặc thay đổi thông tin</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Không hoạt động</td>
                                        <td>7</td>
                                        <td>Danh sách đã thêm</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Xóa</td>
                                        <td>8</td>
                                        <td>Tìm kiếm trong danh sách hiện tại</td>
                                    </tr>
                                </tbody>
                            </table>
                            <p>
                                Sau khi chọn zone, bạn có thể thực hiện các thao tác sau:<br/>
                                <b>-	Xóa </b>: Xóa zone đã chọn khỏi danh sách.<br/>
                                <b>-	Hoạt động</b>: Thay đổi trạng thái của zone<br/>
                                <b>-	Không hoạt động</b>: Thay đổi trạng thái của zone<br/><br/>
                                •	Thêm hoặc sửa zone

                            </p>
                            <img src='./images/fire-alarm-zone-2.png' className="mb-3 w-100" />
                            <p className="font-weight-bold">Ghi chú:</p>
                            <table className="table table-list d-flex w-100 mt-3">
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Tên</td>
                                        <td>2</td>
                                        <td>Loại</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>
                                            <p><b>Chế độ</b> : Bạn có thể cài đặt báo cháy ở hai chế độ khác nhau. <br/>
                                            Chế độ <b>cục bộ</b> sẽ cho phép thiết bị chính và thiết bị phụ được kết nối qua RS- 485 được chọn. <br/>
                                            Chế độ <b>toàn cầu</b> sẽ cho phép lựa chọn tất cả các thiết bị được thêm vào BioStar 2.</p>
                                        </td>
                                        <td>4</td>
                                        <td><p><b>Cửa</b>: Chọn các cửa để đưa vào vùng báo cháy. Bạn có thể chọn nhiều cửa.</p></td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td><b>Hoạt động / Không hoạt động</b> : Tắt vùng báo cháy. Chọn  <b> Hoạt động</b> để kích hoạt nó.</td>
                                        <td>6</td>
                                        <td><p><b>Thang máy</b> : Chọn thang máy để đưa vào vùng báo cháy. Bạn có thể chọn nhiều thang máy.</p></td>
                                    </tr>
                                    <tr>
                                        <td>7</td>
                                        <td><b>Thiết bị / Đầu vào </b>: Nhấp vào <b >+ Thêm</b> và cấu hình thiết bị để tắt tín hiệu báo cháy.</td>
                                        <td>8</td>
                                        <td>Thêm thiết bị /đầu vào</td>
                                    </tr>
                                    <tr>
                                        <td>9</td>
                                        <td>Xóa thiết bị /đầu vào</td>
                                        <td>10</td>
                                        <td>Thêm cảnh báo</td>
                                    </tr>
                                    <tr>
                                        <td>11</td>
                                        <td>Sửa cảnh báo</td>
                                        <td>12</td>
                                        <td>Xóa cảnh báo</td>
                                    </tr>
                                    <tr>
                                        <td>13</td>
                                        <td>Đóng cửa sổ</td>
                                        <td>14</td>
                                        <td>Đồng ý</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
                <section>
                    <div id="scheduled-lock-zone">
                        <h2>3.	Khóa theo lịch trình</h2>
                        <div className="content-item" >
                            <img src='./images/scheduled-lock-zone-1.png' className="mb-3 w-25" />
                            <img src='./images/scheduled-lock-zone-1-2.png' className="mb-3 w-100" />
                            <p className="font-weight-bold">Ghi chú:</p>
                            <table className="table table-list d-flex w-100 mt-3">
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Thêm mới</td>
                                        <td>5</td>
                                        <td>Chọn danh sách zone</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Hoạt động</td>
                                        <td>6</td>
                                        <td>Click xem chi tiết hoặc thay đổi thông tin</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Không hoạt động</td>
                                        <td>7</td>
                                        <td>Danh sách đã thêm</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Xóa</td>
                                        <td>8</td>
                                        <td>Tìm kiếm trong danh sách hiện tại</td>
                                    </tr>
                                </tbody>
                            </table>
                            <p>
                                Sau khi chọn zone, bạn có thể thực hiện các thao tác sau:<br/>
                                <span className="font-weight-bold ml-3">-	Xóa </span>: Xóa zone đã chọn khỏi danh sách.<br/>
                                <span className="font-weight-bold ml-3">-	Hoạt động</span>: Thay đổi trạng thái của zone<br/>
                                <span className="font-weight-bold ml-3">-	Không hoạt động</span>: Thay đổi trạng thái của zone<br/><br/>
                                •	Thêm hoặc sửa zone

                            </p>
                            <img src='./images/scheduled-lock-zone-2.png' className="mb-3 w-100" />
                            <p className="font-weight-bold">Ghi chú:</p>
                            <table className="table table-list d-flex w-100 mt-3">
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Tên</td>
                                        <td>2</td>
                                        <td>Loại</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td><p><b>Hoạt động / Không hoạt động </b>: Tắt vùng khóa đã lên lịch. Chọn <b> Hoạt động </b> để kích hoạt nó.</p></td>
                                        <td>4</td>
                                        <td><p><b>Cửa</b>: Chọn các cửa để đưa vào vùng khóa theo lịch trình. Bạn có thể chọn nhiều cửa.</p></td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td><p><b>Loại khóa</b>: Bạn có thể định cấu hình khu vực để chỉ khóa thiết bị nhập hoặc khóa cả thiết bị vào và ra.</p></td>
                                        <td>6</td>
                                        <td><b>Lịch trình</b>: Chọn một lịch trình</td>
                                    </tr>
                                    <tr>
                                        <td>7</td>
                                        <td>Thêm cảnh báo</td>
                                        <td>8</td>
                                        <td>Sửa cảnh báo</td>
                                    </tr>
                                    <tr>
                                        <td>9</td>
                                        <td>Xóa cảnh báo</td>
                                        <td>10</td>
                                        <td><p><b>Bỏ qua khóa theo lịch trình</b>: Chọn cấp độ truy cập. Người dùng có cấp độ truy cập sẽ không bị giới hạn bởi quy tắc khóa theo lịch trình.</p></td>
                                    </tr>
                                    <tr>
                                        <td>11</td>
                                        <td>Đóng cửa sổ</td>
                                        <td>12</td>
                                        <td>Đồng ý</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
                <section>
                    <div id="scheduled-unlock-zone">
                        <h2>4.	Scheduled Unlock Zone</h2>
                        <div className="content-item" >
                            <img src='./images/scheduled-unlock-zone-1.png' className="mb-3 w-25" />
                            <img src='./images/scheduled-unlock-zone-1-2.png' className="mb-3 w-100" />
                            <p className="font-weight-bold">Ghi chú:</p>
                            <table className="table table-list d-flex w-100 mt-3">
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Thêm mới</td>
                                        <td>5</td>
                                        <td>Chọn danh sách zone</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Hoạt động</td>
                                        <td>6</td>
                                        <td>Click xem chi tiết hoặc thay đổi thông tin</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Không hoạt động</td>
                                        <td>7</td>
                                        <td>Danh sách đã thêm</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Xóa</td>
                                        <td>8</td>
                                        <td>Tìm kiếm trong danh sách hiện tại</td>
                                    </tr>
                                </tbody>
                            </table>
                            <p>
                                Sau khi chọn zone, bạn có thể thực hiện các thao tác sau:<br/>
                                <b>-	Xóa </b>: Xóa zone đã chọn khỏi danh sách.<br/>
                                <b>-	Hoạt động</b>: Thay đổi trạng thái của zone<br/>
                                <b>-	Không hoạt động</b>: Thay đổi trạng thái của zone<br/><br/>
                                •	Thêm hoặc sửa zone

                            </p>
                            <img src='./images/scheduled-unlock-zone-2.png' className="mb-3 w-100" />
                            <p className="font-weight-bold">Ghi chú:</p>
                            <table className="table table-list d-flex w-100 mt-3">
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Tên</td>
                                        <td>5</td>
                                        <td><p>
                                            <b>Cửa </b>: Nếu bạn chọn <b> Cửa</b>, danh sách cửa sẽ được kích hoạt. Chọn các cửa để đưa vào khu vực mở khóa theo lịch trình. 
                                                Bạn có thể chọn nhiều cửa.<br/>
                                            <b>Thang máy</b>: Nếu bạn chọn <b>Thang máy</b>, danh sách thang máy sẽ được kích hoạt. 
                                                Chọn thang máy để đưa vào khu vực mở khóa theo lịch trình. Bạn có thể chọn nhiều thang máy.</p>

                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Loại</td>
                                        <td>6</td>
                                        <td><p><b>Bắt đầu bằng Xác thực Người dùng </b>: Khi được đặt là <b>Hoạt động</b> , người dùng thuộc nhóm truy cập phải xác thực trong lịch trình đã định cấu hình để bắt đầu mở khóa theo lịch.</p></td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td><p><b>Hoạt động / Không hoạt động</b> : Tắt vùng khóa đã lên lịch. Chọn <b>Hoạt động</b> để kích hoạt nó.</p></td>
                                        <td>7</td>
                                        <td><b>Lịch trình</b> : Chọn một lịch trình</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td><p><b>Cửa / Thang máy</b> : Bạn có thể đặt cửa hoặc thang máy làm khu vực mở khóa theo lịch trình</p></td>
                                        <td>8, 9</td>
                                        <td>Đóng cửa sổ/ Đồng ý</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
               <section>
                    <div id="interlock-zone">
                        <h2>5.	Khóa liên động</h2>
                        <div className="content-item" >
                            <p>Vùng khóa liên động giám sát trạng thái của hai hoặc nhiều cửa bằng cảm biến cửa và trạng thái rơ le để kiểm soát rằng một cửa không thể mở hoặc đóng nếu các cửa khác đang mở hoặc không khóa. 
                                Bạn cũng có thể vô hiệu hóa quyền truy cập nếu người dùng ở trong khu vực.</p>
                           
                            <p className="font-weight-bold mt-3">Ghi chú:</p>
                            <p>
                            ▪ Một vùng khóa liên động có thể được cấu hình với tối đa 4 cửa.<br/>
                            ▪ Vùng khóa liên động chỉ có thể đặt các cửa có thiết bị kết nối với CoreStation.<br/>
                            ▪ Không thể đặt thiết bị làm vùng khóa liên động sang vùng khác.<br/>
                            ▪ Một cửa được đặt làm vùng khóa liên động không được đặt sang vùng khác không phải vùng báo cháy.<br/>

                            </p>
                            <img src='./images/interlock-zone-1.png' className="mb-3 w-25" />
                            <img src='./images/interlock-zone-2.png' className="mb-3 w-100" />
                            <p className="font-weight-bold">Ghi chú:</p>
                            <table className="table table-list d-flex w-100 mt-3">
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Thêm mới</td>
                                        <td>5</td>
                                        <td>Chọn danh sách zone</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Hoạt động</td>
                                        <td>6</td>
                                        <td>Click xem chi tiết hoặc thay đổi thông tin</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Không hoạt động</td>
                                        <td>7</td>
                                        <td>Danh sách đã thêm</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Xóa</td>
                                        <td>8</td>
                                        <td>Tìm kiếm trong danh sách hiện tại</td>
                                    </tr>
                                </tbody>
                            </table>
                            <p>
                                Sau khi chọn zone, bạn có thể thực hiện các thao tác sau:<br/>
                                <b className="ml-3">-	Xóa </b>: Xóa zone đã chọn khỏi danh sách.<br/>
                                <b className="ml-3">-	Hoạt động</b>: Thay đổi trạng thái của zone<br/>
                                <b className="ml-3">-	Không hoạt động</b>: Thay đổi trạng thái của zone<br/><br/>
                                •	Thêm hoặc sửa zone

                            </p>
                            
                            <img src='./images/interlock-zone-3.png' className="mb-3 w-100" />
                            <p className="font-weight-bold">Ghi chú:</p>
                            <table className="table table-list d-flex w-100 mt-3">
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Tên</td>
                                        <td>2</td>
                                        <td>Loại</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td><p><b>Chế độ </b>: Bạn có thể cài đặt báo cháy ở hai chế độ khác nhau. 
                                            Chế độ <b>cục bộ</b> sẽ cho phép thiết bị chính và thiết bị phụ được kết nối qua RS- 485 được chọn.</p></td>
                                        <td>4</td>
                                        <td><p><b>Cửa</b> : Chọn các cửa để đưa vào vùng khóa liên động. Bạn phải chọn ít nhất hai cửa được kết nối cảm biến cửa.</p></td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td><p><b>Hoạt động / Không hoạt động</b> : Tắt vùng báo cháy. Chọn <b>Hoạt động</b> để kích hoạt nó.</p></td>
                                        <td>6</td>
                                        <td><p>Thêm tùy chọn: Nếu người dùng vẫn ở trong vùng, tùy chọn này có thể ngăn người khác vào vùng.</p></td>
                                    </tr>
                                    <tr>
                                        <td>7</td>
                                        <td>Sửa tùy chọn</td>
                                        <td>8</td>
                                        <td>Xóa tùy chọn</td>
                                    </tr>
                                    <tr>
                                        <td>9</td>
                                        <td>Thêm cảnh báo</td>
                                        <td>10</td>
                                        <td>Sửa cảnh báo</td>
                                    </tr>
                                    <tr>
                                        <td>11</td>
                                        <td>Xóa cảnh báo</td>
                                        <td>12, 13</td>
                                        <td>Đóng cửa sổ/ Đồng ý</td>
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
export default Zone;