'use client';

import { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import useSWRMutation from 'swr/mutation';

async function sendRequest(
  url: string,
  { arg }: { arg: { contentId: number; content: string } }
) {
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json', // 반드시 추가!
    },
    body: JSON.stringify(arg),
  });
  if (!res.ok) {
    throw new Error('댓글 작성 실패');
  }
  return res.json();
}

export default function TextareaClient({ contentId }: { contentId: string; }) {
  const [text, setText] = useState('');
  const isDisabled = text.trim().length === 0 || isMutating;

  const { trigger, data, error, isMutating } = useSWRMutation(
    `${process.env.NEXT_PUBLIC_CONTENT_BASE_URL}/events/${process.env.NEXT_PUBLIC_CONTENT_API_VERSION}/${contentId}/comments`,
    sendRequest
  );

  const handleSubmit = async () => {
    try {
      // contentId는 Long 타입이므로 number 로 변환
      await trigger({ contentId: Number(contentId), content: text });
      // 성공 시 입력 초기화
      setText('');
      // 필요 시 SWR revalidation 등 추가 로직
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <article className="border border-gray-400 rounded-md w-120">
      {/* 텍스트 입력 영역 */}
      <TextareaAutosize
        minRows={2}
        maxRows={2}
        placeholder="리뷰를 작성할 수 있습니다"
        className="p-4 w-full resize-none focus:outline-none"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      {/* 버튼 영역 */}
      <section className="flex flex-row justify-end p-4">
        <button
          type="button"
          onClick={handleSubmit}
          disabled={isDisabled}
          className="px-4 py-2 bg-blue-400 text-white hover:bg-purple-400 rounded-md cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isMutating ? '작성 중…' : '댓글 작성'}
        </button>
      </section>
    </article>
  );
}