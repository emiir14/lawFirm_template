import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function fadeInAnimation(delay: number = 0) {
  return {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay: delay }
  }
}

export function slideInAnimation(direction: 'left' | 'right' | 'up' | 'down' = 'up', delay: number = 0) {
  const x = direction === 'left' ? -50 : direction === 'right' ? 50 : 0
  const y = direction === 'up' ? -50 : direction === 'down' ? 50 : 0
  
  return {
    initial: { opacity: 0, x, y },
    animate: { opacity: 1, x: 0, y: 0 },
    transition: { duration: 0.7, delay }
  }
}