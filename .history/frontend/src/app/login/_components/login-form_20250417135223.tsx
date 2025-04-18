'use client'

import { useActionState } from "react";
import { loginAction } from "../_libs/login-action";

export default function LoginForm() {
  const [state, action, pending] = useActionState(loginAction, undefined)
 
  return (
    <form action={action}>
      <div>
        <label htmlFor="username">Username: </label>
        <input id="username" name="username" placeholder="Username" />
      </div>
      {state?.errors?.username && <p>{state.errors.username}</p>}
 
      <div>
        <label htmlFor="password">Password: </label>
        <input id="password" name="password" type="Password" />
      </div>
      {state?.errors?.password && (
        <div>
          <p>Password must:</p>
          <ul>
            {state.errors.password.map((error: string) => (
              <li key={error}>- {error}</li>
            ))}
          </ul>
        </div>
      )}
      <button disabled={pending} type="submit">
        로그인
      </button>
    </form>
  )
}