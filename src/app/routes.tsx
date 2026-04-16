import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Business } from "./pages/Business";
import { Profile } from "./pages/Profile";
import { Jobs } from "./pages/Jobs";
import { Contact } from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "business", Component: Business },
      { path: "profile", Component: Profile },
      { path: "jobs", Component: Jobs },
      { path: "contact", Component: Contact },
    ],
  },
]);
