import SignUpForm from "@/features/signup/ui/SignUpForm";
import Header from "@/shared/ui/header/header";

export default function Page() {
  return (
    <div className="flex flex-col gap-[56px]">
      <Header />
      <SignUpForm />;
    </div>
  );
}
