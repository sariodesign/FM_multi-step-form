import { Routes, Route, useMatches } from "react-router-dom";
import App from "../../App";
import Info from "../../routes/Info"
import Plan from "../../routes/Plan"
import Addons from "../../routes/Addons"
import Summary from "../../routes/Summary"

const RouteNavigation = () => {
    
    return (
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Info />} />
            <Route path="/info" element={<Info />} />
            <Route path="/select-plan" element={<Plan />} />
            <Route path="/add-ons" element={<Addons />} />
            <Route path="/summary" element={<Summary />} />
          </Route>
        </Routes>
      );
}

export default RouteNavigation;