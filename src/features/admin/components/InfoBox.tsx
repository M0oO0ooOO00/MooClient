interface InfoBoxProps {
  title: string;
  children: React.ReactNode;
}

const InfoBox = ({ title, children }: InfoBoxProps) => {
  return (
    <div className="flex-1">
      <span className="font-sb leading-140 text-t04">{title}</span>
      <div className="bg-white w-full mt-6 rounded-[18px] overflow-hidden shadow-01">
        <div className="flex flex-col gap-4 py-10 px-[30px]">{children}</div>
      </div>
    </div>
  );
};

export default InfoBox;
