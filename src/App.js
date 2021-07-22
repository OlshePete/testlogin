import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
// import { NavLink, Route } from 'react-router-dom';
import UsersList from './features/counter/UserList';
import { useSelector } from 'react-redux';

function App() {

  const checkFetching = useSelector((state) => state.counter.isFetching);
  if (!checkFetching) {
    return (
      <div className="App">
        <header className="App-header">
          <Counter /></header> </div>
    )
  } else {
    return (
      <div className="App">
        <header className="App-header">
          <UsersList /></header> </div>
    )
  }
}
export default App;