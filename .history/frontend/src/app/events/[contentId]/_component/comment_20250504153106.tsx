'use client';

import { useRouter } from "next/navigation";
import { useState } from "react";
import TextareaClient from "./textarea-client";

export default function Comment({ isLoggedIn }: { isLoggedIn: boolean }) {
  const [isEditing, setIsEditing] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    if (!isLoggedIn) {      
      router.push('/login');
    } else {      
      setIsEditing(true);
    }
  };
  
  if (isEditing) {
    
  }

  // 기본: 클릭 가능한 input 하나만 보여주기
  return (
    <div className="w-120">
      <input
        type="text"
        placeholder="리뷰를 작성할 수 있습니다"
        className="w-full rounded-full border border-gray-400 p-4 cursor-pointer"
        onClick={handleClick}
        readOnly
      />
    </div>
  );
}