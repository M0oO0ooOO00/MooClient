export default function KakaoLoginButton() {
  return (
    <button className="w-[320px] h-12 bg-[#FEE500] rounded-lg flex items-center justify-center gap-3 hover:brightness-95 transition">
      {/* 카카오 아이콘 (정사각형) */}
      <img src="/icons/kakao_icon.svg" alt="카카오 아이콘" className="w-6 h-6" />
      {/* 텍스트 */}
      <span className="text-[15px] font-medium text-[#191600]">카카오톡으로 로그인</span>
    </button>
  );
}
