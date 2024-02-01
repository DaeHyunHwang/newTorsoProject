import './App.css';
import './styles.css';
import master1 from './master1.png';
import master2 from './master2.png';
import master3 from './master3.png';
import master4 from './master4.png';
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

const selectMaster = (masterValue) => {
  alert(masterValue);
};

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
          <div className="masterTab">
            <div className="title"><h3>어떤 선생님으로 예약해주셨나요?</h3></div>
            <ul className="masterList">
              <li><a href="#" onClick="{()=>selectMaster('master1')}" ><img src={master1} className="" alt="master1" /><p><label>도하쌤</label></p></a></li>
              <li><a href="#" onClick="{()=>selectMaster('master2')}" ><img src={master2} className="" alt="master2" /><p><label>민종쌤</label></p></a></li>
              <li><a href="#" onClick="{()=>selectMaster('master3')}" ><img src={master3} className="" alt="master3" /><p><label>태원쌤</label></p></a></li>
              <li><a href="#" onClick="{()=>selectMaster('master4')}" ><img src={master4} className="" alt="master4" /><p><label>진성쌤</label></p></a></li>
            </ul>
          </div>
        <div className="mainFooter">
          <button className="homeBtn" onClick={Home}>이전</button>
        </div>
      </div>
  );
}
export default Step1;
