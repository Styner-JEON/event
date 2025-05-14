'use client';

import TextareaAutosize from "react-textarea-autosize";
import { useState, useEffect } from "react";

export default function TextareaClient() {
  const [placeholder, setPlaceholder] = useState("로딩 중...");

  useEffect(() => {
    // 쿠키에서 username 정보를 가져와 로그인 상태 확인
    const checkLoginStatus = () => {
      const cookies = document.cookie.split(';');
      const usernameCookie = cookies.find(cookie => cookie.trim().startsWith('username='));
      const isLoggedIn = !!usernameCookie;
      setPlaceholder(isLoggedIn 
        ? "리뷰를 적을 수 있습니다." 
        : "로그인을 하면 리뷰를 적을 수 있습니다.");
    };

    checkLoginStatus();
  }, []);

  return (
    <TextareaAutosize
      minRows={3}
      maxRows={6}
      placeholder={placeholder}
      className="border border-gray-300 rounded-md p-2 w-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
}