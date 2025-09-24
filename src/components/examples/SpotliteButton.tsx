import React from 'react'
import { Button } from '@/components/ui/button'

interface SpotliteButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link' | 'spotlite' | 'spotliteLogin' | 'line' | 'lineDisconnect' | 'search' | 'searchSelected' | 'option' | 'optionSelected'
  size?: 'default' | 'sm' | 'lg' | 'icon' | 'xlarge'
  children: React.ReactNode
}

export const SpotliteButton: React.FC<SpotliteButtonProps> = ({
  variant = "default",
  size = "default",
  className,
  children,
  ...props
}) => {
  return (
    <Button
      variant={variant}
      size={size}
      className={className}
      {...props}
    >
      {children}
    </Button>
  )
}

// 사용 예시 컴포넌트
export const SpotliteButtonExamples: React.FC = () => {
  return (
    <div className="space-y-6 p-6">
      <div>
        <h2 className="text-2xl font-semibold mb-4">Spotlite Button Variants</h2>
        <div className="flex flex-wrap gap-4">
          <SpotliteButton variant="default">Default</SpotliteButton>
          <SpotliteButton variant="outline">Outline</SpotliteButton>
          <SpotliteButton variant="ghost">Ghost</SpotliteButton>
          <SpotliteButton variant="spotlite">Spotlite</SpotliteButton>
          <SpotliteButton variant="spotliteLogin">Spotlite Login</SpotliteButton>
          <SpotliteButton variant="line">Line</SpotliteButton>
          <SpotliteButton variant="lineDisconnect">Line Disconnect</SpotliteButton>
          <SpotliteButton variant="search">Search</SpotliteButton>
          <SpotliteButton variant="searchSelected">Search Selected</SpotliteButton>
          <SpotliteButton variant="option">Option</SpotliteButton>
          <SpotliteButton variant="optionSelected">Option Selected</SpotliteButton>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Button Sizes</h2>
        <div className="flex flex-wrap items-center gap-4">
          <SpotliteButton variant="default" size="sm">Small</SpotliteButton>
          <SpotliteButton variant="default" size="default">Medium</SpotliteButton>
          <SpotliteButton variant="default" size="lg">Large</SpotliteButton>
          <SpotliteButton variant="default" size="xlarge">XLarge</SpotliteButton>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Color Variants</h2>
        <div className="flex flex-wrap gap-4">
          <SpotliteButton variant="default">Primary</SpotliteButton>
          <SpotliteButton variant="secondary">Secondary</SpotliteButton>
          <SpotliteButton variant="outline">Outline</SpotliteButton>
          <SpotliteButton variant="destructive">Destructive</SpotliteButton>
          <SpotliteButton variant="ghost">Ghost</SpotliteButton>
        </div>
      </div>
    </div>
  )
}
