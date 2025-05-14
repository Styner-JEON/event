'use client';

import TextareaAutosize from "react-textarea-autosize";

export default function TextareaClient() {
  return (
    <div className="border border-gray-300 rounded-md">
      {/* 텍스트 입력 영역 */}
      <div className="p-4">
        <TextareaAutosize
          minRows={4}
          maxRows={8}
          placeholder="리뷰를 작성할 수 있습니다"
          className="
            w-full
            resize-none
            border-none
            focus:outline-none focus:ring-0
          "
        />
      </div>

      {/* 버튼 영역 */}
      <div className="flex justify-end px-4 pb-4">
        <button
          type="button"
          className="
            px-4 py-2 
            bg-blue-400 text-white             
            hover:bg-purple-400
            rounded-md
            focus:outline-none focus:ring-2 focus:ring-purple-400
          "
          onClick={() => {
            
          }}
        >
          Commit
        </button>
      </div>
    </div>
  );
}