import { Route, Routes } from "react-router-dom"
import "./App.css"
import { About } from "./components/about"
import { Header } from "./components/header"
import { Home } from "./components/home"
import { Projects } from "./components/projects"

export default function App() {
  return (
    <div className="App">
      <Header />
      <div className="app-content">
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </div>
  )
}