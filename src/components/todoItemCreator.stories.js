import React from "react"
import TodoItemCreator from "./todoItemCreator"

export default {
  component: TodoItemCreator,
  title: "TodoItemCreator",
  /* decorators: [storyFn => <RecoilRoot>{storyFn()}</RecoilRoot>], */
}

export const Default = () => <TodoItemCreator />
