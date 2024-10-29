export function trackCoreWebVitals() {
  if (typeof window !== 'undefined' && 'performance' in window) {
    // Track Largest Contentful Paint (LCP)
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lastEntry = entries[entries.length - 1];
      const lcp = lastEntry.startTime;
      window.gtag('event', 'core_web_vitals', {
        event_category: 'Web Vitals',
        event_label: 'LCP',
        value: Math.round(lcp),
        non_interaction: true,
      });
    }).observe({ entryTypes: ['largest-contentful-paint'] });

    // Track First Input Delay (FID)
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      entries.forEach((entry) => {
        const fid = entry.processingStart - entry.startTime;
        window.gtag('event', 'core_web_vitals', {
          event_category: 'Web Vitals',
          event_label: 'FID',
          value: Math.round(fid),
          non_interaction: true,
        });
      });
    }).observe({ entryTypes: ['first-input'] });

    // Track Cumulative Layout Shift (CLS)
    let clsValue = 0;
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      entries.forEach((entry) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      });
      window.gtag('event', 'core_web_vitals', {
        event_category: 'Web Vitals',
        event_label: 'CLS',
        value: Math.round(clsValue * 1000),
        non_interaction: true,
      });
    }).observe({ entryTypes: ['layout-shift'] });
  }
}