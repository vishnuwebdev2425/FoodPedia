export default function ShimmerCardsGrid() {
  const cards = Array.from({ length: 10 });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 p-6">
      {cards.map((_, i) => (
        <div
          key={i}
          className="p-6 rounded-xl border shadow-md bg-white space-y-6 animate-pulse w-full min-w-[320px]"
        >
          <div className="h-56 bg-gray-300 rounded-lg"></div>
          <div className="h-5 bg-gray-300 rounded w-4/5"></div>
          <div className="h-5 bg-gray-300 rounded w-3/5"></div>
        </div>
      ))}
    </div>
  );
}
