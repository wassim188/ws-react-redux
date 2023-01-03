import React, { useState } from "react";
import { connect } from "react-redux";
import { deleteTask, updateTask, completeTask } from "../redux/action";
export const Task = ({ task, delTask, updateTasks, completeTask }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [taskupdate, setTaskUpdate] = useState(task.description);
  const handleUpdate = (e) => {
    e.preventDefault();
    updateTasks({ id: task.id, value: taskupdate });
    setIsEdit(!isEdit);
  };
  return (
    <div className="Groupe-Tasks">
      {isEdit ? (
        <div className="task-update">
          <form onSubmit={handleUpdate}>
            <input
              type="text"
              className="form-control"
              value={taskupdate}
              onChange={(e) => {
                setTaskUpdate(e.target.value);
              }}
              required
            />
            <button className="btn btn-success m-2" type="submit">
              update
            </button>
          </form>
        </div>
      ) : (
        <div className="task-items">
          <div style={{ width: "300px" }}>
            <h3 className={task.isdone ? "complete" : ""}>
              {task.description}
            </h3>
          </div>
          <div>
            <i class="fa-solid fa-trash-can"></i>
            <button
              className="btn btn-danger m-2"
              onClick={() => delTask(task.id)}
            >
              Delete
            </button>
            <button
              className="btn btn-primary m-2"
              onClick={() => setIsEdit(!isEdit)}
            >
              Edit
            </button>
            <button
              className="btn btn-info m-2"
              onClick={() => completeTask(task.id)}
            >
              {task.isdone ? "undo" : "done"}
            </button>
          </div>
        </div>
      )}
      <hr />
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    delTask: (id) => dispatch(deleteTask(id)),
    updateTasks: ({ id, value }) => dispatch(updateTask({ id, value })),
    completeTask: (id) => dispatch(completeTask(id)),
  };
};
export default connect(null, mapDispatchToProps)(Task);
