import PostListTable from "./PostListTable";

export default function MyScrap() {
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

  return <PostListTable title="스크랩 한 모집글" data={mockData} />;
}
