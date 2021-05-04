import React from "react";
function CoreCategory(props) {
    return(
        <div className="pages pageTest core-category d-flex align-items-start">
            <nav className="toc">
                <div className="scroll-menu-main" >
                <div className="menu-main" style={{position: "relative"}}>
                    <ul className="menu-main">
                        <li className="link"><a href="#group-users">Nhóm người dùng (phòng ban)</a></li>
                        <ul>
                            <li className="link"><a href="#add-custom-departments">Thêm phòng ban tuỳ chỉnh</a></li>
                            <li className="link"><a href="#add-specific-departments">Thêm phòng ban cụ thể</a></li>
                            <li className="link"><a href="#update-departments">Cập nhật phòng ban</a></li>
                            <li className="link"><a href="#delete-departments">Xoá phòng ban</a></li>
                        </ul>
                        <li className="link"><a href="#nationality-category">Danh mục quốc tịch</a></li>
                        <ul>
                            <li className="link"><a href="#add-nationality-category">Thêm danh mục quốc tịch</a></li>
                            <li className="link"><a href="#update-nationality-category">Cập nhật danh mục quốc tịch</a></li>
                            <li className="link"><a href="#delete-nationality-category">Xoá danh mục quốc tịch</a></li>
                        </ul>
                        <li className="link"><a href="#category-province">Danh mục tỉnh thành</a></li>
                        <ul>
                            <li className="link"><a href="#add-category-province">Thêm danh mục tỉnh thành</a></li>
                            <li className="link"><a href="#update-category-province">Cập nhật danh mục tỉnh thành</a></li>
                            <li className="link"><a href="#delete-category-province">Xoá danh mục tỉnh thành</a></li>
                        </ul>
                        <li className="link"><a href="#category-people">Danh mục dân tộc</a></li>
                        <ul>
                            <li className="link"><a href="#add-category-people">Thêm danh mục dân tộc</a></li>
                            <li className="link"><a href="#update-category-people">Cập nhật danh mục dân tộc</a></li>
                            <li className="link"><a href="#delete-category-people">Xoá danh mục dân tộc</a></li>
                        </ul>
                        <li className="link"><a href="#category-position">Danh mục chức vụ</a></li>
                        <ul>
                            <li className="link"><a href="#add-category-position">Thêm danh mục chức vụ</a></li>
                            <li className="link"><a href="#update-category-position">Cập nhật danh mục chức vụ</a></li>
                            <li className="link"><a href="#delete-category-position">Xoá danh mục chức vụ</a></li>
                        </ul>
                        <li className="link"><a href="#category-skill">Danh mục kỹ năng (chứng chỉ)</a></li>
                        <ul>
                            <li className="link"><a href="#add-category-skill">Thêm danh mục kỹ năng</a></li>
                            <li className="link"><a href="#update-category-skill">Cập nhật danh mục kỹ năng</a></li>
                            <li className="link"><a href="#delete-category-skill">Xoá danh mục kỹ năng</a></li>
                        </ul>
                        <li className="link"><a href="#add-update-registered-guests">Danh mục loại khách đăng ký</a></li>
                        <ul>
                            <li className="link"><a href="#add-update-registered-guests">Thêm/cập nhật danh mục loại khách đăng ký</a></li>
                            <li className="link"><a href="#delete-registered-guests">Xoá danh mục loại khách đăng ký</a></li>
                        </ul>
                    </ul>
                    <svg className="toc-marker" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
                        <path stroke="#444" strokeWidth="3" fill="transparent" strokeDasharray="0, 0, 0, 1000" strokeLinecap="round" strokeLinejoin="round" transform="translate(-0.5, -0.5)" />
                    </svg>
                </div>
                </div>
            </nav>
            <article className="contents" id="contents">
                <section>
                <h2 className="text-center">HƯỚNG DẪN KHỞI TẠO CÁC DANH MỤC</h2>
                    <div id="group-users">
                        <h2>1.	Nhóm người dùng (phòng ban)</h2>
                        <div className="content-item" >
                            <p>B1: Vào <b>Trang chủ &gt; Người dùng &gt; Nhóm người dùng (NGD)</b></p>
                            <img alt="images" src="./images/core-category-1.png" className=" mb-3" /> 
                            <p>Màn hình chính</p>
                            <img alt="images" src="./images/core-category-2.png" className="w-100 mb-3" />
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Nút thêm tuỳ chỉnh</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>
                                        Giải thích từ trái qua phải:<br/>
                                            <span className="ml-3">-	Nút thêm <b>NGD</b> thuộc <b>NGD</b> này (cấp bé hơn gần nhất)</span><br/>
                                            <span className="ml-3">-	Nút chỉnh sửa <b>NGD</b></span><br/>
                                            <span className="ml-3">-	Nút xoá <b>NGD</b></span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table> 
                        </div>
                    </div>
                    <div id="add-custom-departments">
                        <h3 className="ml-4">a. Thêm phòng ban tuỳ chỉnh</h3>
                        <div className="content-item" >
                            <p>B1: <a href="#group-users">Xem tại đây</a></p>
                            <p>B2: Bấm <b>Thêm</b> tuỳ chỉnh</p>
                            <img alt="images" src="./images/core-category-3.png" className="w-100 mb-3" /> 
                            <p>Cửa sổ chính</p>
                            <img alt="images" src="./images/core-category-4.png" className="w-100 mb-3" />
                            <p>
                            B3: Chọn <b> phòng ban – công ty cha</b><br/>
                            B4: Nhập <b>tên và mã</b><br/>
                            B5: Nếu chọn Là công ty. Nhập thêm thông tin công ty bắt buộc.
                            </p>
                            <img alt="images" src="./images/core-category-a.png" className="w-100 mb-3" />
                            <p>B6: Bấm <b>đồng ý</b> để lưu thông tin</p>
                            <p>
                            Lưu ý:<br/>
                            <span className="ml-3">-    Tố chức mẹ mặc định là tổ chức cao nhất</span><br/>
                            <span className="ml-3">-	Tên và mã phòng ban <b>bắt buộc</b></span><br/>
                            <span className="ml-3">-	Mã phòng ban <b>duy nhất</b></span><br/>
                            <span className="ml-3">-	Chỉ có thể tạo công ty nếu tổ chức mẹ là công ty</span>
                            </p>
                            <img alt="images" src="./images/core-category-a1.png" className="w-100 mb-3" />
                        </div>
                    </div>
                    <div id="add-specific-departments">
                        <h3 className="ml-4">b.	Thêm phòng ban cụ thể</h3>
                        <div className="content-item" >
                            <p>B1: <a href="#group-users">Xem tại đây</a></p>
                            <p>B2: Tìm phòng ban cha cần tạo và bấm <b>thêm</b></p>
                            <img alt="images" src="./images/core-category-5.png" className="w-100 mb-3" /> 
                            <p>Cửa sổ chính</p>
                            <img alt="images" src="./images/core-category-6.png" className="w-100 mb-3" />
                            <p>
                            B3: Nhập <b>tên và mã</b> phòng ban <br/>
                            B4: : Nếu chọn Là công ty. Nhập thêm thông tin công ty bắt buộc (hoặc cập nhật thành phòng ban).
                            </p>
                            <img alt="images" src="./images/core-category-6-1.png" className="w-100 mb-3" />
                            <p>B6: Bấm đồng ý để lưu thông tin</p>
                            <p>
                            Lưu ý:<br/>
                            <span className="ml-3">-	Vẫn có thể đổi phòng ban cha, khi đó phòng ban này sẽ là phòng ban cha của phòng ban đang tạo</span><br/>
                            <span className="ml-3">-	Tên và mã phòng ban <b>bắt buộc</b></span><br/>
                            <span className="ml-3">-	Mã phòng ban <b>duy nhất</b></span><br/>
                            <span className="ml-3">-	Chỉ có thể tạo thành công ty nếu tổ chức mẹ là công ty</span>
                            </p>
                            <img alt="images" src="./images/core-category-6-2.png" className="w-100 mb-3" />
                        </div>
                    </div>
                    <div id="update-departments">
                        <h3 className="ml-4">c.	Cập nhật phòng ban</h3>
                        <div className="content-item" >
                            <p>B1: <a href="#group-users">Xem tại đây</a></p>
                            <p>B2: Tìm phòng ban cần cập nhật và bấm <b>cập nhật</b></p>
                            <img alt="images" src="./images/core-category-7.png" className="w-100 mb-3" /> 
                            <p>Cửa sổ chính</p>
                            <img alt="images" src="./images/core-category-8.png" className="w-100 mb-3" />
                            <p>
                            B3: Chọn <b>phòng ban cha</b>cần đổi<br/>
                            B4: Đổi thông tin <b>tên và mã</b> phòng ban <br/>
                            B5: Nếu chọn Là công ty. Nhập thêm thông tin công ty bắt buộc.
                            </p>
                            <img alt="images" src="./images/core-category-8-1.png" className="w-100 mb-3" />
                            <p>B6: Bấm đồng ý để lưu thông tin</p>
                            <p>
                                Lưu ý:<br/>
                                <span className="ml-3">-    Tổ chức mẹ không thể là tổ chức đang cập nhật và con của tổ chức đang cập nhật</span><br/>
                                <span className="ml-3">-	Tên và mã phòng ban <b>bắt buộc</b></span><br/>
                                <span className="ml-3">-	Mã phòng ban <b>duy nhất</b></span><br/>
                                <span className="ml-3">-	Nếu cập nhật phòng ban có cấp cao nhất thì sẽ không thể chọn phòng ban cha (vì mặc định nó là phòng ban cha)</span><br/>
                                <span className="ml-3">- Chỉ có thể cập nhật thành công ty nếu tổ chức mẹ là công ty</span>
                            </p>
                            
                        </div>
                    </div>
                    <div id="delete-departments">
                        <h3 className="ml-4">d.	Xoá phòng ban</h3>
                        <div className="content-item" >
                            <p>B1: <a href="#group-users">Xem tại đây</a></p>
                            <p>B2: Tìm phòng ban cần xoá và bấm nút <b>xoá</b></p>
                            <img alt="images" src="./images/core-category-10.png" className="w-100 mb-3" /> 
                            <p>B3: <b>Xác nhận xoá</b> để hoàn thành</p>
                            <p className="font-italic">
                                <b>Lưu ý</b>:<br/>
                                <span className="ml-3">-	Phòng ban đã có nhân viên thì không thể xoá</span><br/>
                                <span className="ml-3">-	Xoá phòng ban sẽ mặc định xoá toàn bộ phòng ban con</span>
                            </p>
                        </div>
                    </div>
                </section>
                <section>
                    <div id="nationality-category">
                        <h2>2.	Danh mục quốc tịch</h2>
                        <div className="content-item" >
                        <p>B1: Vào <b>CORE</b> &gt; <b>Cài đặt</b> &gt; <b>Quốc tịch</b></p>
                            <img alt="images" src="./images/core-category-11.png" className="w-25 mb-3" /> 
                            <p>Màn hình chính</p>
                            <img alt="images" src="./images/core-category-12.png" className="w-100 mb-3" />
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Nút thêm</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Nút xoá (chỉ hiển thị khi đang chọn danh mục)</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Nút chọn/bỏ chọn danh mục</td>
                                    </tr>
                                </tbody>
                            </table> 
                        </div>
                    </div>
                    <div id="add-nationality-category">
                        <h3 className="ml-4">a.	Thêm danh mục quốc tịch</h3>
                        <div className="content-item" >
                            <p>B1: <a href="#nationality-category">Xem tại đây</a></p>
                            <p>B2: Bấm nút <b>Thêm</b></p>
                            <img alt="images" src="./images/core-category-13.png" className="w-100 mb-3" /> 
                            <p>Cửa sổ chính</p>
                            <img alt="images" src="./images/core-category-14.png" className="w-100 mb-3" />
                            <p>
                            B3: Nhập <b>tên và mã </b> quốc gia <br/>
                            B4: Bấm <b>đồng ý</b> để lưu thông tin
                            </p>
                            <p>
                            Lưu ý:<br/>
                            <span className="ml-3">-	<b>Tên và mã</b> quốc giá <b>bắt buộc</b></span><br/>
                            <span className="ml-3">-	<b>Mã quốc gia duy nhất</b></span>
                            </p>
                        </div>
                    </div>
                    <div id="update-nationality-category">
                        <h3 className="ml-4">b.	Cập nhật danh mục quốc tịch</h3>
                        <div className="content-item" >
                            <p>B1: <a href="#nationality-category">Xem tại đây</a></p>
                            <p>B2: Tìm danh mục quốc gia cần cập nhật và <b>bấm đúp chuột</b> vào dòng đó</p>
                            <img alt="images" src="./images/core-category-15.png" className="w-100 mb-3" /> 
                            <p>Cửa sổ chính</p>
                            <img alt="images" src="./images/core-category-16.png" className="w-100 mb-3" />
                            <p>
                            B3: Cập nhật <b>tên và mã </b> quốc gia <br/>
                            B4: Bấm <b>đồng ý</b> để lưu thông tin
                            </p>
                            <p>
                            Lưu ý:<br/>
                            <span className="ml-3">-	<b>Tên và mã</b> quốc giá <b>bắt buộc</b></span><br/>
                            <span className="ml-3">-	<b>Mã quốc gia duy nhất</b></span>
                            </p>
                        </div>
                    </div>
                    <div id="delete-nationality-category">
                        <h3 className="ml-4">c.	Xoá danh mục quốc tịch</h3>
                        <div className="content-item" >
                            <p>B1: <a href="#nationality-category">Xem tại đây</a></p>
                            <p>B2: Chọn danh mục quốc gia cần xoá và bấm nút <b>xoá</b></p>
                            <img alt="images" src="./images/core-category-17.png" className="w-100 mb-3" /> 
                            <p>B3: <b>Xác nhận xoá </b> để hoàn thành</p>
                        </div>
                    </div>
                </section>
                <section>
                    <div id="category-province">
                        <h2>3.	Danh mục tỉnh thành</h2>
                        <div className="content-item" >
                            <p>B1: Vào <b>CORE &gt; Cài đặt &gt; Tỉnh thành</b></p>
                            <img alt="images" src="./images/core-category-18.png" className="w-25 mb-3" /> 
                            <p>Màn hình chính</p>
                            <img alt="images" src="./images/core-category-19.png" className="w-100 mb-3" />
                            <table className="table" >
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Nút thêm</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Nút xoá (chỉ hiển thị khi đang chọn danh mục)</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Nút chọn/bỏ chọn danh mục</td>
                                    </tr>
                                </tbody>
                            </table> 
                        </div>
                    </div>
                    <div id="add-category-province">
                        <h3 className="ml-4">a. Thêm danh mục tỉnh thành</h3>
                        <div className="content-item" >
                            <p>B1: <a href="#category-province">Xem tại đây</a></p>
                            <p>B2: Bấm nút <b>thêm</b></p>
                            <img alt="images" src="./images/core-category-20.png" className="w-100 mb-3" /> 
                            <p>Cửa sổ chính</p>
                            <img alt="images" src="./images/core-category-21.png" className="w-100 mb-3" />
                            <p>
                                B3: Chọn <b>quốc gia</b><br/>
                                B4: Nhập <b>tên và các mã</b> tỉnh thành <br/>
                                B5: Bấm <b>đồng ý</b> để lưu thông tin
                            </p>
                            <p>
                            Lưu ý:<br/>
                            <span className="ml-3">-	<b>Quốc gia, tên và các mã</b> tỉnh thành <b>bắt buộc</b></span><br/>
                            <span className="ml-3">-	<b>Mã số tỉnh thành</b> là số và tối đa 3 chữ số (1-&gt;999), <b>duy nhất</b></span><br/>
                            <span className="ml-3">-	<b>Mã tỉnh thành</b> là mã của tỉnh thành, <b>duy nhất</b></span>
                            </p>
                        </div>
                    </div>
                    <div id="update-category-province">
                        <h3 className="ml-4">b.	Cập nhật danh mục tỉnh thành</h3>
                        <div className="content-item" >
                            <p>B1: <a href="#category-province">Xem tại đây</a></p>
                            <p>B2: Tìm danh mục tỉnh thành cần cập nhật và <b>bấm đúp chuột </b>vào dòng đó</p>
                            <img alt="images" src="./images/core-category-22.png" className="w-100 mb-3" /> 
                            <p>Cửa sổ chính</p>
                            <img alt="images" src="./images/core-category-23.png" className="w-100 mb-3" />
                            <p>
                                B3: Cập nhật <b>quốc gia</b><br/>
                                B4: Cập nhật <b>tên và các mã</b> tỉnh thành <br/>
                                B5: Bấm <b>đồng ý</b> để lưu thông tin
                            </p>
                            <p>
                            Lưu ý:<br/>
                            <span className="ml-3">-	<b>Quốc gia, tên và các mã</b> tỉnh thành <b>bắt buộc</b></span><br/>
                            <span className="ml-3">-	<b>Mã số tỉnh thành</b> là số và tối đa 3 chữ số (1-&gt;999), <b>duy nhất</b></span><br/>
                            <span className="ml-3">-	<b>Mã tỉnh thành</b> là mã của tỉnh thành, <b>duy nhất</b></span>
                            </p>
                        </div>
                    </div>
                    <div id="delete-category-province">
                        <h3 className="ml-4">c.	Xoá danh mục tỉnh thành</h3>
                        <div className="content-item" >
                            <p>B1: <a href="#category-province">Xem tại đây</a></p>
                            <p>B2: Chọn danh mục tỉnh thành cần xoá và bấm nút <b>xoá</b></p>
                            <img alt="images" src="./images/core-category-24.png" className="w-100 mb-3" /> 
                            <p>B3: <b>Xác nhận xoá </b> để hoàn thành</p>
                        </div>
                    </div>
                </section>
                <section>
                    <div id="category-people">
                        <h2>4.	Danh mục dân tộc</h2>
                        <div className="content-item" >
                            <p>B1: Vào <b>CORE &gt; Cài đặt &gt; Dân tộc</b></p>
                            <img alt="images" src="./images/core-category-25.png" className="w-25 mb-3" /> 
                            <p>Màn hình chính</p>
                            <img alt="images" src="./images/core-category-26.png" className="w-100 mb-3" />
                            <table className="table ">
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Nút thêm</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Nút xoá (chỉ hiển thị khi đang chọn danh mục)</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Nút chọn/bỏ chọn danh mục</td>
                                    </tr>
                                </tbody>
                            </table> 
                        </div>
                    </div>
                    <div id="add-category-people">
                        <h3 className="ml-4">a.	Thêm danh mục dân tộc</h3>
                        <div className="content-item" >
                            <p>B1: <a href="#category-people">Xem tại đây</a></p>
                            <p>B2: Bấm nút <b>thêm</b></p>
                            <img alt="images" src="./images/core-category-27.png" className="w-100 mb-3" /> 
                            <p>Cửa sổ chính</p>
                            <img alt="images" src="./images/core-category-28.png" className="w-100 mb-3" />
                            <p>
                                B3: Nhập <b>tên và mã </b>dân tộc<br/>
                                B4: Nhập các thông tin khác nếu cần thiết  <br/>
                                B5: Bấm <b>đồng ý</b> để lưu thông tin
                            </p>
                            <p>
                            Lưu ý:<br/>
                            <span className="ml-3">-	<b>Tên và mã</b> dân tộc <b>bắt buộc</b></span><br/>
                            <span className="ml-3">-	<b>Mã dân tộc</b> là <b>duy nhất</b></span>
                            </p>
                        </div>
                    </div>
                    <div id="update-category-people">
                        <h3 className="ml-4">b.	Cập nhật danh mục dân tộc</h3>
                        <div className="content-item" >
                            <p>B1: <a href="#category-people">Xem tại đây</a></p>
                            <p>B2: Tìm danh mục dân tộc cần cập nhật và <b>bấm đúp chuột </b>vào dòng đó</p>
                            <img alt="images" src="./images/core-category-29.png" className="w-100 mb-3" /> 
                            <p>Cửa sổ chính</p>
                            <img alt="images" src="./images/core-category-30.png" className="w-100 mb-3" />
                            <p>
                                B3: Cập nhật <b>tên và mã</b> dân tộc<br/>
                                B4: Cập nhật các thông tin khác nếu cần thiết <br/>
                                B5: Bấm <b>đồng ý</b> để lưu thông tin
                            </p>
                            <p>
                            Lưu ý:<br/>
                            <span className="ml-3">-	<b>Tên và mã </b> dân tộc <b>bắt buộc</b></span><br/>
                            <span className="ml-3">-	<b>Mã dân tộc</b> là <b>duy nhất</b></span>
                            </p>
                        </div>
                    </div>
                    <div id="delete-category-people">
                        <h3 className="ml-4">c.	Xoá danh mục dân tộc</h3>
                        <div className="content-item" >
                            <p>B1: <a href="#category-people">Xem tại đây</a></p>
                            <p>B2: Chọn danh mục dân tộc cần xoá và bấm nút <b>xoá</b></p>
                            <img alt="images" src="./images/core-category-31.png" className="w-100 mb-3" /> 
                            <p>B3: <b>Xác nhận xoá </b> để hoàn thành</p>
                        </div>
                    </div>
                </section>
                <section>
                    <div id="category-position">
                        <h2>5.	Danh mục chức vụ</h2>
                        <div className="content-item" >
                            <p>B1: Vào <b>Kiểm soát truy cập &gt; Cài đặt chung &gt; Chức vụ</b></p>
                            <img alt="images" src="./images/core-category-32.png" className="w-25 mb-3" /> 
                            <p>Màn hình chính</p>
                            <img alt="images" src="./images/core-category-33.png" className="w-100 mb-3" />
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Nút thêm</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Nút xoá (chỉ hiển thị khi đang chọn danh mục)</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Nút chọn/bỏ chọn danh mục</td>
                                    </tr>
                                </tbody>
                            </table> 
                        </div>
                    </div>
                    <div id="add-category-position">
                        <h3 className="ml-4">a.	Thêm danh mục dân tộc</h3>
                        <div className="content-item" >
                            <p>B1: <a href="#category-position">Xem tại đây</a></p>
                            <p>B2: Bấm nút <b>thêm</b></p>
                            <img alt="images" src="./images/core-category-34.png" className="w-100 mb-3" /> 
                            <p>Cửa sổ chính</p>
                            <img alt="images" src="./images/core-category-35.png" className="w-100 mb-3" />
                            <p>
                                B3: Nhập <b>tên và mã </b>chức vụ<br/>
                                B4: Bấm <b>đồng ý</b> để lưu thông tin
                            </p>
                            <p>
                            Lưu ý:<br/>
                            <span className="ml-3">-	<b>Tên và mã</b> chức vụ  <b>bắt buộc</b></span><br/>
                            <span className="ml-3">-	<b>Mã chức vụ </b> là <b>duy nhất</b></span>
                            </p>
                        </div>
                    </div>
                    <div id="update-category-position">
                        <h3 className="ml-4">b.	Cập nhật danh mục chức vụ</h3>
                        <div className="content-item" >
                            <p>B1: <a href="#category-position">Xem tại đây</a></p>
                            <p>B2: Tìm danh mục chức vụ cần cập nhật và <b>bấm đúp chuột </b>vào dòng đó</p>
                            <img alt="images" src="./images/core-category-36.png" className="w-100 mb-3" /> 
                            <p>Cửa sổ chính</p>
                            <img alt="images" src="./images/core-category-37.png" className="w-100 mb-3" />
                            <p>
                                B3: Cập nhật <b>tên và mã</b> chức vụ <br/>
                                B5: Bấm <b>đồng ý</b> để lưu thông tin
                            </p>
                            <p>
                            Lưu ý:<br/>
                            <span className="ml-3">-	<b>Tên và mã </b> chức vụ <b>bắt buộc</b></span><br/>
                            <span className="ml-3">-	<b>Mã chức vụ </b> là <b>duy nhất</b></span>
                            </p>
                        </div>
                    </div>
                    <div id="delete-category-position">
                        <h3 className="ml-4">c.	Xoá danh mục chức vụ</h3>
                        <div className="content-item" >
                            <p>B1: <a href="#category-position">Xem tại đây</a></p>
                            <p>B2: Chọn danh mục chức vụ cần xoá và bấm nút <b>xoá</b></p>
                            <img alt="images" src="./images/core-category-38.png" className="w-100 mb-3" /> 
                            <p>B3: <b>Xác nhận xoá </b> để hoàn thành</p>
                            <p>Lưu ý: <br/>
                                <span className="ml-3">-	Danh mục chức vụ đang được dùng bởi nhân viên sẽ không thể xoá</span>
                            </p>
                        </div>
                    </div>
                </section>
                <section>
                    <div id="category-skill">
                        <h2>6.	Danh mục kỹ năng (chứng chỉ)</h2>
                        <div className="content-item" >
                            <p>B1: Vào <b>CORE &gt; Cài đặt &gt; Kỹ năng</b></p>
                            <img alt="images" src="./images/core-category-39.png" className="w-25 mb-3" /> 
                            <p>Màn hình chính</p>
                            <img alt="images" src="./images/core-category-40.png" className="w-100 mb-3" />
                            <table className="table ">
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Nút thêm</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Nút xoá (chỉ hiển thị khi đang chọn danh mục)</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Nút chọn/bỏ chọn danh mục</td>
                                    </tr>
                                </tbody>
                            </table> 
                        </div>
                    </div>
                    <div id="add-category-skill">
                        <h3 className="ml-4">a.	Thêm danh mục kỹ năng</h3>
                        <div className="content-item" >
                            <p>B1: <a href="#category-skill">Xem tại đây</a></p>
                            <p>B2: Bấm nút <b>thêm</b></p>
                            <img alt="images" src="./images/core-category-41.png" className="w-100 mb-3" /> 
                            <p>Cửa sổ chính</p>
                            <img alt="images" src="./images/core-category-42.png" className="w-100 mb-3" />
                            <p>
                                B3: Nhập <b>tên và mã </b>kỹ năng<br/>
                                B5: Bấm <b>đồng ý</b> để lưu thông tin
                            </p>
                            <p>
                            Lưu ý:<br/>
                            <span className="ml-3">-	<b>Tên và mã</b> kỹ năng  <b>bắt buộc</b></span><br/>
                            <span className="ml-3">-	<b>Mã kỹ năng </b> là <b>duy nhất</b></span>
                            </p>
                        </div>
                    </div>
                    <div id="update-category-skill">
                        <h3 className="ml-4">b.	Cập nhật danh mục kỹ năng</h3>
                        <div className="content-item" >
                            <p>B1: <a href="#category-skill">Xem tại đây</a></p>
                            <p>B2: Tìm danh mục kỹ năng cần cập nhật và <b>bấm đúp chuột </b>vào dòng đó</p>
                            <img alt="images" src="./images/core-category-43.png" className="w-100 mb-3" /> 
                            <p>Cửa sổ chính</p>
                            <img alt="images" src="./images/core-category-44.png" className="w-100 mb-3" />
                            <p>
                                B3: Cập nhật <b>tên và mã</b> kỹ năng <br/>
                                B5: Bấm <b>đồng ý</b> để lưu thông tin
                            </p>
                            <p>
                            Lưu ý:<br/>
                            <span className="ml-3">-	<b>Tên và mã </b> kỹ năng <b>bắt buộc</b></span><br/>
                            <span className="ml-3">-	<b>Mã kỹ năng </b> là <b>duy nhất</b></span>
                            </p>
                        </div>
                    </div>
                    <div id="delete-category-skill">
                        <h3 className="ml-4">c.	Xoá danh mục kỹ năng</h3>
                        <div className="content-item" >
                            <p>B1: <a href="#category-skill">Xem tại đây</a></p>
                            <p>B2: Chọn danh mục kỹ năng cần xoá và bấm nút <b>xoá</b></p>
                            <img alt="images" src="./images/core-category-45.png" className="w-100 mb-3" /> 
                            <p>B3: <b>Xác nhận xoá </b> để hoàn thành</p>
                            
                        </div>
                    </div>
                </section>
                <section>
                    <div id="add-update-registered-guests">
                        <h2>7.	Danh mục loại khách đăng ký</h2>
                        <h3 className="ml-4">a.	Thêm/cập nhật danh mục loại khách đăng ký</h3>
                        <div className="content-item ml-5" >
                            <p>B1: Ở mục menu bên trái màn hình. Vào mục <b>Khách</b> &gt; <b>Cài đặt </b> &gt; <b> Loại khách đăng ký </b></p>
                            <img alt="images" src="./images/core-category-46.png" className="w-25 mb-3" /> 
                            <p>Màn hình sau sẽ xuất hiện</p>
                            <img alt="images" src="./images/core-category-47.png" className="w-100 mb-3" />
                            <p>B2: Bấm nút <b>Thêm</b> để tạo mới hoặc <b>bấm đúp chuột</b> vào dòng để cập nhật loại khách tương ứng. </p>
                            <p>B3: Cửa sổ sau sẽ xuất hiện, điền vào hoặc chỉnh sửa các thông tin cần thiết.</p>
                            <img alt="images" src="./images/core-category-48.png" className="w-100 mb-3" />
                            <p>B4: Bấm <b>Đồng ý</b> để cập nhật </p>
                            <p> Lưu ý:</p>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Tên mục</th>
                                        <th>Ghi chú</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Tên loại</td>
                                        <td>-   Định nghĩa tên loại khách</td>
                                    </tr>
                                    <tr>
                                        <td>Mã loại</td>
                                        <td>-	Là mã chữ số<br/>
                                        -	Là duy nhất<br/>
                                        -	Chỉ hiển thị khi tạo mới
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Tổng thời gian ở lại</td>
                                        <td>- Số giờ tối đa mà loại khách này được phép ở trong công ty (giá trị hợp lệ từ 0 trở lên)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div id="delete-registered-guests">
                        <h3 className="ml-4">b.	Xoá danh mục loại khách đăng ký</h3>
                        <div className="content-item" >
                            <p>B1: <a href="#add-update-registered-guests">Xem tại đây</a></p>
                            <p>B2: Chọn danh mục loại khách cần xoá và bấm <b>Xoá</b></p>
                            <img alt="images" src="./images/core-category-49.png" className="w-100 mb-3" /> 
                            <p>B3: <b>Xác nhận xoá </b> để hoàn thành</p>
                        </div>
                    </div>
                </section>
            </article>
        </div>
    )
}
export default CoreCategory;