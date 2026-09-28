import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "secondary" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = {
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  full?: boolean;
  iconOnly?: boolean;
  label?: string;
  leadingIcon?: React.ReactNode;
  loading?: boolean;
  onClick?: () => void;
  size?: ButtonSize;
  trailingIcon?: React.ReactNode;
  type?: "button" | "submit";
  variant?: ButtonVariant;
};

export function Button({
  children,
  className,
  disabled = false,
  full = false,
  iconOnly = false,
  label,
  leadingIcon,
  loading = false,
  onClick,
  size = "md",
  trailingIcon,
  type = "button",
  variant = "primary",
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      aria-label={iconOnly ? label : undefined}
      aria-busy={loading || undefined}
      className={cn(
        "btn",
        variant === "primary" && "primary",
        variant === "ghost" && "ghost",
        size === "sm" && "sm",
        size === "lg" && "lg",
        iconOnly && "icon",
        full && "w-full justify-center",
        "disabled:cursor-not-allowed disabled:opacity-[var(--opacity-disabled)]",
        className,
      )}
    >
      {loading ? (
        <Loader2 className="size-[var(--icon-16)] animate-spin" aria-hidden />
      ) : (
        leadingIcon
      )}
      {!iconOnly && (children ?? label)}
      {!loading && trailingIcon}
    </button>
  );
}
