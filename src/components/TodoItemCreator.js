import React, { useState } from "react"
import { useSetRecoilState } from "recoil"

import {v4} from 'uuid'
import { todoListState } from "../state/TodoListAtom"

const TodoItemCreator = () => {
  const [inputValue, setInputValue] = useState("")
  const setTodoList = useSetRecoilState(todoListState);
  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: v4(),
        text: inputValue,
        isComplete: false,
      },
    ]);
  };
  const onChange = ({target: {value}}) => {
    setInputValue(value);
  };
  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange}  />
      <button onClick={addItem}>Add</button>
    </div>
  )
}
export default TodoItemCreator
