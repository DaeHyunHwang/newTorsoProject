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
          <div className="title"><h3>어떤 선생님으로 예약해주셨나요?</h3></div>
      </div>
  );
}
export default Step1;