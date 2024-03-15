import './styles/App.css';

import Header from "./components/layout/Header";
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TripsPage from './pages/trips/TripsPage';
import SingleTripsPage from './pages/trips/SingleTripsPage';
import CountriesPage from './pages/countries/CountriesPage';

export default function App() {
  return (
    <div className="">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/trips" element={<TripsPage />} />
        <Route path="/trips/:tripId" element={<SingleTripsPage />} />
        <Route path="/countries" element={<CountriesPage />} />
      </Routes> 
    </div>
  );
}
