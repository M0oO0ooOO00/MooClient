"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const router = useRouter();
  const [isLogged, setIsLogged] = useState(false);

  // 임시 상태 변화 감지 함수
  const onClickLogin = () => {
    setIsLogged(true);
  };

  const onClickLogout = () => {
    setIsLogged(false);
  };

  const onClickHome = () => {
    router.push("/");
  };

  return (
    <header className="w-full h-[84px] bg-neutral-50 flex items-center justify-between z-9999">
      <div className="flex items-center pt-[29px] pb-[33px] pl-[120px]">
        <Image
          src="/images/typo-default.png"
          alt="로고 위치"
          width={128}
          height={22}
          onClick={onClickHome}
          className="cursor-pointer"
        />
      </div>
      {/* 오른쪽 메뉴 박스 */}
      <nav className="flex items-center justify-center gap-[20px] rounded-[10px] pr-[95px]">
        {/* 나중에 링크 바꾸기 */}
        {isLogged && (
          <>
            <Link className="cursor-pointer" href="/chat">
              <div className="px-[10px] py-[15px] justify-start text-zinc-500 text-base font-medium rounded-[10px] hover:bg-gray-50">
                채팅
              </div>
            </Link>
            <Link className="cursor-pointer" href="/">
              <div className="px-[10px] py-[15px] justify-start text-zinc-500 text-base font-medium rounded-[10px] hover:bg-gray-50">
                마이페이지
              </div>
            </Link>
            <Link className="cursor-pointer" href="/" onClick={onClickLogout}>
              <div className="px-[10px] py-[15px] justify-start text-zinc-500 text-base font-medium rounded-[10px] hover:bg-gray-50">
                로그아웃
              </div>
            </Link>
          </>
        )}
        {!isLogged && (
          <Link className="cursor-pointer" href="/" onClick={onClickLogin}>
            <div className="px-[10px] py-[15px] justify-start text-zinc-500 text-base font-medium rounded-[10px] hover:bg-gray-50">
              로그인
            </div>
          </Link>
        )}
      </nav>
    </header>
  );
}
