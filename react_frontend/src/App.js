import React from 'react';
import { Link } from 'react-router-dom';


const App = () => {
  return(
    <div className='homepage'>
      <h1>Habit Hacker</h1>
      <Link to="addhabits"><button>Add new habit</button></Link>
      <Link to="viewhabits"><button>View current habits</button></Link>

    </div>
  );

}
export default App;


// import logo from './logo.svg';
// import './App.css';
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
