import { Outlet, NavLink } from "react-router-dom";
import { app, stepLayout } from "./assets/GlobalVariablesTheme.css";
import * as link from "./components/RouteNavigation/RouteNavigation.css";
import * as data from "./data/mock";

const App = () => {
  const links = data.routeLinks.map((item, index) => {
    return <div className={link.item} key={index}>
      <NavLink className={({ isActive }) => isActive ? link.round.active : link.round.base} to={item.to} >{item.count}</NavLink>
      <div className={link.text}>
        <span className={link.tag}>{item.tag}</span>
        <h2 className={link.label}>{item.label}</h2>
      </div>
    </div> 
  })

  return (
    <div className={app}>
      <aside className={link.navigation}>
        {links}
      </aside>
      <section className={stepLayout}>
        <Outlet />
      </section>
    </div>
  )
}

export default App
