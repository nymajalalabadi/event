import classes from '../styles/main-header.module.css';
import MainHeader from '../component/layout/main-header';

export const metadata = {
  title: 'NextJS Events',
  description: 'Find a lot of great events that allow you to evolve...',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, overflowX: 'hidden' }}>
        <MainHeader />
        <div className={classes.container}>
          {children}
        </div>
      </body>
    </html>
  );
}