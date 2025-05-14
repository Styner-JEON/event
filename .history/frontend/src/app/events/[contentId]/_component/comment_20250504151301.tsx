'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import TextareaClient from './textarea-client';

export default function Comment() {
  const [isTextareaVisible, setIsTextareaVisible] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    // 실제 프로젝트에서는, 여기서 로그인 상태를 확인하는 로직이 필요합니다.
    // 예: 토큰이나 세션, 상태 관리 라이브러리의 상태 등을 확인
    const isLoggedIn = localStorage.getItem('token') !== null;
    
    if (!isLoggedIn) {
      router.push('/login');
    } else {
      setIsTextareaVisible(true);
    }
  };

  if (isTextareaVisible) {
    return <TextareaClient />;
  }

  return (
    <input
      type="text"
      placeholder="리뷰를 작성할 수 있습니다"
      className="w-120 rounded-full border border-gray-400 p-4 cursor-pointer"
      onClick={handleClick}
      readOnly
    />    
  );
}