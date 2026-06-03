# Next Gen Learning Dashboard

A futuristic learning dashboard built using Next.js, Supabase, Tailwind CSS, and Framer Motion.

## Features

* Dynamic course data fetched from Supabase
* Bento Grid Dashboard Layout
* Responsive Design
* Dark Mode UI
* Animated Progress Bars
* Weekly Activity Section
* Sidebar Navigation
* Loading State Support
* Framer Motion Animations
* Server-Side Data Fetching

## Tech Stack

* Next.js (App Router)
* TypeScript
* Tailwind CSS
* Supabase
* Framer Motion
* Lucide React

## Environment Variables

Create a `.env.local` file and add:

NEXT_PUBLIC_SUPABASE_URL=your_supabase_url

NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

## Installation

```bash
npm install
npm run dev
```

Open:

http://localhost:3000

## Database Schema

Table: courses

Fields:

* id
* title
* progress
* icon_name
* created_at

## Deployment

Deploy easily using Vercel.

## Author

Abhay Bhardwaj 
