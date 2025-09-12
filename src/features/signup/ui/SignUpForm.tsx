import TextFields from "@/features/signup/ui/TextFields";
import { Button } from "@/components/ui/button";

export default function SignUpForm() {
  return (
    <div className="w-[460px] m-auto flex flex-col justify-start gap-12 items-center">
      <h2>사진 영역</h2>
      <TextFields />
      <Button className="w-full h-16 px-44 py-5">회원가입 완료</Button>
    </div>
  );
}
