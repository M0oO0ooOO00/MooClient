"use client";

import { useState } from "react";
import Image from "next/image";

export default function Joined() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const handleClickPage = (page: number) => {
    setCurrentPage(page);
  };
  const mockData = [
    {
      id: "01",
      team: "한화 vs 두산",
      date: "2025/3/4",
      title: "한화 두산 보러 갈 사람~~",
      status: "모집 중",
      statusColor: "bg-green-100 text-green-700",
      author: "윤창현",
      regDate: "2025/3/4",
    },
    {
      id: "02",
      team: "한화 vs 두산",
      date: "2025/3/4",
      title: "한화 두산 보러 갈 사람~~",
      status: "모집 완료",
      statusColor: "bg-blue-100 text-blue-700",
      author: "윤창현",
      regDate: "2025/3/4",
    },
    {
      id: "03",
      team: "한화 vs 두산",
      date: "2025/3/4",
      title: "한화 두산 보러 갈 사람~~",
      status: "모집 중",
      statusColor: "bg-green-100 text-green-700",
      author: "윤창현",
      regDate: "2025/3/4",
    },
    {
      id: "04",
      team: "한화 vs 두산",
      date: "2025/3/4",
      title: "한화 두산 보러 갈 사람~~",
      status: "모집 완료",
      statusColor: "bg-blue-100 text-blue-700",
      author: "윤창현",
      regDate: "2025/3/4",
    },
    {
      id: "05",
      team: "한화 vs 두산",
      date: "2025/3/4",
      title: "한화 두산 보러 갈 사람~~",
      status: "모집 완료",
      statusColor: "bg-blue-100 text-blue-700",
      author: "윤창현",
      regDate: "2025/3/4",
    },
    {
      id: "06",
      team: "한화 vs 두산",
      date: "2025/3/4",
      title: "한화 두산 보러 갈 사람~~",
      status: "모집 완료",
      statusColor: "bg-blue-100 text-blue-700",
      author: "윤창현",
      regDate: "2025/3/4",
    },
  ];
  return (
    <div className="bg-gray-50 min-h-screen w-full flex flex-col items-center px-40 pt-15 pb-20">
      <h1 className="text-t01 font-bold w-full pb-15">내가 참여한 모집 글</h1>
      <div className="bg-white rounded-lg shadow overflow-hidden w-full">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-100 border-b border-gray-200">
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">번호</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">경기 팀</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">경기일자</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">제목</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">모집 상태</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">작성자</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">게시일자</th>
            </tr>
          </thead>
          <tbody>
            {mockData.map((row, index) => (
              <tr
                key={index}
                className={
                  "border-b h-[88px] border-gray-100  py-[22px] px-[40px] gap-2.5 hover:bg-gray-50 transition-colors bg-white"
                }
              >
                <td className="px-6 py-5 text-b01 leading-150 font-weight-r text-gray-900">
                  {row.id}
                </td>
                <td className="px-6 py-5 text-b01 leading-150 font-weight-r text-gray-900">
                  {row.team}
                </td>
                <td className="px-6 py-5 text-b01 leading-150 font-weight-r text-gray-600">
                  {row.date}
                </td>
                <td className="px-6 py-5 text-b01 leading-150 font-weight-r text-gray-900">
                  {row.title}
                </td>
                <td className="px-6 py-5">
                  <span
                    className={`inline-block px-4 py-1 rounded-md text-sm font-medium ${row.statusColor}`}
                  >
                    {row.status}
                  </span>
                </td>
                <td className="px-6 py-5 text-sm text-gray-600">{row.author}</td>
                <td className="px-6 py-5 text-sm text-gray-600">{row.regDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        {/* 페이지네이션 */}
        <div className="flex justify-center mt-6 space-x-2">
          <Image
            src="/icons/arrow-left.svg"
            alt="이전"
            width={24}
            height={24}
            className="cursor-pointer"
          />
          {[1, 2, 3, 4, 5].map((page) => (
            <button
              key={page}
              onClick={() => handleClickPage(page)}
              className={`px-[18px] py-2.5 rounded-md text-sm font-medium text-gray-950 hover:bg-gray-200 hover:cursor-pointer ${
                page === currentPage ? "bg-gray-200" : ""
              }`}
            >
              {page}
            </button>
          ))}
          <Image
            src="/icons/arrow-right.svg"
            alt="이후"
            width={24}
            height={24}
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
