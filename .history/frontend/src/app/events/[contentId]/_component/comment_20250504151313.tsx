'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import TextareaClient from './textarea-client';

export default function Comment() {
  const [isTextareaVisible, setIsTextareaVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  // SSR 환경에서 localStorage 접근 이슈 방지
  useEffect(() => {
    // 토큰이나 사용자 정보로 로그인 상태 확인
    const token = localStorage.getItem('token');
    // 또는 쿠키에서 확인: document.cookie.includes('로그인쿠키명')
    setIsLoggedIn(!!token);
  }, []);

  const handleClick = () => {
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