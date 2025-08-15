import {CtaButton} from "@/shared/ui/button/cta-button";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <div className="space-y-3 bg-background p-6 rounded-xl border border-border">
        <CtaButton variant="primary" >회원가입 완료</CtaButton>
        <CtaButton variant="secondary">회원가입 완료</CtaButton>
        <CtaButton variant="subtle"  disabled>회원가입 완료</CtaButton>
        <CtaButton variant="outline" >회원가입 완료</CtaButton>
      </div>
    </div>
  );
}
