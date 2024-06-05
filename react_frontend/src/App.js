import React from 'react';
import { Link } from 'react-router-dom';


const App = () => {
  return(
    <div className='homepage'>
      <h1>Habit Hacker</h1>
      <Link to="addhabits"><button>Add new habit</button></Link>
      <Link to="viewhabits"><button>View current habits</button></Link>
      <Link to="rest-auth/login"><button>Login</button></Link>
      <Link to="rest-auth/register"><button>Sign Up</button></Link>

    </div>
  );

}
export default App;
