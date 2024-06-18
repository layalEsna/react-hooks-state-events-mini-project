// import React from "react";
// import CategoryFilter from "./CategoryFilter";
// import NewTaskForm from "./NewTaskForm";
// import TaskList from "./TaskList";

// import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

// function App() {
//   return (
//     <div className="App">
//       <h2>My tasks</h2>
//       <CategoryFilter />
//       <NewTaskForm />
//       <TaskList />
//     </div>
//   );
// }

// export default App; ORIGINAL CODE

// import React, { useState } from "react";
// import CategoryFilter from "./CategoryFilter";
// import NewTaskForm from "./NewTaskForm";
// import TaskList from "./TaskList";

// import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

// function App() {
//   const [tasks, setTasks] = useState(TASKS)
//   const [selectedCategory, setSelectedCategory] = useState('All');



//   function handleDelete(taskId) {
//     setTasks(tasks.filter(task => task.text !== taskId))
//   }
//   function handleFilter(category) {
//     setSelectedCategory(category)
//   }
//   const filteredTasks = selectedCategory === 'All' ?
//     tasks
//     : tasks.filter(task => task.category === selectedCategory)
//   function handleFormSubmit(newTask) {
//     setTasks([...tasks, newTask])
//   }

//   return (
//     <div className="App">
//       <h2>My tasks</h2>
//       <CategoryFilter
//         categories={CATEGORIES}
//         handleFilter={handleFilter}
//         selectedCategory={selectedCategory} 
      
//       />
//       <NewTaskForm
//         submitTask={handleFormSubmit}
//         categories={CATEGORIES.filter(category !== 'All')}
//       />
//       <TaskList tasks={filteredTasks} handleDelete={handleDelete} />
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState('All');

  function handleDelete(taskId) {
    setTasks(tasks.filter(task => task.text !== taskId));
  }

  function handleFilter(category) {
    setSelectedCategory(category);
  }

  const filteredTasks = selectedCategory === 'All' 
    ? tasks 
    : tasks.filter(task => task.category === selectedCategory);

  function onTaskFormSubmit(newTask) {
    setTasks([...tasks, newTask]);
  }
  // const submitTask = (newTask) => {
  //   setTasks([...tasks, newTask]);
  // };
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories={CATEGORIES} 
        handleFilter={handleFilter} 
        selectedCategory={selectedCategory} 
      />
      <NewTaskForm 
        //submitTask={handleFormSubmit} 
        onTaskFormSubmit={onTaskFormSubmit}
        categories={CATEGORIES.filter(cat => cat !== 'All')} 
      />
      <TaskList 
        tasks={filteredTasks} 
        handleDelete={handleDelete} 
      />
    </div>
  );
}

export default App;
