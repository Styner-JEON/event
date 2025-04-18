// lib/logger.ts
export function log(message: string, level: 'debug' | 'info' | 'warn' | 'error' = 'info') {
  const isDev = process.env.NODE_ENV === 'development'

  if (isDev) {
    // 개발 모드에서는 모든 로그 출력
    console.log(`[${level.toUpperCase()}] ${message}`)
  } else {    
    if (level === 'warn' || level === 'error') {
      console.warn(`[${level.toUpperCase()}] ${message}`)
    }
  }
}
