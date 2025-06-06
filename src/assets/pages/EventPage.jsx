import React from 'react'
import Header from '../components/Header'
import EventList from '../components/EventList'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const EventPage = () => {
    return (
        <div className='portal-wrapper'>
           <Nav />
           <Header />
           <main>
               <EventList /> 
           </main>
           <Footer />

        </div>

    )
}

export default EventPage