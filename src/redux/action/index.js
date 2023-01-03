import {
  ADD_TASK,
  DELETE_TASK,
  EDIT_TASK,
  COMPLETE_TASK,
  DONE_Task,
  NotDone_Task,
  ALL_Tasks,
} from "../actionTypes";

export const addTask = (newTask) => {
  return {
    type: ADD_TASK,
    payload: newTask,
  };
};

export const deleteTask = (id) => {
  return {
    type: DELETE_TASK,
    payload: id,
  };
};

export const updateTask = (task) => {
  return {
    type: EDIT_TASK,
    payload: task,
  };
};
export const completeTask = (id) => {
  return {
    type: COMPLETE_TASK,
    payload: id,
  };
};

export const doneTask = () => {
  return {
    type: DONE_Task,
  };
};

export const notdoneTask = () => {
  return {
    type: NotDone_Task,
  };
};
export const refrechList = () => {
  return {
    type: ALL_Tasks,
  };
};
