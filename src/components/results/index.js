import React from "react";
import PropTypes from "prop-types";
import Item from "./item";
import MdDirectionsBoat from "react-icons/lib/md/directions-boat";
import "./style.scss";

const Results = ({ items = true }) => {
  return (
    <section className="results">
      <div className="table">
        <div className="column">
          <div className="index">
            <p>Boat types</p>
          </div>
          <p className="row">Premier</p>
          <p className="row">Premier Plus</p>
          <p className="row">Catamaran</p>
        </div>
        <div className="column">
          <div className="index">
            <p>
              19 may
              <br />
              (Sat)
            </p>
            <p>28ºC</p>
          </div>
          <p className="row">£516</p>
          <p className="row">£516</p>
          <p className="row">£516</p>
        </div>
        <div className="column">
          <div className="index">
            <p>
              19 may
              <br />
              (Sat)
            </p>
            <p>28ºC</p>
          </div>
          <p className="row">£516</p>
          <p className="row">£516</p>
          <p className="row">£516</p>
        </div>
        <div className="column">
          <div className="index">
            <p>
              19 may
              <br />
              (Sat)
            </p>
            <p>28ºC</p>
          </div>
          <p className="row">£516</p>
          <p className="row">£516</p>
          <p className="row">£516</p>
        </div>
        <div className="column">
          <div className="index">
            <p>
              19 may
              <br />
              (Sat)
            </p>
            <p>28ºC</p>
          </div>
          <p className="row">£516</p>
          <p className="row">£516</p>
          <p className="row">£516</p>
        </div>
        <div className="column">
          <div className="index">
            <p>
              19 may
              <br />
              (Sat)
            </p>
            <p>28ºC</p>
          </div>
          <p className="row">£516</p>
          <p className="row">£516</p>
          <p className="row">£516</p>
        </div>
        <div className="column">
          <div className="index">
            <p>
              19 may
              <br />
              (Sat)
            </p>
            <p>28ºC</p>
          </div>
          <p className="row">£516</p>
          <p className="row">£516</p>
          <p className="row">£516</p>
        </div>
      </div>
      {!items && <MdDirectionsBoat className="placeholder" />}
    </section>
  );
};

Results.propTypes = {
  items: PropTypes.object
};

export default Results;
