import React from 'react';
import { useFormik } from 'formik';
import './BookingForm.css';

const BookingForm = ({ availableTimes, setAvailableTimes, submitForm }) => {
  const formik = useFormik({
    initialValues: {
      email: '',
      date: '',
      time: '',
      guests: 1,
      occasion: '',
    },
    onSubmit: (values) => {
      submitForm(values);
      console.log(values);
    },
    validate: (values) => {
      const errors = {};
      if (!values.email) {
        errors.email = 'Required';
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = 'Invalid email address';
      }

      if (!values.date) {
        errors.date = 'Date is required';
      }
      if (!values.time) {
        errors.time = 'Time is required';
      }
      if (!values.guests) {
        errors.guests = 'Guestnumber is required';
      } else if (values.guests > 10) {
        errors.guests = "Guestnumber can't be more than 10";
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
      <label htmlFor="email" style={{ display: 'block' }}>
        Email
      </label>
      <input
        id="email"
        placeholder="Enter your email"
        type="text"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className={
          formik.errors.email && formik.touched.email
            ? 'text-input error'
            : 'text-input'
        }
      />
      {formik.errors.email && formik.touched.email && (
        <div className="input-feedback">{formik.errors.email}</div>
      )}
      <label aria-details="Date" htmlFor="date">
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
      <label htmlFor="time" aria-details="Time">
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
      <label htmlFor="guests">Number of guests</label>
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
      <label htmlFor="occasion">Occasion</label>
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
        className="buttonBooking"
        aria-details="submit"
        type="submit"
        value="Book Now"
        style={{ marginInline: '50px' }}
        disabled={
          !(formik.values.date && formik.values.email && formik.values.occasion)
        }
        aria-label="On Click"
      >
        Book Now
      </button>
    </form>
  );
};

export default BookingForm;
