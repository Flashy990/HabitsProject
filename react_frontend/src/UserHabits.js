import React from 'react';

const Habit = ({ habit }) => (
  <div>
    <h2>{habit.name}</h2>
    <p>{habit.description}</p>
    <p>Points: {habit.points}</p>
  </div>
);

export default Habit;
