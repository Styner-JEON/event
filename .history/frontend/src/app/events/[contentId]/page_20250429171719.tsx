import { fetchEvent } from "@/_libs/fetching";

export default async function DetailPage(props: { params: Promise<{ contentId: string }> }) {
  const params = await props.params;
  const contentId = params.contentId;
  const event = await fetchEvent(contentId);

  return (
    <main>
      디테일
    </main>
  );
}



// 'use client'

// import { useEvent } from "@/hooks/use-event";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import { use } from "react";


// interface Params {
//   contentId: string;
// }

// interface DetailPageProps {
//   params: Promise<Params>;
// }

// // export default function DetailPage({ contentId }: { contentId: string }) {
// // export default function DetailPage({ params }: { params: { contentId: string } }) {
// export default function DetailPage({ params }: DetailPageProps) {
//   const resolvedParams = use(params);
//   const router = useRouter(); 
//   const contentId = resolvedParams.contentId;

//   const { event, isError, isLoading } = useEvent(Number(contentId));

//   if (isLoading) return <div>Loading...</div>;
//   if (isError) return <div>Error loading event details.</div>;
//   if (!event) return <div>Event not found.</div>;

//   return (
/
//   );
// }