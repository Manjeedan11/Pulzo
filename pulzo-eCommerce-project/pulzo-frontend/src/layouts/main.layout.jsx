import NavBar from "@/components/standalone/NavBar";
import { Outlet } from "react-router";

function MainLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default MainLayout;
