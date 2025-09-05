# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


1. React Router 설치
npm install (i) react-router-dom (@ver)

2. Router 컴포넌트 생성
/src/routes/Router.jsx

3. main.jsx에 App 컴포넌트 대신 Router 컴포넌트로 변경

4. 라우터로 관리하고 싶은 컴포넌트 만들기

5. Router 컴포넌트의 Router 객체 정의를 HTML구조에 맞게 설정