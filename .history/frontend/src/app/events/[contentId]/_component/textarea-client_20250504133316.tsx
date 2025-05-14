'use client';

import TextareaAutosize from "react-textarea-autosize";

export default function TextareaClient() {
  return (
    <div className="relative">
      <TextareaAutosize
        minRows={4}
        maxRows={8}
        placeholder="리뷰를 작성할 수 있습니다"
        className="border border-gray-300 rounded-md p-10 pr-20 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="button"
        onClick={() => { /* comment 처리 로직 */ }}
        className="absolute bottom-2 right-2 bg-blue-500 text-white text-sm font-medium px-3 py-1 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Comment
      </button>
    </div>
  );
}