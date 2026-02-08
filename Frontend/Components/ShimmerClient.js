const ShimmerClient=()=>{
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8 bg-gray-50">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="relative overflow-hidden flex items-center justify-between p-5 bg-white rounded-2xl border border-gray-200 shadow-sm"
          >
            {/* The Shimmer Sliding Effect */}
            <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>

            {/* Left Side: Details */}
            <div className="flex-1 space-y-4">
              {/* Name */}
              <div className="h-5 bg-gray-200 rounded-full w-40"></div>

              {/* Location */}
              <div className="flex items-center space-x-2">
                <div className="h-4 w-4 bg-gray-100 rounded-full"></div>
                <div className="h-4 bg-gray-100 rounded-md w-24"></div>
              </div>
            </div>

            {/* Right Side: Photo */}
            <div className="flex-shrink-0 ml-4">
              <div className="w-20 h-20 bg-gray-200 rounded-2xl"></div>
            </div>
          </div>
        ))}
      </div>
    );
}
export default ShimmerClient;