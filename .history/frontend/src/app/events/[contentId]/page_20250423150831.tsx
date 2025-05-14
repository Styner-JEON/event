'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";
import { use } from "react";


interface Params {
  contentId: string;
}

interface DetailPageProps {
  params: Promise<Params>;
}

// export default function DetailPage({ contentId }: { contentId: string }) {
// export default function DetailPage({ params }: { params: { contentId: string } }) {
export default function DetailPage({ params }: DetailPageProps) {

  if (!event) return <div>Event not found.</div>;

  return (
    <main>

    </main>
  );
}