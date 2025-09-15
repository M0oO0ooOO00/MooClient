import TextFields from "@/features/signup/ui/TextFields";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const genderItems = [
  { value: "male", label: "남성" },
  { value: "female", label: "여성" },
];

const baseBallTeamItems = [
  { value: "LOTTE", label: "롯데 자이언츠" },
  { value: "SAMSUNG", label: "삼성 라이온즈" },
  { value: "NC", label: "NC 다이노스" },
  { value: "KIA", label: "KIA 타이거즈" },
  { value: "HANHWA", label: "한화 이글스" },
  { value: "KIWOOM", label: "키움 히어로즈" },
  { value: "KT", label: "KT 위즈" },
  { value: "SK", label: "SSG 랜더스" },
  { value: "DOOSAN", label: "두산 베어스" },
  { value: "LG", label: "LG 트윈스" },
];

export default function SignUpForm() {
  return (
    <div className="w-[460px] m-auto flex flex-col justify-start items-center gap-14">
      <div className="gap-12 w-full items-center flex flex-col">
        {/* 프로필 이미지 */}
        {/*<div className="w-[170px] h-[170px] bg-gray-100 rounded-full"></div>*/}
        <Image
          src={"/images/default.png"}
          width={170}
          height={170}
          className={"rounded-full"}
          alt={"프로필 사진"}
        />
        <TextFields baseBallTeamItems={baseBallTeamItems} genderItems={genderItems} />
      </div>
      <Button className="w-full h-16 px-44 py-5">회원가입 완료</Button>
    </div>
  );
}
