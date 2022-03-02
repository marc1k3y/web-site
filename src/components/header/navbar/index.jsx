import { NavLink, useLocation } from "react-router-dom"
import { links } from "./links"
import cn from "./style.module.css"

export const Navbar = ({ visible, setOpen }) => {
  const { pathname } = useLocation()
  return (
    <div className={cn.navbarWrapper} style={{ display: visible ? "flex" : "none" }}>
      {links.map((link, index) =>
        <NavLink key={index} to={link.to} onClick={() => setOpen(false)}
          style={{ backgroundColor: pathname === link.to && "gray", color: pathname === link.to && "white" }}>
          {link.title}
        </NavLink>
      )}
    </div>
  )
}