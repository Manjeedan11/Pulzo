import NavBar from "@/components/standalone/NavBar";
import { Outlet } from "react-router";
import { Toaster } from "@/components/ui/toaster";

function RootLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Toaster />
    </>
  );
}

export default RootLayout;
