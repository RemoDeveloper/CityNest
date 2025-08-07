import React, { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import { getMenuStyles } from "../../utils/common";
import useHeaderColor from "../../hooks/useHeaderColor";
import OutsideClickHandler from "react-outside-click-handler";
import { color } from "framer-motion";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const headerColor = useHeaderColor();

  return (
    <section
      className="h-wrapper"
      style={{ backgroundColor: "rgba(133, 128, 128, 0.23)" }}
    >
      <div className="flexCenter innerWidth paddings h-container">
        {/* logo */}
        <img src="logo-cityNest-02.png" alt="logo" width={160} height={160} />

        {/* menu */}
        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
          }}
        >
          <div
            // ref={menuRef}
            className="flexCenter h-menu"
            style={getMenuStyles(menuOpened)}
          >
            <a href="#home">Home</a>
            <a href="#residencies">Residencies</a>
            <a href="#value">Properties</a>
            <a href="#About-us">About</a>

            <button className="button">
              <a href="#Contact">Contact</a>
            </button>
          </div>
        </OutsideClickHandler>

        {/* for medium and small screens */}
        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
