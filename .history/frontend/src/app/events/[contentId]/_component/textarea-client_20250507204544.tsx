'use client';

import { useState } from 'react';
import TextareaAutosize from "react-textarea-autosize";
import useSWRMutation from 'swr/mutation';

interface Props {
  contentId: string;
}

export default function TextareaClient({ contentId }: {}) {
  const [text, setText] = useState('');
  const isDisabled = text.trim().length === 0;

  const endpoint = `${process.env.NEXT_PUBLIC_CONTENT_BASE_URL}/events/${process.env.NEXT_PUBLIC_CONTENT_API_VERSION}/${contentId}/comments`;

  // SWR Mutation Hook
  const { trigger, isMutating } = useSWRMutation(
    endpoint,
    async (url, { arg }: { arg: { text: string } }) => {
      const res = await fetch(url, {
        method: 'POST',
        credentials: 'include', // 쿠키 포함
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(arg),
      });

      if (!res.ok) {
        throw new Error('댓글 작성 실패');
      }

      return res.json();
    }
  );

  const handleSubmit = async () => {
    try {
      await trigger({ text });
      setText('');
      // 댓글 목록 갱신 필요 시 mutate 사용
    } catch (e) {
      console.error('댓글 작성 중 오류:', e);
    }
  };

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
          disabled={isDisabled || isMutating}
          className="px-4 py-2 bg-blue-400 text-white hover:bg-purple-400 rounded-md cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={handleSubmit}
        >
          {isMutating ? '작성 중...' : '댓글 작성'}
        </button>
      </section>
    </article>
  );
}