export default function Comment() {
  return (
    <div className="w-full max-w-lg mx-auto">
      <input
        type="text"
        placeholder="리뷰를 작성할 수 있습니다"
        className="
          w-full
          rounded-full
          border border-gray-300
          px-6 py-3
          text-gray-700 placeholder-gray-400
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
          transition
        "
      />
    </div>
  );
}