import { toast } from "sonner"

export function useToast() {
  return {
    toast: ({ title, description, variant = "default" }) => {
      toast[variant](description, {
        title,
      })
    },
  }
} 