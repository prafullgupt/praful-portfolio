'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { getAnalytics, isSupported } from 'firebase/analytics';
import { app } from '@/lib/firebase';
import { useAnalytics } from '../hooks/useAnalytics';

export default function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  const { logPageView } = useAnalytics();
  const pathname = usePathname();
  const [ready, setReady] = useState(false);

  // 👇 Analytics initialization check
  useEffect(() => {
    const init = async () => {
      try {
        const supported = await isSupported();
        if (!supported) {
          console.warn('❌ Firebase Analytics not supported');
          return;
        }

        // Initialize analytics
        getAnalytics(app);
        
        // 👇 Enable debug mode from localStorage
        const isDebug = localStorage.getItem('firebase:analytics:debug_mode') === 'true';
        if (isDebug) {
          console.log('🔥 DebugView: Waiting for device...');
          console.log('📱 Open Firebase Console → Analytics → DebugView');
        }

        setReady(true);
      } catch (error) {
        console.error('❌ Analytics init failed:', error);
      }
    };

    init();
  }, []);

  // Log page views
  useEffect(() => {
    if (ready && pathname) {
      logPageView(document.title, window.location.href);
    }
  }, [pathname, ready, logPageView]);

  return <>{children}</>;
}