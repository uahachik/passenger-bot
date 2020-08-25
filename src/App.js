import React, { useState, useEffect } from 'react';
import './App.css';
import firebase from 'firebase';

import PassengerFlight from './components/PassengerFlight';
import Loading from './components/Loading';

const getFSdata = () => {
  
}

function App() {
  const [flights, setFlights] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let unsubscribeSnapshot;
    try {
      unsubscribeSnapshot = firebase
        .firestore()
        .collection('flights')
        .onSnapshot(serverUpdate => {
          
          const dataFS = serverUpdate.docs.map(_doc => {
            const data = _doc.data();
            return data;
          });
          setUser(dataFS[1]['user']);
          setLoading(false);
      });
    } catch (err) {
      console.error(err);
    }

    return () => {
      unsubscribeSnapshot();
    };
  }, []);

  const getPassengerFlights = () => {
    setLoading(true);

    try {
      firebase
        .firestore()
        .collection('flights')
        .onSnapshot(serverUpdate => {
          
          const dataFS = serverUpdate.docs.map(_doc => {
            const data = _doc.data();
            return data;
          });
          setFlights(dataFS[0]);
          setLoading(false);
      });
    } catch (err) {
      console.error(err);
    }
  }


  return (
    <>
      <div className="App">
        <div className="App-container">
          <div className="flights">
            {!loading
              ? (
                <>
                  {flights
                    ? (
                      <>
                        <div className="close_nav">
                          <span>qUser</span>
                          <span onClick={() => setFlights(null)}>
                            x
                          </span>
                        </div>
      
                        <PassengerFlight flights={flights} />
                      </>
                    )
                    : (
                    <section className="section">
                      <h2 className="header" style={{justifyContent: 'center', marginTop: 10}}>
                        Some passengers: {user}
                      </h2>
                      <button onClick={getPassengerFlights}>
                        Pause
                      </button>
                    </section>
                    )
                  }
                </>
              )
              : (
                <Loading />
              )
            }
           </div>
        </div>
      </div>  
    </>
  );
}

export default App;
