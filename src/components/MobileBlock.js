'use client';
import { useEffect, useState } from 'react';

export default function MobileBlockerWrapper({ children }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = typeof window.navigator === "undefined" ? "" : navigator.userAgent;
    const isMobileDevice = /Mobi|Android|iPhone|iPad|iPod/i.test(userAgent);

    if (isMobileDevice || window.innerWidth < 768) {
      setIsMobile(true);
    }
  }, []);

  if (isMobile) {
    return (
      <div className="h-screen w-full flex flex-col items-center justify-center bg-pink-100 text-center px-4">
        <h1 className="text-3xl font-bold text-pink-700">Mobile Not Supported</h1>
        <p className="mt-4 text-lg text-pink-600 max-w-md">
          Sorry! This experience is only available on desktop. Please open it on a larger screen.
        </p>
      </div>
    );
  }

  return <>{children}</>;
}
