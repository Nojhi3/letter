'use client';

import { animate } from 'animejs';
import { useEffect } from 'react';

export default function Test4() {
  useEffect(() => {
    animate({
      targets: 'span',
      translateY: [
        { value: '-2.75rem', easing: 'easeOutExpo', duration: 600 },
        { value: 0, easing: 'easeOutBounce', duration: 800, delay: 100 }
      ],
      rotate: {
        value: '-1turn',
        delay: 0
      },
      delay: (_, i) => i * 50,
      easing: 'easeInOutCirc',
      loop: true,
      loopDelay: 1000
    });
  }, []);

  return (
    <div>
      <span>Hello</span>
      <span>World</span>
    </div>
  );
}
