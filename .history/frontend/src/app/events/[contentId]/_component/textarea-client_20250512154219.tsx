'use client';

import TextareaAutosize from "react-textarea-autosize";

async function sendRequest(url, { arg }: { arg: { : string }}) {
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(arg)
  }).then(res => res.json())
}

export default function TextareaClient({ contentId }: { contentId: string}) {    
  return (
    <article className="border border-gray-400 rounded-md w-120">
      {/* 텍스트 입력 영역 */}
      <TextareaAutosize
        minRows={2}
        maxRows={2}
        placeholder="리뷰를 작성할 수 있습니다"               
        className="p-4 w-full resize-none focus:outline-none"
      />

      {/* 버튼 영역 */}
      <section className="flex flex-row justify-end p-4">
        <button
          type="button"          
          className="px-4 py-2 bg-blue-400 text-white hover:bg-purple-400 rounded-md cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"          
        >          
        </button>
      </section>
    </article>
  );
}

