"use client";

import Pagination from "@/components/ui/pagination";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Members() {
  const data = [
    {
      id: "01",
      nickname: "용달프",
      warningCount: "03",
      reportCount: "03",
      reportedCount: "03",
      joinDate: "2025/3/4",
      status: "무사활동",
      statusColor: "text-green-main",
    },
    {
      id: "02",
      nickname: "용달프",
      warningCount: "03",
      reportCount: "03",
      reportedCount: "03",
      joinDate: "2025/3/4",
      status: "무사활동",
      statusColor: "text-green-main",
    },
    {
      id: "03",
      nickname: "용달프",
      warningCount: "03",
      reportCount: "03",
      reportedCount: "03",
      joinDate: "2025/3/4",
      status: "무사활동",
      statusColor: "text-green-main",
    },
    {
      id: "04",
      nickname: "용달프",
      warningCount: "03",
      reportCount: "03",
      reportedCount: "03",
      joinDate: "2025/3/4",
      status: "무사활동",
      statusColor: "text-green-main",
    },
    {
      id: "05",
      nickname: "용달프",
      warningCount: "03",
      reportCount: "03",
      reportedCount: "03",
      joinDate: "2025/3/4",
      status: "무사활동",
      statusColor: "text-green-main",
    },
    {
      id: "06",
      nickname: "용달프",
      warningCount: "03",
      reportCount: "03",
      reportedCount: "03",
      joinDate: "2025/3/4",
      status: "무사활동",
      statusColor: "text-green-main",
    },
  ];
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const handleClickPage = (page: number) => {
    setCurrentPage(page);
  };
  const handleClickRow = (id: number) => {
    router.push(`/admin/members/${id}`);
  };

  return (
    <>
      <div className="bg-gray-400 w-full h-[210px] relative">
        <h1 className="text-t01 font-bold w-[1200px] h-[36px] absolute top-[70px] left-[120px]">
          직관 메이트 구하기
        </h1>
      </div>
      <div className="bg-gray-100 min-h-screen w-full flex flex-col items-center px-[107.5px] pt-[131px] pb-20">
        <table className="bg-white rounded-lg overflow-hidden w-full mb-10">
          <thead>
            <tr className="bg-gray-100 border-b border-gray-200">
              <th className="px-6 py-4 text-center text-sm font-medium text-gray-700">번호</th>
              <th className="px-6 py-4 text-center text-sm font-medium text-gray-700">닉네임</th>
              <th className="px-6 py-4 text-center text-sm font-medium text-gray-700">
                누적 경고 횟수
              </th>
              <th className="px-6 py-4 text-center text-sm font-medium text-gray-700">신고횟수</th>
              <th className="px-6 py-4 text-center text-sm font-medium text-gray-700">
                피신고횟수
              </th>
              <th className="px-6 py-4 text-center text-sm font-medium text-gray-700 pl-60">
                가입일자
              </th>
              <th className="px-6 py-4 text-center text-sm font-medium text-gray-700">활동상태</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr
                key={index}
                className={
                  "border-b h-[88px] border-gray-100 py-[22px] px-[40px] gap-2.5 hover:bg-gray-50 transition-colors bg-white cursor-pointer"
                }
                onClick={() => handleClickRow(Number(row.id))}
              >
                <td className="px-6 py-5 text-b01 leading-150 font-r text-gray-600 text-center">
                  {row.id}
                </td>
                <td className="px-6 py-5 text-b01 leading-150 font-r text-gray-900 text-center">
                  {row.nickname}
                </td>
                <td className="px-6 py-5 text-b01 leading-150 font-r text-gray-600 text-center">
                  {row.warningCount}
                </td>
                <td className="px-6 py-5 text-b01 leading-150 font-r text-gray-900 text-center">
                  {row.reportCount}
                </td>
                <td className="px-6 py-5 text-b01 leading-150 font-r text-gray-900 text-center">
                  {row.reportedCount}
                </td>
                <td className="px-6 py-5 text-sm text-gray-600 text-center pl-60">
                  {row.joinDate}
                </td>
                <td className="px-6 py-5 text-center">
                  <span
                    className={`inline-block px-4 py-1 rounded-md text-sm font-m ${row.statusColor}`}
                  >
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination currentPage={currentPage} totalPages={5} onPageChange={handleClickPage} />
      </div>
    </>
  );
}
