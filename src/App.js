import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import { NavLink, Route } from 'react-router-dom';
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

//   return (
//     <div className="App">
//       <header className="App-header">
//         <div><NavLink to={() => {
//           if (!checkFetching) return "/usersList"
//           else { 
//             // alert("Please, get login autorization at first");
//             return "/" } >login</NavLink></div>
//         <div><NavLink to={() => {
//           if (checkSuccess && checkFetching) return "/usersList"
//           else { 
//             // alert("Please, get login autorization at first");
//             return "/" }
//         }} >user</NavLink></div>


//         <Route exact path='/' render={() => <Counter />} />
//         <Route path='/usersList' render={() => <UsersList />} />


//       </header>

//     </div>
//   );
// }


// class LoginControl extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleLoginClick = this.handleLoginClick.bind(this);
//     this.handleLogoutClick = this.handleLogoutClick.bind(this);
//     this.state = {isLoggedIn: false};
//   }

//   handleLoginClick() {
//     this.setState({isLoggedIn: true});
//   }

//   handleLogoutClick() {
//     this.setState({isLoggedIn: false});
//   }

//   render() {
//     const isLoggedIn = this.state.isLoggedIn;
//     let button;



//     return (
//       <div>
//         <Greeting isLoggedIn={isLoggedIn} />
//         {button}
//       </div>
//     );
//   }
// }


// function UserGreeting(props) {
//   return <h1>Welcome back!</h1>;
// }

// function GuestGreeting(props) {
//   return <h1>Please sign up.</h1>;
// }

// function Greeting(props) {
//   const isLoggedIn = props.isLoggedIn;
//   if (isLoggedIn) {
//     return <UserGreeting />;
//   }
//   return <GuestGreeting />;
// }

// function LoginButton(props) {
//   return (
//     <button onClick={props.onClick}>
//       Login
//     </button>
//   );
// }

// function LogoutButton(props) {
//   return (
//     <button onClick={props.onClick}>
//       Logout
//     </button>
//   );
// }

// ReactDOM.render(
//   <LoginControl />,
//   document.getElementById('root')
// );