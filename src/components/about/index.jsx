import cn from "./style.module.css"
import { useEffect, useState } from "react"
import { TimeCounter } from "../timer"
import tg from "../../assets/tg.svg"
import gh from "../../assets/gh.svg"
import bmac from "../../assets/bmac.svg"

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
      <div className={cn.socialLabel}>social</div>
      <div className={cn.socialLinks}>
        <a href="https://t.me/marc1k3y" target="_blank" rel="noreferrer">
          <img src={tg} alt="tg" />
        </a>
        <a href="https://github.com/marc1k3y" target="_blank" rel="noreferrer">
          <img src={gh} alt="gh" />
        </a>
        <a href="https://www.buymeacoffee.com/marc1k3y" target="_blank" rel="noreferrer">
          <img src={bmac} alt="buymeacoffee" />
        </a>
      </div>
    </div>
  )
}