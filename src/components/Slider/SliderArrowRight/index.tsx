import { SVGProps } from 'react';

const SliderArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg width="45" height="65" viewBox="0 0 45 65" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <line x1="34.2083" y1="33.3739" x2="1.07504" y2="64.3652" stroke="black" />
    <line x1="3.20329" y1="0.658447" x2="34.1946" y2="33.7917" stroke="black" />
    <line x1="44.2083" y1="33.3739" x2="11.075" y2="64.3652" stroke="black" />
    <line x1="13.2033" y1="0.658447" x2="44.1946" y2="33.7917" stroke="black" />
  </svg>
);
export default SliderArrowRight;
