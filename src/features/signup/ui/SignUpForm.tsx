import TextFields from "@/features/signup/ui/TextFields";
import { Button } from "@/components/ui/button";

export default function SignUpForm() {
  return (
    <div className="w-[460px] m-auto flex flex-col justify-start items-center gap-14">
      <div className="gap-12 w-full items-center flex flex-col">
        {/* 프로필 이미지 */}
        <div className="w-[170px] h-[170px] bg-gray-100 rounded-full"></div>
        <TextFields />
      </div>
      <Button className="w-full h-16 px-44 py-5">회원가입 완료</Button>
    </div>
  );
}
