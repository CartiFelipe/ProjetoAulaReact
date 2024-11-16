import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Home from "../views/home";
import Settings from "../views/settings";
import Signin from "../views/signin";
import Signup from "../views/signup";
import Layout from "../views/layout";
const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route element={<Settings />} path="/settings" />
      <Route element={<Signin />} path="/signin" />
      <Route element={<Signup />} path="/signup" />
    </Route>
  )
);
const index = () => {
  return <RouterProvider router={route} />;
};
export default index;
