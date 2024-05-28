import { useState } from "react";

const Create = () => {
  const [goal, setGoal] = useState('');
  const [goalDescription, setGoalDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const habit = { goal, goalDescription };

    fetch('http://localhost:8000/api/habits/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(habit)
    }).then(() => {
      console.log('New habit added');
    })
  }

  return (
    <div className="create">
      <h2>Add a New Habit</h2>
      <form onSubmit={handleSubmit}>
        <label>Habit:</label>
        <input 
          type="text" 
          required 
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
        />
        <label>Description:</label>
        <textarea
          required
          value={goalDescription}
          onChange={(e) => setGoalDescription(e.target.value)}
        ></textarea>
        <button>Add it</button>
      </form>
    </div>
  );
}
 
export default Create;
