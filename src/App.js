import React from 'react';

const today = new Date();
const formatDate = (date) => {
  return new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(date);
};

const TodoList = () => {
  return <h1>To Do List for {formatDate(today)}</h1>;
};

export default function App() {
  return <TodoList />;
}
