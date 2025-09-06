import { CtaButton } from "@/shared/ui/button/cta-button";
import { CtaSmall } from "@/shared/ui/button/cta-small";
import { Dropdown } from "@/shared/ui/dropdown/dropdown";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <div className="space-y-6 bg-background p-6 rounded-xl border border-border w-full max-w-md">
        {/* 버튼 컴포넌트들 */}
        <div className="space-y-3">
          <CtaButton variant="primary">회원가입 완료</CtaButton>
          <CtaButton variant="secondary">회원가입 완료</CtaButton>
          <CtaButton variant="subtle" disabled>
            회원가입 완료
          </CtaButton>
          <CtaButton variant="outline">회원가입 완료</CtaButton>
        </div>
        {/* CTA Small 컴포넌트들 */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">CTA Small 컴포넌트</h3>

          <div className="space-y-3">
            <CtaSmall variant="primary" text="필터" />
            <CtaSmall variant="secondary" text="필터" />
            <CtaSmall variant="subtle" text="필터" />
            <CtaSmall variant="outline" text="필터" />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">드롭다운 컴포넌트</h3>

          <Dropdown
            placeholder="기본 드롭다운"
            fieldSize="lg"
            items={[
              {
                options: [
                  { value: "a", text: "dropdown_list" },
                  { value: "b", text: "dropdown_list" },
                  { value: "c", text: "dropdown_list" },
                ],
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
