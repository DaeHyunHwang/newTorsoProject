import torso from './torso.png';
import './App.css';
import './styles.css';
import Button from "./Button.js";

function App() {
  return (
      <div className="mainDiv">
        <div className="le-dv"></div>
        <div className="ri-dv"></div>
      </div>
      <div className="mainBody">
        <div className="menuList">
            <div className="active">
              <span class="step">1</span><span><span>예약확인</span></span>
            </div>
            <div className="">
            <span class="step">2</span><span><span>모발체크</span></span>
            </div>
            <div className="">
            <span class="step">3</span><span><span>입장대기</span></span>
            </div>
        </div>
      </div>
  );
}

export default App;
