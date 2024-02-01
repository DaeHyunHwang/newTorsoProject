import torso from './torso.png';
import './App.css';
import './styles.css';
import Button from "./Button.js";
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

function startSelfCheck(){
  alert("다음 페이지 예정이다우");
}

function App() {
  return (
      <div className="mainBody">
        <div className="tabWrap tab_typeL">
            <ul className="tabList">
              <li className="on">예약확인</li>
              <li className="">모발체크</li>
              <li className="">입장대기</li>
            </ul>
        </div>
        <header className="App-header">
          <img src={torso} className="App-torso" alt="torso" />
        </header>
        <h3>반갑습니다<p>토르소포맨 홍대상수점 입니다</p></h3>
        <button className="startBtn" onClick={startSelfCheck}>셀프 체크인 시작하기</button>
        <a href="#" className="helpMsg">도움이 필요하시면 <span className="underline">여기</span>를 눌러 직원을 호출해주세요.</a>
      </div>
  );
}
export default App;
