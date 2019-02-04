import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./style.scss";

const Card = ({ type, data }) => {
  const cardClass = classNames(
    "card",
    type === "boat" && "boat",
    type === "day" && `status-${data.statusCode}`
  );
  const priceClass = classNames(
    "price",
    type === "day" && {
      old: data.prices[0].rrp > data.prices[0].rrpWithDiscount
    }
  );

  const BoatCard = ({ data }) => (
    <div className={cardClass}>
      <p className="boatName">{data.productClass}</p>
    </div>
  );

  const PriceCard = ({ data }) => (
    <div className={cardClass}>
      <div>
        <p className={priceClass}>
          {data.prices[0].currencySymbol}
          {data.prices[0].rrp}
        </p>
        <p className="newPrice">
          {data.prices[0].currencySymbol}
          {data.prices[0].rrpWithDiscount}
        </p>
      </div>
      <p className="status">{data.status}</p>
    </div>
  );

  if (type === "boat") return <BoatCard data={data} />;
  if (type === "day") return <PriceCard data={data} />;
};

Card.propTypes = {
  data: PropTypes.object,
  type: PropTypes.string
};

export default Card;
