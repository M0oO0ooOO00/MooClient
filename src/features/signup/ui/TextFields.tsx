"use client";

import { TextField } from "@/shared/ui/input/text-field";
import { FormLabel } from "./FormLabel";
import { Dropdown } from "@/shared/ui/dropdown/dropdown";
import React, { ReactNode, useState } from "react";

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

const genderDropdownItems = [
  {
    options: genderItems.map((item) => ({
      value: item.value,
      text: item.label,
    })),
  },
];

const baseBallTeamDropdownItems = [
  {
    options: baseBallTeamItems.map((item) => ({
      value: item.value,
      text: item.label,
    })),
  },
];

const FormField = ({ label, children }: { label: string; children: ReactNode }) => (
  <div className="flex flex-col gap-2.5 w-full">
    <FormLabel>{label}</FormLabel>
    {children}
  </div>
);

export default function TextFields() {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    birthDate: "",
    phoneNumber: "",
    favoriteTeam: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    console.log(name, value);
  };

  const handleDropdownChange = (name: string) => (value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex flex-col justify-start gap-5 w-full">
      <FormField label="이름">
        <TextField
          className="h-[60px] px-[22px] py-4 leading-[28px] !text-[16px] placeholder:font-normal font-medium"
          name="name"
          placeholder="이름을 입력해주세요"
          value={formData.name}
          onChange={handleChange}
        />
      </FormField>
      <FormField label="성별">
        <Dropdown
          className="h-[60px] px-[22px] py-4 text-[16px]"
          placeholder="성별을 선택하세요"
          items={genderDropdownItems}
          value={formData.gender}
          onValueChange={handleDropdownChange("gender")}
        />
      </FormField>
      <FormField label="생년월일">
        <TextField
          className="h-[60px] px-[22px] py-4 leading-[28px] !text-[16px] placeholder:font-normal font-medium"
          name="birthDate"
          placeholder="0000.00.00"
          value={formData.birthDate}
          onChange={handleChange}
        />
      </FormField>
      <FormField label="휴대폰 번호">
        <TextField
          className="h-[60px] px-[22px] py-4 leading-[28px] !text-[16px] placeholder:font-normal font-medium"
          name="phoneNumber"
          placeholder="010-0000-0000"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
      </FormField>
      <FormField label="응원하는 팀">
        <Dropdown
          className="h-[60px] px-[22px] py-4 text-[16px]"
          placeholder="응원하는 팀을 선택하세요."
          items={baseBallTeamDropdownItems}
          value={formData.favoriteTeam}
          onValueChange={handleDropdownChange("favoriteTeam")}
        />
      </FormField>
    </div>
  );
}
