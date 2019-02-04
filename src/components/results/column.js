import React from "react";
import PropTypes from "prop-types";
import Card from "./card";
import "./style.scss";

const Column = ({ type, data }) => {
  const BoatColumn = ({ data }) => (
    <div className="column">
      <div className="index boatTypes">
        <p>Boat types</p>
      </div>
      {data.map((item, index) => (
        <Card type={type} key={index} data={item} />
      ))}
    </div>
  );

  const DayColumn = ({ data }) => (
    <div className="column">
      <div className="index">
        <p>
          {data.dateText}
          <br />({data.dateday})
        </p>
        <p>{data.temperature}</p>
      </div>
      {data.products
        .sort((a, b) => b.productClassId - a.productClassId)
        .map((item, index) => (
          <Card type={type} key={index} data={item} />
        ))}
    </div>
  );

  if (type === "boat") return <BoatColumn data={data} />;
  if (type === "day") return <DayColumn data={data} />;
};

Column.propTypes = {
  type: PropTypes.string,
  data: PropTypes.any
};

export default Column;
