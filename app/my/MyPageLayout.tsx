import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function MyPageLayout({ children }: Props) {
  return <div className="flex flex-col gap-[56px]">{children}</div>;
}
