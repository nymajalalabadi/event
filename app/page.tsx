import { getFeaturedEvents } from '../dummy-data';
import EventList from '../component/events/event-list';
import classes from '../styles/main-header.module.css';

export default function HomePage() {
  const featuredEvents = getFeaturedEvents();
  return (
  <div className={classes.container}>
    <h1 className={classes.title}>Featured Events</h1>
    <EventList items={featuredEvents} />
  </div>
  )
}