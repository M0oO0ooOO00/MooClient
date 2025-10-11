import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function AdminPageLayout({ children }: Props) {
  return <div className="flex flex-col">{children}</div>;
}
