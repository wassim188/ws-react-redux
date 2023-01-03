import React, { useState } from "react";
import { connect } from "react-redux";
import { addTask, doneTask, notdoneTask, refrechList } from "../redux/action";

export const Addtask = (props) => {
  const [newTask, setNewTask] = useState("");
  const [radiochecked, setRadioChecked] = useState("");

  const addNewTask = (e) => {
    e.preventDefault();
    props.addTask({
      id: Math.random(),
      description: newTask,
      isdone: false,
    });
    setNewTask("");
  };
  return (
    <div className="form-container">
      <h1 style={{ fontSize: "6rem ", color: "blue", paddingBottom: "100px" }}>
        Todo App
      </h1>
      <div className="text-origin">
        <form onSubmit={addNewTask}>
          <input
            type="text"
            value={newTask}
            placeholder=" Add new task"
            className=" col form-control"
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button className=" btn btn-primary mx-2" type="submit">
            Add Task
          </button>
        </form>
      </div>
      <div className="search-tasks" style={{ paddingTop: "50px" }}>
        <label style={{ fontSize: "2rem" }}>
          all Tasks
          <input
            type="checkbox"
            value="allTasks"
            checked={radiochecked === "allTasks"}
            onChange={(e) => setRadioChecked(e.target.value)}
            onClick={() => props.refrechList()}
          />
        </label>
        <label style={{ fontSize: "2rem" }}>
          done Task
          <input
            type="checkbox"
            value="done"
            checked={radiochecked === "done"}
            onChange={(e) => setRadioChecked(e.target.value)}
            onClick={() => props.doneTask()}
          />
        </label>
        <label style={{ fontSize: "2rem" }}>
          not done Task
          <input
            type="checkbox"
            value="not done"
            checked={radiochecked === "not done"}
            onChange={(e) => setRadioChecked(e.target.value)}
            onClick={() => props.nodoneTask()}
          />
        </label>
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (task) => dispatch(addTask(task)),
    doneTask: () => dispatch(doneTask()),
    nodoneTask: () => dispatch(notdoneTask()),
    refrechList: () => dispatch(refrechList()),
  };
};
export default connect(null, mapDispatchToProps)(Addtask);
