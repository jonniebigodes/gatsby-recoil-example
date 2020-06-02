import React from "react"
import TodoList from "./todoList"
import RecoilRoot from 'recoil'
export default {
  component: TodoList,
  title: "TodoList",
  /* decorators: [storyFn => <RecoilRoot>{storyFn()}</RecoilRoot>], */
}

export const Default = () => <TodoList />
