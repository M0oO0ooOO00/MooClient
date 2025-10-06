import Link from "next/link";
import Image from "next/image";

export default function My() {
  return (
    <>
      <div className="bg-[#ECECEE] min-h-screen w-full flex flex-col items-center px-40 pt-15 pb-20">
        <h1 className="text-t01 font-bold w-full pb-15">마이페이지</h1>
        <div className="flex flex-col rounded-[20px] border pt-[30px] pr-[30px] pb-[30px] pl-[30px] gap-[10px] bg-white shadow-md w-full mb-10">
          <div className="flex justify-between mt-0 mb-4 border-b">
            <div className="flex items-center gap-4 mb-6">
              {/* 프로필 이미지 */}
              <div className="w-12 h-12 rounded-full bg-pink-500 flex items-center justify-center">
                <Image
                  src="/images/pink.png"
                  alt="유저"
                  width={68}
                  height={68}
                  className="cursor-pointer"
                  // onClick={() => {/* 클릭 핸들러 */}}
                />
              </div>
              {/* 텍스트 영역 */}
              <div className="flex flex-col gap-2">
                <span className="text-sm text-gray-500">닉네임</span>
                <span className="text-lg font-semibold">윤창현</span>
              </div>
            </div>
            <Link href="/" className="text-gray-700">
              프로필 수정하기
            </Link>
          </div>
          <div className="flex flex-row gap-2 w-full ">
            {/*응원하는 팀, 로그인 방법, 누적 경고 횟수, 활동상태*/}
            <div className="flex-1 flex flex-col items-center gap-2">
              <p className="text-b01 text-gray-600 font-weight-r">응원하는 팀</p>
              {/* TODO: 각 야구팀의 사진과 이름 불러오기 */}
              {/*<Image*/}
              {/*    src="/icons/kakao_icon.svg"*/}
              {/*    alt="카카오"*/}
              {/*    width={68}*/}
              {/*    height={68}*/}
              {/*    className="cursor-pointer p-4"*/}
              {/*    // onClick={() => /!* 클릭 핸들러 *!/}*/}
              {/*/>*/}
              <div className="w-18 h-18 bg-gray-200 rounded-2xl"></div>
              <p className="font-weight-r text-b01 leading-150">한화 이글스</p>
            </div>
            <div className="flex-1 flex flex-col items-center gap-2">
              <p className="text-b01 text-gray-600 font-weight-r">로그인 방법</p>
              {/* TODO: 추후 카카오 이미지 수정 */}
              <Image
                src="/icons/kakao_icon.svg"
                alt="카카오"
                width={68}
                height={68}
                className="cursor-pointer"
                // onClick={() => {/* 클릭 핸들러 */}}
              />
            </div>
            <div className="flex-1 flex flex-col items-center gap-2">
              <p className="text-b01 text-gray-600 font-weight-r">누적 경고 횟수</p>
              <p className="text-t04 font-weight-r leading-140">03</p>
            </div>
            <div className="flex-1 flex flex-col items-center gap-2">
              <p className="text-b01 text-gray-600 font-weight-r">활동상태</p>
              <p className="text-t04 font-weight-r leading-140 text-[#0ABF00]">활동중</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col rounded-[20px] border py-[30px] px-[6px] gap-[10px] bg-white shadow-md w-full mb-10">
          {/* 콘텐츠 */}
          <div className="flex flex-row gap-2 py-[16px] px-[30px] hover:bg-gray-50 cursor-pointer">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.1523 24.5227L10.8121 24.1895L11.1523 24.5227ZM15.9157 21.049L16.2559 20.7158L15.9157 21.049ZM14.555 21.049L14.2148 20.7158L14.555 21.049ZM20.9512 6.66527H20.475V23.8562H20.9512H21.4274V6.66527H20.9512ZM19.3184 24.5227L19.6586 24.1895L16.2559 20.7158L15.9157 21.049L15.5755 21.3822L18.9783 24.8559L19.3184 24.5227ZM14.555 21.049L14.2148 20.7158L10.8121 24.1895L11.1523 24.5227L11.4924 24.8559L14.8952 21.3822L14.555 21.049ZM9.51953 23.8562H9.99572V6.66527H9.51953H9.04334V23.8562H9.51953ZM10.4719 5.71289V6.18908H19.9988V5.71289V5.2367H10.4719V5.71289ZM9.51953 6.66527H9.99572C9.99572 6.40228 10.2089 6.18908 10.4719 6.18908V5.71289V5.2367C9.68293 5.2367 9.04334 5.87629 9.04334 6.66527H9.51953ZM11.1523 24.5227L10.8121 24.1895C10.5136 24.4942 9.99572 24.2829 9.99572 23.8562H9.51953H9.04334C9.04334 25.1361 10.5968 25.7702 11.4924 24.8559L11.1523 24.5227ZM15.9157 21.049L16.2559 20.7158C15.6957 20.1439 14.775 20.1439 14.2148 20.7158L14.555 21.049L14.8952 21.3822C15.0819 21.1916 15.3888 21.1916 15.5755 21.3822L15.9157 21.049ZM20.9512 23.8562H20.475C20.475 24.2829 19.9572 24.4942 19.6586 24.1895L19.3184 24.5227L18.9783 24.8559C19.8739 25.7702 21.4274 25.1361 21.4274 23.8562H20.9512ZM20.9512 6.66527H21.4274C21.4274 5.87629 20.7878 5.2367 19.9988 5.2367V5.71289V6.18908C20.2618 6.18908 20.475 6.40228 20.475 6.66527H20.9512Z"
                fill="#6F7176"
              />
            </svg>
            <p className="font-weight-m text-b01 leading-150">스크랩 한 모집글</p>
          </div>
          <div className="flex flex-row gap-2 py-[16px] px-[30px] hover:bg-gray-50 cursor-pointer">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.577 9.04186L20.5591 6.02396C20.1252 5.59004 19.4217 5.59004 18.9878 6.02396L9.36531 15.6464C9.20764 15.8041 9.09362 16 9.03441 16.215L7.74013 20.9143C7.45442 21.9517 8.49169 22.8611 9.4828 22.4422L13.6073 20.6989C13.7602 20.6342 13.8991 20.5407 14.0165 20.4233L23.577 10.8628C24.0799 10.36 24.0799 9.5447 23.577 9.04186Z"
                stroke="#6F7176"
                stroke-width="0.952381"
                stroke-linecap="round"
              />
            </svg>
            <p className="font-weight-m text-b01 leading-150">내가 작성한 모집글</p>
          </div>
          <div className="flex flex-row gap-2 py-[16px] px-[30px] hover:bg-gray-50 cursor-pointer">
            <Image
              src="/images/default.png"
              alt="내가 참여한 글"
              width={30}
              height={30}
              className="cursor-pointer"
              // onClick={() => {/* 클릭 핸들러 */}}
            />
            <p className="font-weight-m text-b01 leading-150">내가 참여한 글</p>
          </div>
        </div>
      </div>
    </>
  );
}
