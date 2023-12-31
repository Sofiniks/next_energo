'use client';
import React, { useEffect } from 'react';
import { fbEvent } from '@rivercode/facebook-conversion-api-nextjs';
import { usePathname, useSearchParams } from 'next/navigation';

export const FacebookPixelEvents: React.FC = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    import('react-facebook-pixel')
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init('1339138203374622');
        ReactPixel.pageView();
      });
  }, [pathname, searchParams]);

  useEffect(() => {
    fbEvent({
      eventName: 'PageView',
    });
    console.log(process.env.NEXT_PUBLIC_FB_PIXEL_ID);
  }, []);

  return null;
};
