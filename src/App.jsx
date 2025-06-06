import { Route, Routes } from 'react-router-dom'
import './App.css'
import EventPage from './assets/pages/EventPage'
import Dashbord from './assets/pages/Dashbord'
import EventDetails from './assets/pages/EventDetails'
import BookingEventPage from './assets/pages/BookingEventPage'

function App() {
  return (
    <Routes>
    <Route path="/" element={<EventPage />} />
    <Route path="/dashbord" element={<Dashbord />} />
    <Route path="/eventpage" element={<EventPage />} />
    <Route path="/events/:id" element={<EventDetails />} />
    <Route path="/events/booking/:id" element={<BookingEventPage />} />
  </Routes>
  
  )
}

export default App
