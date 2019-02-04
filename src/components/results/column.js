import React from "react";
import PropTypes from "prop-types";
import Card from "./card";
import { getBoatTypes } from "../../utils/data";
import "./style.scss";

const Column = ({ type, data }) => {
  const boatTypes = getBoatTypes(data);

  const BoatColumn = () => (
    <div className="column">
      <div className="index boatTypes" />
      {boatTypes
        .sort((a, b) => a.productClassId - b.productClassId)
        .map((item, index) => (
          <Card type={type} key={index} data={item} />
        ))}
    </div>
  );

  const DayColumn = () =>
    data.map((item, index) => (
      <div key={index} className="column">
        <div className="index">
          <p>
            {item.dateText}
            <br />({item.dateday})
          </p>
          <p>{item.temperature}</p>
        </div>
        {boatTypes
          .sort((a, b) => a.productClassId - b.productClassId)
          .map((boat, index) => {
            const ticket = item.products.filter(
              item => boat.productClassId === item.productClassId
            )[0];
            return <Card type={type} key={index} data={ticket} />;
          })}
      </div>
    ));

  if (type === "boat") return <BoatColumn />;
  if (type === "date") return <DayColumn />;
};

Column.propTypes = {
  type: PropTypes.string,
  data: PropTypes.any
};

export default Column;
