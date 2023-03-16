import React from 'react';
import { useFormik } from 'formik';

const BookingForm = ({ availableTimes, setAvailableTimes, submitForm }) => {
  const formik = useFormik({
    initialValues: {
      date: '',
      time: availableTimes[0],
      guests: 1,
      occasion: '',
    },
    onSubmit: (values) => {
      submitForm(values);
      console.log(values);
    },
    validate: (values) => {
      const errors = {};
      if (!values.date) {
        errors.date = 'Date is required';
      }
      if (!values.time) {
        errors.time = 'Time is required';
      }
      if (!values.guests) {
        errors.guests = 'Guestnumber is required';
      }
      return errors;
    },
  });
  return (
    <form
      onSubmit={formik.handleSubmit}
      action=""
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
        maxWidth: '500px',
        width: '90%',
        paddingInline: '15px',
      }}
    >
      <label aria-details="Date" htmlFor="res-date" style={{ color: 'white' }}>
        Choose date
      </label>
      <input
        type="date"
        id="date"
        required
        name="date"
        value={formik.values.date}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        aria-label="Choose Date"
      />
      <label htmlFor="time" style={{ color: 'white' }} aria-details="Time">
        Choose time
      </label>
      <select
        id="time"
        data-testid="res-time"
        name="time"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        aria-label="Choose Time"
      >
        {availableTimes?.map((time, index) => {
          return (
            <option id="select-option" data-testid="select-option" key={index}>
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
        placeholder="2"
        min="2"
        max="10"
        id="guests"
        name="guests"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        style={{ width: '40px' }}
        aria-label="Choose Guest Count"
      />
      <label htmlFor="occasion" style={{ color: 'white' }}>
        Occasion
      </label>
      <select
        aria-details="Occasion"
        id="occasion"
        name="occasion"
        value={formik.values.occasion}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        required
        aria-label="Choose Occasion"
      >
        <option></option>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      <button
        aria-details="submit"
        type="submit"
        value="Book Now"
        style={{ marginInline: '50px' }}
        disabled={!(formik.isValid && formik.dirty)}
        aria-label="On Click"
      >
        Book Now
      </button>
    </form>
  );
};

export default BookingForm;
