import Header from "@/shared/ui/header/header";
import MainBanner from "@/features/home/main-banner";
<<<<<<< HEAD
import MateListBanner from "@/features/home/mate-list-banner";
=======
>>>>>>> ab4fda8 (style: [#16] 메인 홈 위쪽 배너 구현)

export default function Page() {
  return (
    <>
      <Header />
<<<<<<< HEAD
      <div className="w-full max-w-[1200px] mx-auto flex flex-col gap-[54px]">
        <MainBanner />
        <MateListBanner />
      </div>
=======
      <MainBanner />
>>>>>>> ab4fda8 (style: [#16] 메인 홈 위쪽 배너 구현)
    </>
  );
}
