import { Outlet } from "react-router";
import { Toaster } from "@/components/ui/toaster";

function RootLayout() {
  return (
    <>
      <Outlet />
      <Toaster />
    </>
  );
}

export default RootLayout;
