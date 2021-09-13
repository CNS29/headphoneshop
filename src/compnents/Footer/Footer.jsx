import React from 'react'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="row">
                <div className="col xl-3">
                    <div className="logo">HeadPhone</div>
                </div>
                <div className="col xl-3">
                    <h3 className="footer_title">Giới thiệu</h3>
                    <ul className="footer_list">
                        <li className="footer_item"><a href="/">Giới thiệu về HeadShop</a></li>
                        <li className="footer_item"><a href="/">Thương hiệu</a></li>
                        <li className="footer_item"><a href="/">Sản phẩm</a></li>
                    </ul>
                </div>
                <div className="col xl-3">
                <h3 className="footer_title">Các chính sách</h3>
                    <ul className="footer_list">
                        <li className="footer_item"><a href="/">Bảo mật thông tin cá nhân</a></li>
                        <li className="footer_item"><a href="/">Cam kết hàng hóa</a></li>
                        <li className="footer_item"><a href="/">Chính sách vận chuyển</a></li>
                        <li className="footer_item"><a href="/">Hình thức thanh toán</a></li>
                        <li className="footer_item"><a href="/">Hướng dẫn mua trả góp</a></li>
                    </ul>
                </div>
                <div className="col xl-3">
                <h3 className="footer_title">Địa chỉ</h3>
                    <ul className="footer_list">
                        <li className="footer_item"><a href="/">14 Nguyễn Văn Giai, P. Đa Kao, Q.1 (028) 38 202 909 – 0914 345 357</a></li>
                        <li className="footer_item"><a href="/">6B Đinh Bộ Lĩnh, P.24, Q. Bình Thạnh (028) 38 202 909 – 0914 345 357</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer
