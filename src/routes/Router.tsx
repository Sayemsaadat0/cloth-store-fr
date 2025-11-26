import { createBrowserRouter } from "react-router-dom";
import PublicMain from "../components/layout/PublicMain";
import DashboardLayout from "../components/layout/DashboardLayout";
import { lazy, Suspense } from "react";
import DashboardHome from "@/pages/dashboard/DashboardHome";
import UserManagement from "@/pages/dashboard/UserManagement";

const Home = lazy(() => import("../pages/Home"));
const Cases = lazy(() => import("../pages/Cases"));
const Members = lazy(() => import("../pages/Members"));
const Profile = lazy(() => import("../pages/Profile"));
const Settings = lazy(() => import("../pages/dashboard/Settings"));

const Products = lazy(() => import("../pages/dashboard/ProductManagement"));
const Categories = lazy(() => import("../pages/dashboard/CategoryManagement"));

const LoginPage = lazy(() => import("../pages/auth/LoginPage"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicMain />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <Home />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <DashboardHome />
          </Suspense>
        ),
      },
      {
        path: "products",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <Products />
          </Suspense>
        ),
      },
      {
        path: "users",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <UserManagement />
          </Suspense>
        ),
      },
      {
        path: "categories",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <Categories />
          </Suspense>
        ),
      },
      {
        path: "cases",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <Cases />
          </Suspense>
        ),
      },
      {
        path: "members",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <Members />
          </Suspense>
        ),
      },
      {
        path: "profile",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <Profile />
          </Suspense>
        ),
      },
      {
        path: "settings",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <Settings />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: (
      <Suspense fallback={<p>Loading...</p>}>
        <LoginPage />
      </Suspense>
    ),
  },
]);

export default router;
