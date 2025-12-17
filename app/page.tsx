'use client';

import EventList from '../component/events/event-list';
import { getFeaturedEvents } from '../helpers/api-util';
import NewsletterRegistration from '../component/input/newsletter-registration';
import { useEffect, useState } from 'react';

type Event = {
  id: string;
  title: string;
  description: string;
  location: string;
  date: string;
  image: string;
  isFeatured: boolean;
};

export default function HomePage() {
  const [featuredEvents, setFeaturedEvents] = useState<Event[]>([]);

  useEffect(() => {
    getFeaturedEvents().then(setFeaturedEvents);
  }, []);

  return (
   <div>
      <NewsletterRegistration />
      <EventList items={featuredEvents} />
    </div>
  )
}