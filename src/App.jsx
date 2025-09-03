import { useState } from 'react';
import './App.css'

function App() {
  // javascript 공간

  const title = '제목';

  const titleStyle = {
    color: 'blue',
    fontSize: '1rem',

  }
                            // useState : react에 존재하는 함수명
  let [count, setCount] = useState(0);
        // 변수명, 변수 변화 시키는 함수명 (set+)
  const increamentCount = () => {
    setCount((prev) => prev + 1 );
  }
  const decreamentCount = () => {
    setCount((prev) => {
      if(prev > 0) {
        return prev - 1;
      } else {
        return 0;
      }
    });
  }
  
  const [account, setAccount] = useState('');

  const [userInfo, setUserInfo] = useState({
    name: '홍길동',
    age: 20,
    gender: 'M',
  })

  // 기존 state !== 새 state -> relandering
  const addAge = () => {
    const copy = {...userInfo};
    copy.age += 1;
    setUserInfo(copy);
  }

  // useState??? 캡슐화, 버그추적, 리랜더링
  const test = {
    state: null,
    setter(param) {
      if(this.state !== param) {
        this.state = param;
        // 리랜더링 처리
      } else {
        return;
      }
    },
    useState(data) {
      this.state = data;
      return [this.state, this.setter.bind(this)];
                          // 오류나서 제미니가 bind 쓰라고함. 원래 코드는 this.setter
    }
  };
  const [a, setA] = test.useState(0);
  setA(1);
  console.log(a);


  return (
    // html 공간 : html 은 아님. jsx 문법으로 html 같이
    
    <>
      <span>{`${userInfo.name} : ${userInfo.age} : ${userInfo.gender}`}</span>
      <button type='button' onClick={addAge}>나이 증가</button>

      <br />
      <br />

      <input type="text" value={account} onChange={(e) => {setAccount(e.target.value)}} />
      <p>{account}</p>

      {/* 숫자 증감 버튼 만들기 */}
      <p>{count}</p>
      <button type='button' onClick={increamentCount}>+</button>
                                        {/* setCount는 count의 값을 변경시키는 함수이므로 prev는 이전count 값을 담음 */}
      <button type='button' onClick={decreamentCount}>-</button>

                            {/* <h1 style="color: red; font-size: 2rem;"></h1> */}
          {/* class를 주기 위해 className = '' (class는 js의 예약어이기 때문) */}
      <h1 className='title' style={{color: 'red', fontSize: '3rem'}}>{title}</h1>
      <h1 style={titleStyle}>{title}</h1>
                            {/* js 변수명을 {}로 감싸서 사용 가능 */}
                {/* js 처럼 변수에 style을 저장하여 사용 가능 */}
    </>
      // deepth 0인 여러개의 태그가 생기는 경우, error : 묶어야함
      // 의미 없는 태그는 비워둠 <></>

  )
}

// package.json이 있는 폴더내부에서 'npm run dev' 명령어로 개발 서버 열기

export default App;
