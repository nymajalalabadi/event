import Link from "next/link";

export default function EventItem(props) {

  const { id, title, image, date, location, description } = props;

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const formattedAddress = location.replace(', ', '\n');

  const exploreLink = `/events/${id}`;

  return (
  <li key={id}>
    <img src={'/' + image} alt={title} />
    <div>
    <h2>{title}</h2>
    <div>
      <time>{formattedDate}</time>
    </div>
    <div>
      <address>{formattedAddress}</address>
    </div>
    <div>
      <Link href={exploreLink}>
        <button>Explore Event</button>
      </Link>
    </div>
    </div>
  </li>
  )
}