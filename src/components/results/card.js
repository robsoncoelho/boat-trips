import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./style.scss";

const Card = ({ type, data }) => {
  const cardClass = classNames(
    "card",
    !data && "empty",
    type === "boat" && "boat",
    type === "date" && data && `status-${data.statusCode}`
  );

  const priceClass = classNames(
    "price",
    type === "date" && data && {
      old: data.prices[0].rrp > data.prices[0].rrpWithDiscount
    }
  );

  const BoatCard = () => (
    <div className={cardClass}>
      <p className="boatName">{data.productClass}</p>
    </div>
  );

  const PriceCard = () => {
    if(!data) return <div className={cardClass} />
    
    return (
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
  };

  if (type === "boat") return <BoatCard />;
  if (type === "date") return <PriceCard />;
};

Card.propTypes = {
  data: PropTypes.object,
  type: PropTypes.string
};

export default Card;
