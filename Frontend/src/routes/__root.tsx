import { Header } from "@/components/custom/Header";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import "@/index.css";
import { Footer } from "@/components/custom/footer";

export const Route = createRootRoute({
  component: () => (
    <>
      <Header />
      <Outlet />
      <Footer />
      <TanStackRouterDevtools />
    </>
  ),
});
