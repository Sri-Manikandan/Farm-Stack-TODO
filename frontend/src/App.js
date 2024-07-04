import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import TodoList from './components/TodoList';

function App() {

  const [todoList, setTodoList] = useState([{}]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [stateflag, setStateFlag] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:8000/api/todo')
    .then((response) => {
      setTodoList(response.data);
    })
  },[stateflag]);

  const addTask = () => {
    axios.post('http://localhost:8000/api/todo', {
      title: title,
      description: description
    })
    .then((response) => {
      console.log(response);
      setStateFlag(!stateflag);
    })

  };

  return (
      <div className='App list-group-item justify-content-center align-items-center mx-auto' style={{"width":"400px","backgroundColor":"white","marginTop":"15px"}}>
        <h1 className='card text-white bg-dark mb-1'>Task Manager</h1>
        <h6 className='card text-white bg-dark mb-3'>FASTAPI - React - MongoDB</h6>
        <div className='card-body'>
          <h5 className='card text-white bg-dark mb-3'>Add Your Task</h5>
          <span className='card-text'>
            <input className='mb-2 form-control titleIn' placeholder='Title' onChange={event => setTitle(event.target.value)}/>
            <input className='mb-2 form-control desIn' placeholder='Description' onChange={event => setDescription(event.target.value)}/>
            <button className='btn btn-outline-primary mx-2 mb-3' style={{'borderRadius':'50px','fontWeight':'bold'}} onClick={addTask}>Add Task</button>
          </span>
          <h5 className='card text-white bg-dark mb-3'>Your Tasks</h5>
          <div>
            <TodoList todoviewList={todoList} stateflag={stateflag} setStateFlag={setStateFlag}/>
          </div>
        </div>
        <h6 className='card text-dark bg-warning mb-0 py-1'>Copyright 2024, All Rights Reserved &copy;</h6>
      </div>
  );
}

export default App;
