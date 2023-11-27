import MainHeader from "../components/MainHeader";
import { Outlet } from "react-router-dom";
function RootLayout() {
  return (
    <>
      <MainHeader />
      {/* The Outlet is a placeholder for the nested routes*/}
      <Outlet />
    </>
  );
}

export default RootLayout;
