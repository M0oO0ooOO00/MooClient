import { cn } from "@/lib/utils";

interface InfoTextProps {
  label: string;
  value: string;
  className?: string;
}

const InfoText = ({ label, value, className }: InfoTextProps) => {
  return (
    <div className="flex flex-col gap-2.5 my-2.5">
      <span className="text-b01 font-r leading-140 text-gray-600">{label}</span>
      <span className={cn("text-[22px] font-sb leading-140 text-black", className)}>{value}</span>
    </div>
  );
};
export default InfoText;
