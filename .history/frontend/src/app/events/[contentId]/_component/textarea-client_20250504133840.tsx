'use client';

import TextareaAutosize from "react-textarea-autosize";

export default function TextareaClient() {
  return (
    <div className="relative w-full">
      <TextareaAutosize
        minRows={4}
        maxRows={8}
        placeholder="리뷰를 작성할 수 있습니다"
        className="
          w-full
          rounded-md
          border border-gray-300
          p-4          /* padding all around */
          pb-16        /* extra bottom padding for button space */
          focus:outline-none
          focus:ring-2 focus:ring-blue-500
        "
      />

      {/* bottom-left hint */}
      <span className="absolute bottom-4 left-4 text-sm text-gray-400">
        Aa
      </span>

      {/* bottom-right buttons */}
      <div className="absolute bottom-4 right-4 flex space-x-2">
        <button
          type="button"
          className="
            px-3 py-1 rounded-md 
            bg-gray-100 text-gray-800 
            hover:bg-gray-200
            focus:outline-none focus:ring-2 focus:ring-gray-300
          "
        >
          Cancel
        </button>
        <button
          type="button"
          className="
            px-4 py-1 rounded-md 
            bg-purple-600 text-white 
            hover:bg-purple-700
            focus:outline-none focus:ring-2 focus:ring-purple-400
          "
          onClick={() => { /* comment 처리 로직 */ }}
        >
          Comment
        </button>
      </div>
    </div>
  );
}