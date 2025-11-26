import { getFeaturedEvents } from '../dummy-data';

export default function HomePage() {
  const featuredEvents = getFeaturedEvents();
  return (
  <div>
    <h1>Featured Events</h1>
    <ul>
      {featuredEvents.map((event) => (
        <li key={event.id}>{event.title}</li>
      ))}
    </ul>
  </div>
  )
}