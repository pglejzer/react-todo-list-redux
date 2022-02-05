import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import { StoreState } from '../../redux/store';
import { todoSlice } from '../../redux/slice/todo';
import ColumnLayout from '../ColumnLayout';

export function ToDoColumn() {
  const { todo } = useSelector((state: StoreState) => state);
  const {
    actions: { completeStatus, remove, add, updateTextShowed },
  } = todoSlice;

  return (
    <>
      <Typography mb={3}>All todo tasks: {todo.length}</Typography>
      <ColumnLayout
        droppableId='todo'
        labelText="Type 'to do' item"
        completedHandler={completeStatus}
        removeHandler={remove}
        addHandler={add}
        selectorState={todo}
        updateTextShowed={updateTextShowed}
      />
    </>
  );
}
