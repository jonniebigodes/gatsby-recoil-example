import React from "react"
import { RecoilRoot } from "recoil"
import TodoList from "../components/TodoList"

export default () => (
  <div>
    <h1 style={{textAlign:'center'}}>Recoil being used with Gatsby</h1>
    <RecoilRoot>
      <TodoList />
    </RecoilRoot>
  </div>
)
