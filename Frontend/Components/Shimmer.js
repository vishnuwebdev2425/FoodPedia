export default function ShimmerCardsGrid() {
  const cards = Array.from({ length: 10 });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
      {cards.map((_, i) => (
        <div
          key={i}
          className="p-4 rounded-xl border shadow-sm bg-white space-y-4 animate-pulse"
        >
          <div className="h-40 bg-gray-300 rounded-lg"></div>
          <div className="h-4 bg-gray-300 rounded w-3/4"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2"></div>
        </div>
      ))}
    </div>
  );
}
