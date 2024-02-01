import torso from './torso.png';
import './App.css';
import './styles.css';
import Button from "./Button.js";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './home';
import Step1 from './step1';

export default function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
              <Route path={"/"} element={<Home />}></Route>
              <Route path={"/step1"} element={<Step1 />}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}
