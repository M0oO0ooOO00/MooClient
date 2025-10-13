import type { WarnTableProps } from "@/features/admin/types/warning";
import Link from "next/link";

const WarnTable = ({ data }: WarnTableProps) => {
  return (
    <table className="rounded-[18px] overflow-hidden w-full mb-10">
      <thead>
        <tr className="bg-gray-50 border-b border-gray-50 py-[22px] px-[40px] h-[75px]">
          <th className="px-6 py-4 text-start text-b01 font-r text-gray-700">경고사유</th>
          <th className="px-6 py-4 text-start text-b01 font-r text-gray-700">경고글 유형</th>
          <th className="px-6 py-4 text-end text-b01 font-r text-gray-700 pl-60">
            경고 글 링크 or 사진
          </th>
          <th className="px-6 py-4 text-end text-b01 font-r text-gray-700">경고 당한 날짜</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr
            key={index}
            className={
              "border-b h-[71px] border-gray-100 py-[22px] px-[40px] hover:bg-gray-50 transition-colors bg-white"
            }
          >
            <td className="px-6 py-5 text-b01 leading-150 font-weight-r text-red-main">
              {row.reason}
            </td>
            <td className="px-6 py-5 text-b01 leading-150 font-r text-gray-900 ">{row.type}</td>
            <td className="px-6 py-5 text-b01 leading-150 font-r text-gray-600 text-end pl-60">
              <Link
                href={row.linkOrPhoto}
                className="text-blue-main underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {row.linkOrPhoto}
              </Link>
            </td>
            <td className="px-6 py-5 text-b01 leading-150 font-r text-gray-600 text-end">
              {row.date}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default WarnTable;
