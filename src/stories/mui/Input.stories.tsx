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
    docs: {
      description: {
        component: `# Input (TextField)

Material-UI TextField component for text input, built on top of the Input component.

## Basic Input

The TextField component is a complete form control including a label, input, and help text.

### Variant Usage Guide

#### Outlined Input
- **Purpose**: Most common input style
- **Usage**: Forms, data entry, general text input
- **Visual**: Border around the input field
- **Best for**: Standard form interfaces

#### Filled Input
- **Purpose**: Material Design filled variant
- **Usage**: Dense interfaces, mobile applications
- **Visual**: Filled background with underline
- **Best for**: Compact layouts, mobile-first designs

#### Standard Input
- **Purpose**: Minimal input style
- **Usage**: Simple forms, basic interfaces
- **Visual**: Underline only, no border
- **Best for**: Clean, minimal interfaces

### Input Types

#### Text Input
- **Purpose**: General text entry
- **Usage**: Names, descriptions, general content
- **Features**: Standard text input with validation

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

#### Small Size
- **Purpose**: Compact interfaces with limited space
- **Usage**: Dense layouts, mobile interfaces, sidebars
- **Visual**: Reduced padding and smaller text

#### Medium Size
- **Purpose**: Standard input size for most use cases
- **Usage**: Main content areas, standard interfaces
- **Visual**: Balanced padding and readable text

### Color System

#### Primary Color
- **Purpose**: Main brand color for inputs
- **Usage**: Primary form fields, important inputs
- **Visual**: Primary color for focus and validation

#### Secondary Color
- **Purpose**: Secondary brand color
- **Usage**: Supporting form fields, alternative styling
- **Visual**: Secondary color for focus and validation

#### Error Color
- **Purpose**: Error and validation states
- **Usage**: Invalid inputs, form validation
- **Visual**: Red color scheme for error indication

### States and Validation

#### Default State
- **Purpose**: Normal interactive input
- **Visual**: Standard styling with focus effects
- **Usage**: Most input scenarios

#### Error State
- **Purpose**: Indicate validation errors
- **Visual**: Red border and error styling
- **Usage**: Form validation, user feedback
- **Implementation**: \`error={true}\` prop

#### Disabled State
- **Purpose**: Non-interactive inputs
- **Visual**: Muted colors and disabled cursor
- **Usage**: Read-only data, conditional inputs

#### Required State
- **Purpose**: Indicate mandatory inputs
- **Visual**: Asterisk (*) indicator
- **Usage**: Form validation, user guidance

### Icon Integration

#### Start Adornment
- **Purpose**: Visual context for input purpose
- **Usage**: Search inputs, category selection, visual cues
- **Implementation**: \`InputProps={{ startAdornment: <Search /> }}\`

#### End Adornment
- **Purpose**: Action buttons or status indicators
- **Usage**: Password visibility toggle, clear button, status icons
- **Implementation**: \`InputProps={{ endAdornment: <IconButton><Visibility /></IconButton> }}\`

### Advanced Features

#### Multiline Input
- **Purpose**: Multi-line text entry
- **Usage**: Comments, descriptions, long-form content
- **Implementation**: \`multiline={true} rows={4}\`

#### Full Width
- **Purpose**: Inputs that span full container width
- **Usage**: Form layouts, responsive designs
- **Implementation**: \`fullWidth={true}\`

#### Helper Text
- **Purpose**: Provide additional context or instructions
- **Usage**: Complex inputs, validation hints, format examples
- **Implementation**: \`helperText="Password must be 8+ characters"\`

### Accessibility Features

- **Keyboard Navigation**: Full keyboard support
- **Screen Reader Support**: Proper ARIA labels and descriptions
- **Focus Management**: Clear focus indicators
- **Error Announcements**: Screen reader error feedback
- **Label Association**: Proper label-input relationships
- **Color Contrast**: Meets WCAG accessibility standards

### Form Integration

#### FormControl Usage
- **Purpose**: Advanced form control with custom styling
- **Usage**: Complex forms, custom validation
- **Implementation**: \`<FormControl><InputLabel>Label</InputLabel><OutlinedInput /></FormControl>\`

#### Validation Patterns
- **Real-time Validation**: Validate on change or blur
- **Error Messages**: Clear, actionable error text
- **Success States**: Positive feedback for valid inputs
- **Loading States**: Show progress during validation

### Best Practices

1. **Use appropriate variants** for your design system
2. **Provide clear labels** for all form inputs
3. **Include helper text** for complex or specific requirements
4. **Use proper input types** for better mobile experience
5. **Implement validation feedback** for user guidance
6. **Test keyboard navigation** for accessibility compliance
7. **Consider touch targets** for mobile interfaces

### Common Patterns

#### Login Forms
- **Email Input**: \`type="email" variant="outlined"\`
- **Password Input**: \`type="password" variant="outlined"\`
- **Validation**: Real-time email format validation

#### Contact Forms
- **Name Input**: \`variant="outlined" required\`
- **Email Input**: \`type="email" variant="outlined" required\`
- **Message Input**: \`multiline rows={4} variant="outlined"\`

#### Search Interfaces
- **Search Input**: \`startAdornment={<Search />} variant="outlined"\`
- **Filter Inputs**: \`variant="outlined" size="small"\`

#### Settings Forms
- **Text Inputs**: \`variant="outlined" fullWidth\`
- **Number Inputs**: \`type="number" variant="outlined"\`
- **URL Inputs**: \`type="url" variant="outlined"\``,
      },
    },
  },
  tags: ['autodocs'],
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
