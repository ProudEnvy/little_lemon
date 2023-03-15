import React, { useEffect, useState } from 'react';

const BookingForm = ({ availableTimes, setAvailableTimes, submitForm }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('17:00');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');

  useEffect(() => {
    return () => {};
  }, []);
  return (
    <div>
      {' '}
      <form
        onSubmit={(event) => {
          submitForm(event);
          event.preventDefault();
        }}
        action=""
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '15px',
          width: '500px',
        }}
      >
        <label
          aria-details="Date"
          htmlFor="res-date"
          style={{ color: 'white' }}
          onChange={(event) => {
            setDate(event.target.value);
          }}
        >
          Choose date
        </label>
        <input type="date" id="res-date" />
        <label
          htmlFor="res-time"
          style={{ color: 'white' }}
          aria-details="Time"
        >
          Choose time
        </label>
        <select
          id="res-time"
          data-testid="res-time"
          onChange={(event) => {
            setTime(event.target.value);
          }}
        >
          {availableTimes?.map((time, index) => {
            return (
              <option
                id="select-option"
                data-testid="select-option"
                key={index}
              >
                {time}
              </option>
            );
          })}
        </select>
        <label htmlFor="guests" style={{ color: 'white' }}>
          Number of guests
        </label>
        <input
          aria-details="Guest number"
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          onChange={(event) => {
            setGuests(event.target.value);
          }}
        />
        <label htmlFor="occasion" style={{ color: 'white' }}>
          Occasion
        </label>
        <select
          aria-details="Occasion"
          id="occasion"
          onChange={(event) => {
            setOccasion(event.target.value);
          }}
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <input
          aria-details="submit"
          type="submit"
          value="Book Now"
          style={{ marginInline: '50px' }}
          onClick={() => {}}
        />
      </form>
    </div>
  );
};

export default BookingForm;
