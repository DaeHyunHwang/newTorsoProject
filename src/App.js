import torso from './torso.png';
import './App.css';
import './styles.css';
import Button from "./Button.js";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './home';

export default function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
              <Route path={"/"} element={<Home />}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}
