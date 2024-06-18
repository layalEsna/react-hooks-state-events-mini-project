// import React from "react";

// function TaskList() {
//   return (
//     <div className="tasks">
//       {/* display a list of tasks using Task component */}
//     </div>
//   );
// }

// export default TaskList;ORIGINAL CODE
import React from "react";
import Task from "./Task";

function TaskList({ tasks, handleDelete }) {
  
  return (
    <div className="tasks">
      {tasks.map(task => (
        <Task
          key={task.text}
          category={task.category}
          text={task.text}
          handleDelete = {handleDelete}
        />
      ))}
      {/* display a list of tasks using Task component */}
    </div>
  );
}

export default TaskList;
