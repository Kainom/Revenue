import { ReactElement } from "react";

type LoadingVariant = "wave" | "fade" | "grow" | "spinner";

export const SmoothLoading = ({
  variant = "wave",
  size = "md",
  color = "red",
}: {
  variant?: LoadingVariant;
  size?: "sm" | "md" | "lg";
  color?: "red" | "blue" | "green" | "purple" | "zinc";
}): ReactElement => {
  const sizeClasses = {
    sm: { container: "h-20", dot: "w-2 h-2", spinner: "w-6 h-6" },
    md: { container: "h-32", dot: "w-3 h-3", spinner: "w-10 h-10" },
    lg: { container: "h-40", dot: "w-4 h-4", spinner: "w-14 h-14" },
  };

  const colorClasses = {
    red: "bg-red-500",
    blue: "bg-blue-500",
    green: "bg-green-500",
    purple: "bg-purple-500",
    zinc: "bg-zinc-400",
  };

  const { container, dot, spinner } = sizeClasses[size];
  const colorClass = colorClasses[color];

  // Wave Animation
  if (variant === "wave") {
    return (
      <div className={`flex justify-center items-center ${container} w-full`}>
        <div className="flex gap-1.5">
          {[0, 1, 2, 3, 4].map((index) => (
            <div
              key={index}
              className={`${dot} ${colorClass} rounded-full animate-[wave_1.2s_ease-in-out_infinite]`}
              style={{ animationDelay: `${index * 0.1}s` }}
            />
          ))}
        </div>
        <style jsx>{`
          @keyframes wave {
            0%, 60%, 100% {
              transform: translateY(0) scale(1);
              opacity: 0.7;
            }
            30% {
              transform: translateY(-12px) scale(1.2);
              opacity: 1;
            }
          }
        `}</style>
      </div>
    );
  }

  // Fade Animation
  if (variant === "fade") {
    return (
      <div className={`flex justify-center items-center ${container} w-full`}>
        <div className="flex gap-2">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className={`${dot} ${colorClass} rounded-full animate-[fade_1.4s_ease-in-out_infinite]`}
              style={{ animationDelay: `${index * 0.2}s` }}
            />
          ))}
        </div>
        <style jsx>{`
          @keyframes fade {
            0%, 100% {
              opacity: 0.2;
              transform: scale(0.8);
            }
            50% {
              opacity: 1;
              transform: scale(1.2);
            }
          }
        `}</style>
      </div>
    );
  }

  // Grow Animation
  if (variant === "grow") {
    return (
      <div className={`flex justify-center items-center ${container} w-full`}>
        <div className="flex gap-1.5">
          {[0, 1, 2, 3].map((index) => (
            <div
              key={index}
              className={`${dot} ${colorClass} rounded-full animate-[grow_1s_ease-in-out_infinite]`}
              style={{ animationDelay: `${index * 0.15}s` }}
            />
          ))}
        </div>
        <style jsx>{`
          @keyframes grow {
            0%, 100% {
              transform: scale(0.5);
              opacity: 0.3;
            }
            50% {
              transform: scale(1.3);
              opacity: 1;
            }
          }
        `}</style>
      </div>
    );
  }

  // Spinner Animation (mais suave)
  if (variant === "spinner") {
    return (
      <div className={`flex justify-center items-center ${container} w-full`}>
        <div className={`${spinner} relative`}>
          <div
            className={`absolute inset-0 rounded-full border-4 border-t-transparent ${
              color === "red" ? "border-red-500/30" : 
              color === "blue" ? "border-blue-500/30" :
              color === "green" ? "border-green-500/30" :
              color === "purple" ? "border-purple-500/30" :
              "border-zinc-400/30"
            } animate-spin`}
            style={{ animationDuration: "1.2s" }}
          />
          <div
            className={`absolute inset-2 rounded-full border-4 border-b-transparent ${
              color === "red" ? "border-red-500/60" : 
              color === "blue" ? "border-blue-500/60" :
              color === "green" ? "border-green-500/60" :
              color === "purple" ? "border-purple-500/60" :
              "border-zinc-400/60"
            } animate-spin`}
            style={{ animationDuration: "0.8s", animationDirection: "reverse" }}
          />
        </div>
      </div>
    );
  }

  return <></>;
};