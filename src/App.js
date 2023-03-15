import { Route, Routes } from 'react-router-dom';
import './App.css';

import Footer from './components/footer/Footer';
import Navigation from './components/nav/Navigation';
import BookingPage from './pages/booking/BookingPage';
import HomePage from './pages/home/HomePage';
import ConfirmedBooking from './pages/booking/components/ConfirmedBooking';

function App() {
  return (
    <main className="App">
      <meta name="description" content="your text goes here" />
      <meta name="og:title" content="" />
      <meta name="og:description" content="" />
      <meta name="og:image" content="" />

      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/booking" element={<BookingPage />}></Route>
        <Route path="/confirmedBooking" element={<ConfirmedBooking />}></Route>
      </Routes>
      {/* <HomePage /> */}
      <Footer />
    </main>
  );
}

export default App;
