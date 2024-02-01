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
        <header className="App-header">
          <div className="title"><h3>어떤 선생님으로 예약해주셨나요?</h3></div>
        </header>
      </div>
  );
}
export default Step1;
