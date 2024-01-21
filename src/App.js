import React, { useState } from 'react';
import Task from './Task';

const App = () => {
  const [backlog, setBacklog] = useState([
    { id: 1, text: 'Backlog 1' },
    { id: 2, text: 'Backlog 2' },
  ]);
  const [readytogo, setReadyTogo] = useState([
    { id: 1, text: 'Ready to go 1' },
    { id: 2, text: 'Ready to go 2' },
  ]);
  const [inprogress, setInProgress] = useState([
    { id: 1, text: 'In Progress 1' },
    { id: 2, text: 'In Progress 2' },
  ]);
  const [done, setDone] = useState([
    { id: 1, text: 'Done 1' },
    { id: 2, text: 'Done 2' },
  ]);
  const [newTaskText, setNewTaskText] = useState('');

  const addBacklog = (text) => {
    setBacklog([...backlog, { id: backlog.length + 1, text }]);
  };

  const deleteBacklog = (id) => {
    const updatedBacklog = backlog.filter((backlog) => backlog.id !== id);
    setBacklog(updatedBacklog);
  };

  const addReadyToGo = (text) => {
    setReadyTogo([...readytogo, { id: readytogo.length + 1, text }]);
  };

  const deleteReadyToGo = (id) => {
    const updatedReadyToGo = readytogo.filter((readytogo) => readytogo.id !== id);
    setReadyTogo(updatedReadyToGo);
  };

  const addInProgress = (text) => {
    setInProgress([...inprogress, { id: inprogress.length + 1, text }]);
  };

  const deleteInProgress = (id) => {
    const updatedInProgress = inprogress.filter((inprogress) => inprogress.id !== id);
    setInProgress(updatedInProgress);
  };

  const addDone = (text) => {
    setDone([...done, { id: done.length + 1, text }]);
  };

  const deleteDone = (id) => {
    const updatedDone = done.filter((done) => done.id !== id);
    setDone(updatedDone);
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <div>
        <input
          type="text"
          placeholder="Enter Backlog"
          onChange={(e) => setNewTaskText(e.target.value)}
        />
        <button onClick={() => addBacklog(newTaskText)}>Add Backlog</button>
        {/* <button>Add Task</button> */}
      </div>
      <div>
        Backlog
        {backlog.map((task) => (
          <Task key={task.id} task={task} onDelete={deleteBacklog} />
        ))}
      </div>
      
      <div>
        <input
          type="text"
          placeholder="Enter Ready to do"
          onChange={(e) => setNewTaskText(e.target.value)}
        />
        <button onClick={() => addBacklog(newTaskText)}>Add Ready to do</button>
        {/* <button>Add Task</button> */}
      </div>
      <div>
        Ready to do
        {readytogo.map((task) => (
          <Task key={task.id} task={task} onDelete={deleteReadyToGo} />
        ))}
      </div>
      <div>
        <input
          type="text"
          placeholder="Enter In progress"
          onChange={(e) => setNewTaskText(e.target.value)}
        />
        <button onClick={() => addBacklog(newTaskText)}>Add In progress</button>
        {/* <button>Add Task</button> */}
      </div>
      <div>
        In progress
        {inprogress.map((task) => (
          <Task key={task.id} task={task} onDelete={deleteInProgress} />
        ))}
      </div>
      <div>
        <input
          type="text"
          placeholder="Enter Done"
          onChange={(e) => setNewTaskText(e.target.value)}
        />
        <button onClick={() => addDone(newTaskText)}>Add Done</button>
        {/* <button>Add Task</button> */}
      </div>
      <div>
        Done
        {done.map((task) => (
          <Task key={task.id} task={task} onDelete={deleteDone} />
        ))}
      </div>
      
    </div>
  );
};

export default App;