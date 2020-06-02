import React from "react"
import TodoItem from "./todoItem"
import RecoilRoot from 'recoil'
export default {
  component: TodoItem,
  title: "TodoItem",
 /*  decorators: [storyFn => <RecoilRoot>{storyFn()}</RecoilRoot>], */
}

export const Default = () => <TodoItem />
