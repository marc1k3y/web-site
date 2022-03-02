import { createStore, combineReducers } from "redux"
import { ProjectsReducer } from "./projects/reducer"

const rootReducer = combineReducers({
  projects: ProjectsReducer
})

export const store = createStore(rootReducer)