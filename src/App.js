import React,{useState,useEffect} from 'react';
import './App.css';
import CardList from './components/CardList'

import {setSearchField,requestRobots} from './action'
import {connect} from 'react-redux'

const mapStateToProps = state => {
 return {
          searchField: state.searchRobots.searchField,

          robots:state.requestRobots.robots,
          isPending:state.requestRobots.isPending,
          error: state.requestRobots.error
        }
}

const mapDispatchToProps =  dispatch => 
( {
   handlechange: event => dispatch(setSearchField(event.target.value)),
  onRequestRobots: () => dispatch(requestRobots())
})

function App(props) {

  const {searchField,handlechange,onRequestRobots,robots,isPending,error} = props
  
 const  filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(searchField.toLowerCase()))

  useEffect(()=>{

   onRequestRobots()
    
  },[])
  const styles = {
    input:{fontSize:'1rem',padding:'1rem'}
  }

 
  return (
    <div className="App">
      <h1>Robot friends</h1>

      <input onChange={handlechange} style={styles.input} type='search' placeholder='enter robot name' />
      { isPending ?<h3>loading...</h3>: <CardList datas={filteredRobots} /> }
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
