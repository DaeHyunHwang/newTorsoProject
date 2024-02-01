import './App.css';
import './styles.css';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

function Home(){
  const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
}

function Step1() {
  return (
      <div className="mainBody">
          <div className="tabWrap tab_typeL">
            <ul className="tabList">
              <li className="on">예약확인</li>
              <li className="">모발체크</li>
              <li className="">입장대기</li>
            </ul>
          </div>
          <div className="masterList">
            <div className="master_1">
              <img src={torso} className="" alt="torso" />
              <label>도하쌤</label>
            </div>
            <div className="master_2">
              <img src={torso} className="" alt="torso" />
              <label>민종쌤</label>
            </div>  
            <div className="master_3">
              <img src={torso} className="" alt="torso" />
              <label>태원쌤</label>
            </div>
            <div className="master_4">
              <img src={torso} className="" alt="torso" />
              <label>진성쌤</label>
            </div>
          </div>
        <div className="title"><h3>어떤 선생님으로 예약해주셨나요?</h3></div>
        <button className="startBtn" onClick={Home}>홈으로</button>
      </div>
  );
}
export default Step1;
