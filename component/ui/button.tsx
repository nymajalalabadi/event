import classes from '../../styles/button.module.css';
import Link from 'next/link';

export default function Button(props: { children: React.ReactNode, href: string }) {

  if (props.href) {
    return (
      <Link href={props.href} className={classes.btn}>
        {props.children}
      </Link>
    )
  }
  
    return (
      <button className={classes.btn} onClick={props.onClick}>
        {props.children}
      </button>
  )
}