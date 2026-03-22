import React from "react";
import * as Select from "@radix-ui/react-select";
import { ChevronDown, Check } from "lucide-react";
import { cn } from "@/lib/utils";

/** Wraps a label + input pair in a vertical flex column. */
export const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={cn("flex flex-col space-y-1.5 w-full", className)}>
    {children}
  </div>
);

const inputBase =
  "w-full rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 " +
  "transition-all duration-200 outline-none " +
  "hover:border-indigo-400 hover:shadow-[0_0_0_2px_rgba(99,102,241,0.12),0_0_8px_rgba(99,102,241,0.15)] " +
  "focus:border-indigo-400 focus:shadow-[0_0_0_2px_rgba(99,102,241,0.15),0_0_10px_rgba(99,102,241,0.2)]";

/** Neon-hover text input. */
export const FormInput = ({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) => (
  <input className={cn("h-10", inputBase, className)} {...props} />
);

/** Neon-hover textarea. */
export const FormTextarea = ({
  className,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => (
  <textarea className={cn("resize-none py-2.5", inputBase, className)} {...props} />
);

/** Neon-hover custom select (Radix UI). Pass options as string[]. */
export function FormSelect({
  id,
  options = [],
  value,
  onValueChange,
  placeholder = "Select…",
  className,
}: {
  id?: string;
  options?: string[];
  value?: string;
  onValueChange?: (v: string) => void;
  placeholder?: string;
  className?: string;
}) {
  return (
    <Select.Root value={value} onValueChange={onValueChange}>
      <Select.Trigger
        id={id}
        className={cn(
          "h-10 flex items-center justify-between gap-2",
          inputBase,
          "data-[placeholder]:text-gray-400",
          className,
        )}
      >
        <Select.Value placeholder={placeholder} />
        <Select.Icon asChild>
          <ChevronDown className="h-4 w-4 text-gray-400 shrink-0" />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content
          position="popper"
          sideOffset={4}
          className="z-50 w-[--radix-select-trigger-width] overflow-hidden rounded-md border border-gray-200 bg-white shadow-lg"
        >
          <Select.Viewport className="p-1">
            {options.map((opt) => (
              <Select.Item
                key={opt}
                value={opt}
                className="relative flex cursor-pointer select-none items-center gap-2 rounded px-3 py-2 text-sm text-gray-800 outline-none hover:bg-indigo-50 hover:text-indigo-700 data-[highlighted]:bg-indigo-50 data-[highlighted]:text-indigo-700 data-[state=checked]:font-semibold"
              >
                <Select.ItemText>{opt}</Select.ItemText>
                <Select.ItemIndicator className="ml-auto">
                  <Check className="h-3.5 w-3.5 text-indigo-500" />
                </Select.ItemIndicator>
              </Select.Item>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}