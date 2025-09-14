import { ReactNode } from "react";

interface FormLabelProps {
  children: ReactNode;
}

export function FormLabel({ children }: FormLabelProps) {
  return (
    <p className="self-stretch justify-start text-zinc-500 font-medium font-['Pretendard']">
      {children}
    </p>
  );
}
