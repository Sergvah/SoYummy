import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Header from "Layout/Header/Header";
import Footer from "Layout/Footer/Footer";
import { LayoutStyled } from "./SharedLayout.styled";

const SharedLayout = () => {
  return (
    <LayoutStyled>
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Footer/>
    </LayoutStyled>
  );
};

export default SharedLayout;
