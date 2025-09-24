// Typography 컴포넌트의 variant와 color 타입 정의
export type TypographyVariant =
  // 기본 MUI Typography variants
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "body1"
  | "body2"
  | "caption"
  // Spotlite 커스텀 variants
  | "spotliteBody"
  | "spotliteBodyStrong"
  | "spotliteCaption"
  | "spotliteCaptionStrong"
  | "spotliteCaptionSmall"

export type TypographyColor =
  | "primary"
  | "secondary"
  | "accent"
  | "minor"
  | "negative"
  | "line"
  | "success"
  | "warning"
  | "error"
  | "info"
