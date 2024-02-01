import torso from './torso.png';
import './App.css';
import './styles.css';
import Button from "./Button.js";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function startSelfCheckPage() {
  return(
    <Link to="/step1">
      <h1>다음 페이지...</h1>
    </Link>
  )
}

function mainPage() {
  return(
    <Link to="/">
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
        <Button label="셀프 체크인 시작하기" styleClass="startBtn" onClick="startSelfCheckPage()" />
        <a href="#" className="helpMsg">도움이 필요하시면 <span className="underline">여기</span>를 눌러 직원을 호출해주세요.</a>
      </div>
    </Link>
  )
}

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <mainPage />
        </Route>
        <Route path="/step1">
          <mainPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
