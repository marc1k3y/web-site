import axios from "axios"
import { useEffect, useState } from "react"
import cn from "./style.module.css"

export const Home = () => {
  const [nasaData, setNasaData] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios.get("https://api.nasa.gov/planetary/apod?api_key=SFbXhsn2WJIWGduScCLW4P9cODespfQbZ1c6npI6")
      .then((res) => setNasaData(res.data))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <h1>Loading..</h1>

  return (
    <div className={cn.homeWrapper}>
      <h2>some info from <a href="https://www.nasa.gov/" target="_blank" rel="noreferrer" >nasa</a></h2>
      <div className={cn.title}>
        {nasaData.title}
      </div>
      <div className={cn.desc}>
        {nasaData.explanation}
      </div>
      <div className={cn.somePhoto}>
        <img src={nasaData.hdurl} alt="pic-from-nasa" />
      </div>
    </div>
  )
}