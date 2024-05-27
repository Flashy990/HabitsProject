import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Habit from './UserHabits';

const Habits = () => {
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    axios.get('/api/habits')
      .then(response => setHabits(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      {habits.map(habit => <Habit key={habit.id} habit={habit} />)}
    </div>
  );
};

export default Habits;

// export default App;

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
