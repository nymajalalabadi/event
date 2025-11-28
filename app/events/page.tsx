import { getAllEvents } from '../../dummy-data';
import EventList from '../../component/events/event-list';

export default function EventsPage() {
  const events = getAllEvents();

  return (
    <div>
      <EventList items={events} />
    </div>
  );
}