import { createSlice } from "@reduxjs/toolkit";

const detail = createSlice({
  name: 'detail',
  initialState: {
    cnt: 0,
  },
  reducers: {
    addCnt(state) {
      state.cnt += 1;
    },
    minusCnt(state) {
      state.cnt -=1;
    },
    changeCnt(state, action) {
      // 정규표현식 : 문자열 검증
      const regex = /^[0-9]+$/;
      if(regex.test(action.payload)) {
        state.cnt = parseInt(action.payload);
      } else {
        console.log('num아님', action.payload);
      }
    }
  }

  // ------ 실습 -------------------------
  // initialState: {
  //   count: 0,
  // },
  // reducers: {
  //   addCount(state) {
  //     state.count += 1;
  //   },
  //   minusCount(state) {
  //     state.count -=1;
  //   },
  //   changeCount(state, action) {
  //     state.count = action.payload;
  //   }
  // }

})

export const {
  addCnt,
  minusCnt,
  changeCnt,
} = detail.actions;

export default detail.reducer;

// -------- 실습 --------------
// export const {
//   addCount,
//   minusCount,
//   changeCount,
// } = detail.actions;

// export default detail.reducer;