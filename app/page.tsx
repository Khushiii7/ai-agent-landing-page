'use client';

import dynamic from 'next/dynamic';

// Dynamically import the component to avoid SSR issues with localStorage
const LeapAIProfileAgent = dynamic(
  () => import('./LeapAIProfileAgent'),
  { ssr: false }
);

export default function Home() {
  return <LeapAIProfileAgent />;
}
