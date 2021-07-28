import { memo } from 'react';
import Icon1 from '../images/icon-1.svg';
import Icon2 from '../images/icon-2.svg';
import Icon3 from '../images/icon-3.svg';
import Icon4 from '../images/icon-4.svg';
import Icon5 from '../images/icon-5.svg';

const Block3 = () => {
  return (
    <section className="page-section block5" id="block5">
      <div className="container">
        <h2 className="title-block">Quyền lợi của khách hàng khi vay</h2>
        <ul className="benefits-list">
          <li>
            <img src={Icon1} alt="Vib vay" />
            <span>Cam kết thủ tục, hồ sơ đơn giản, nhanh chóng</span>
          </li>
          <li>
            <img src={Icon4} alt="Vib vay" />
            <span>Giải ngân nhanh chóng từ 3-7 ngày có tiền</span>
          </li>
          <li>
            <img src={Icon2} alt="Vib vay" />
            <span>
              Nhân viên nhiệt tình, tận tâm, nhanh nhẹn làm việc và tư vấn miễn
              phí thứ 7 và chủ nhật, 24/7...
            </span>
          </li>
          <li>
            <img src={Icon5} alt="Vib vay" />
            <span>Ưu tiên vay vốn lãi suất thấp</span>
          </li>
          <li>
            <img src={Icon3} alt="Vib vay" />
            <span>
              VIB hỗ trợ tư vấn hồ sơ miễn phí 100%, Cam kết không phát sinh phụ
              phí
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default memo(Block3);
