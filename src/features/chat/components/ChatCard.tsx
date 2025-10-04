interface ChatCardProps {
  title: string;
  subtitle: string;
  description: string;
}

const ChatCard = ({ title, subtitle, description }: ChatCardProps) => {
  return (
    <div className="w-full h-[280px] bg-white rounded-[18px] p-[24px] flex justify-between items-center cursor-pointer">
      <div>
        <h1 className="text-[28px] font-bold leading-tight">
          {title}
          <br />
          {subtitle}
        </h1>
        <h3 className="text-[16px] text-gray-500 mt-[8px]">{description}</h3>
      </div>
      <div className="w-[120px] h-[120px] bg-gray-100 rounded-[12px] flex items-center justify-center">
        <span className="text-gray-400 text-[14px]">그래픽</span>
      </div>
    </div>
  );
};

export default ChatCard;
