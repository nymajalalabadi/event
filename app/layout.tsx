import classes from '../styles/main-header.module.css';
import MainHeader from '../component/layout/main-header';
import Head from 'next/head';

export const metadata = {
  title: 'NextJS Eventss',
  description: 'Find a lot of great events that allow you to evolve...',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, overflowX: 'hidden' }} >
        <MainHeader />
        <div className={classes.container} {...metadata} >
          {children}
        </div>
      </body>
    </html>
  );
}