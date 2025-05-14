import { cookies } from 'next/headers';
import Link from 'next/link';
import jwt from 'jsonwebtoken';

export default async function Greeting() {  
  const cookieStore = await cookies();
  const accessToken = cookieStore.get('accessToken')?.value;

  let username: string | null = null
  if (accessToken) {
    try {      
      const payload = jwt.verify(accessToken, process.env.JWT_SECRET!) as {
        username: string
      }      
      username = payload.username      
    } catch (e) {
      console.error(e)
    }
  }
  
  return (
    <section className="p-4 bg-gray-50">
      {username ? (
        <p className="text-lg">
          Welcome, <strong>{username}</strong>!
        </p>
      ) : (
        <div className="flex space-x-4">
          <Link href="/login" className="text-blue-600 hover:underline">
            Login
          </Link>
          <Link href="/signup" className="text-blue-600 hover:underline">
            Signup
          </Link>
        </div>
      )}
    </section>
  )
}