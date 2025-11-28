'use client';
import { getAllEvents } from '../../dummy-data';
import EventList from '../../component/events/event-list';
import EventsSearch from '../../component/event-detail/events-search';
import { Fragment } from 'react';
import { useRouter } from 'next/navigation';

export default function EventsPage() {
  const events = getAllEvents();
  const router = useRouter();
  
  const handleSearch = (selectedYear: string, selectedMonth: string) => {
    const fullPath = `/events/${selectedYear}/${selectedMonth}`;
    router.push(fullPath);
  }

  return (
    <Fragment>
      <EventsSearch onSearch={handleSearch} />
      <EventList items={events} />
    </Fragment>
  );
}