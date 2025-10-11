import Image from "next/image";

type PaginationProps = {
  currentPage: number;
  totalPages?: number;
  onPageChange: (page: number) => void;
  onPrevious?: () => void;
  onNext?: () => void;
};

export default function Pagination({
  currentPage,
  totalPages = 5,
  onPageChange,
  onPrevious,
  onNext,
}: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handlePrevious = () => {
    if (onPrevious) {
      onPrevious();
    } else if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (onNext) {
      onNext();
    } else if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex justify-center mt-6 space-x-2">
      <Image
        src="/icons/arrow-left.svg"
        alt="이전"
        width={24}
        height={24}
        className="cursor-pointer"
        onClick={handlePrevious}
      />
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-[18px] py-2.5 rounded-md text-sm font-medium text-gray-950 hover:bg-gray-200 hover:cursor-pointer ${
            page === currentPage ? "bg-gray-200" : ""
          }`}
        >
          {page}
        </button>
      ))}
      <Image
        src="/icons/arrow-right.svg"
        alt="이후"
        width={24}
        height={24}
        className="cursor-pointer"
        onClick={handleNext}
      />
    </div>
  );
}
