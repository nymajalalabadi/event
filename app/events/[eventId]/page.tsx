'use client';

import { getEventById } from '../../../dummy-data';
import { useParams } from 'next/navigation';
import { Fragment } from 'react';
import EventSummary from '../../../component/event-detail/event-summary';
import EventLogistics from '../../../component/event-detail/event-logistics';
import EventContent from '../../../component/event-detail/event-content';

export default function EventDetailPage() {
  const params = useParams();
  const eventId = params.eventId as string;

  const event = getEventById(eventId);

  if (!event) {
    return <p>No event found</p>;
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.title} />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}
