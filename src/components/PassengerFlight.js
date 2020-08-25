import React from 'react';
import PropTypes from 'prop-types';

import Moment from 'react-moment';

const PassengerFlight = ({ flights:
    { user, flight_no, status, from_city, from, departure, to_city, to, arrival }
  }) => {
    
  return (
    <section className="section">
      <h4>Passenger: <span>{user}</span></h4>

      <h6>
        Flight &#35;:{' '}
          <span style={{marginRight: 25, color: 'green'}}>{flight_no}</span> 
        Status: <span style={{color: 'green'}}>{status}</span>
      </h6>

      <div className="wrapper">
        <div>From City: <span className="city">{from_city}</span></div>
        <div>Airport: <span>{from}</span></div>
        <div>
          Departure:{' '}
            <span>
              <Moment format="MM/DD HH:mm" unix>
                {departure.seconds}
              </Moment>
            </span>
          </div>
      </div>

      <div className="wrapper">
        <div>To City: <span  className="city">{to_city}</span></div>
        <div>Airport: <span>{to}</span></div>
        <div>
          Arrival:{' '}
            <span>
              <Moment format="MM/DD HH:mm" unix>
                {arrival.seconds}
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
