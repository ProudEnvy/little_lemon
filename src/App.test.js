import { render, screen, fireEvent, act } from '@testing-library/react';
import BookingForm from './pages/booking/components/BookingForm';

test('Renders the BookingForm heading', () => {
  render(<BookingForm />);
  const headingElement = screen.getByText('Book Now');
  expect(headingElement).toBeInTheDocument();
});

test('onSubmit with correct values', () => {
  const onSubmit = jest.fn();

  render(<BookingForm onSubmit={onSubmit} />);

  const emailInput = screen.getByLabelText('Email');
  const dateInput = screen.getByLabelText('Choose date');
  const timeSelect = screen.getByLabelText('Choose time');
  const numberOfGuestsInput = screen.getByLabelText('Number of guests');
  const occasionSelect = screen.getByLabelText('Occasion');
  const submitButton = screen.getByText('Book Now');

  fireEvent.change(emailInput, { target: { value: 'mario@luigi.com' } });
  fireEvent.change(dateInput, { target: { value: '20-03-2023' } });
  fireEvent.change(timeSelect, { target: { value: '18:30' } });
  fireEvent.change(numberOfGuestsInput, { target: { value: '5' } });
  fireEvent.change(occasionSelect, { target: { value: 'Birthday' } });
  fireEvent.submit(submitButton);
  act(() => {
    expect(onSubmit).toHaveBeenCalledWith({
      email: 'mario@luigi.com',
      date: '20-03-2023',
      time: '18:30',
      guests: '5',
      occasion: 'Birthday',
    });
  });
});
// import { render, fireEvent, screen } from '@testing-library/react';
// import App from './App';

// test('Adds one', () => {
//   // render the App component
//   render(<App />);

//   // save the heading in a variable
//   const heading = screen.getByTestId('currentNumber');

//   // save the button in a variable
//   const btn = screen.getByTestId('addOne');

//   // click the btn
//   fireEvent.click(btn);

//   // test assumption
//   expect(heading).toHaveTextContent('2');
// });w

// import React from 'react';
// export default function App() {
//   const [number, setNumber] = React.useState(1);
//   function increment() {
//     setNumber((prevNumber) => prevNumber + 1);
//   }
//   return (
//     <>
//       <h1 data-test-id="currentNumber"> {number} </h1>
//       <button data-testid="add-one" onClick={increment}>
//           Add one
//       </button>
//     </>
//   );
// }
