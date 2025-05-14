'use client'

interface Params {
  contentId: string;
}

interface DetailPageProps {
  params: Promise<Params>;
}

// export default function DetailPage({ contentId }: { contentId: string }) {
// export default function DetailPage({ params }: { params: { contentId: string } }) {
export default function DetailPage({ params }: DetailPageProps) {



  return (
    <main>

    </main>
  );
}