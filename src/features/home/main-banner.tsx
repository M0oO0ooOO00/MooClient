export default function MainBanner() {
  return (
    <div className="w-full mt-[70px] flex gap-[30px]">
      <div className="w-[585px] h-[275px] px-[30px] py-[30px] bg-[#0ABF00] rounded-[18px]">
        <div className="flex gap-[153px]">
          <div className="w-[201px] flex flex-col gap-[12px]">
            <p className="text-neutral-50 text-[28px] font-bold leading-10">
              새로운 직관메이트
              <br />
              모집글 작성하기
            </p>
            <p className="text-[#ECECEE] text-base font-normal">직관 메이트를 모집해보세요</p>
          </div>
          <img src="/icons/post-icon.svg" className="mt-[35px]" />
        </div>
      </div>
      <div className="w-[585px] h-[275px] px-[30px] py-[30px] bg-[#FF6D00] rounded-[18px]">
        <div className="flex justify-between">
          <div className="w-[201px] flex flex-col gap-[12px]">
            <p className="text-neutral-50 text-[28px] font-bold leading-10">
              직관 꿀팁
              <br />
              백과사전!
            </p>
            <p className="text-[#ECECEE] text-base font-normal">직관이 처음이신가요?</p>
          </div>
          <img src="/icons/dictionary.svg" className="mt-[35px]" />
        </div>
      </div>
    </div>
  );
}
