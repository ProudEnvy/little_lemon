import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './pages/booking/components/BookingForm';

// test('Renders the BookingForm heading', () => {
//   render(<BookingForm />);
//   const headingElement = screen.getByText('Book Now');
//   expect(headingElement).toBeInTheDocument();
// });

test('Renders initializeTimes correctly', () => {
  render(<BookingForm />);
  //The value should be the key of the option
  fireEvent.change(screen.getByLabelText(/Choose time/), {
    target: { value: 2 },
  });
  let options = screen.getByTestId('select-option');
  console.log(options[1]);
  expect(options[0].selected).toBeFalsy();
  expect(options[1].selected).toBeTruthy();
  expect(options[2].selected).toBeFalsy();
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
