import { ReactElement } from "react";

type LoadingVariant = "ping" | "bounce" | "pulse" | "dots";

export const BallLoading = ({
  bg = "none",
  size = "size-4",
  fatherClass = "",
  bgFirstSpan = "bg-sky-400",
  bgSecondSpan = "bg-sky-500",
  variant = "ping",
  count = 3,
}: {
  bg?: string;
  size?: string;
  fatherClass?: string;
  bgFirstSpan?: string;
  bgSecondSpan?: string;
  variant?: LoadingVariant;
  count?: number;
}): ReactElement => {
  const baseClass = `${bg} ${fatherClass} flex justify-center items-center w-full rounded-sm py-1.5 gap-2`;

  const renderPingDot = (index: number) => (
    <span key={index} className={`relative flex ${size}`}>
      <span
        className={`absolute inline-flex h-full w-full animate-ping rounded-full ${bgFirstSpan} opacity-75`}
        style={{ animationDelay: `${index * 150}ms` }}
      />
      <span className={`relative inline-flex ${size} rounded-full ${bgSecondSpan}`} />
    </span>
  );

  const renderBounceDot = (index: number) => (
    <span
      key={index}
      className={`${size} rounded-full ${bgSecondSpan} animate-bounce`}
      style={{ animationDelay: `${index * 150}ms` }}
    />
  );

  const renderPulseDot = (index: number) => (
    <span
      key={index}
      className={`${size} rounded-full ${bgSecondSpan} animate-pulse`}
      style={{ animationDelay: `${index * 200}ms` }}
    />
  );

  const renderDotsDot = (index: number) => (
    <span
      key={index}
      className={`${size} rounded-full ${bgSecondSpan} animate-[scale_1s_ease-in-out_infinite]`}
      style={{ 
        animationDelay: `${index * 200}ms`,
        animation: `scale 1s ease-in-out ${index * 0.2}s infinite`,
      }}
    />
  );

  const renderDots = () => {
    const dots = [];
    const renderFunction = {
      ping: renderPingDot,
      bounce: renderBounceDot,
      pulse: renderPulseDot,
      dots: renderDotsDot,
    }[variant];

    for (let i = 0; i < count; i++) {
      dots.push(renderFunction(i));
    }
    return dots;
  };

  return (
    <div className={baseClass}>
      {renderDots()}
      <style jsx>{`
        @keyframes scale {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(0.5);
            opacity: 0.5;
          }
        }
      `}</style>
    </div>
  );
};