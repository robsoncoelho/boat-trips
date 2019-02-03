import React from "react";
import PropTypes from "prop-types";
import Item from "./item";
import MdDirectionsBoat from "react-icons/lib/md/directions-boat";
import "./style.scss";

const Results = ({ items = null }) => {
  return (
    <section className="results">
      {items && <Item />}
      {!items && <MdDirectionsBoat className="placeholder" />}
    </section>
  );
};

Results.propTypes = {
  items: PropTypes.object
};

export default Results;
