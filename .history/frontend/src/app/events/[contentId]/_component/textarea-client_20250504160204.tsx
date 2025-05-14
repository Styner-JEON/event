'use client';

import { useState } from 'react';
import TextareaAutosize from "react-textarea-autosize";

export default function TextareaClient() {
  const [text, setText] = useState('');
  const isDisabled = text.trim().length === 0;

  return (
    <article className="border border-gray-400 rounded-md w-120">
      
      {/* 텍스트 입력 영역 */}      
      <TextareaAutosize
        minRows={2}
        maxRows={2}
        placeholder="리뷰를 작성할 수 있습니다"
        value={text}
        onChange={e => setText(e.currentTarget.value)}
        className="p-4 w-full resize-none focus:outline-none"
      />      

      {/* 버튼 영역 */}
      <section className="flex flex-row justify-end p-4">
        <button
          type="button"
          className="px-4 py-2 bg-blue-400 text-white hover:bg-purple-400 rounded-md cursor-pointer  disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-blue-400"
          onClick={() => {
            
          }}
        >
          댓글 작성
        </button>
      </section>
    </article>
  );
}