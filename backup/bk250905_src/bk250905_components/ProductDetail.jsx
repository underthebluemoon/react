import { useEffect, useState } from 'react';
import './ProductDetail.css'

                      // props 받은 것을 저장함
function ProductDetail(props) {
  const { product, setModalFlg } = props;
  // 객체 형식으로 전달되므로 props.product.속성 으로 불러올 수 있으나
  // 혼동 방지를 위해 

  const [cnt, setCnt] = useState(0);

  
  // Lifecycle Hooks
  
  // mount에서 실행하고 싶을 때 최초 1회만 실행
              // 첫번째 파라미터 : 콜백함수, 두번째 파라미터 : 빈 배열
  useEffect(() => {
    console.log('Mount!!');
  }, []); 

  // unmount 전에 실행 : Clean up Function 작성
  useEffect(() => {
    // Clean up Function
    return () => {
      console.log('UnMount!');
    }
  }, []); 

  // state가 변할때마다 실행, mount 후 최초 1회 실행
  useEffect(() => {
    console.log('test');
      // 변화할 것을 배열 안에 넣기
  }, [cnt]);


  return (
    <>
      {/* <div className="detail-modal"> */}
      <div className="detail-modal" onClick={() => { setModalFlg(false) }}>
        <div className="detail-box">
          <div className="detail-img" style={{backgroundImage: `url('${product.img}')`}}></div>
          <hr />
          <p className='detail-title'>{product.title}</p>
          <p className="detail-info">{product.info}</p>
          <p className="detail-price">{product.price}원</p>
          <p>수량 : {cnt}</p>
          <button type='button' onClick={() => { setCnt((prev) => prev +1)} }>+</button>
        </div>

      </div>
    </>
  )
}

export default ProductDetail;