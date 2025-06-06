import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'


const EventDetails = () => {

  const {id} = useParams()

   const [event, setEvent] = useState({})
  
      const getEvent = async () => {
          const res = await fetch(`https://eventservice-1-ekbfb5h3d6ehd2h5.swedencentral-01.azurewebsites.net/api/events/${id}`)
  
          if (res.ok) {
              const response = await res.json()
              setEvent(response.result)
          }
      }
  
      useEffect(() => {
          getEvent()
  
      }, [])

  return (
    <div className='event-details'>
        <h1 className='event-details'>{event.title}</h1>
        <h4 className='event-detail'>{event.location}</h4>
        <h4 className='event-detail'>{event.description}</h4>
        <h4 className='event-detail'>{event.eventDate}</h4>
        <Link className='event-details btn-book' to={`/events/booking/${id}`}>Book Event</Link>
    </div>
  )
}

export default EventDetails