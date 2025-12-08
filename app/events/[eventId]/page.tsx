'use client';

import { useParams } from 'next/navigation';
import { Fragment, useState, useEffect } from 'react';
import EventSummary from '../../../component/event-detail/event-summary';
import EventLogistics from '../../../component/event-detail/event-logistics';
import EventContent from '../../../component/event-detail/event-content';
import { getEventById } from '../../../helpers/api-util';
import Head from 'next/head';

interface Event {
  id: string;
  title: string;
  description: string;
  location: string;
  date: string;
  image: string;
  isFeatured: boolean;
}

export default function EventDetailPage() {
  
  const params = useParams();

  const eventId = params.eventId as string;

  const [event, setEvent] = useState<Event | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchEvent() {
      try {
        const eventData = await getEventById(eventId);
        setEvent(eventData);
      } catch (error) {
        console.error('Error fetching event:', error);
      } finally {
        setIsLoading(false);
      }
    }

    if (eventId) {
      fetchEvent();
    }
  }, [eventId]);

  if (isLoading) {
    return <p>Loading event...</p>;
  }

  if (!event) {
    return <p>No event found</p>;
  }

  return (
    <Fragment>
      <Head>
        <title>{event.title}</title>
        <meta name="description" content={event.description} />
      </Head>
      <EventSummary title={event.title} />
      <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.title} />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}
