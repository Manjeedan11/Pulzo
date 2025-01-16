import NavBar from "@/components/standalone/NavBar";
import { Outlet } from "react-router";

function RootLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default RootLayout;
