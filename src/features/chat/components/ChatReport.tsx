import Image from "next/image";

const ChatReport = () => {
  return (
    <div className="flex justify-end mb-4">
      <button className="b01-r text-gray-500 flex items-center gap-1">
        <Image src="/icons/report.svg" alt="신고하기" width={28} height={28} />
        신고하기
      </button>
    </div>
  );
};
export default ChatReport;
