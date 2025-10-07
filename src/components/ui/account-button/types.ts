// AccountButton 컴포넌트의 variant와 size 타입 정의
export type AccountButtonVariant =
  // Line 관련 variants
  | "line"
  | "lineDisconnect"
  // Search 관련 variants
  | "search"
  | "searchSelected"
  // Option 관련 variants
  | "option"
  | "optionSelected"

export type AccountButtonSize =
  // 기본 shadcn sizes
  | "default"
  | "sm"
  | "lg"
  | "icon"
  // Spotlite 커스텀 size
  | "xlarge"
