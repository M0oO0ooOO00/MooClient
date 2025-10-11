import WarnBox from "@/features/admin/components/WarnBox";
import Profile from "@/features/admin/components/Profile";
import InfoText from "@/features/admin/components/InfoText";
import InfoBox from "@/features/admin/components/InfoBox";

interface Props {
  id: number | string;
}

export default function Detail({ id }: Props) {
  const totalWarnings = [
    { reason: "스팸", type: "댓글", linkOrPhoto: "http://example.com/spam", date: "2024-01-01" },
    { reason: "욕설", type: "게시글", linkOrPhoto: "http://example.com/abuse", date: "2024-02-15" },
    {
      reason: "부적절한 사진",
      type: "사진",
      linkOrPhoto: "http://example.com/inappropriate",
      date: "2024-03-10",
    },
  ];

  const totalReports = [
    { reason: "스팸", type: "댓글", linkOrPhoto: "http://example.com/spam", date: "2024-01-05" },
    { reason: "욕설", type: "게시글", linkOrPhoto: "http://example.com/abuse", date: "2024-02-20" },
  ];

  const totalReported = [
    {
      reason: "오해",
      type: "댓글",
      linkOrPhoto: "http://example.com/misunderstand",
      date: "2024-01-10",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen w-full flex flex-col items-center">
      <Profile nickname={`윤창현 ${id}`} />
      <div className="flex gap-[30px] max-w-[1200px] w-full mb-10">
        <InfoBox title="회원 정보">
          <div className="flex flex-row justify-between">
            <InfoText label={"본명"} value={"최용원"} />
            <InfoText label={"성별/나이"} value={"남자/24"} />
            <InfoText label={"전화번호"} value={"010-1234-5678"} />
          </div>
          <div>
            <InfoText label={"응원하는 팀"} value={"한화 이글스"} />
          </div>
        </InfoBox>

        <InfoBox title="활동 정보">
          <div className="flex flex-row justify-between">
            <InfoText label={"활동 상태"} value={"무사활동"} className={"text-green-main"} />
          </div>
          <div>
            <InfoText label={"가입일자"} value={"25.05.05"} />
          </div>
        </InfoBox>
      </div>
      <WarnBox title={"누적 경고 횟수"} data={totalWarnings} />
      <WarnBox title={"신고 횟수"} data={totalReports} />
      <WarnBox title={"피신고 횟수"} data={totalReported} />
    </div>
  );
}
