import { useState } from "react"
import { Navbar } from "./navbar"
import cn from "./style.module.css"

export const Header = () => {
  const [moveBurger, setMoveBurger] = useState(false)
  return (
    <div className={cn.headerWrapper}>
      <div className={cn.logo}>
        <div className={cn.head}></div>
        <div className={cn.body}></div>
        <div className={cn.pcWrap}>
          <div className={cn.pc}>?</div>
        </div>
      </div>
      <div className={cn.burger} onClick={() => setMoveBurger(!moveBurger)}>
        <div className={cn.topBun} style={{ marginBottom: moveBurger && "3px" }}></div>
        <div className={cn.cheese} style={{ display: moveBurger ? "flex" : "none" }}></div>
        <div className={cn.middle} style={{ marginTop: moveBurger && "3px" }}></div>
        <div className={cn.botBun} style={{ marginTop: moveBurger && "3px" }}></div>
      </div>
      <Navbar visible={moveBurger} setOpen={setMoveBurger} />
    </div>
  )
}