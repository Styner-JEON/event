'use client';

import { useState } from 'react';
import TextareaAutosize from "react-textarea-autosize";
import useSWR from "swr";
import { useParams } from 'next/navigation';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function TextareaClient() {
  const [text, setText] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const isDisabled = text.trim().length === 0 || isSubmitting;
  const params = useParams();
  const contentId = params.contentId;

  const { data, error, isLoading, mutate } = useSWR(
    `${process.env.NEXT_PUBLIC_CONTENT_BASE_URL}/events/${process.env.NEXT_PUBLIC_CONTENT_API_VERSION}/${contentId}/comments`,
    fetcher
  );

  const handleSubmit = async () => {
    if (isDisabled) return;
    
    try {
      setIsSubmitting(true);
      
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_CONTENT_BASE_URL}/events/${process.env.NEXT_PUBLIC_CONTENT_API_VERSION}/${contentId}/comments`, 
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            contentId: contentId,
            userId: 1, // 나중에 실제 사용자 ID로 변경
            username: '사용자', // 나중에 실제 사용자 이름으로 변경
            content: text
          })
        }
      );
      
      if (!response.ok) {
        throw new Error('댓글 제출 실패');
      }
      
      // 성공 후 텍스트 초기화 및 댓글 목록 새로고침
      setText('');
      mutate();
    } catch (error) {
      console.error('댓글 제출 오류:', error);
    } finally {
      setIsSubmitting(false);
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
          disabled={isDisabled}
          className="px-4 py-2 bg-blue-400 text-white hover:bg-purple-400 rounded-md cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={handleSubmit}
        >
          {isSubmitting ? '제출 중...' : '댓글 작성'}
        </button>
      </section>
    </article>
  );
}

