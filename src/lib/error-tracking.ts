import * as Sentry from '@sentry/react';

export function initErrorTracking() {
  if (process.env.NODE_ENV === 'production') {
    Sentry.init({
      dsn: process.env.VITE_SENTRY_DSN,
      integrations: [
        new Sentry.BrowserTracing({
          tracePropagationTargets: ['localhost', 'destinationwed.com'],
        }),
        new Sentry.Replay(),
      ],
      tracesSampleRate: 1.0,
      replaysSessionSampleRate: 0.1,
      replaysOnErrorSampleRate: 1.0,
    });
  }
}

export function captureError(error: Error, context?: Record<string, any>) {
  if (process.env.NODE_ENV === 'production') {
    Sentry.captureException(error, {
      extra: context,
    });
  } else {
    console.error('Error:', error, 'Context:', context);
  }
}

export function setUserContext(userId: string, userData: Record<string, any>) {
  Sentry.setUser({
    id: userId,
    ...userData,
  });
}

export function clearUserContext() {
  Sentry.setUser(null);
}