import { getAnalytics, logEvent } from 'firebase/analytics';
import { app } from './firebase';

export const initErrorTracking = () => {
  if (typeof window === 'undefined') return;

  const analytics = getAnalytics(app);

  // Global error handler
  window.addEventListener('error', (event) => {
    logEvent(analytics, 'js_error', {
      message: event.message,
      filename: event.filename,
      lineno: event.lineno,
      colno: event.colno,
      error_stack: event.error?.stack,
    });
  });

  // Unhandled promise rejections
  window.addEventListener('unhandledrejection', (event) => {
    logEvent(analytics, 'unhandled_promise_rejection', {
      reason: event.reason?.toString?.() || String(event.reason),
    });
  });
};