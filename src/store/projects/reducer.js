import hurry from "../../assets/hurry2.svg"
import ostype from "../../assets/ostype.svg"

const defaultState = {
  projects: [
    {
      logo: hurry,
      title: "Hurry Network",
      description: "The worldwire online coffee shops and cafe network",
      type: "Open Source",
      typeIco: ostype,
      link: "https://marc1k3y.github.io/hurry-network/"
    }
  ]
}

export function ProjectsReducer(state = defaultState) {
  return state
}