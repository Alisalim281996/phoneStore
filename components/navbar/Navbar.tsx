import React, { Suspense } from "react";
import Logo from "./Logo";
import NavSearch from "./NavSearch";
import Container from "../global/Container";
import CartButton from "./CartButton";
import LinksDropDown from "./LinksDropDown";
import { DarkMode } from "./DarkMode";
import SignOutLink from "./SignOutLink";

const Navbar = () => {
  return (
    <nav className="border-b">
      <Container className="flex sm:flex-row flex-col sm:justify-between sm:items-center flex-wrap gap-4 py-8">
        <Logo />
        <Suspense>
          <NavSearch />
        </Suspense>
        <div className="flex gap-4 items-center">
          <CartButton />
          <DarkMode />
          <LinksDropDown />
          
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
