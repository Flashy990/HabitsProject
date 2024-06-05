import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const ViewHabits = () => {
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/habits/')
      .then(res => res.json())
      .then(data => {
        console.log('Data from server:', data);
        setHabits(data);
      });
    //   .then(data => setHabits(data));
  }, []);

  const handleDelete = (id) => {
    fetch('http://localhost:8000/api/habits/' + id, {
      method: 'DELETE'
    }).then(() => {
      setHabits(habits.filter(habit => habit.id !== id));
    });
  }

  return (
    <div className="habits">
      <h1>My Habits</h1>
      <Link to="/"><button>Home</button></Link>

      {habits.map(habit => (
        <div className="habit" key={habit.id}>
          <h2>{habit.goal}</h2>
          <p>{habit.goalDescription}</p>
          <button onClick={() => handleDelete(habit.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default ViewHabits;
