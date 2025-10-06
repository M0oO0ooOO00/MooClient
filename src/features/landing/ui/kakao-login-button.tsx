import Image from "next/image";

export default function KakaoLoginButton() {
  return (
    <button className="w-[320px] h-12 bg-[#FEE500] rounded-lg flex items-center justify-center gap-3 hover:brightness-95 transition cursor-pointer">
      <Image
        src="/icons/kakao_icon.svg"
        alt="카카오 아이콘"
        width={24}
        height={24}
        className="w-6 h-6"
        priority
      />
      <span className="text-[15px] font-medium text-[#191600]">카카오톡으로 로그인</span>
    </button>
  );
}
