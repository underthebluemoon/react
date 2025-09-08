import { configureStore } from "@reduxjs/toolkit";
import listReducer from './slices/list.js';
import detailReducer from './slices/detail.js';

// Redux store 생성 및 설정
export default configureStore({
  reducer: {
    // slice 명 : reducer 명 ( import명 )
    list: listReducer,
    detail: detailReducer,
  }
});
