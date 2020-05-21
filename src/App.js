import React,{useState,useEffect} from 'react';
import './App.css';
import {robots} from './datas/robotsData'
import CardList from './components/CardList'


function App() {

  const [datas, setData]= useState([])

  

  useEffect(()=>{

    fetch('https://jsonplaceholder.typicode.com/users')
          .then(response =>  response.json())
          .then(users=>  setData(users))
          .catch(err => alert(err))
    
  },[])
  const styles = {
    input:{fontSize:'1rem',padding:'1rem'}
  }

  const handlechange = e => {
    
setData( robots.filter(robot =>  robot.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())) )


  }
  return (
    <div className="App">
      <h1>Robot friends</h1>

      <input onChange={handlechange} style={styles.input} type='search' placeholder='enter robot name' />
      { datas.length === 0 ?<h3>loading...</h3> : <CardList datas={datas} />}
    </div>
  );
}

export default App;
