import { useDispatch, useSelector } from 'react-redux';
import './Detail.css';
import { addCnt, changeCnt, minusCnt } from '../store/slices/detail';
import { useState } from 'react';
// ------------ 실습 -----------------------------------------------------------
// import { addCount, changeCount, minusCount } from '../store/slices/detail';
// import { useState } from 'react';

function Detail() {
  const cnt = useSelector(state => state.detail.cnt);
  const dispatch = useDispatch();

  const [inputNum, setInputNum] = useState(0);
  const convertAndSetNumber = (val) => {
    if(!isNaN(val)) {
      // isNaN() : numbertype으로 변환이 가능하면 false값
      // -> ! not연산자를 사용해서 true로 변경
      setInputNum(parseInt(val));
                // parseInt() : numbertype으로 변환
    } else {
      console.log('숫자 아님');
    }
  }

  // ---------- 실습 -----------------------------------------------------------
  // const count = useSelector(state => state.detail.count);
  // const dispatch = useDispatch();

  // const [inputValue, setInputValue] = useState(0);

  return (
    <>
      <h1>상세 페이지</h1>
      <p>{cnt}</p>
      <input type="number" onChange={(e) => { convertAndSetNumber(e.target.value) }}/>
      <button type="button" onClick={() => { dispatch(changeCnt(inputNum)) }}>입력</button>
      <button type="button" onClick={() => { dispatch(addCnt()) }}>+</button>
      <button type="button" onClick={() => { dispatch(minusCnt()) }}>-</button>
    </>
  )

  // ------------ 실습 -----------------------------------------------------------
  // return (
  //   <>
  //     <h1>상세 페이지</h1>
  //     <p>{count}</p>
  //     <button type='button' onClick={() => dispatch(addCount())}>+</button>
  //     <button type='button' onClick={() => dispatch(minusCount())}>-</button>
  //     <input type="number" onChange={(e) => setInputValue(e.target.value)}/>
  //     <button type='button' 
  //       onClick={() => dispatch(changeCount(inputValue))}>입력</button>
  //   </>
  // )
}

export default Detail;