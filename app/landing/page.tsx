// 나중에 랜딩 경로로 바꿔야함
import Landing from "@/features/landing/ui/landing";
import Header from "@/shared/ui/header/header";

export default function Page() {
  return (
    <div className="flex flex-col gap-[156px]">
      <Header />
      <Landing />;
    </div>
  );
}
