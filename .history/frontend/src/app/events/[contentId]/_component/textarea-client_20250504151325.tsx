'use client';

import { useState } from 'react';
import TextareaAutosize from "react-textarea-autosize";

export default function TextareaClient() {
  const [comment, setComment] = useState('');

  const handleSubmit = async () => {
    if (!comment.trim()) return;

    try {
      // API 호출 예시: 실제 구현 시 API 엔드포인트와 데이터 형식을 맞춰야 합니다
      // const response = await fetch('/api/comments', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({ content: comment }),
      // });
      
      // 성공 시 처리
      // if (response.ok) {
      //   setComment('');
      //   // 필요시 댓글 목록 새로고침 로직 추가
      // }
      
      // 임시로 성공했다고 가정
      alert('댓글이 등록되었습니다.');
      setComment('');
    } catch (error) {
      console.error('댓글 등록 실패:', error);
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
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />      

      {/* 버튼 영역 */}
      <section className="flex flex-row justify-end p-4">
        <button
          type="button"
          className="px-4 py-2 bg-blue-400 text-white hover:bg-purple-400 rounded-md cursor-pointer"
          onClick={handleSubmit}
        >
          댓글 작성
        </button>
      </section>
    </article>
  );
}