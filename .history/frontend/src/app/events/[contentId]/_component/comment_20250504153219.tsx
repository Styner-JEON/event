

// import { useRouter } from "next/navigation";
import TextareaClient from "./textarea-client";

export default function Comment({ isLoggedIn }: { isLoggedIn: boolean }) {  
  const router = useRouter();

  const handleClick = () => {
    if (!isLoggedIn) {      
      router.push('/login');
    } else {      
      return <TextareaClient />;
    }
  };

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