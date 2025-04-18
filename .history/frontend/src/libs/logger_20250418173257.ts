export function log(message: string, level: 'debug' | 'info' | 'warn' | 'error' = 'info') {
  const isDev = process.env.NODE_ENV === 'development'

  if (isDev) {    
    console.log(`[${level.toUpperCase()}] ${message}`)
  } else {    
    if (level === 'warn' || level === 'error') {
      console.warn(`[${level.toUpperCase()}] ${message}`)
    }
  }
}
