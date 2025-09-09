import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

            // thunk 만들기
export const getList = createAsyncThunk(
  'list/getList', // thunk 고유명 (Slice명/actionType)
  async () => {
    const url = 'https://picsum.photos/v2/list?page=5&limit=10';
    
    // AJAX 처리, 서버의 특정 API 호출
                          // axios 라이브러리로 axios 임포트 하여 사용
    const response = await axios.get(url);

    // API 응답 반환, `fulfilled` 액션의 payload로 전달
    return response.data;
  }
);

          // 사용 안하는 중. list.js의 addMatcher()를 위한 예시
export const getTest =createAsyncThunk(
  'list/getTest',
  async () => {
    const url = 'https://picsum.photos/v2/list?page=5&limit=1';
    
    // AJAX 처리, 서버의 특정 API 호출
                          // axios 라이브러리로 axios 임포트 하여 사용
    const response = await axios.get(url);

    // API 응답 반환, `fulfilled` 액션의 payload로 전달
    return response.data;
  }
)