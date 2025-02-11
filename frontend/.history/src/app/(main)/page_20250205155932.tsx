export default function MainPage() {
  return (
    <div className="flex h-[100dvh] flex-col">
      <header className="basis-2/12 bg-red-300">header</header>
      <div className="basis-8/12 lg:flex">
				<aside className="hidden bg-green-300 lg:block basis-2/12">left</aside>
				<main className=" bg-neutral-300 h-full lg:basis-8/12">main</main>
				<aside className="hidden bg-yellow-300 lg:block basis-2/12">right</aside>
      </div>
      <footer className="basis-2/12 bg-blue-300">footer Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</footer>
    </div>
  );
}
