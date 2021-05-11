import React from "react";
// import "./style.css";
function ImportFiles(props) {
    return(
        <div className="pages pageTest importFiles d-flex align-items-start">
            <nav className="toc">
                <ul className="menu-main">
                    <li className="link">
                        <a href="#download-open-files">Tải và mở file</a>
                        <ul>
                            <li className="link"><a href="#download-files">Tải file</a></li>
                            <li className="link"><a href="#open-file">Mở file</a></li>
                        </ul>
                    </li>
                    <li className="link">
                        <a href="#sample-file-code">Xem file mẫu và mã code của các danh mục</a>
                        <ul>
                            <li className="link"><a href="#download-sample-file">Tải file mẫu</a></li>
                            <li className="link"><a href="#view-code">Xem mã code của các danh mục</a></li>
                        </ul>
                    </li>
                    <li className="link">
                        <a href="#import-data">Import dữ liệu nhân viên từ file</a>
                        <ul>
                            <li className="link"><a href="#from-sample-file">Từ file mẫu</a></li>
                            <li className="link"><a href="#from-available-file">Từ file có sẵn</a></li>
                        </ul>
                    </li>
                </ul>
                {/* <svg className="toc-marker" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
                    <path stroke="#444" strokeWidth="3" fill="transparent" strokeDasharray="0, 0, 0, 1000" strokeLinecap="round" strokeLinejoin="round" transform="translate(-0.5, -0.5)" />
                </svg> */}
            </nav>
            <article className="contents" id="contents">
                <h2 className="text-center">CHỨC NĂNG IMPORT FILE</h2>
                <section>
                    <div id="download-open-files">
                        <h2>1.	Tải và mở file</h2>
                        <div className="content-item" >
                            <p>B1: Từ menu chọn <b>Trang chủ &gt; Người dùng &gt; Nhập file</b></p>
                            <img alt="images" src='./images/import-files-1-1.png' className="mb-3 w-25" />
                            <p>Màn hình sau sẽ xuất hiện</p>
                            <img alt="images" src='./images/import-files-1.png' className="w-100" />
                        </div>
                    </div>
                    <div id="download-files">
                        <h3 className="ml-4">a.	Tải file</h3>
                        <div className="content-item" >
                            <img alt="images" src="./images/import-files-download.png"  className="w-100" />
                            <p className="ml-4">B2: Bấm <b>Nút chọn file</b> và chọn file cần tải (có thể chọn nhiều file) hoặc kéo file cần tải vào vùng
                            <b> Danh sách file đang chọn</b>.
                            </p>
                            <p className="ml-4">B3: Bấm <b>Nút tải (lưu) file</b> để lưu file.</p>
                            <p className="my-2"><i> <b>Lưu ý</b>: Chỉ hỗ trợ tải file .csv.</i></p>
                        </div>
                    </div>
                    <div id="open-file">
                        <h3 className="ml-4">b.	Mở file</h3>
                        <div className="content-item" >
                            <img alt="images" src="./images/import-files-2.png" className="w-100" />
                            <p className="ml-4">B2: Bấm vào dòng của file cần chọn ở vùng <b>Files của bạn</b> file đó sẽ được đọc và hiển thị trên vùng
                            <b> Dữ liệu xem trước</b>.
                            </p>
                            <img alt="images" src="./images/import-files-open-2.png" className="w-100" />
                        </div>
                    </div>
                </section>
                <section>
                    <div id="sample-file-code">
                        <h2>2.	Xem file mẫu và mã code của các danh mục</h2>
                        <div className="content-item" >
                            <p>B1: Từ menu chọn <b>Trang chủ &gt; Người dùng &gt; Nhập file</b></p>
                            <img alt="images" src='./images/import-files-1-1.png' className="mb-3 w-25" />
                            <p>Màn hình sau sẽ xuất hiện</p>
                            <img alt="images" src='./images/sample-file-code-1.png' className="w-100" />
                        </div>
                    </div>
                    <div id="download-sample-file">
                        <h3 className="ml-4">a.	Tải file mẫu.</h3>
                        <div className="content-item" >
                            <p className="ml-4">B2: Bấm vào danh mục cần tải file mẫu, hệ thống sẽ tự tải file.</p>
                            <p className="my-2"><i> <b>Lưu ý</b>: Có một số danh mục chưa hỗ trợ.</i></p>
                        </div>
                    </div>
                    <div id="view-code">
                        <h3 className="ml-4">b.	Xem mã code của các danh mục.</h3>
                        <div className="content-item" >
                            <p className="ml-4">B2: Bấm vào danh mục cần xem mã code. Cửa sổ sau sẽ xuất hiện.</p>
                            <img alt="images" src="./images/import-files-view-code-1.png" className="w-100" />
                            <p className="ml-4">Chức năng này để làm gì?</p>
                            <p className="font-italic ml-5">
                            Vì chức năng import nhân viên cần file có chứa đầy đủ các <b>nhãn</b> và <b>mã code</b> tương ứng của các danh mục <b>bắt buộc (Phòng ban, Chức vụ, Quốc tịch và Tỉnh thành)</b>.
                            </p>
                        </div>
                    </div>
                </section>
                <section>
                    <div id="import-data">
                        <h2>3.	Import dữ liệu nhân viên từ file</h2>
                        <div className="content-item" >
                            <p>Trước khi thực hiện hãy lược sơ qua <a href="#note">một số ghi chú</a>.</p>
                        </div>
                    </div>
                    <div id="from-sample-file">
                        <h3 className="ml-4">a.	Từ file mẫu.</h3>
                        <div className="content-item" >
                            <p className="ml-4">B1: Từ menu chọn <b>Home &gt; Người dùng &gt; Nhập file</b></p>
                            <img alt="images" src="./images/import-files-1-1.png" className="w-25" />
                            <p className="ml-4 my-3">Màn hình sau sẽ xuất hiện</p>
                            <img alt="images" src="./images/import-files-sample-file.png" className="w-100" />
                            <p className="ml-4 my-3">B2: Tải file mẫu ở mục <b>Người dùng</b>.</p>
                            <img alt="images" src="./images/import-files-sample-file-2.png" className="w-100" />
                            <p className="ml-4 my-3">B3: Mở file vừa tải về bằng Excel, file có dạng như sau.</p>
                            <img alt="images" src="./images/import-files-sample-file-3.png" className="w-100" />
                            <p className="ml-4 mt-3">B4: Điều chỉnh thông tin cho phù hợp với các nhãn. </p>
                            <p className="ml-4">B5: Tải file lên. <a href="#download-files">Xem cách tải file</a>.</p>
                            <p className="ml-4 mb-3">B6: Mở file. <a href="#open-file">Xem cách mở file</a>.</p>
                            <img alt="images" src="./images/import-files-sample-file-4.png" className="w-100" />
                            <p className="ml-4 my-3">B7: Chọn nhập file dạng &minus;&gt; <b>Người dùng</b>.</p>
                            <img alt="images" src="./images/import-files-sample-file-5.png" className="w-100" />
                            <p className="ml-4 my-3">B8: Bấm nút <b>Nhập file</b>.</p>
                            <img alt="images" src="./images/import-files-sample-file-6.png" className="w-100" />
                            <p className="ml-4 my-3">Cửa sổ sau sẽ xuất hiện.</p>
                            <img alt="images" src="./images/import-files-sample-file-7.png" className="w-100" />
                            <p className="ml-4 mt-3">B9: Gắn các nhãn (khoá) cho phù hợp.</p>
                            <p className="ml-4">B10: Bấm <b>Nút import file</b> để tiến hành import nhân viên.</p>
                        </div>
                    </div>
                    <div id="from-available-file">
                        <h3 className="ml-4">b.	Từ file có sẵn.</h3>
                        <div className="content-item" >
                            <p className="ml-4">B1: Tải file. <a href="#download-files"> Xem cách tải file</a>. </p>
                            <p className="ml-4 mb-3">B1: Tải file. <a href="#download-open-files"> Xem cách đọc file</a>. </p>
                            <img alt="images" src="./images/import-files-available-1.png" className="w-100" />
                            <p className="ml-4 my-3">B3: Chọn nhập file dạng &minus;&gt; <b>Người dùng</b>.</p>
                            <img alt="images" src="./images/import-files-available-2.png" className="w-100" />
                            <p className="ml-4 my-3">B4: Bấm nút <b>Nhập file</b>.</p>
                            <img alt="images" src="./images/import-files-available-3.png" className="w-100" />
                            <p className="ml-4 my-3">Cửa sổ sau sẽ xuất hiên.</p>
                            <img alt="images" src="./images/import-files-available-4.png" className="w-100" />
                            <p className="ml-4 mt-3">B5: Gắn các nhãn (khoá) cho phù hợp.</p>
                            <p className="ml-4">B6: Bấm <b>Nút import file </b>để tiến hành import nhân viên.</p>
                        </div>
                    </div>
                </section>
                <section>
                    <div id="note" className="mt-4">
                        <h3>Ghi chú:</h3>
                        <ul style={{listStyleType: "initial"}}>
                            <li>Dòng đầu tiên của <b>file mẫu Người dùng</b> là <b>các nhãn</b>.</li>
                            <li><b>6 nhãn đầu tiên</b> của <b>file mẫu Người dùng</b> (id, fullName, departmentCode,
                                positionCode, townCityCodeText, nationalityCode) là các nhãn <b>bắt buộc</b>. Các nhãn còn lại có thể xoá.
                                
                            </li>
                            <li><b>6 nhãn (khoá) bắt buộc</b>:
                                <ul className="type-dash">
                                    <li><b>id</b>: mã số duy nhất của nhân viên (chỉ nhập số). Vd: 1, 2, 100, ...</li>
                                    <li><b>fullName</b>: họ và tên của nhân viên.</li>
                                    <li><b>departmentCode</b>: mã code phòng ban.</li>
                                    <li><b>positionCode</b>: mã code chức vụ</li>
                                    <li><b>townCityCodeText</b>: mã code tỉnh thành.</li>
                                    <li><b>nationalityCode</b>: mã code quốc tịch.</li>
                                </ul>
                            </li>
                            <li>Các mã code ở đâu ra? <a href="#sample-file-code" className=" font-italic"> <u>Xem mã code của các danh mục</u></a>.</li>
                            <li><b>Các nhãn (khoá) còn lại</b>:
                                <ul className="type-dash">
                                    <li><b>userName</b>: tên tài khoản.</li>
                                    <li><b>password</b>: mật khẩu tài khoản.</li>
                                    <li><b>photo</b>: link ảnh chân dung.</li>
                                    <li><b>gender</b>: giới tính (Nam: nam, male, m, 0. Nữ: nữ, female, f, 1).</li>
                                    <li><b>idCardSuppliedPlace</b>: nơi cấp CMND/CCCD.</li>
                                    <li><b>peopleCode</b>: mã code dân tộc.</li>
                                    <li><b>relationshipName</b>: thông tin người liên hệ khi cần.</li>
                                    <li><b>address</b>: địa chỉ.</li>
                                    <li><b>birthPlace</b>: nơi sinh.</li>
                                    <li><b>nickName</b>: biệt danh.</li>
                                    <li><b>userIDCard</b>: số CMND/CCCD.</li>
                                    <li><b>userNativeCountry</b>: Nguyên quán.</li>
                                    <li><b>phone</b>: số điện thoại.</li>
                                    <li><b>email</b>: email.</li>
                                    <li><b>language</b>: ngôn ngữ (Chỉ chấp nhận những mã sau: vi, en)</li>
                                </ul>
                            </li>
                            <li>Lưu ý:
                                <ul className="type-dash">
                                    <li>Phải <b>gắn đủ các nhãn (khoá) bắt buộc</b> thì mới có thể import nhân viên.</li>
                                    <li>Sau khi đã import xong, nếu <b>tất cả các dòng thông tin</b> của file <b>đều lưu thành công </b>
                                     thì file đó sẽ <b>tự động xoá</b>. Nếu có dòng thông tin thất bại sẽ hiện pop-up sau (file cũ
                                    không bị xoá). Tải file để xem chi tiết các dòng bị thất bại.
                                    <img alt="images" src="../images/import-files-note.png" />
                                    </li>
                                </ul>
                            </li>
                            <li>Import dữ liệu khác tương tự (<b>Tỉnh thành, Quốc tịch</b>, ...).</li>
                        </ul>
                    </div>
                </section>
            </article>
        </div>
    )
}
export default ImportFiles;