import React from "react"
//import Loadable from "@loadable/component"
import TodoList from '../components/todoList'

//const LoadableRecoil = Loadable(() => import("../components/todoList"))
const IndexPage = () => (
  <div>
    <h1 style={{ textAlign: "center" }}>Recoil being used with Gatsby</h1>
    <TodoList />
  </div>
)
export default IndexPage
