'use client';

import { useCallback } from 'react';
import { logEvent, getAnalytics, setAnalyticsCollectionEnabled } from 'firebase/analytics';
import { app } from '../../lib/firebase';

// 👇 Debug mode  
let debugModeSet = false;

const enableDebugMode = () => {
  if (typeof window === 'undefined' || debugModeSet) return;
  
  // LocalStorage se check kro
  const isDebug = localStorage.getItem('firebase:analytics:debug_mode') === 'true';
  
  if (isDebug && !debugModeSet) {
    const analytics = getAnalytics(app);
    setAnalyticsCollectionEnabled(analytics, true);
    debugModeSet = true;
    //console.log('🔥 Firebase Analytics Debug Mode: ENABLED');
  }
};

export const useAnalytics = () => {
  // 👇 Debug mode initialization
  enableDebugMode();

  const logPageView = useCallback((pageTitle, pageLocation) => {
    if (typeof window === 'undefined') return;

    try {
      const analytics = getAnalytics(app);
      
      const params = {
        page_title: pageTitle,
        page_location: pageLocation,
        page_path: window.location.pathname,
      };

     // console.log('📊 Event: page_view', params); // Debug log
      logEvent(analytics, 'page_view', params);
    } catch (error) {
     // console.error('❌ Analytics page_view error:', error);
    }
  }, []);

  const logCustomEvent = useCallback((eventName, params = {}) => {
    if (typeof window === 'undefined') return;

    try {
      const analytics = getAnalytics(app);
     // console.log(`📊 Event: ${eventName}`, params); // Debug log
      logEvent(analytics, eventName, params);
    } catch (error) {
     // console.error('❌ Analytics custom event error:', error);
    }
  }, []);

  const logError = useCallback((error, context = {}) => {
    if (typeof window === 'undefined') return;

    try {
      const analytics = getAnalytics(app);
      const params = {
        error_message: error.message,
        error_stack: error.stack,
        ...context,
      };
      
      //console.log('📊 Event: app_error', params); // Debug log
      logEvent(analytics, 'app_error', params);
    } catch (err) {
      //console.error('❌ Analytics error logging failed:', err);
    }
  }, []);

  return { logPageView, logCustomEvent, logError };
};