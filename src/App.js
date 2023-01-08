import {useEffect, useState} from 'react';
import './App.css';
import tipsImg from './tips.png';

function App() {
  const [activity, setActivity] = useState("");
  const fetchActivity = async () => {
    const response = await fetch("http://www.boredapi.com/api/activity/");
    const data = await response.json();
    setActivity(data.activity);
  };

  useEffect(() => {
    fetchActivity();
  }, []);

  return (
    <div className="container">
      <div className='container-heading'>
        <div><img src = {tipsImg} alt = 'Tips' width = '80px'/></div>
        <div><h1>What to do:</h1></div>
      </div>
      <div><p>{activity}</p></div>
      <div className='container-btn'><button className='tip-btn' onClick={fetchActivity}>NEW ACTIVITY</button></div>
    </div>
  );
}

export default App;
