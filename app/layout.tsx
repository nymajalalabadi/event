import classes from '../styles/main-header.module.css';

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
      <body>
        <div className={classes.container}>
          {children}
        </div>
      </body>
    </html>
  );
}