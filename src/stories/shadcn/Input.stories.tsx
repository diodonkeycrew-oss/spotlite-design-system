import type { Meta, StoryObj } from '@storybook/react'
import { Input, Label } from '../../components/ui'
import { useState } from 'react'
import { Eye, EyeOff, Search, User, Mail, Lock } from 'lucide-react'

const meta: Meta<typeof Input> = {
  title: 'shadcn/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `# Input

Input components allow users to enter and edit text. They are essential for forms, search functionality, and data entry.

## Basic Input

The Input component provides a clean, accessible text input field with various states and configurations.

### Input Types

#### Text Input
- **Purpose**: General text entry
- **Usage**: Names, descriptions, general content
- **Features**: Standard text input with placeholder support

#### Email Input
- **Purpose**: Email address collection
- **Usage**: Login forms, contact forms, user registration
- **Features**: Built-in email validation, mobile keyboard optimization

#### Password Input
- **Purpose**: Secure password entry
- **Usage**: Login forms, account creation, password changes
- **Features**: Text masking, show/hide toggle functionality

#### Number Input
- **Purpose**: Numeric data entry
- **Usage**: Quantities, prices, measurements, phone numbers
- **Features**: Numeric keyboard on mobile, validation support

#### Tel Input
- **Purpose**: Phone number entry
- **Usage**: Contact forms, user profiles, verification
- **Features**: Phone number keyboard on mobile, formatting support

#### URL Input
- **Purpose**: Web address entry
- **Usage**: Website links, social media profiles
- **Features**: URL validation, protocol suggestions

### Sizes

- **small**: Compact inputs for dense interfaces
- **medium**: Standard input size for most use cases
- **large**: Larger inputs for emphasis or accessibility

### States

#### Default State
- **Purpose**: Normal interactive input
- **Visual**: Standard border and background
- **Usage**: Most input scenarios

#### Error State
- **Purpose**: Indicate validation errors
- **Visual**: Red border and error styling
- **Usage**: Form validation, user feedback

#### Disabled State
- **Purpose**: Non-interactive inputs
- **Visual**: Muted colors and disabled cursor
- **Usage**: Read-only data, conditional inputs

### Icon Support

#### Start Icon
- **Purpose**: Visual context for input purpose
- **Usage**: Search inputs, category selection, visual cues
- **Examples**: Search icon, user icon, category icons

#### End Icon
- **Purpose**: Action buttons or status indicators
- **Usage**: Password visibility toggle, clear button, status icons
- **Examples**: Eye icon for password, X for clear, check for valid

### Form Integration

#### With Label
- **Purpose**: Clear input identification
- **Usage**: All form inputs should have descriptive labels
- **Accessibility**: Improves screen reader support

#### With Helper Text
- **Purpose**: Provide additional context or instructions
- **Usage**: Complex inputs, validation hints, format examples
- **Examples**: "Password must be 8+ characters", "Enter your full name"

#### Required Fields
- **Purpose**: Indicate mandatory inputs
- **Usage**: Form validation, user guidance
- **Visual**: Asterisk (*) or "Required" indicator

### Accessibility Features

- **Keyboard Navigation**: Full keyboard support
- **Screen Reader Support**: Proper ARIA labels and descriptions
- **Focus Management**: Clear focus indicators
- **Error Announcements**: Screen reader error feedback
- **Label Association**: Proper label-input relationships

### Best Practices

1. **Always use labels** for form accessibility
2. **Provide clear placeholder text** that describes expected input
3. **Use appropriate input types** for better mobile experience
4. **Include validation feedback** for user guidance
5. **Group related inputs** logically in forms
6. **Use helper text** for complex or specific requirements`,
      },
      source: {
        type: 'code',
        language: 'tsx',
        format: true,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default'],
      description: 'Input의 스타일 variant',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Input의 크기',
    },
    error: {
      control: { type: 'boolean' },
      description: '에러 상태 여부',
    },
    disabled: {
      control: { type: 'boolean' },
      description: '비활성화 상태 여부',
    },
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'number', 'tel', 'url'],
      description: 'Input 타입',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

// 기본 Input 스토리
export const Default: Story = {
  args: {
    placeholder: '텍스트를 입력하세요',
  },
}

// 기본 Input 스토리 (커스텀 Variant)
export const DefaultVariants: Story = {
  render: () => (
    <div className="space-y-2">
      <Label htmlFor="default-variants-input">기본 입력</Label>
      <Input
        id="default-variants-input"
        placeholder="텍스트를 입력하세요"
        variant="default"
        size="medium"
      />
    </div>
  ),
}

// Label이 있는 Input
export const WithLabel: Story = {
  render: () => (
    <div className="space-y-2">
      <Label htmlFor="basic-input">기본 입력</Label>
      <Input
        id="basic-input"
        placeholder="텍스트를 입력하세요"
        variant="default"
        size="medium"
      />
    </div>
  ),
}

// 다양한 Variant 스토리

export const DefaultVariant: Story = {
  render: () => (
    <div className="space-y-2">
      <Label htmlFor="default-input">Default Input</Label>
      <Input
        id="default-input"
        placeholder="Default 스타일"
        variant="default"
      />
    </div>
  ),
}

// 다양한 Size 스토리
export const Small: Story = {
  render: () => (
    <div className="space-y-2">
      <Label htmlFor="small-input">Small Input</Label>
      <Input
        id="small-input"
        placeholder="Small 크기"
        variant="default"
        size="small"
      />
    </div>
  ),
}

export const Medium: Story = {
  render: () => (
    <div className="space-y-2">
      <Label htmlFor="medium-input">Medium Input</Label>
      <Input
        id="medium-input"
        placeholder="Medium 크기"
        variant="default"
        size="medium"
      />
    </div>
  ),
}

export const Large: Story = {
  render: () => (
    <div className="space-y-2">
      <Label htmlFor="large-input">Large Input</Label>
      <Input
        id="large-input"
        placeholder="Large 크기"
        variant="default"
        size="large"
      />
    </div>
  ),
}

// 상태별 스토리
export const Disabled: Story = {
  render: () => (
    <div className="space-y-2">
      <Label htmlFor="disabled-input">Disabled Input</Label>
      <Input
        id="disabled-input"
        placeholder="비활성화된 입력"
        variant="default"
        disabled
      />
    </div>
  ),
}

export const Error: Story = {
  render: () => (
    <div className="space-y-2">
      <Label htmlFor="error-input">Error Input</Label>
      <Input
        id="error-input"
        placeholder="에러 상태"
        variant="default"
        error
      />
      <p className="text-xs text-red-600">에러 메시지입니다</p>
    </div>
  ),
}

export const WithHelperText: Story = {
  render: () => (
    <div className="space-y-2">
      <Label htmlFor="helper-input">Helper Text Input</Label>
      <Input
        id="helper-input"
        placeholder="도움말이 있는 입력"
        variant="default"
      />
      <p className="text-xs text-gray-600">도움말 텍스트입니다</p>
    </div>
  ),
}

// 다양한 Input 타입 스토리
export const EmailInput: Story = {
  render: () => (
    <div className="space-y-2">
      <Label htmlFor="email-input">Email Input</Label>
      <Input
        id="email-input"
        placeholder="이메일을 입력하세요"
        variant="default"
        type="email"
      />
    </div>
  ),
}

export const PasswordInput: Story = {
  render: () => (
    <div className="space-y-2">
      <Label htmlFor="password-input">Password Input</Label>
      <Input
        id="password-input"
        placeholder="비밀번호를 입력하세요"
        variant="default"
        type="password"
      />
    </div>
  ),
}

export const NumberInput: Story = {
  render: () => (
    <div className="space-y-2">
      <Label htmlFor="number-input">Number Input</Label>
      <Input
        id="number-input"
        placeholder="숫자를 입력하세요"
        variant="default"
        type="number"
      />
    </div>
  ),
}

export const TelInput: Story = {
  render: () => (
    <div className="space-y-2">
      <Label htmlFor="tel-input">Phone Input</Label>
      <Input
        id="tel-input"
        placeholder="전화번호를 입력하세요"
        variant="default"
        type="tel"
      />
    </div>
  ),
}

export const UrlInput: Story = {
  render: () => (
    <div className="space-y-2">
      <Label htmlFor="url-input">URL Input</Label>
      <Input
        id="url-input"
        placeholder="URL을 입력하세요"
        variant="default"
        type="url"
      />
    </div>
  ),
}

// 비밀번호 토글 기능이 있는 Input (외부 컨테이너 방식)
export const PasswordWithToggle: Story = {
  render: () => {
    const [showPassword, setShowPassword] = useState(false)

    return (
      <div className="space-y-2">
        <Label htmlFor="password-input">비밀번호</Label>
        <div className="relative">
          <Input
            id="password-input"
            placeholder="비밀번호를 입력하세요"
            variant="default"
            type={showPassword ? 'text' : 'password'}
          />
          <button
            type="button"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 flex items-center justify-center w-6 h-6"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
        </div>
      </div>
    )
  },
}

// 아이콘이 있는 Input (내장 기능 사용)
export const WithStartIcon: Story = {
  render: () => (
    <div className="space-y-2">
      <Label htmlFor="search-input">Search Input</Label>
      <Input
        id="search-input"
        placeholder="검색어를 입력하세요"
        variant="default"
        startIcon={<Search className="h-4 w-4" />}
      />
    </div>
  ),
}

export const WithEndIcon: Story = {
  render: () => (
    <div className="space-y-2">
      <Label htmlFor="user-input">User Input</Label>
      <Input
        id="user-input"
        placeholder="사용자명을 입력하세요"
        variant="default"
        endIcon={<User className="h-4 w-4" />}
      />
    </div>
  ),
}

export const WithBothIcons: Story = {
  render: () => (
    <div className="space-y-2">
      <Label htmlFor="email-icons-input">Email Input</Label>
      <Input
        id="email-icons-input"
        placeholder="이메일을 입력하세요"
        variant="default"
        type="email"
        startIcon={<Mail className="h-4 w-4" />}
        endIcon={<Lock className="h-4 w-4" />}
      />
    </div>
  ),
}

// 비밀번호 토글 기능이 있는 Input (내장 기능 사용)
export const PasswordWithToggleBuiltIn: Story = {
  render: () => {
    const [showPassword, setShowPassword] = useState(false)

    return (
      <div className="space-y-2">
        <Label htmlFor="password-builtin-input">비밀번호</Label>
        <Input
          id="password-builtin-input"
          placeholder="비밀번호를 입력하세요"
          variant="default"
          type={showPassword ? 'text' : 'password'}
          endIcon={
            <button
              type="button"
              className="text-gray-500 hover:text-gray-700 flex items-center justify-center w-6 h-6"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          }
        />
      </div>
    )
  },
}

// 모든 Variant 비교
export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <div className="space-y-2">
        <Label htmlFor="default-variant">Default</Label>
        <Input
          id="default-variant"
          placeholder="Default 스타일"
          variant="default"
        />
      </div>
    </div>
  ),
}

// 모든 Size 비교
export const AllSizes: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <div className="space-y-2">
        <Label htmlFor="small-size">Small</Label>
        <Input
          id="small-size"
          placeholder="Small 크기"
          variant="default"
          size="small"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="medium-size">Medium</Label>
        <Input
          id="medium-size"
          placeholder="Medium 크기"
          variant="default"
          size="medium"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="large-size">Large</Label>
        <Input
          id="large-size"
          placeholder="Large 크기"
          variant="default"
          size="large"
        />
      </div>
    </div>
  ),
}

// 모든 Input 타입 비교
export const AllTypes: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <div className="space-y-2">
        <Label htmlFor="text-type">Text</Label>
        <Input
          id="text-type"
          placeholder="텍스트 입력"
          variant="default"
          type="text"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email-type">Email</Label>
        <Input
          id="email-type"
          placeholder="이메일 입력"
          variant="default"
          type="email"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password-type">Password</Label>
        <Input
          id="password-type"
          placeholder="비밀번호 입력"
          variant="default"
          type="password"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="number-type">Number</Label>
        <Input
          id="number-type"
          placeholder="숫자 입력"
          variant="default"
          type="number"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="tel-type">Tel</Label>
        <Input
          id="tel-type"
          placeholder="전화번호 입력"
          variant="default"
          type="tel"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="url-type">URL</Label>
        <Input
          id="url-type"
          placeholder="URL 입력"
          variant="default"
          type="url"
        />
      </div>
    </div>
  ),
}

// Form 예시
export const FormExample: Story = {
  render: () => (
    <form className="space-y-4 w-80">
      <div className="space-y-2">
        <Label htmlFor="form-name" required>이름</Label>
        <Input
          id="form-name"
          placeholder="이름을 입력하세요"
          variant="default"
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="form-email" required>이메일</Label>
        <Input
          id="form-email"
          placeholder="이메일을 입력하세요"
          variant="default"
          type="email"
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="form-password" required>비밀번호</Label>
        <Input
          id="form-password"
          placeholder="비밀번호를 입력하세요"
          variant="default"
          type="password"
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="form-tel">전화번호</Label>
        <Input
          id="form-tel"
          placeholder="전화번호를 입력하세요"
          variant="default"
          type="tel"
        />
      </div>
    </form>
  ),
}

// 에러 상태가 있는 Form
export const FormWithErrors: Story = {
  render: () => (
    <form className="space-y-4 w-80">
      <div className="space-y-2">
        <Label htmlFor="error-name">이름</Label>
        <Input
          id="error-name"
          placeholder="이름을 입력하세요"
          variant="default"
          error
        />
        <p className="text-xs text-red-600">이름은 필수입니다</p>
      </div>
      <div className="space-y-2">
        <Label htmlFor="error-email">이메일</Label>
        <Input
          id="error-email"
          placeholder="이메일을 입력하세요"
          variant="default"
          type="email"
          error
        />
        <p className="text-xs text-red-600">올바른 이메일 형식이 아닙니다</p>
      </div>
      <div className="space-y-2">
        <Label htmlFor="error-password">비밀번호</Label>
        <Input
          id="error-password"
          placeholder="비밀번호를 입력하세요"
          variant="default"
          type="password"
        />
        <p className="text-xs text-gray-600">8자 이상 입력하세요</p>
      </div>
    </form>
  ),
}
