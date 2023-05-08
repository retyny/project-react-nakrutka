import './App.css';
import Header from "./components/section-header-main/Header";
import TopSection from "./components/section-header-main/TopSection";
import MainShopSection from "./components/section-shop-inner/MainShopSection";

function App() {
  return (
      <div className={'test'}>
          <div className={'main'}>
              <Header/>
              <TopSection/>
              <MainShopSection/>
          </div>
      </div>
  );
}

export default App;
