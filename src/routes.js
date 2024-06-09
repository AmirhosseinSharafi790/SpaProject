import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Blog from "./pages/blog/Blog";
import Login from "./pages/login/Login";
import Panel from "./pages/panel/Panel";
import Course from "./pages/course/Course";
import Setting from "./pages/Setting/Setting";
import PrivateRoute from "./components/PrivateRoute";
const routes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/blog/*", element: <Blog /> },
  {
    path: "/blog/*",
    element: <Blog />,
    children: [
      { path: "php", element: <h2>php Blog</h2> },
      { path: "react", element: <h2>react Blog</h2> },
      { path: "js", element: <h2>javascript Blog</h2> },
    ],
  },
  { path: "/login", element: <Login /> },
  {
    path: "/panel",
    element: (
      <PrivateRoute>
        {" "}
        <Panel />{" "}
      </PrivateRoute>
    ),
  },
  {
    path: "/setting",
    element: (
      <PrivateRoute>
        {" "}
        <Setting />{" "}
      </PrivateRoute>
    ),
  },
  { path: "/course/:courseId", element: <Course /> },
];

export default routes;
