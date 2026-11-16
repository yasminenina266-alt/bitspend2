import React from 'react';

interface OosabLogoProps {
  surface?: 'auto' | 'light' | 'dark';
  size?: 'sm' | 'md';
  className?: string;
}

export const OosabLogo: React.FC<OosabLogoProps> = ({
  surface = 'auto',
  size = 'md',
  className = '',
}) => {
  const iconSize = size === 'sm' ? 22 : 30;

  const primaryArcClass =
    surface === 'dark'
      ? 'stroke-[#7FE85B]'
      : surface === 'light'
        ? 'stroke-[#0B3B2E]'
        : 'stroke-[#0B3B2E] dark:stroke-[#7FE85B]';

  const coreGemClass =
    surface === 'dark'
      ? 'fill-[#E5EFEA]'
      : surface === 'light'
        ? 'fill-[#1F6F54]'
        : 'fill-[#1F6F54] dark:fill-[#E5EFEA]';

  const textClass =
    surface === 'dark'
      ? 'text-[#F1F5F4]'
      : surface === 'light'
        ? 'text-[#0E1715]'
        : 'text-[#0E1715] dark:text-[#F1F5F4]';

  const textSizeClass =
    size === 'sm' ? 'text-base sm:text-[17px]' : 'text-lg sm:text-[21px]';

  return (
    <span className={`inline-flex items-center gap-2 shrink-0 ${className}`}>
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <path
          d="M 6.33 20.10 A 10.5 10.5 0 0 1 20.10 6.33"
          className={primaryArcClass}
          strokeWidth="4.4"
          strokeLinecap="round"
        />
        <path
          d="M 25.67 11.90 A 10.5 10.5 0 0 1 11.90 25.67"
          stroke="#5EE048"
          strokeWidth="4.4"
          strokeLinecap="round"
        />
        <rect
          x="16"
          y="11.6"
          width="6.2"
          height="6.2"
          rx="1.5"
          transform="rotate(45 16 11.6)"
          className={coreGemClass}
        />
      </svg>
      <span
        className={`font-display font-bold tracking-[0.12em] ${textSizeClass} ${textClass}`}
      >
        OOSAB
      </span>
    </span>
  );
};
