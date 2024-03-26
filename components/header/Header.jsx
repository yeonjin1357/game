import Image from "next/image";
import Link from "next/link";

import Nav from "./nav";
import HeaderButton from "./HeaderButton";
import classes from "./Header.module.css";

import logo from "@/public/logo_white.svg";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.header_wrap}>
        <div className={classes.logo}>
          <Link href="/">
            <Image src={logo} alt="검은사막" />
          </Link>
        </div>
        <Nav></Nav>
        <HeaderButton></HeaderButton>
      </div>
    </header>
  );
};

export default Header;
