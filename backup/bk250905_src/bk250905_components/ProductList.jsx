import { useState } from 'react';
import './ProductList.css';
import ProductDetail from './ProductDetail';

function ProductList() {
  const products = [
    {id: 0, title: '츄르', info: '닭고기맛', price: 13900, img: 'https://www.costco.co.kr/medias/sys_master/images/ha6/hd1/101821935026206.jpg'},
    {id: 1, title: '스낵', info: '연어맛', price: 8900, img: 'https://sitem.ssgcdn.com/17/48/69/item/2097001694817_i1_332.jpg'},
    {id: 2, title: '저키', info: '소고기맛', price: 11500, img: 'https://cdn.catpang.com/catpang/data/goods/1/774_web_detail_1557988164418247.jpg'},
  ];
  
  // 모달을 띄우기 위해 변화 감지용
  const [modalFlg, setModalFlg] = useState(false);
  
  // props : 부모 컨포넌트에서 자식 컨포넌트로 데이터 전달. 단방향. 읽기 전용. 수정 불가
  // 1. 전달한 데이터는 매번 바뀌므로 useState 에 저장
  const [propsProduct, setPropsProduct] = useState({});
  // 3. 클릭한 아이템의 복사본을 담음
  const viewModal = (item) => {
    setPropsProduct({...item});
    setModalFlg(true);
  }

  return (
    <>
                                {/* 속성자리 : 자식에게 보낼 데이터 이름. 담긴 값 : 전달한 데이터
                                    4. 전달한 이름의 속성과 객체형태로 전달함 */}
      { modalFlg && <ProductDetail product={propsProduct} setModalFlg={setModalFlg}></ProductDetail> }
      <div className="card-container">
        {
          products.map (item => {
            return (                                            // 2. 클릭하는 아이템의 정보를 받아
              <div className="card" key={item.id} onClick={() => {viewModal(item)}}>
                <div className="card-img" style={{backgroundImage: `url('${item.img}')`}}></div>
                <br />
                <p className="card-title">{item.title}</p>
                <p className="card-price">{item.price}원</p>
              </div>
            );
          })
        }
      </div>
    </>
  );

}

export default ProductList;