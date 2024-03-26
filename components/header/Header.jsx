import Image from "next/image";

import Nav from "./nav";
import classes from "./Header.module.css";

import logo from "@/public/logo_white.svg";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.header_wrap}>
        <div className={classes.logo}>
          <Image src={logo} alt="검은사막" />
        </div>
        <Nav></Nav>
      </div>
    </header>
  );
};

export default Header;
