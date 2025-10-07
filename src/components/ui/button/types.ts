// Button 컴포넌트의 variant와 size 타입 정의
export type ButtonVariant =
  // 기본 shadcn variants
  | "default"
  | "destructive"
  | "outline"
  | "secondary"
  | "ghost"
  | "link"
  // Spotlite 커스텀 variants
  | "spotlite"
  | "spotliteLogin"

export type ButtonSize =
  // 기본 shadcn sizes
  | "default"
  | "sm"
  | "lg"
  | "icon"
  // Spotlite 커스텀 size
  | "xlarge"
