import { type AnalyticsEvent } from '@/types/analytics';

// Initialize Google Analytics
export function initGA() {
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: any[]) {
    window.dataLayer.push(args);
  }
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX', {
    page_path: window.location.pathname,
  });
}

// Track page views
export function trackPageView(url: string) {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('config', 'G-XXXXXXXXXX', {
      page_path: url,
    });
  }
}

// Track events
export function trackEvent({ action, category, label, value }: AnalyticsEvent) {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
}

// Track search events
export function trackSearch(searchTerm: string, resultsCount: number) {
  trackEvent({
    action: 'search',
    category: 'Destination Search',
    label: searchTerm,
    value: resultsCount,
  });
}

// Track destination views
export function trackDestinationView(destination: string) {
  trackEvent({
    action: 'view',
    category: 'Destination',
    label: destination,
  });
}

// Track form submissions
export function trackFormSubmission(formName: string, success: boolean) {
  trackEvent({
    action: 'submit',
    category: 'Form',
    label: `${formName} - ${success ? 'Success' : 'Failed'}`,
  });
}