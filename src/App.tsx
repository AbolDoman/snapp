import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import { useMaterialUIController } from './context';
import routes from "./routes";
import Dashboard from './layouts/dashboard';
export default function App(): JSX.Element {
  const [controller] = useMaterialUIController();
  const { x } = controller;
  const getRoutes = (allRoutes: any) =>
    allRoutes.map((route: any) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });
  return (
    <BrowserRouter>
      <div>
          <Routes>
            <Route path="*" element={<Navigate to="/dashboard" />} />
            {getRoutes(routes)}
          </Routes>
      </div>
    </BrowserRouter>
  );
}
