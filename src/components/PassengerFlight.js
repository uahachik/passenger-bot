import React from 'react';
import PropTypes from 'prop-types';

import Moment from 'react-moment';

const PassengerFlight = ({ flights }) => {
  return (
    <section className="section">
      <h4>Passenger: <span>{flights.user}</span></h4>

      <h6>
        Flight &#35;:{' '}
          <span style={{marginRight: 25, color: 'green'}}>{flights.flight_no}</span> 
        Status: <span style={{color: 'green'}}>{flights.status}</span>
      </h6>

      <div className="wrapper">
        <div>From City: <span className="city">{flights.from_city}</span></div>
        <div>Airport: <span>{flights.from}</span></div>
        <div>
          Departure:{' '}
            <span>
              <Moment format="MM/DD HH:mm" unix>
                {flights.departure.seconds}
              </Moment>
            </span>
          </div>
      </div>

      <div className="wrapper">
        <div>To City: <span  className="city">{flights.to_city}</span></div>
        <div>Airport: <span>{flights.to}</span></div>
        <div>
          Arrival:{' '}
            <span>
              <Moment format="MM/DD HH:mm" unix>
                {flights.arrival.seconds}
              </Moment>
            </span>
          </div>
      </div>
    </section>
  )
};

PassengerFlight.defaultProps = {
  flights: {},
}

PassengerFlight.propTypes = {
  flights: PropTypes.object,
};

export default PassengerFlight;
