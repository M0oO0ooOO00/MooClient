import WarnTable from "@/features/admin/components/WarnTable";
import type { WarnBoxProps } from "@/features/admin/types/warning";

const WarnBox = ({ title, data }: WarnBoxProps) => {
  return (
    <div className="w-[1200px]">
      <div className="flex gap-[25px] mb-6">
        <span className="text-t04 font-sb leading-140 text-gray-900">{title}</span>
        <span className="text-t04 font-sb leading-140 text-green-main">
          {data.length < 10 ? `0${data.length}` : `${data.length}`}회
        </span>
      </div>
      <WarnTable data={data} />
    </div>
  );
};
export default WarnBox;
