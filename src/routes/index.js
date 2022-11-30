import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
export const publicRoutes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/services",
    component: Services,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/contact",
    component: Contact,
  },
];

export const privateRoutes = [];
