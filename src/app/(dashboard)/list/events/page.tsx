"use client"
import React, { useState } from 'react';
// import { Input } from "@/Components/ui/input"

interface Event {
  name: string;
  date: string;
  time: string;
}

const EventScheduler: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventTime, setEventTime] = useState('');

  const handleAddEvent = () => {
    const newEvent: Event = { name: eventName, date: eventDate, time: eventTime };
    setEvents([...events, newEvent]);
    setEventName('');
    setEventDate('');
    setEventTime('');
  };

  const currentDate = new Date().toISOString().split('T')[0];

  const previousEvents = events.filter(event => event.date < currentDate);
  const upcomingEvents = events.filter(event => event.date >= currentDate);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Schedule an Event</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Event Name"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
          className="border p-2 mr-2"
        />
        <input
          type="date"
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
          className="border p-2 mr-2"
        />
       
        <button
          onClick={handleAddEvent}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Add Event
        </button>
      </div>

      <h2 className="text-xl font-semibold mb-2">Upcoming Events</h2>
      <ul className="mb-4">
        {previousEvents.map((event, index) => (
          <li key={index} className="border-b py-2">
            {event.name} - {event.date} {event.time}
          </li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mb-2">Previous Events </h2>
      <ul>
        {upcomingEvents.map((event, index) => (
          <li key={index} className="border-b py-2">
            {event.name} - {event.date} {event.time}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventScheduler;