** React Router **

1. React Router 설치
npm install (i) react-router-dom (@ver)

2. Router 컴포넌트 생성
/src/routes/Router.jsx

3. main.jsx에 App 컴포넌트 대신 Router 컴포넌트로 변경

4. 라우터로 관리하고 싶은 컴포넌트 만들기

5. Router 컴포넌트의 Router 객체 정의를 HTML구조에 맞게 설정


** Reducx **
<!-- 상태 관리 라이브러리, 중앙 집중식 상태 관리 패턴 구현 -->
1. Reducx 설치
npm install @reduxjs/toolkit react-redux fulfill

2. Redux Store 생성
/src/store/store.js (js로 생성)

3. Slice 생성
src/store/modules|slices/**

4. 생성한 Slices를 store 에 추가

5. main.jsx에 React Redux <provider> 추가 (StrictMode를 제외한 최상위 컴포넌트)
import 필요

6. 사용


** Redux Thunk **
1. Reduct Thunk 설치
npm install redux-thunk

2. Redux Thunk 파일 생성
scr/store/thunks/**
(axios 필요시 설치 : npm install axios)

3. 해당 Slice에 `extraReducers` 추가