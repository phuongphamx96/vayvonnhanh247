import { memo } from 'react';
import Icon24h from '../images/icon-24h.png';
import Icon13 from '../images/icon-13.png';
import Icon14 from '../images/icon-14.png';

const Block6 = () => {
  return (
    <section className="page-section block6" id="block6">
      <div className="container">
        <h2 className="title-block">Quy trình đăng ký</h2>
        <div className="row">
          <div className="small-12 large-4 process-item">
            <img src={Icon24h} alt="Vib" />
            <p>Gọi số 0366.68.55.86 hoặc chat với chuyên viên tư vấn</p>
          </div>
          <div className="small-12 large-4 process-item">
            <img src={Icon13} alt="Vib" />
            <p>Chúng tôi sẽ đến tận nơi để hoàn thành giấy tờ của bạn</p>
          </div>
          <div className="small-12 large-4 process-item">
            <img src={Icon14} alt="Vib" />
            <p>Bắt đầu thực hiện những ước mơ của bạn với ưu đãi từ VIB</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Block6);
