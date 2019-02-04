import React, { Component } from "react";
import Column from "./column";
import { connect } from "react-redux";
import MdDirectionsBoat from "react-icons/lib/md/directions-boat";
import FaAnchor from "react-icons/lib/fa/anchor";

import "./style.scss";

class Results extends Component {
  ticketByDay = data =>
    data.map(item => <Column type="day" key={item.date} data={item} />);

  boatTypes = data => {
    const boatTypes = data
      .flatMap(item =>
        item.products.map(x => ({
          productClass: x.productClass,
          productClassId: x.productClassId
        }))
      )
      .filter(
        (obj, pos, arr) =>
          arr
            .map(mapObj => mapObj["productClass"])
            .indexOf(obj["productClass"]) === pos
      );
    return <Column type="boat" data={boatTypes} />;
  };

  render() {
    const { data, requestError } = this.props;
    return (
      <section className="results">
        {data && (
          <div className="table">
            {this.boatTypes(data)}
            {this.ticketByDay(data)}
          </div>
        )}
        {!data && !requestError && <MdDirectionsBoat className="placeholder" />}
        {requestError && <div className="error"><p>Ops! Our service is down.</p><FaAnchor className="placeholder" /></div>}
      </section>
    );
  }
}

const mapStateToProps = state => ({
  data: state.main.data,
  requestError: state.main.requestError
});

export default connect(mapStateToProps)(Results);
