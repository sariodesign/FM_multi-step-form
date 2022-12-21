import { Outlet, Link } from "react-router-dom";
import * as link from "./components/RouteNavigation/RouteNavigation.css";
import * as data from "./data/mock";

const App = () => {
  const Links = data.routeLinks.map(item => {
    return <div className={link.container}>
      <Link className={link.round} to={item.to}>{item.count}</Link>
      <div className={link.text}>
        <span className={link.tag}>{item.tag}</span>
        <h2 className={link.label}>{item.label}</h2>
      </div>
    </div> 
  })

  return (
    <div className="App">
      {Links}
      <Outlet />
    </div>
  )
}

export default App
