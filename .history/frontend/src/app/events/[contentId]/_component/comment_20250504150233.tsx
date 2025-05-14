export default function JoinConversationInput() {
  return (
    <div className="w-full max-w-lg mx-auto">
      <input
        type="text"
        placeholder="Join the conversation"
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