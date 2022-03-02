import { useEffect, useState } from "react"
import { TimeCounter } from "../timer"
import cn from "./style.module.css"

export const About = () => {
  const [expTime, setExpTime] = useState()

  const interval = setInterval(() => setExpTime(TimeCounter), 1000)

  useEffect(() => () => clearInterval(interval), [interval])

  return (
    <div className={cn.aboutWrapper}>
      <h2>coder profile</h2>
      <div className={cn.nickname}>
        <div className={cn.nnLabel}>nickname:</div>
        <div className={cn.nn}>marc1k3y</div>
      </div>
      <div className={cn.timer}>
        <div className={cn.timerLabel}>Code experience:</div>
        <div className={cn.time}>{expTime || "one second.."}</div>
      </div>
    </div>
  )
}