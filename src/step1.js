import "./styles.css";
import { useNavigate } from "react-router-dom";

export default function step1() {
  const movePage = useNavigate();

  function gohome(){
     movePage('/');
   }
  
  return (
    <div className="mainBody">
      여긴 다음페이지 예정
      <button onClick={gohome}>홈으로이동</button>
      </div>
  );
}
