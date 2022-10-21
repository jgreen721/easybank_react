import React from "react";
import MobileLinkItem from "./MobileLinkItem";

const MobileMenu = ({ links, showMobile, setShowMobile }) => {
  return (
    <div className={showMobile ? "mobile-menu" : "hide mobile-menu"}>
      <img
        onClick={() => setShowMobile(!showMobile)}
        className="close-icon"
        src="./images/icon-close.svg"
        alt=""
      />
      <ul className="mobile-links">
        {links.map((l) => (
          <MobileLinkItem key={l.id} link={l} />
        ))}
      </ul>
    </div>
  );
};

export default MobileMenu;
