import Image from "next/image";

interface ProfileProps {
  profileImage?: string;
  nickname: string;
}

const Profile = ({ profileImage = "/images/pink.png", nickname }: ProfileProps) => {
  return (
    <div className="w-[1200px] flex flex-col items-center justify-center gap-4 my-10">
      <Image
        src={profileImage}
        alt="프로필 사진"
        width={170}
        height={170}
        className="cursor-pointer"
      />
      <div className="flex flex-col items-center justify-center gap-2">
        <span className="text-b01 font-r leading-150 text-gray-600">닉네임</span>
        <span className="text-t03 font-sb leading-140">{nickname}</span>
      </div>
    </div>
  );
};

export default Profile;
