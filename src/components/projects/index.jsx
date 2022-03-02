import { useSelector } from "react-redux"
import cn from "./style.module.css"

export const Projects = () => {
  const { projects } = useSelector(state => state.projects)
  return (
    <div className={cn.projectsWrapper}>
      <h2>marc1k3y projects</h2>
      <div className={cn.list}>
        {projects.map((project, index) =>
          <div key={index} className={cn.project}>
            <div className={cn.logo}>
              <img src={project.logo} alt="logo" />
            </div>
            <div className={cn.title}>
              {project.title}
            </div>
            <div className={cn.desc}>
              <div>Description</div>
              {project.description}
            </div>
            <div className={cn.type}>
              {project.type}
              <img src={project.typeIco} alt="prj-type" />
            </div>
            <div className={cn.link}>
              <a href={project.link} target="_blank" rel="noreferrer">link</a>
            </div>
          </div>)}

      </div>
    </div>
  )
}