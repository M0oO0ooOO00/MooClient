import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full h-[84px] bg-neutral-50 flex items-center justify-between">
      <div className="flex items-center pt-[29px] pb-[33px] pl-[120px]">
        <Image src="/images/typo-default.png" alt="로고 위치" width={128} height={22} />
      </div>
      {/* 오른쪽 메뉴 박스 */}
      <nav className="flex items-center justify-center gap-[20px] rounded-[10px] pr-[95px]">
        {/* 나중에 링크 바꾸기 */}
        {/* 로그인/비로그인시 구분도 해야함 */}
        <div className="px-[10px] py-[15px] justify-start text-zinc-500 text-base font-medium rounded-[10px] hover:bg-gray-50">
          <Link className="cursor-pointer" href="/">
            채팅
          </Link>
        </div>
        <div className="px-[10px] py-[15px] justify-start text-zinc-500 text-base font-medium rounded-[10px] hover:bg-gray-50">
          <Link className="cursor-pointer" href="/">
            마이페이지
          </Link>
        </div>
        <div className="px-[10px] py-[15px] justify-start text-zinc-500 text-base font-medium rounded-[10px] hover:bg-gray-50">
          <Link className="cursor-pointer" href="/">
            로그인
          </Link>
        </div>
      </nav>
    </header>
  );
}
