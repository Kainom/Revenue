import React, { JSX } from "react";

export const Loading = (): JSX.Element => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-br from-zinc-950 to-zinc-900">
      <div className="relative">
        {/* Spinner animado */}
        <div className="w-16 h-16 border-4 border-zinc-700 border-t-red-500 rounded-full animate-spin" />
        
        {/* Segundo spinner contra-rotativo */}
        <div className="absolute inset-2 w-12 h-12 border-4 border-zinc-800 border-b-red-400/60 rounded-full animate-spin" 
             style={{ animationDirection: "reverse", animationDuration: "0.8s" }} 
        />
      </div>
      
      <div className="mt-8 flex items-center gap-2">
        <h1 className="text-2xl font-semibold text-zinc-100">Loading</h1>
        <div className="flex gap-1">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="w-2 h-2 bg-red-500 rounded-full animate-bounce"
              style={{ animationDelay: `${i * 0.15}s` }}
            />
          ))}
        </div>
      </div>
      
      <p className="mt-3 text-sm text-zinc-500 animate-pulse">
        Please wait a moment...
      </p>
    </div>
  );
};

export default Loading;