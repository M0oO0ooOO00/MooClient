import { TextField } from "@/shared/ui/input/text-field";
import { FormLabel } from "./FormLabel";
import { Dropdown } from "@/shared/ui/dropdown/dropdown";

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

export default function TextFields() {
  return (
    <div className="flex flex-col justify-start gap-5 w-full">
      <div className="w-full">
        <FormLabel>이름</FormLabel>
        <TextField placeholder="이름을 입력해주세요" />
      </div>
      <div className="w-full">
        <FormLabel>성별</FormLabel>
        <Dropdown
          placeholder="성별을 선택해주세요"
          fieldSize={"md"}
          items={[
            {
              options: genderItems.map((item) => ({
                value: item.value,
                text: item.label,
              })),
            },
          ]}
        />
      </div>
      <div className="w-full">
        <FormLabel>생년월일</FormLabel>
        <TextField placeholder="0000.00.00" />
      </div>
      <div className="w-full">
        <FormLabel>휴대폰 번호</FormLabel>
        <TextField placeholder="010-0000-0000" />
      </div>
      <div className="w-full">
        <FormLabel>응원하는 팀</FormLabel>
        <Dropdown
          placeholder="응원하는 팀을 선택하세요."
          className="px-5 py-4"
          items={[
            {
              options: baseBallTeamItems.map((item) => ({
                value: item.value,
                text: item.label,
              })),
            },
          ]}
        />
      </div>
    </div>
  );
}
