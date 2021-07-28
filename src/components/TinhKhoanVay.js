import { memo } from 'react';

const Block2 = () => {
  return (
    <section className="page-section block2" id="block2">
      <div className="container">
        <h2 className="title-block">Công cụ tính toán khoản vay</h2>
        <form id="loan-form">
          <div className="input-group">
            <label className="label-float" htmlFor="amount2">
              Số tiền muốn vay (VNĐ)
            </label>
            <input type="text" className="input-float" id="amount2" />
          </div>
          <div className="input-group">
            <label className="label-float" htmlFor="years">
              Kỳ hạn vay (năm)
            </label>
            <input type="number" className="input-float" id="years" />
          </div>
          <div className="form-group">
            <input
              type="hidden"
              className="input-float"
              id="laisuat"
              value="8.5"
            />
            <input
              type="button"
              value="Xem kết quả"
              className="btn"
              id="submit"
            />
          </div>
        </form>
        <div
          className="loan-result"
          id="loan-result"
          style={{ display: 'none' }}>
          {/* <div className="loan-result" id="loan-result" style="display: none;"> */}
          <p>
            <i>
              * Công cụ tính toán trên website chỉ mang tính chất tham khảo.
            </i>
          </p>
          <div className="table-wrapper">
            <table className="result-table">
              <tbody>
                <tr>
                  <th>Dư nợ đầu kỳ</th>
                  <th>Trả gốc</th>
                  <th>Trả lãi</th>
                  <th>Tổng tiền trả</th>
                </tr>
                <tr>
                  <td id="dau-ky"></td>
                  <td id="tra-goc"></td>
                  <td id="tra-lai"></td>
                  <td id="total"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Block2);
