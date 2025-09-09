import { createSlice } from "@reduxjs/toolkit";
import { getList, getTest } from "../thunks/listThunk";

// `list` 상태관리 slice 생성 및 설정
const list = createSlice({
  name: 'list',    // slice 명, 파일과 같게 설정하는 관례
  initialState: {  // 상태 관리할 state를 정의하는 영역
    cnt: 0,        // 해당 slice.action을 통해 접근
    // --------- thunk -------------------------
    list: null,        // 비동기 처리를 해보기 위해 변수 지정
    loading: false,
    // -----------------------------------------
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
    },    
    // ---------- thunk -------------------------------
    clearList(state) {
      state.list = null;
    },
  },
    // ---------- thunk --------------------------------
    // extraReducers : 외부에서 만든 액션 (thunk) 처리
  extraReducers: builder => {
    builder    // thunk에서 만든 작업 불러오기. 임포트 필요
      // .addCase(getList.pending, (state) => {
      //   // `getList` Thunk의 처리가 대기중일 때, 처리 작성. 예: 로딩화면
      //   state.loading = true;
      // })
                      // fulfilled의 payload로 action 데이터 담김
      .addCase(getList.fulfilled, (state, action) => {
        // `getList` Thunk의 처리가 성공일 때, 처리 작성.
        state.list = action.payload;
        state.loading = false;
      })
      // .addCase(getList.rejected, (state) => {
      //   // `getList` Thunk의 처리가 실패일 때, 처리 작성.
      //   state.loading = false;
      // })

      .addCase(getTest.fulfilled, (state, action) => {
        // `getList` Thunk의 처리가 성공일 때, 처리 작성.
        state.list = action.payload;
        state.loading = false;
      })
      // .addCase(getTest.rejected, (state) => {
      //   // `getList` Thunk의 처리가 실패일 때, 처리 작성.
      //   state.loading = false;
      // })
      .addMatcher(  // 공통된 작업을 한번에 묶기
                    // 위의 pendig, rejected시, 작업(loading 작동)이 공통되므로 한번에 묶음
                              // string의 마지막 글자 'pending' : true/false
        action => action.type.endsWith('/pending'),
        state => {
          state.loading = true;
        }
      )
      .addMatcher(
        action => action.type.endsWith('/rejected'),
        state => {
          state.loading = false;
        }
      )
  }
})

// 정의한 Actions 내보내기 : 각 actions를 내보내기 
// component 에서 주로 사용
export const {
  addCnt, 
  changeCnt, 
  minusCnt, 
  clearList, 
} = list.actions;

// Reducer 내보내기 : slice 내보내기
// store 에서 주로 사용
export default list.reducer;