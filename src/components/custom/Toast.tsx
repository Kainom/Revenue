import toast from "react-hot-toast";


export const sucessToast = (message: string) => { 
    toast.success(message, {
      duration: 1000,
      position: "top-right", // Posição do toast
      style: {
        background: "#4CAF50", // Cor de fundo personalizada
        color: "white", // Cor do texto
        borderRadius: "8px", // Borda arredondada
        padding: "16px", // Padding interno
        fontSize: "16px", // Tamanho da fonte
      },
      icon: "✅", // Ícone personalizado
    });
}

export const errorToast = (message: string) => {
  toast.error(message, {
    duration: 1000,
    position: "top-right",
    style: {
      background: "#1F1F23",
      color: "white",
      borderRadius: "8px",
      padding: "16px",
      fontSize: "16px",
    },
    icon: "❌",
  });
};