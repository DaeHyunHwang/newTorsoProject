import torso from './torso.png';
import './App.css';

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
        <h3>반갑습니다<br>토르소포맨 홍대상수점 입니다</h3>
        <button className="startBtn">셀프 체크인 시작하기</button>
        <button className="helpMsg">도움이 필요하시면 <span className="underline">여기</span>를 눌러 직원을 호출해주세요.</button>
      </header>
    </div>
  );
}

export default App;
