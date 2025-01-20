"use client";
import { useRouter } from "next/navigation";
import React, { ReactElement } from "react";


export default function Description(): ReactElement {
  const route = useRouter();
  return (
    <React.Fragment>
        <div onClick={route.back}>
          {/* Semi-transparent Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300"
          />

          {/* Overlay Content */}
          <div className="fixed inset-4 md:inset-10 z-50">
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-xl h-full animate-in fade-in slide-in-from-bottom-4 duration-300">
              {/* Close Button */}
              <button
                className="absolute right-4 top-4 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
              >
              </button>

              {/* Overlay Content */}
              <div className="p-6 overflow-y-auto max-h-full">
                <h2 className="text-2xl font-bold mb-4">Título do Overlay</h2>
                <p className="text-gray-600 dark:text-gray-300">Seu conteúdo aqui...</p>
              </div>
            </div>
          </div>
        </div>
    </React.Fragment>
  );
}
