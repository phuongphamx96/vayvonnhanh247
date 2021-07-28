import { memo } from 'react';
import PhoneCallImg from '../images/icon-phone-call.svg';
import LogoImg from '../images/logo.png';

const Header = () => {
  return (
    <header id="header">
      <div className="container">
        <div className="top-header">
          <a className="call-btn-1" href="#footer" title="Liên hệ tư vấn">
            <img src={PhoneCallImg} alt="0366685586" />
            <span>
              Liên hệ tư vấn
              <br />
              0366.68.55.86
            </span>
          </a>
          <h1 className="logo">
            <img src={LogoImg} alt="Vib" />
          </h1>
          <a className="call-btn-2" href="#footer" title="Tư vấn miễn phí">
            <span>Tư vấn miễn phí</span>
          </a>
        </div>
        <ul className="menu">
          <li className="menu-item">
            <a className="active" href="#block1" title="Các gói vay">
              Các gói vay
            </a>
          </li>
          <li className="menu-item">
            <a href="#block2" title="Công cụ tính khoản vay">
              Công cụ tính khoản vay
            </a>
          </li>
          <li className="menu-item">
            <a href="#block3" title="Thẻ tín dụng">
              Thẻ tín dụng
            </a>
          </li>
          <li className="menu-item">
            <a href="#block4" title="Thanh lý tài sản">
              Thanh lý tài sản
            </a>
          </li>
          <li className="menu-item">
            <a href="#block5" title="Quyền lợi khách hàng">
              Quyền lợi khách hàng
            </a>
          </li>
          <li className="menu-item">
            <a href="#block6" title="Quy trình đăng ký">
              Quy trình đăng ký
            </a>
          </li>
          <li className="menu-item">
            <a href="#footer" title="Quy trình đăng ký">
              Liên hệ
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default memo(Header);
