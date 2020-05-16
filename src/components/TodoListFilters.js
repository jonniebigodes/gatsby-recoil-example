import React from "react"
import { useRecoilState } from "recoil"
import { todoListFilterState } from "../lib/TodoListAtom"
const TodoListFilters = () => {
  const [filter, setFilter] = useRecoilState(todoListFilterState)

  const updateFilter = ({ target: { value } }) => {
    setFilter(value)
  }
  return (
    <div>
      <h3>Filter:</h3>
      <select value={filter} onChange={updateFilter}>
        <option value="Show All">All</option>
        <option value="Show Completed">Completed</option>
        <option value="Show Uncompleted">Uncompleted</option>
      </select>
    </div>
  )
}

export default TodoListFilters
