export default function Comment() {
  return (
    <input
      type="text"
      placeholder="리뷰를 작성할 수 있습니다"
      className="
        w-120
        rounded-full
        border border-gray-300
        p-4
        text-gray-700 placeholder-gray-400
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
        transition
      "
    />    
  );
}