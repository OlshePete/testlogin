import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import { NavLink, Route } from 'react-router-dom';
import UsersList from './features/counter/UserList';
import { useSelector } from 'react-redux';

function App() {

  const checkFetching = useSelector((state) => state.counter.isFetching);
  const checkSuccess = useSelector((state) => state.counter.isSuccess);

  return (
    <div className="App">
      <header className="App-header">
        <div><NavLink to="/" visible>login</NavLink></div>
        <div><NavLink to={() => {
          if (checkSuccess && checkFetching) return "/usersList"
          else { 
            // alert("Please, get login autorization at first");
            return "/" }
        }} >user</NavLink></div>

        <Route exact path='/' render={() => <Counter />} />
        <Route path='/usersList' render={() => <UsersList />} />
      </header>

    </div>
  );
}

export default App;