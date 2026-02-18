"use client";

import React, { useState, useRef } from "react";
import { Upload, Loader2, CheckCircle2, XCircle } from "lucide-react";
import { useRouter } from "next/navigation";

export const ImportExpenseButton = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsLoading(true);
    setStatus("idle");

    try {
      const formData = new FormData();
      formData.append("file", file);

      // Substitua pela sua rota de API
      const response = await fetch("/api/expenses/import", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Import failed");
      }

      setStatus("success");
      
      // Força o recarregamento da página após 1 segundo
      setTimeout(() => {
        router.refresh();
        // Força hard reload se necessário
        window.location.reload();
      }, 1000);

    } catch (error) {
      console.error("Error importing file:", error);
      setStatus("error");
      
      // Reseta o status após 3 segundos
      setTimeout(() => {
        setStatus("idle");
      }, 3000);
    } finally {
      setIsLoading(false);
      // Limpa o input para permitir reimportação do mesmo arquivo
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <>
      <input
        ref={fileInputRef}
        type="file"
        accept=".csv,.xlsx,.xls"
        onChange={handleFileChange}
        className="hidden"
        disabled={isLoading}
      />

      <button
        onClick={handleClick}
        disabled={isLoading}
        className={`
          group
          relative
          flex items-center justify-center gap-2
          ${
            status === "success"
              ? "bg-gradient-to-r from-emerald-500 to-emerald-600"
              : status === "error"
              ? "bg-gradient-to-r from-rose-500 to-rose-600"
              : "bg-gradient-to-r from-zinc-700 to-zinc-800 hover:from-zinc-600 hover:to-zinc-700"
          }
          text-white
          font-semibold
          px-5 py-2.5
          text-sm
          rounded-md
          border-sm
          ${
            status === "success"
              ? "border-emerald-400/20"
              : status === "error"
              ? "border-rose-400/20"
              : "border-zinc-600/20"
          }
          shadow-lg
          ${
            status === "success"
              ? "shadow-emerald-500/25"
              : status === "error"
              ? "shadow-rose-500/25"
              : "shadow-zinc-700/25"
          }
          hover:shadow-xl
          ${
            status === "success"
              ? "hover:shadow-emerald-500/40"
              : status === "error"
              ? "hover:shadow-rose-500/40"
              : "hover:shadow-zinc-700/40"
          }
          transition-all
          duration-300
          ${!isLoading && status === "idle" && "hover:-translate-y-0.5"}
          active:scale-95
          flex-shrink-0
          overflow-hidden
          disabled:opacity-50
          disabled:cursor-not-allowed
          min-w-[140px]
        `}
      >
        {/* Shine effect */}
        {!isLoading && status === "idle" && (
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
        )}

        <div className="relative flex items-center gap-2">
          <div
            className={`
              w-5 h-5 rounded-full 
              ${
                status === "success"
                  ? "bg-white/30"
                  : status === "error"
                  ? "bg-white/30"
                  : "bg-white/20"
              }
              flex items-center justify-center
              ${!isLoading && status === "idle" && "transition-transform group-hover:rotate-12 duration-300"}
            `}
          >
            {isLoading ? (
              <Loader2 className="w-3.5 h-3.5 animate-spin" strokeWidth={2.5} />
            ) : status === "success" ? (
              <CheckCircle2 className="w-3.5 h-3.5" strokeWidth={2.5} />
            ) : status === "error" ? (
              <XCircle className="w-3.5 h-3.5" strokeWidth={2.5} />
            ) : (
              <Upload className="w-3.5 h-3.5" strokeWidth={2.5} />
            )}
          </div>
          <span>
            {isLoading
              ? "Importing..."
              : status === "success"
              ? "Imported!"
              : status === "error"
              ? "Error!"
              : "Import File"}
          </span>
        </div>
      </button>
    </>
  );
};