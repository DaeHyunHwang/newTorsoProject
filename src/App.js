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
              <span className="step">1</span><span><span>예약확인</span></span>
            </div>
            <div className="">
            <span className="step">2</span><span><span>모발체크</span></span>
            </div>
            <div className="">
            <span className="step">3</span><span><span>입장대기</span></span>
            </div>
        </div>
        <div className="AppBody">
          <div className="AppLogo">
            <header className="App-header">
              <img src={torso} className="App-torso" alt="torso" />
            </header>
          </div>
          <h3>반갑습니다\n토르소포맨 홍대상수점 입니다</h3>
          <Button label="셀프 체크인 시작하기" styleClass="startBtn" onClick="" disabled={false} />
        </div>
      </div>
  );
}

export default App;
