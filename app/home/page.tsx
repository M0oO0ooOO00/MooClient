import Header from "@/shared/ui/header/header";
import MainBanner from "@/features/home/main-banner";
import MateListBanner from "@/features/home/mate-list-banner";

export default function Page() {
  return (
    <>
      <Header />
      <div className="w-full max-w-[1200px] mx-auto flex flex-col gap-[54px]">
        <MainBanner />
        <MateListBanner />
      </div>
    </>
  );
}
