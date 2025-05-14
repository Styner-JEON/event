'use client';

import TextareaAutosize from "react-textarea-autosize";

export default function TextareaClient() {
  return (
    <TextareaAutosize
      minRows={3}
      maxRows={6}
      // placeholder={placeholder}
      className="border border-gray-300 rounded-md p-2 w-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
}