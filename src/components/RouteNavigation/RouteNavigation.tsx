import { Routes, Route } from "react-router-dom";
import App from "../../App";
import Info from "../../routes/Info"

const RouteNavigation = () => {
    return (
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/info" element={<Info />} />
          </Route>
        </Routes>
      );
}

export default RouteNavigation;