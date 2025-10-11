"use client";

import { useState } from "react";
import Pagination from "@/components/ui/pagination";

type PostItem = {
  id: string;
  team: string;
  date: string;
  title: string;
  status: string;
  statusColor: string;
  author: string;
  regDate: string;
};

type Props = {
  title: string;
  data: PostItem[];
};

export default function PostListTable({ title, data }: Props) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const handleClickPage = (page: number) => {
    setCurrentPage(page);
  };
  const handleClickRow = (id: string) => {
    console.log(`${id} 에 해당하는 열 클릭`);
  };

  return (
    <div className="bg-gray-50 min-h-screen w-full flex flex-col items-center px-40 pt-15 pb-20">
      <h1 className="text-t01 font-bold w-full pb-15">{title}</h1>
      <table className="bg-white rounded-lg overflow-hidden w-full">
        <thead>
          <tr className="bg-gray-100 border-b border-gray-100">
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
          {data.map((row, index) => (
            <tr
              key={index}
              className={
                "border-b h-[88px] border-gray-100  py-[22px] px-[40px] gap-2.5 hover:bg-gray-50 transition-colors bg-white cursor-pointer"
              }
              onClick={() => handleClickRow(row.id)}
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
      <Pagination currentPage={currentPage} totalPages={5} onPageChange={handleClickPage} />
    </div>
  );
}
