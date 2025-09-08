import { createBrowserRouter, redirect, RouterProvider } from "react-router-dom";
import App from "../App.jsx";
import List from "../compoenets/List.jsx";
import Detail from "../compoenets/Detail.jsx";
import NotFound from "../compoenets/errors/NotFound.jsx";

              // createBrowserRouter : router 만들어주는 함수
const router = createBrowserRouter([
  // 함수 안에 배열로 라우터 정의
  
  {
    // element 속성 : 해당 경로로 이동할 때 렌더링할 컴포넌트 지정
    element: <App />,
    // children 속성 : Outlet에 출력할 자식 컴포넌트 지정
    children: [
      {
        path: '/',
        loader: async () => {
            // redirct : react-router-dom 함수
            //           컴포넌트 외부에서 프로그래밍 방식으로 페이지 이동
          return redirect('/list');
        }
      },
      {
        path: '/list',
        element: <List />
      },
      {
        path: '/detail',
        element: <Detail />
      },
      {  // 꼭 마지막에 : 앞에서 체크 완료 후 나머지 것 전부
        path: '*',
        element: <NotFound />  // 404NotFound를 위한 컴포넌트
      }
    ]
  }

]);

function Router() {
          // Router // props 
                    // : router 라는 이름으로 보내져야함.위에 정의해둔 router
  return <RouterProvider router={router}/>
}

export default Router;