import React, { useReducer } from 'react';
import BookingForm from './components/BookingForm';
import { useNavigate } from 'react-router-dom';
const BookingPage = () => {
  const seededRandom = function (seed) {
    var m = 2 ** 35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
      return (s = (s * a) % m) / m;
    };
  };

  const fetchAPI = function (date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for (let i = 17; i <= 23; i++) {
      if (random() < 0.5) {
        result.push(i + ':00');
      }
      if (random() < 0.5) {
        result.push(i + ':30');
      }
    }
    return result;
  };
  const submitAPI = function (formData) {
    return true;
  };
  const initializeTimes = (initialAvailableTimes) => [
    ...initialAvailableTimes,
    ...fetchAPI(new Date()),
  ];

  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );
  const navigate = useNavigate();

  function submitForm(formData) {
    let result = submitAPI(formData);
    if (result === true) {
      navigate('/confirmedBooking');
    }
    return result;
  }

  function updateTimes(state, date) {
    const res = fetchAPI(date);
    if (res.length > 0) {
      return res;
    }
    return state;
  }

  return (
    <div
      aria-details="Booking Form"
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: 'var(--primary)',

        height: '80vh',
      }}
    >
      <h2 style={{ paddingBlock: '100px' }}>Reservation</h2>
      <BookingForm
        availableTimes={availableTimes}
        setAvailableTimes={dispatch}
        submitForm={submitForm}
      />
    </div>
  );
};

export default BookingPage;
