export default function Comment({ isLoggedIn }: {}) {
  const router = useRouter();

  // 처음 렌더링 시 로그인 안 됐으면 /login으로 이동
  useEffect(() => {
    if (!isLoggedIn) {
      router.replace('/login');
    }
  }, [isLoggedIn, router]);

  // 로그인 돼 있으면 댓글 폼 보여주기
  return isLoggedIn ? (
    <TextareaClient />
  ) : null;
}