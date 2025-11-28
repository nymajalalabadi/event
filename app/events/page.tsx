import { getAllEvents } from '../../dummy-data';
import EventList from '../../component/events/event-list';
import EventsSearch from '../../component/event-detail/events-search';
import { Fragment } from 'react';

export default function EventsPage() {
  const events = getAllEvents();

  return (
    <>
      <EventsSearch  />
      <EventList items={events} />
    </>
  );
}