import { ReactNode } from "react";

interface FormLabelProps {
  children: ReactNode;
}

export function FormLabel({ children }: FormLabelProps) {
  return <p className="justify-start text-gray-600 b02-m">{children}</p>;
}
