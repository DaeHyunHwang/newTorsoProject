import "./styles.css";
import { useNavigate } from "react-router-dom";
import Button from "./Button.js";

export default function step1() {
  const movePage = useNavigate();

  function gohome(){
     movePage('/');
   }
  
  return (
    <div className="mainBody">
      여긴 다음페이지 예정
      <Button label="홈으로이동" onClick="gohome}" />
      </div>
  );
}
