import { memo, useState } from 'react';
import Card1 from '../images/card-1.png';
import Card2 from '../images/card-2.png';

const cards = [
  {
    id: 1,
    url: Card1,
    max: 'Hạn mức lên đến 200 triệu đồng',
    fee: '399,000 VNĐ',
    feature:
      'Hoàn tiền đến 6% cho chi tiêu trực tuyến\n\nTặng gói bảo hiểm giao dịch gian lận Thẻ\n\nMiễn phí nâng hạng thẻ Titan chương trình Bông Sen Vàng của Vietnam Airlines',
  },
  {
    id: 2,
    url: Card2,
    max: 'Hạn mức lên đến 500 triệu đồng',
    fee: '499,000 VNĐ',
    feature:
      'Hoàn tiền đến 6% cho chi tiêu trực tuyến\n\nTặng gói bảo hiểm giao dịch gian lận Thẻ\n\nMiễn phí nâng hạng thẻ Titan chương trình Bông Sen Vàng của Vietnam Airlines',
  },
];

const Block4 = () => {
  const [currentCardId, setCurrentCardId] = useState(cards[0].id);

  const selectedCard = cards.find((card) => card.id === currentCardId);

  const changeCard = (selectedCardId) => () => {
    setCurrentCardId(selectedCardId);
  };

  return (
    <section className="page-section block3" id="block3">
      <div className="container">
        <h2 className="title-block">Thẻ tín dụng</h2>
        <div className="tab-wrapper">
          <div
            className="tab-content current"
            key={selectedCard.id}
            id={`card-${selectedCard.id}`}>
            <div className="card-info">
              <div className="card-img">
                <img src={selectedCard.url} alt="Thẻ tín dụng VIB" />
              </div>
              <div className="card-desc">
                <h3>VIB Premier Boundless</h3>
                <div className="card-desc-row">
                  <div>
                    <h4>HẠN MỨC GIAO DỊCH</h4>
                    <p>{selectedCard.max}</p>
                    <h4>PHÍ THƯỜNG NIÊN</h4>
                    <p>{selectedCard.fee}</p>
                  </div>
                  <div>
                    <h4>TÍNH NĂNG NỔI BẬT</h4>
                    <p>{selectedCard.feature}</p>
                  </div>
                </div>
                <div className="card-btn">
                  <a
                    className="call-btn-2"
                    href="#footer"
                    title="Tư vấn miễn phí">
                    <span>Tư vấn miễn phí</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="card-list">
            <p>Chọn thẻ để xem thông tin</p>
            <ul className="tab card-tab">
              {cards.map((card) => (
                <li
                  key={card.id}
                  onClick={changeCard(card.id)}
                  className={card.id === currentCardId ? 'current' : undefined}
                  data-tab={`card-${card.id}`}>
                  <img src={card.url} alt="Thẻ tín dụng VIB" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Block4);
