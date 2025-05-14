'use client';

import TextareaAutosize from "react-textarea-autosize";

export default function TextareaClient({ value }: { value: string }) {
  return (
    <TextareaAutosize
      minRows={3}
      maxRows={6}
      value={value}
      readOnly
    />
  );
}