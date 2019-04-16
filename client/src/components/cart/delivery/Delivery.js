import React, { Component } from "react";
import "./Delivery.css";

class Delivery extends Component {
  render() {
    return (
      <div className="delivery-container">
        <h3>Dostawa</h3>
        <hr />

        <div className="delivery-category">
          <h4>
            <i className="fas fa-dolly-flatbed" /> Odbiór
          </h4>
          <div className="row">
            <div className="col-sm-6">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="defaultCheck1"
                />
                <label className="form-check-label" htmlFor="defaultCheck1">
                  <span className="text-bold">Salon Netpunkt</span>
                  <span className="info-element">i</span>
                </label>
              </div>
            </div>
            <div className="col-sm-4">wtorek, 16 kwietnia</div>
            <div className="col-sm-2 ">0,00 zł</div>
          </div>
        </div>

        <hr />

        <div className="delivery-category">
          <h4>
          <i className="fas fa-shipping-fast"></i> Kurier
          </h4>
          <div className="row">
            <div className="col-sm-6">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="defaultCheck1"
                />
                <label className="form-check-label" htmlFor="defaultCheck1">
                  <span className="text-bold">Kurier</span>
                  <span className="info-element">i</span>
                </label>
              </div>
            </div>
            <div className="col-sm-4">wtorek, 16 kwietnia</div>
            <div className="col-sm-2 ">19 zł</div>
          </div>
        </div>

      </div>
    );
  }
}

export default Delivery;
