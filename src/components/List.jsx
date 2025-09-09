import { useDispatch, useSelector } from 'react-redux';
import './List.css';
import { addCnt, clearList, minusCnt } from '../store/slices/list';
import { getList } from '../store/thunks/listThunk';
import { useEffect } from 'react';

function List() {
  // State에 접근하는 방법
              // react-redux hook. 임포트 필요
  const cnt = useSelector(state => state.list.cnt);
                                // store의 state -> list slice의 state
  // action 호출 방법
                  // react-redux hook. 임포트 필요
  const dispatch = useDispatch()

  // ------------- thunk ----------------------------
  useEffect( () => {
    dispatch(getList());

    // 리스트가 갖고 있는 내역 클리어
    return () => {
      dispatch(clearList());
    };
  }, []);
  //-------------------------------------------------
  
                                // store : state -> redux : list -> 변수 : list
  const list = useSelector(state => state.list.list);
  const loading = useSelector(state => state.list.loading);

  return (
    <>
      <h1>리스트 페이지</h1>
      <p>{cnt}</p>
                                     {/* dispath 기능으로 action 불러오기. 임포트 필요 */}
      <button type='button' onClick={() => { dispatch(addCnt()) }}>+</button>
      <button type='button' onClick={() => { dispatch(minusCnt()) }}>-</button>
    
      {/* -------- thunk ----------------------------- */}
      { loading && <h2>로딩중</h2> }
      <div className="card-container">
        {
          list && list.map( item => {
            return (
              <img src={item.download_url} width='100px' key={item.id} />
            )
          })
        }
      </div>
    </>
  )
}

export default List;