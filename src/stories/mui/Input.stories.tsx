import type { Meta, StoryObj } from '@storybook/react'
import { 
  TextField, 
  FormControl, 
  InputLabel, 
  OutlinedInput, 
  FilledInput, 
  InputAdornment,
  IconButton
} from '@mui/material'
import { Visibility, VisibilityOff, Search, Person } from '@mui/icons-material'
import { useState } from 'react'

const meta: Meta<typeof TextField> = {
  title: 'MUI/Input',
  component: TextField,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['outlined', 'filled', 'standard'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium'],
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'error', 'info', 'success', 'warning'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    error: {
      control: { type: 'boolean' },
    },
    required: {
      control: { type: 'boolean' },
    },
    fullWidth: {
      control: { type: 'boolean' },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

// 기본 Input 스토리
export const Default: Story = {
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

// 다양한 Color 스토리
export const Primary: Story = {
  args: {
    label: 'Primary Input',
    placeholder: 'Primary 색상',
    variant: 'outlined',
    color: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    label: 'Secondary Input',
    placeholder: 'Secondary 색상',
    variant: 'outlined',
    color: 'secondary',
  },
}

export const Error: Story = {
  args: {
    label: 'Error Input',
    placeholder: '에러 상태',
    variant: 'outlined',
    color: 'error',
    error: true,
    helperText: '에러 메시지입니다',
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

export const Required: Story = {
  args: {
    label: 'Required Input',
    placeholder: '필수 입력 필드',
    variant: 'outlined',
    required: true,
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

// 아이콘이 있는 Input 스토리
export const WithStartIcon: Story = {
  args: {
    label: 'Search Input',
    placeholder: '검색어를 입력하세요',
    variant: 'outlined',
    InputProps: {
      startAdornment: (
        <InputAdornment position="start">
          <Search />
        </InputAdornment>
      ),
    },
  },
}

export const WithEndIcon: Story = {
  args: {
    label: 'User Input',
    placeholder: '사용자명을 입력하세요',
    variant: 'outlined',
    InputProps: {
      endAdornment: (
        <InputAdornment position="end">
          <Person />
        </InputAdornment>
      ),
    },
  },
}

// 비밀번호 Input 스토리
export const PasswordInput: Story = {
  render: () => {
    const [showPassword, setShowPassword] = useState(false)
    
    return (
      <TextField
        label="비밀번호"
        placeholder="비밀번호를 입력하세요"
        variant="outlined"
        type={showPassword ? 'text' : 'password'}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={() => setShowPassword(!showPassword)}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    )
  },
}

// Full Width 스토리
export const FullWidth: Story = {
  args: {
    label: 'Full Width Input',
    placeholder: '전체 너비 입력',
    variant: 'outlined',
    fullWidth: true,
  },
}

// 다중 라인 Input 스토리
export const Multiline: Story = {
  args: {
    label: 'Multiline Input',
    placeholder: '여러 줄 텍스트를 입력하세요',
    variant: 'outlined',
    multiline: true,
    rows: 4,
  },
}

// 숫자 Input 스토리
export const NumberInput: Story = {
  args: {
    label: 'Number Input',
    placeholder: '숫자를 입력하세요',
    variant: 'outlined',
    type: 'number',
  },
}

// 이메일 Input 스토리
export const EmailInput: Story = {
  args: {
    label: 'Email Input',
    placeholder: '이메일을 입력하세요',
    variant: 'outlined',
    type: 'email',
  },
}

// FormControl을 사용한 스토리
export const WithFormControl: Story = {
  render: () => (
    <FormControl variant="outlined" fullWidth>
      <InputLabel>FormControl Input</InputLabel>
      <OutlinedInput
        placeholder="FormControl을 사용한 입력"
        label="FormControl Input"
      />
    </FormControl>
  ),
}

// 모든 Variant 비교
export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <TextField
        label="Outlined"
        placeholder="Outlined 스타일"
        variant="outlined"
        fullWidth
      />
      <TextField
        label="Filled"
        placeholder="Filled 스타일"
        variant="filled"
        fullWidth
      />
      <TextField
        label="Standard"
        placeholder="Standard 스타일"
        variant="standard"
        fullWidth
      />
    </div>
  ),
}

// 모든 Size 비교
export const AllSizes: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <TextField
        label="Small"
        placeholder="Small 크기"
        variant="outlined"
        size="small"
        fullWidth
      />
      <TextField
        label="Medium"
        placeholder="Medium 크기"
        variant="outlined"
        size="medium"
        fullWidth
      />
    </div>
  ),
}
