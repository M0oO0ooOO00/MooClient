/**
 * 경고 데이터 인터페이스
 */
export interface WarnData {
  reason: string;
  type: string;
  linkOrPhoto: string;
  date: string;
}

/**
 * WarnTable 컴포넌트 Props
 */
export interface WarnTableProps {
  data: WarnData[];
}

/**
 * WarnBox 컴포넌트 Props
 */
export interface WarnBoxProps {
  title: string;
  data: WarnData[];
}
