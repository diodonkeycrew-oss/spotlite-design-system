import type { Meta, StoryObj } from '@storybook/react'
import { Input } from '../../components/ui/input'
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
    variant: 'outlined',
    size: 'medium',
  },
}

// Label이 있는 Input
export const WithLabel: Story = {
  args: {
    label: '기본 입력',
    placeholder: '텍스트를 입력하세요',
    variant: 'outlined',
    size: 'medium',
  },
}

// 다양한 Variant 스토리
export const Outlined: Story = {
  args: {
    label: 'Outlined Input',
    placeholder: 'Outlined 스타일',
    variant: 'outlined',
  },
}

export const Filled: Story = {
  args: {
    label: 'Filled Input',
    placeholder: 'Filled 스타일',
    variant: 'filled',
  },
}

export const Standard: Story = {
  args: {
    label: 'Standard Input',
    placeholder: 'Standard 스타일',
    variant: 'standard',
  },
}

export const DefaultVariant: Story = {
  args: {
    label: 'Default Input',
    placeholder: 'Default 스타일',
    variant: 'default',
  },
}

// 다양한 Size 스토리
export const Small: Story = {
  args: {
    label: 'Small Input',
    placeholder: 'Small 크기',
    variant: 'outlined',
    size: 'small',
  },
}

export const Medium: Story = {
  args: {
    label: 'Medium Input',
    placeholder: 'Medium 크기',
    variant: 'outlined',
    size: 'medium',
  },
}

export const Large: Story = {
  args: {
    label: 'Large Input',
    placeholder: 'Large 크기',
    variant: 'outlined',
    size: 'large',
  },
}

// 상태별 스토리
export const Disabled: Story = {
  args: {
    label: 'Disabled Input',
    placeholder: '비활성화된 입력',
    variant: 'outlined',
    disabled: true,
  },
}

export const Error: Story = {
  args: {
    label: 'Error Input',
    placeholder: '에러 상태',
    variant: 'outlined',
    error: true,
    helperText: '에러 메시지입니다',
  },
}

export const WithHelperText: Story = {
  args: {
    label: 'Helper Text Input',
    placeholder: '도움말이 있는 입력',
    variant: 'outlined',
    helperText: '도움말 텍스트입니다',
  },
}

// 다양한 Input 타입 스토리
export const EmailInput: Story = {
  args: {
    label: 'Email Input',
    placeholder: '이메일을 입력하세요',
    variant: 'outlined',
    type: 'email',
  },
}

export const PasswordInput: Story = {
  args: {
    label: 'Password Input',
    placeholder: '비밀번호를 입력하세요',
    variant: 'outlined',
    type: 'password',
  },
}

export const NumberInput: Story = {
  args: {
    label: 'Number Input',
    placeholder: '숫자를 입력하세요',
    variant: 'outlined',
    type: 'number',
  },
}

export const TelInput: Story = {
  args: {
    label: 'Phone Input',
    placeholder: '전화번호를 입력하세요',
    variant: 'outlined',
    type: 'tel',
  },
}

export const UrlInput: Story = {
  args: {
    label: 'URL Input',
    placeholder: 'URL을 입력하세요',
    variant: 'outlined',
    type: 'url',
  },
}

// 비밀번호 토글 기능이 있는 Input
export const PasswordWithToggle: Story = {
  render: () => {
    const [showPassword, setShowPassword] = useState(false)
    
    return (
      <div className="relative">
        <Input
          label="비밀번호"
          placeholder="비밀번호를 입력하세요"
          variant="outlined"
          type={showPassword ? 'text' : 'password'}
        />
        <button
          type="button"
          className="absolute right-3 top-8 text-gray-500 hover:text-gray-700"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
        </button>
      </div>
    )
  },
}

// 아이콘이 있는 Input (CSS로 구현)
export const WithIcon: Story = {
  render: () => (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
      <Input
        label="Search Input"
        placeholder="검색어를 입력하세요"
        variant="outlined"
        className="pl-10"
      />
    </div>
  ),
}

// 모든 Variant 비교
export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <Input
        label="Default"
        placeholder="Default 스타일"
        variant="default"
      />
      <Input
        label="Outlined"
        placeholder="Outlined 스타일"
        variant="outlined"
      />
      <Input
        label="Filled"
        placeholder="Filled 스타일"
        variant="filled"
      />
      <Input
        label="Standard"
        placeholder="Standard 스타일"
        variant="standard"
      />
    </div>
  ),
}

// 모든 Size 비교
export const AllSizes: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <Input
        label="Small"
        placeholder="Small 크기"
        variant="outlined"
        size="small"
      />
      <Input
        label="Medium"
        placeholder="Medium 크기"
        variant="outlined"
        size="medium"
      />
      <Input
        label="Large"
        placeholder="Large 크기"
        variant="outlined"
        size="large"
      />
    </div>
  ),
}

// 모든 Input 타입 비교
export const AllTypes: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <Input
        label="Text"
        placeholder="텍스트 입력"
        variant="outlined"
        type="text"
      />
      <Input
        label="Email"
        placeholder="이메일 입력"
        variant="outlined"
        type="email"
      />
      <Input
        label="Password"
        placeholder="비밀번호 입력"
        variant="outlined"
        type="password"
      />
      <Input
        label="Number"
        placeholder="숫자 입력"
        variant="outlined"
        type="number"
      />
      <Input
        label="Tel"
        placeholder="전화번호 입력"
        variant="outlined"
        type="tel"
      />
      <Input
        label="URL"
        placeholder="URL 입력"
        variant="outlined"
        type="url"
      />
    </div>
  ),
}

// Form 예시
export const FormExample: Story = {
  render: () => (
    <form className="space-y-4 w-80">
      <Input
        label="이름"
        placeholder="이름을 입력하세요"
        variant="outlined"
        required
      />
      <Input
        label="이메일"
        placeholder="이메일을 입력하세요"
        variant="outlined"
        type="email"
        required
      />
      <Input
        label="비밀번호"
        placeholder="비밀번호를 입력하세요"
        variant="outlined"
        type="password"
        required
      />
      <Input
        label="전화번호"
        placeholder="전화번호를 입력하세요"
        variant="outlined"
        type="tel"
      />
    </form>
  ),
}

// 에러 상태가 있는 Form
export const FormWithErrors: Story = {
  render: () => (
    <form className="space-y-4 w-80">
      <Input
        label="이름"
        placeholder="이름을 입력하세요"
        variant="outlined"
        error
        helperText="이름은 필수입니다"
      />
      <Input
        label="이메일"
        placeholder="이메일을 입력하세요"
        variant="outlined"
        type="email"
        error
        helperText="올바른 이메일 형식이 아닙니다"
      />
      <Input
        label="비밀번호"
        placeholder="비밀번호를 입력하세요"
        variant="outlined"
        type="password"
        helperText="8자 이상 입력하세요"
      />
    </form>
  ),
}
