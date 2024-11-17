import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import { Home, Settings, Signin, Signup, Layout, Forms, Dashboard } from "../views";
import { handleProtection } from "../services/Authentication";
const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} loader={() => handleProtection()} />
      <Route element={<Settings />} path="settings" loader={() => handleProtection()} />
      <Route element={<Signup />} path="signup" loader={() => handleProtection()} />
      <Route element={<Signin />} path="signin" />
      <Route element={<Forms />} path=":type/:id" loader={() => handleProtection()} />
      <Route element={<Forms />} path="new/:type" loader={() => handleProtection()} />
      <Route element={<Dashboard />} path="dashboard" loader={() => handleProtection()} />
    </Route>
  )
);
const index = () => {
  return <RouterProvider router={route} />;
};
export default index;
