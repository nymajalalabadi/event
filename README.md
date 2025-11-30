# Events App

A modern event management application built with Next.js 16, TypeScript, and Tailwind CSS. Browse featured events, filter events by date, and view detailed event information.

## 🚀 Features

- **Featured Events**: Display highlighted events on the homepage
- **Event Browsing**: View all available events in a clean, organized layout
- **Date Filtering**: Filter events by year and month using an intuitive search interface
- **Event Details**: View comprehensive information about individual events including location, date, and description
- **Responsive Design**: Optimized for all device sizes with Tailwind CSS
- **TypeScript**: Full type safety throughout the application

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Custom SVG components
- **Build Tool**: Next.js built-in compiler

## 📁 Project Structure

```
event/
├── app/                    # Next.js App Router
│   ├── events/            # Events pages
│   │   ├── page.tsx       # All events listing
│   │   ├── [eventId]/     # Individual event details
│   │   │   └── page.tsx
│   │   └── [...slug]/     # Filtered events (year/month)
│   │       └── page.tsx
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage (featured events)
├── component/             # Reusable components
│   ├── event-detail/      # Event detail components
│   ├── events/            # Event listing components
│   ├── icons/             # Custom SVG icons
│   ├── layout/            # Layout components
│   └── ui/                # UI components
├── dummy-data.js          # Mock event data
├── public/                # Static assets
│   └── images/            # Event images
└── styles/                # CSS Modules
```

## 🏃 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository and navigate to the event directory:
```bash
cd event
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📱 Usage

### Navigation

- **Homepage** (`/`): View featured events
- **All Events** (`/events`): Browse all events with filtering capability
- **Filtered Events** (`/events/2021/5`): View events filtered by year and month
- **Event Details** (`/events/e1`): View detailed information about a specific event

### Filtering Events

1. Go to `/events`
2. Select a year and month from the dropdown menus
3. Click "Find Events" to filter the results

## 🏗️ Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🎨 Components

### Key Components

- **EventList**: Displays a grid of event cards
- **EventItem**: Individual event card component
- **EventsSearch**: Year/month filtering interface
- **EventSummary**: Event title display
- **EventLogistics**: Event date, location, and image
- **EventContent**: Event description
- **Button**: Reusable button component

### Layout Components

- **MainHeader**: Site navigation header
- **Layout**: Root layout wrapper

## 📊 Data Structure

Events include the following properties:

```typescript
{
  id: string;
  title: string;
  description: string;
  location: string;
  date: string; // ISO date format
  image: string; // Image path
  isFeatured: boolean;
}
```

## 🚀 Deployment

### Vercel (Recommended)

The easiest way to deploy is using Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

This app can be deployed to any platform supporting Next.js:

```bash
npm run build
npm run start
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📝 License

This project is for educational purposes and is available under the MIT License.

## 🔗 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
