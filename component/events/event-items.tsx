
export default function EventItem(props) {
  const { id, title, image, date, location, description } = props;
  return (
  <li key={id}>
    <img src={image} alt={title} />
    <h2>{title}</h2>
    <time>{date}</time>
    <address>{location}</address>
    <p>{description}</p>
  </li>
  )
}