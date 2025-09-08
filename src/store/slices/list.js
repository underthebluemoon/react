import { createSlice } from "@reduxjs/toolkit";

// `list` 상태관리 slice 생성 및 설정
const list = createSlice({
  name: 'list',    // slice 명, 파일과 같게 설정하는 관례
  initialState: {  // 상태 관리할 state를 정의하는 영역
    cnt: 0,        // 해당 slice.action을 통해 접근
  },
  reducers: {      // state의 상태를 변화시키는 actions를 정의하는 영역
          // action에 접근하기 위해 state 받아야함
    addCnt(state) {
      state.cnt += 1;
    },
    minusCnt(state) {
      state.cnt -=1;
    },
    changeCnt(state, action) {
      // state : `initialState`정보를 담고 있는 파라미터
      // action : 외부에서 전달 된 값을 담는 파라미터
      //  > action.payload : 전달 된 값에 접근할 수 있는 프로퍼티

      // const action = {  -> 자동으로 외부의 입력값이 세팅됨
      //   payload: 0,     
      //   type: 'Number',
      // }

      state.cnt = action.payload;
    }
    
  }
})

// 정의한 Actions 내보내기 : 각 actions를 내보내기 
// component 에서 주로 사용
export const {addCnt, changeCnt, minusCnt} = list.actions;

// Reducer 내보내기 : slice 내보내기
// store 에서 주로 사용
export default list.reducer;