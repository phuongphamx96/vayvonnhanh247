import { memo } from 'react';
import IconHandPhone from '../images/icon-handphone.svg';
import BackgroundFooter from '../images/bg-footer-mb.jpg';

const Footer = () => {
  return (
    <footer className="page-section" id="footer">
      <div className="image-ft">
        <img src={BackgroundFooter} alt="Vib" />
      </div>
      <div className="container">
        <div className="content-ft">
          <h2 className="title-block" href="#footer">
            Liên hệ tư vấn miễn phí
          </h2>
          <p>
            Chúng tôi là chuyên viên tư vấn cấp cao của Ngân hàng VIB. Với 15
            năm kinh nghiệm trong lĩnh vực tư vấn tài chính, chúng tôi đã tư vấn
            cho hàng ngàn khách hàng hài lòng và thành công trong lĩnh vực tài
            chính.
          </p>
          <p>
            Để nhận tư vấn miễn phí, Quý Khách hàng vui lòng để lại thông tin.
          </p>
          <form id="contact-form" method="post" action="/mail/">
            <div className="input-group">
              <label className="label-float" htmlFor="contact-fullname">
                Họ tên
              </label>
              <input
                type="text"
                className="input-float"
                id="contact-fullname"
                name="fullname"
              />
            </div>
            <div className="input-group">
              <label className="label-float" htmlFor="contact-phone">
                Số điện thoại liên hệ
              </label>
              <input
                className="input-float"
                type="tel"
                id="contact-phone"
                name="phone"
              />
            </div>
            <input type="submit" value="Gửi đăng ký" className="btn" />
          </form>
          <p className="title-call">
            Hoặc Quý Khách hàng liên hệ trực tiếp qua hotline:
          </p>
          <a href="tel:+84366685586" className="call-link">
            <img src={IconHandPhone} alt="Vib vay" />
            <span>0366.68.55.86</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
