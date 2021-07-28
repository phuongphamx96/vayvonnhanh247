import Header from './components/Header';
import CacGoiVay from './components/CacGoiVay';
import TinhKhoanVay from './components/TinhKhoanVay';
import QuyenLoiKhachHang from './components/QuyenLoiKhachHang';
import TheTinDung from './components/TheTinDung';
import ThanhLyTaiSan from './components/ThanhLyTaiSan';
import QuyTrinhDangKy from './components/QuyTrinhDangKy';
import Footer from './components/Footer';

function App() {
  return (
    <div id="wrapper">
      <Header />
      <main className="home-page" id="main">
        <CacGoiVay />
        <TinhKhoanVay />
        <QuyenLoiKhachHang />
        <TheTinDung />
        <ThanhLyTaiSan />
        <QuyTrinhDangKy />
      </main>
      <Footer />
    </div>
  );
}

export default App;
