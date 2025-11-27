import EventItem from './event-items';
import classes from '../../styles/event-list.module.css';

export default function EventList(props: { items: { id: string, title: string, image: string, date: string, location: string, description: string }[] }) {
  const { items } = props;

  return (
    <ul className={classes.list}>
      {items.map((event) => (
        <EventItem key={event.id} id={event.id} title={event.title} image={event.image} date={event.date} location={event.location} description={event.description} />
      ))}
    </ul>
  )
}