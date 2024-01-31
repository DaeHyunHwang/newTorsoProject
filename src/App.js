import torso from './torso.png';
import './App.css';
import Button from './Button.js'

function App() {
  return (
    <div className="App">
      <div class="menuList">
          <div class="active">
            <span class="step">1</span><span><span>예약확인</span></span>
          </div>
          <div class="">
          <span class="step">2</span><span><span>모발체크</span></span>
          </div>
          <div class="">
          <span class="step">3</span><span><span>입장대기</span></span>
          </div>
        </div>
      <header className="App-header">
        <img src={torso} className="App-torso" alt="torso" />
        
        <Button className="startBtn">셀프 체크인 시작하기</Button>
        <Button className="helpMsg">도움이 필요하시면 <span className="underline">여기</span>를 눌러 직원을 호출해주세요.</Button>
      </header>
      
    </div>
  );
}

export default App;
