'use client';

import EventList from '@/component/events/event-list';
import { useParams } from 'next/navigation';
import useSWR from 'swr';
import { getFilteredEvents } from '../../../helpers/api-util';

export default function FilteredEventsPage() {
  const params = useParams();
  const slug = params.slug as string[];

  // Parse and validate parameters
  const filteredYear = slug?.[0];
  const filteredMonth = slug?.[1];
  const numYear = filteredYear ? +filteredYear : NaN;
  const numMonth = filteredMonth ? +filteredMonth : NaN;

  // Use SWR for data fetching - must be called unconditionally before any returns
  const { data: filteredEvents, error, isLoading } = useSWR(
    slug && slug.length === 2 && !isNaN(numYear) && !isNaN(numMonth) &&
    numYear >= 2021 && numYear <= 2030 && numMonth >= 1 && numMonth <= 12
      ? [`filtered-events`, numYear, numMonth]
      : null, // Don't fetch if validation fails
    () => getFilteredEvents({ year: numYear, month: numMonth }),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: true,
    }
  );

  // Handle validation errors
  if (!slug || slug.length !== 2) {
    return <p className='center'>Loading...</p>;
  }

  if (isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2021 || numMonth < 1 || numMonth > 12) {
    return <p className='center'>Invalid filter. Please adjust your values.</p>;
  }

  if (error) {
    return <p className='center'>Error loading events. Please try again.</p>;
  }

  if (isLoading) {
    return <p className='center'>Loading filtered events...</p>;
  }

  if (!filteredEvents || filteredEvents.length === 0) {
    return <p className='center'>No events found for the chosen filter.</p>;
  }

  return (
    <div>
      <EventList items={filteredEvents} />
    </div>
  );
}