// lib/logger.ts
export function log(message: string, level: 'debug' | 'info' | 'warn' | 'error' = 'info') {
  const isDev = process.env.NODE_ENV === 'development'

  if (isDev) {
    // 개발 모드에서는 모든 로그 출력
    console.log(`[${level.toUpperCase()}] ${message}`)
  } else {
    // 프로덕션에서는 중요 로그만 출력하거나 외부로 전송
    if (level === 'warn' || level === 'error') {
      console.warn(`[${level.toUpperCase()}] ${message}`)

      // 예: 에러를 Sentry나 Logflare 등에 전송
      // sendToMonitoringService(message, level)
    }
  }
}
