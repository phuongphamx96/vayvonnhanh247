import { memo } from 'react';
import Icon2 from '../images/icon-2.svg';
import Icon3 from '../images/icon-3.svg';
import Icon5 from '../images/icon-5.svg';

const Block5 = () => {
  return (
    <section className="page-section block4" id="block4">
      <div className="block4-content">
        <div className="container">
          <h2 className="title-block">Thanh lý tài sản</h2>
          <p>VIB nhận mua và bán tài sản thanh lý, bao gồm:</p>
          <p>Phương tiện vận tải, Bất động sản và Thiết bị máy móc.</p>
          <ul className="benefits-list">
            <li>
              <img src={Icon3} alt="Vib vay" />
              <span>Cam kết thực tế như thông tin mô tả</span>
            </li>
            <li>
              <img src={Icon2} alt="Vib vay" />
              <span>Hỗ trợ vay đến 80%</span>
            </li>
            <li>
              <img src={Icon5} alt="Vib vay" />
              <span>Giá bán ưu đãi hoặc thương lượngs</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="block4-form" id="block15">
        <h2 className="title-block">Tôi muốn...</h2>

        <form action="/mail/" method="POST">
          <div className="radio-group">
            <label className="radio-label">
              Mua
              <input type="radio" checked="checked" value="buy" name="radio" />
              <span className="checkmark"></span>
            </label>
            <label className="radio-label">
              Bán
              <input type="radio" name="radio" value="sell" />
              <span className="checkmark"></span>
            </label>
          </div>
          <div className="row-form">
            <div className="select-group">
              <div className="custom-select">
                <select name="content">
                  <option value="0">Nhu cầu</option>
                  <option value="BĐS">BĐS</option>
                  <option value="Xe">Xe</option>
                </select>
              </div>
            </div>
            <div className="select-group">
              <div className="input-group">
                <label className="label-float" htmlFor="fullname">
                  Địa Chỉ
                </label>
                <input
                  type="text"
                  className="input-float"
                  name="city"
                  id="address"
                />
              </div>
            </div>
          </div>
          <div className="row-form">
            <div>
              <div className="input-group">
                <label className="label-float" htmlFor="fullname">
                  Họ tên
                </label>
                <input
                  type="text"
                  className="input-float"
                  id="fullname"
                  name="fullname"
                />
              </div>
            </div>
            <div>
              <div className="input-group">
                <label className="label-float" htmlFor="phone">
                  Số điện thoại liên hệ
                </label>
                <input
                  className="input-float"
                  type="tel"
                  id="phone"
                  name="phone"
                />
              </div>
            </div>
          </div>
          {/* {% if messages %}
                                {% for message in messages %}
                                    <div className="alert alert-danger" role="alert">{{ message }}</div>
                                {% endfor %}
                            {% endif %} */}
          <div className="form-group">
            <input type="submit" value="Tư vấn cho tôi" className="btn" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default memo(Block5);
