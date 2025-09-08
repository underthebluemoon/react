import { useDispatch, useSelector } from 'react-redux';
import './List.css';
import { addCnt, minusCnt } from '../store/slices/list';

function List() {
  // State에 접근하는 방법
              // react-redux hook. 임포트 필요
  const cnt = useSelector(state => state.list.cnt);
                                // store의 state -> list slice의 state
  // action 호출 방법
                  // react-redux hook. 임포트 필요
  const dispatch = useDispatch()


  return (
    <>
      <h1>리스트 페이지</h1>
      <p>{cnt}</p>
                                     {/* dispath 기능으로 action 불러오기. 임포트 필요 */}
      <button type='button' onClick={() => { dispatch(addCnt()) }}>+</button>
      <button type='button' onClick={() => { dispatch(minusCnt()) }}>-</button>
    </>
  )
}

export default List;