'use client';

import TextareaAutosize from "react-textarea-autosize";

export default function TextareaClient() {
  return (
    <TextareaAutosize
      minRows={3}
      maxRows={6}
      value={value}
      readOnly
    />
  );
}