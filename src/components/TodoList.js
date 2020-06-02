import React from "react"
import { useRecoilValue } from "recoil"
import {filteredTodoListState} from "../state/TodoListAtom"
import TodoItemCreator from "./TodoItemCreator"
import TodoItem from "./TodoItem"
import TodoListFilters from "./TodoListFilters"
import TodoListStats from "./TodoListStats"
const TodoList = () => {
  // before selectors const todoList = useRecoilValue(todoListState)
  const todoList = useRecoilValue(filteredTodoListState)
  return (
    <>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />
      <div>
        <h2>This is the todo list</h2>
        {todoList.map(todoItem => (
          <TodoItem item={todoItem} key={todoItem.id} />
        ))}
      </div>
    </>
  )
}

export default TodoList
