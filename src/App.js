import React,{useState} from 'react';
import './App.css';
import {robots} from './datas/robotsData'
import CardList from './components/CardList'


function App() {

  const [datas, setData]= useState(robots)
  const styles = {
    input:{fontSize:'22px'}
  }

  const handlechange = e => {
    
setData( robots.filter(robot =>  robot.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())) )


  }
  return (
    <div className="App">
      <h1>Robot friends</h1>

      <input onChange={handlechange} style={styles.input} type='search' placeholder='enter robot name' />
        <CardList datas={datas} />
    </div>
  );
}

export default App;
