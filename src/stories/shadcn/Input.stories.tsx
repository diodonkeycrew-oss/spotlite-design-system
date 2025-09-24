import type { Meta, StoryObj } from '@storybook/react'
import { Input, Label } from '../../components/ui'
import { useState } from 'react'
import { Eye, EyeOff, Search, User, Mail, Lock } from 'lucide-react'

const meta: Meta<typeof Input> = {
  title: 'shadcn/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'outlined', 'filled', 'standard'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    error: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'number', 'tel', 'url'],
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
        variant="outlined"
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
        variant="outlined"
        size="medium"
      />
    </div>
  ),
}

// 다양한 Variant 스토리
export const Outlined: Story = {
  render: () => (
    <div className="space-y-2">
      <Label htmlFor="outlined-input">Outlined Input</Label>
      <Input
        id="outlined-input"
        placeholder="Outlined 스타일"
        variant="outlined"
      />
    </div>
  ),
}

export const Filled: Story = {
  render: () => (
    <div className="space-y-2">
      <Label htmlFor="filled-input">Filled Input</Label>
      <Input
        id="filled-input"
        placeholder="Filled 스타일"
        variant="filled"
      />
    </div>
  ),
}

export const Standard: Story = {
  render: () => (
    <div className="space-y-2">
      <Label htmlFor="standard-input">Standard Input</Label>
      <Input
        id="standard-input"
        placeholder="Standard 스타일"
        variant="standard"
      />
    </div>
  ),
}

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
        variant="outlined"
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
        variant="outlined"
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
        variant="outlined"
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
        variant="outlined"
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
        variant="outlined"
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
        variant="outlined"
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
        variant="outlined"
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
        variant="outlined"
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
        variant="outlined"
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
        variant="outlined"
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
        variant="outlined"
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
            variant="outlined"
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
        variant="outlined"
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
        variant="outlined"
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
        variant="outlined"
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
          variant="outlined"
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
      <div className="space-y-2">
        <Label htmlFor="outlined-variant">Outlined</Label>
        <Input
          id="outlined-variant"
          placeholder="Outlined 스타일"
          variant="outlined"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="filled-variant">Filled</Label>
        <Input
          id="filled-variant"
          placeholder="Filled 스타일"
          variant="filled"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="standard-variant">Standard</Label>
        <Input
          id="standard-variant"
          placeholder="Standard 스타일"
          variant="standard"
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
          variant="outlined"
          size="small"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="medium-size">Medium</Label>
        <Input
          id="medium-size"
          placeholder="Medium 크기"
          variant="outlined"
          size="medium"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="large-size">Large</Label>
        <Input
          id="large-size"
          placeholder="Large 크기"
          variant="outlined"
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
          variant="outlined"
          type="text"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email-type">Email</Label>
        <Input
          id="email-type"
          placeholder="이메일 입력"
          variant="outlined"
          type="email"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password-type">Password</Label>
        <Input
          id="password-type"
          placeholder="비밀번호 입력"
          variant="outlined"
          type="password"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="number-type">Number</Label>
        <Input
          id="number-type"
          placeholder="숫자 입력"
          variant="outlined"
          type="number"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="tel-type">Tel</Label>
        <Input
          id="tel-type"
          placeholder="전화번호 입력"
          variant="outlined"
          type="tel"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="url-type">URL</Label>
        <Input
          id="url-type"
          placeholder="URL 입력"
          variant="outlined"
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
          variant="outlined"
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="form-email" required>이메일</Label>
        <Input
          id="form-email"
          placeholder="이메일을 입력하세요"
          variant="outlined"
          type="email"
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="form-password" required>비밀번호</Label>
        <Input
          id="form-password"
          placeholder="비밀번호를 입력하세요"
          variant="outlined"
          type="password"
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="form-tel">전화번호</Label>
        <Input
          id="form-tel"
          placeholder="전화번호를 입력하세요"
          variant="outlined"
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
          variant="outlined"
          error
        />
        <p className="text-xs text-red-600">이름은 필수입니다</p>
      </div>
      <div className="space-y-2">
        <Label htmlFor="error-email">이메일</Label>
        <Input
          id="error-email"
          placeholder="이메일을 입력하세요"
          variant="outlined"
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
          variant="outlined"
          type="password"
        />
        <p className="text-xs text-gray-600">8자 이상 입력하세요</p>
      </div>
    </form>
  ),
}
