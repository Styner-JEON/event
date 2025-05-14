'use client';

import TextareaAutosize from "react-textarea-autosize";

export default function TextareaClient() {
  return (
    <TextareaAutosize
      minRows={1}
      maxRows={8}
      placeholder="리뷰를 작성할 수 있습니다"
      className="border border-gray-300 rounded-md p-2 w-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
}