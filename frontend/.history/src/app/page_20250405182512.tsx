import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>main page</h1>
      <section>
        {username ? (
          <p>Welcome, {username}!</p>
        ) : (
          <p>
            <a href="/login">Login</a> or <a href="/signup">Sign Up</a>
          </p>
        )}
      </section>
      <section>
        <p>
          <Link href="/login">로그인 링크</Link>
        </p>
        <p>
          <Link href="/signup">회원가입 링크</Link>
        </p>     
      </section>
    </main>
  );
}
