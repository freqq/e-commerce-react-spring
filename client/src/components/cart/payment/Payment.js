import React, { Component } from 'react'
import './Payment.css'
import visa_svg from './img/visa.svg'
import mastercard_svg from './img/mastercard-vertical.svg'

class Payment extends Component {
  render() {
    return (
      <div className="payment-container">
        <h3>Płatność</h3>
        <hr />

        <div className="payment-category">
          <div className="row">
            <div className="col-sm-6">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="defaultCheck1"
                />
                <label class="form-check-label" for="defaultCheck1">
                  <span className="text-bold">Pobranie (Gotówka przy odbiorze)</span>
                </label>
              </div>
            </div>
            <div className="col-sm-4"></div>
            <div className="col-sm-2 ">11 zł</div>
          </div>
        </div>

        <hr />

        <div className="payment-category">
          <div className="row">
            <div className="col-sm-6">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="defaultCheck1"
                />
                <label class="form-check-label" for="defaultCheck1">
                  <span className="text-bold">
                  Karta płatnicza online
                  <img src={visa_svg} alt="" />
                  <img src={mastercard_svg} alt="" />
                  <span className="info-element">i</span>
                  </span>
                </label>
              </div>
            </div>
            <div className="col-sm-4"></div>
            <div className="col-sm-2 ">0,00 zł</div>
          </div>
        </div>

        <hr />

        <div className="payment-category">
          <div className="row">
            <div className="col-sm-6">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="defaultCheck1"
                />
                <label class="form-check-label" for="defaultCheck1">
                  <span className="text-bold">Przelew tradycyjny</span>
                </label>
              </div>
            </div>
            <div className="col-sm-4">wysyłka po zaksięgowaniu wpłaty</div>
            <div className="col-sm-2 ">0,00 zł</div>
          </div>
        </div>

        <hr />
        <div className="payment-category">
          <div className="row">
            <div className="col-sm-6">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="defaultCheck1"
                />
                <label class="form-check-label" for="defaultCheck1">
                  <span className="text-bold">Przelew błyskawiczny lub BLIK</span>
                </label>
              </div>
            </div>
            <div className="col-sm-4"></div>
            <div className="col-sm-2 ">22,04 zł</div>
          </div>
        </div>

        <hr />
        <div className="payment-category">
          <div className="row">
            <div className="col-sm-6">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="defaultCheck1"
                />
                <label class="form-check-label" for="defaultCheck1">
                  <span className="text-bold">Raty</span>
                </label>
              </div>
            </div>
            <div className="col-sm-4">cała procedura online</div>
            <div className="col-sm-2 ">0,00 zł</div>
          </div>
        </div>

        <hr />
        <div className="payment-category">
          <div className="row">
            <div className="col-sm-6">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="defaultCheck1"
                />
                <label class="form-check-label" for="defaultCheck1">
                  <span className="text-bold">Leasing</span>
                </label>
              </div>
            </div>
            <div className="col-sm-4">cala prodecura online</div>
            <div className="col-sm-2 ">0,00 zł</div>
          </div>
        </div>

        <hr />
        <div className="payment-category">
          <div className="row">
            <div className="col-sm-6">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="defaultCheck1"
                />
                <label class="form-check-label" for="defaultCheck1">
                  <span className="text-bold">
                  Masterpass
                  <span className="info-element">i</span>
                  </span>
                </label>
              </div>
            </div>
            <div className="col-sm-4"></div>
            <div className="col-sm-2 ">0,00 zł</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Payment
