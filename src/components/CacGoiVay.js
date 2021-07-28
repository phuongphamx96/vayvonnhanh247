import { memo, useState } from 'react';

const loans = [
  {
    id: 1,
    icon: 'icon-home',
    title: 'Vay Mua Nhà',
  },
  {
    id: 2,
    icon: 'icon-car',
    title: 'Vay Mua Xe',
  },
  {
    id: 3,
    icon: 'icon-money',
    title: 'Vay Tiêu Dùng',
  },
];

const loans_details = [
  [
    { title: 'Tiêu Chí', data: ['Vay Mua Nhà', 'Vay Xây Và Sửa Chữa Nhà'] },
    {
      title: 'Số tiền vay',
      data: ['Tối đa 80% nhu cầu vay', 'Tối đa 80% nhu cầu vay'],
    },
    { title: 'Thời gian vay', data: ['Tối đa 30 năm', '15 năm'] },
    { title: 'Lãi suất', data: ['0,69% / tháng', '0,69% / tháng'] },
    {
      title: 'Phương thức trả nợ',
      data: [
        'Trả gốc: Hàng tháng/Hàng quý/6 tháng; Trả lãi: Hàng tháng',
        'Trả gốc: Hàng tháng/Hàng quý/6 tháng; Trả lãi: Hàng tháng',
      ],
    },
    { title: 'Đối tượng khách hàng', data: ['Cá nhân', 'Cá nhân'] },
    {
      title: 'Nguồn thu nhập',
      data: [
        'Thu nhập từ lương, từ kinh doanh/ Góp vốn, từ cho thuê tài sản',
        'Thu nhập từ lương, từ kinh doanh/ Góp vốn, từ cho thuê tài sản',
      ],
    },
    { title: 'Tài sản đảm bảo', data: ['Bất động sản', 'Bất động sản'] },
    {
      title: 'Thông tin khác',
      data: ['Biểu phí, điều kiện và hồ sơ', 'Biểu phí, điều kiện và hồ sơ'],
    },
  ],
  [
    { title: 'Tiêu Chí', data: ['Vay mua xe tiêu dùng'] },
    {
      title: 'Số tiền vay',
      data: ['Tối đa 80% giá trị tài sản'],
    },
    { title: 'Thời gian vay', data: ['8 năm (96 tháng)'] },
    { title: 'Lãi suất', data: ['chỉ từ 0.725%/tháng'] },
    {
      title: 'Phương thức trả nợ',
      data: ['Trả gốc: Hàng tháng/hàng quý/6 tháng; Trả lãi: hàng tháng'],
    },
    { title: 'Đối tượng khách hàng', data: ['Cá nhân'] },
    {
      title: 'Nguồn thu nhập',
      data: ['Thu nhập từ kinh doanh/lương'],
    },
    { title: 'Tài sản đảm bảo', data: ['Bất động sản/Xe'] },
    {
      title: 'Thông tin khác',
      data: ['Biểu phí'],
    },
  ],
  [
    { title: 'Tiêu Chí', data: ['Vay tiêu dùng'] },
    {
      title: 'Số tiền vay',
      data: ['Tối đa 60% nhu cầu vay'],
    },
    { title: 'Thời gian vay', data: ['Tối đa 8 năm'] },
    { title: 'Lãi suất', data: ['0,69% / tháng'] },
    {
      title: 'Phương thức trả nợ',
      data: ['Trả gốc: Hàng tháng/Hàng quý/6 tháng; Trả lãi: Hàng tháng'],
    },
    { title: 'Đối tượng khách hàng', data: ['Cá nhân'] },
    {
      title: 'Nguồn thu nhập',
      data: ['Thu nhập từ lương, từ kinh doanh/ Góp vốn, từ cho thuê tài sản'],
    },
    { title: 'Tài sản đảm bảo', data: ['Bất động sản'] },
    {
      title: 'Thông tin khác',
      data: ['Biểu phí, điều kiện và hồ sơ'],
    },
  ],
];

const Block1 = () => {
  const [currentTab, setCurrentTab] = useState(1);

  const changeTab = (selectedTab) => () => {
    setCurrentTab(selectedTab);
  };

  return (
    <section className="page-section block1" id="block1">
      <div className="container">
        <h2 className="title-block">Các gói vay thế chấp</h2>
        <div className="row tab-wrapper">
          <div className="small-12 large-3">
            <ul className="tab loan-tab">
              {loans.map((loan) => (
                <li
                  key={loan.id}
                  onClick={changeTab(loan.id)}
                  className={loan.id === currentTab ? 'current' : undefined}
                  data-tab={`tab-${loan.id}`}>
                  <span className={loan.icon}></span>
                  <span>{loan.title}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="small-12 large-9">
            <div className="tab-content current" id={`tab-${currentTab}`}>
              <table className="loan-table">
                {loans_details[currentTab - 1].map((detail, index) =>
                  index === 0 ? (
                    <tr key={index}>
                      <th>{detail.title}</th>
                      {detail.data.map((content, index) => (
                        <th key={index}>{content}</th>
                      ))}
                    </tr>
                  ) : (
                    <tr key={index}>
                      <td>{detail.title}</td>
                      {detail.data.map((content, index) => (
                        <td key={index}>{content}</td>
                      ))}
                    </tr>
                  ),
                )}
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Block1);
