import EventList from '../component/events/event-list';
import { getFeaturedEvents } from '../helpers/api-util';

export default async function HomePage() {
  const featuredEvents = await getFeaturedEvents();
  return (
   <div>
      <EventList items={featuredEvents} />
    </div>
  )
}