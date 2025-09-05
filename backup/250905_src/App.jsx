// import { useState } from 'react';
import './App.css';
import Header from './components/Header.jsx';
      // 이름 지정    // 위치 지정
import Footer from './components/Footer.jsx';
import { Link, Outlet } from 'react-router-dom';
// import ProductList from './components/ProductList.jsx';
// import TabUi from './components/TabUi.jsx';
// import ProductDetail from './components/ProductDetail.jsx';

function App() {

  // const [prodFlg, setProdFlg] = useState(true);
  // const [tabFlg, setTabFlg] = useState(false);

  // const viewProductList = () => {
  //   setProdFlg(true);
  //   setTabFlg(false);
  // }
  // const viewTabUi = () => {
  //   setProdFlg(false);
  //   setTabFlg(true);
  // }


  return (
    <>
      <Header></Header>
      <main>
        <div>
          <Link to={'/'}>상품 리스트</Link>
          {/* <Link to={}></Link> */}
        </div>
        <Outlet></Outlet>
        

        {/* <div>
          <span onClick={viewProductList}>상품리스트</span>
          <span onClick={viewTabUi}>테스트</span>
        </div>
        { tabFlg && <TabUi></TabUi> }
        { prodFlg && <ProductList></ProductList> } */}

      </main>
      <Footer></Footer>
    </>
  );

}

export default App;
  // export deafault App : main에서 import
    // -> 받을 때 이름을 정할 수 있음
  // export { App } : named export. 이름이 지정된 객체로 내보냄.
    // -> mian에서 받을 때 App으로 받아야 함.
    // { App }로 받거나, 객체처럼 사용하거나. 