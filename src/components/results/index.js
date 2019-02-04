import React, { Component } from "react";
import Column from "./column";
import { connect } from "react-redux";
import MdDirectionsBoat from "react-icons/lib/md/directions-boat";
import FaAnchor from "react-icons/lib/fa/anchor";

import "./style.scss";

class Results extends Component {
  // ticketByDate = data => 
  //   data.map(item => <Column type="date" key={item.date} data={data} item={item} />);

  // boatTypes = data => {
  //   return <Column type="boat" data={data} />;
  // };

  render() {
    const { data, requestError } = this.props;
    return (
      <section className="results">
        {data && (
          <div className="table">
            <Column type="boat" data={data} />
            <Column type="date" data={data} />
          </div>
        )}
        {!data && !requestError && <MdDirectionsBoat className="placeholder" />}
        {requestError && (
          <div className="error">
            <p>Ops! Our service is down.</p>
            <FaAnchor className="placeholder" />
          </div>
        )}
      </section>
    );
  }
}

const mapStateToProps = state => ({
  data: state.main.data,
  requestError: state.main.requestError
});

export default connect(mapStateToProps)(Results);
