import './App.css'; 
import React, {useState, useEffect} from 'react'; 
import Navbar from './components/Navbar';
import Content from './components/Content';
import Menu from './components/Menu';

const App = () => {
  const options = ['About', 'Projects', 'Resume', 'Contact']; 
  const [current, setCurrent] = useState(options[0]); 

  const updateCurrent = (option) => {
      setCurrent(option)
  }

  return (
    <div className="app-container-outer">
      <div className="app-container-inner">
      
        <Navbar options={options} current={current} updateCurrent={updateCurrent} />

        <div className="grid-container">
          <Content options={options} updateCurrent={updateCurrent} current={current} />
          <Menu options={options} updateCurrent={updateCurrent} current={current} />
        </div>
      </div>
    </div>
  )
}

export default App;