import { SVGProps } from 'react';

const SliderArrowLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg width="45" height="65" viewBox="0 0 45 65" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <line
      y1="-0.5"
      x2="45.3672"
      y2="-0.5"
      transform="matrix(0.730319 0.683107 0.683107 -0.730319 10.9998 33.0098)"
      stroke="black"
    />
    <line
      y1="-0.5"
      x2="45.3672"
      y2="-0.5"
      transform="matrix(-0.683107 0.730319 0.730319 0.683107 42.0278 1)"
      stroke="black"
    />
    <line
      y1="-0.5"
      x2="45.3672"
      y2="-0.5"
      transform="matrix(0.730319 0.683107 0.683107 -0.730319 1 33.0098)"
      stroke="black"
    />
    <line
      y1="-0.5"
      x2="45.3672"
      y2="-0.5"
      transform="matrix(-0.683107 0.730319 0.730319 0.683107 32.0278 1)"
      stroke="black"
    />
  </svg>
);
export default SliderArrowLeft;
