'use client';

import { getAllEvents } from '../../helpers/api-util';
import EventList from '../../component/events/event-list';
import EventsSearch from '../../component/event-detail/events-search';
import { Fragment, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface Event {
  id: string;
  title: string;
  description: string;
  location: string;
  date: string;
  image: string;
  isFeatured: boolean;
}

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function fetchEvents() {
      try {
        const eventsData = await getAllEvents();
        setEvents(Array.isArray(eventsData) ? eventsData : []);
      } catch (error) {
        console.error('Error loading events:', error);
        setEvents([]);
      } finally {
        setIsLoading(false);
      }
    }

    fetchEvents();
  }, []);

  const handleSearch = (selectedYear: string, selectedMonth: string) => {
    const fullPath = `/events/${selectedYear}/${selectedMonth}`;
    router.push(fullPath);
  }

  if (isLoading) {
    return <p className='center'>Loading events...</p>;
  }

  return (
    <Fragment>
      <EventsSearch onSearch={handleSearch} />
      <EventList items={events} />
    </Fragment>
  );
}