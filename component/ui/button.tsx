import classes from '../../styles/button.module.css';
import Link from 'next/link';

export default function Button(props: { children: React.ReactNode, href: string }) {
  return (
    <Link href={props.href} className={classes.btn}>
        {props.children}
    </Link>
  )
}