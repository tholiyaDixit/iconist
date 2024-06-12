import EventCard from '@/components/eventCard/EventCard';
import { useRouter } from 'next/router'
import React from 'react'

const EventList = () => {
    const router = useRouter()
    console.log("router ---=",router.query);
    
  return (
    <div>
      <h3>Page Event</h3>
      <EventCard />
    </div>
  )
}

export default EventList
