import React from "react";
import "./style.scss";
import MdDirectionsBoat from 'react-icons/lib/md/directions-boat';

const Header = () => {
  return (
    <header className="header">
      <h1>Boat Trip Searcher</h1>
      <MdDirectionsBoat />
    </header>
  );
};

export default Header;
