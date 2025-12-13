import EventList from '../component/events/event-list';
import { getFeaturedEvents } from '../helpers/api-util';
import NewsletterRegistration from '../component/input/newsletter-registration';
import Head from 'next/head';

export default async function HomePage() {
  const featuredEvents = await getFeaturedEvents();
  return (
   <div>
      <NewsletterRegistration />
      <EventList items={featuredEvents} />
    </div>
  )
}