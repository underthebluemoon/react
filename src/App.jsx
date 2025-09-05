import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import './App.css';

function App() {
                  // useNavigate : hook. import 필요. 함수를 받음
  // 컴포넌트 내부에서 프로그래밍 방식으로 페이지 이동을 구현
  const navigate = useNavigate();

  const ok = () => {
    navigate('/ok');
  }

  return (
    <>
      <header>
        <h1>앱</h1>
        <div className="nav">
            {/* Link : react-router-dom 에서 제공하는 컴포넌트. 임포트 필요. 해당 부분만 리랜더링
                        a태그랑 비슷. HTML에서 a태그로 만들어짐 (css에서 a태그로) */}
          <Link to={'/list'} className='link-test'>리스트 페이지</Link>
          <Link to={'/detail'}>상세 페이지</Link>
          <br />
              {/* NavLink : Link와 같지만, 활성화된 링크에 className=active 자동부여 */}
          <NavLink to={'/list'}>리스트 페이지</NavLink>
          <NavLink to={'/detail'}>상세 페이지</NavLink>
          <br />
          <button type='button' onClick={ok}>확인</button>
        </div>
      </header>

      <main>
        {/* 라우터의 자식 컴포넌트를 출력 */}
        <Outlet></Outlet>
      </main>

      <footer>
        <p>카피라이트</p>
      </footer>
    </>
  )
}

export default App;