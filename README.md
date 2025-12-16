# Events App

A modern full-stack event management application built with Next.js 16, TypeScript, Tailwind CSS, MongoDB, Firebase, and SWR. Browse featured events, filter events by date, view detailed event information, interact with comments, and subscribe to newsletters.

## 🚀 Features

- **Featured Events**: Display highlighted events on the homepage
- **Event Browsing**: View all available events in a clean, organized layout
- **Date Filtering**: Filter events by year and month using an intuitive search interface
- **Event Details**: View comprehensive information about individual events including location, date, and description
- **Interactive Comments**: Add and view comments for each event with real-time updates
- **Newsletter Subscription**: Subscribe to newsletter with email validation and MongoDB storage
- **Responsive Design**: Optimized for all device sizes with Tailwind CSS
- **TypeScript**: Full type safety throughout the application
- **Data Caching**: SWR-powered client-side caching and revalidation for optimal performance

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Databases**: MongoDB (Comments & Newsletter), Firebase Realtime Database (Events)
- **Data Fetching**: SWR for client-side caching and revalidation
- **API**: Next.js API Routes
- **Icons**: Custom SVG components
- **Build Tool**: Next.js built-in compiler

## 📁 Project Structure

```
event/
├── app/                    # Next.js App Router
│   ├── api/               # API Routes
│   │   ├── comments/      # Comment management
│   │   │   └── [eventId].js
│   │   └── newsLetter.js  # Newsletter subscription
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
│   ├── input/             # Form and input components
│   │   ├── comment-list.tsx     # Comments display
│   │   ├── comments.tsx         # Comment form
│   │   ├── new-comment.tsx      # New comment component
│   │   └── newsletter-registration.tsx # Newsletter signup
│   ├── icons/             # Custom SVG icons
│   ├── layout/            # Layout components
│   └── ui/                # UI components
├── helpers/               # Utility functions
│   ├── api-util.js        # Firebase API utilities
│   └── db-util.js         # MongoDB utilities
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

## 🔧 Environment Setup

### Database Configuration

1. **Firebase Realtime Database**:
   - Create a Firebase project at https://console.firebase.google.com/
   - Enable Realtime Database
   - Set database rules to allow read/write operations
   - Populate events data in the database

2. **MongoDB**:
   - Create a MongoDB Atlas cluster or use local MongoDB
   - Get your connection string
   - Update `helpers/db-util.js` with your MongoDB connection string

### Environment Variables

Create a `.env.local` file in the root directory:

```env
MONGODB_URI=your_mongodb_connection_string
```

## 📱 Usage

### Navigation

- **Homepage** (`/`): View featured events
- **All Events** (`/events`): Browse all events with filtering capability
- **Filtered Events** (`/events/2021/5`): View events filtered by year and month
- **Event Details** (`/events/e1`): View detailed information about a specific event including comments

### Filtering Events

1. Go to `/events`
2. Select a year and month from the dropdown menus
3. Click "Find Events" to filter the results

### Interacting with Events

1. **View Event Details**: Click on any event to see full details
2. **Add Comments**: Use the comment form on event detail pages
3. **Subscribe to Newsletter**: Enter your email in the newsletter form

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
- **EventContent**: Event description and comments section
- **Comments**: Interactive comment form for adding new comments
- **CommentList**: Displays user comments for events
- **NewComment**: New comment form component
- **NewsletterRegistration**: Email subscription form with validation
- **Button**: Reusable button component

### Layout Components

- **MainHeader**: Site navigation header
- **Layout**: Root layout wrapper

## 📊 Data Structure

### Events (Firebase Realtime Database)
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

### Comments (MongoDB)
```typescript
{
  _id: ObjectId;
  eventId: string;
  name: string;
  text: string;
  createdAt: Date;
}
```

### Newsletter (MongoDB)
```typescript
{
  _id: ObjectId;
  email: string;
  createdAt: Date;
}
```

## 🚀 Deployment

### Vercel (Recommended)

The easiest way to deploy is using Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard:
   - `MONGODB_URI`: Your MongoDB connection string
4. Deploy automatically

### Other Platforms

This app can be deployed to any platform supporting Next.js:

```bash
npm run build
npm run start
```

Make sure to configure environment variables for MongoDB connection.

## 🛠️ API Endpoints

### Comments API
- `GET /api/comments/[eventId]` - Get all comments for an event
- `POST /api/comments/[eventId]` - Add a new comment to an event

### Newsletter API
- `POST /api/newsletter` - Subscribe to newsletter with email validation

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
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Firebase Documentation](https://firebase.google.com/docs)
- [SWR Documentation](https://swr.vercel.app/)
