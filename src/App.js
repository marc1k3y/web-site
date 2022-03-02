import { Route, Routes } from "react-router-dom"
import "./App.css"
import { Header } from "./components/header"
import { Projects } from "./components/projects"

export default function App() {
  return (
    <div className="App">
      <Header />
      <div className="app-content">
        <Routes>
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </div>
  )
}