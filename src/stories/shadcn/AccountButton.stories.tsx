import type { Meta, StoryObj } from "@storybook/react"
import { AccountButton } from "@/components/ui/account-button"

const meta: Meta<typeof AccountButton> = {
  title: "shadcn/AccountButton",
  component: AccountButton,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `# AccountButton

Specialized button component for account-related actions and social integrations.

## Basic AccountButton

The AccountButton component provides specialized variants for account management, social login, and user interface actions.

### Variant Usage Guide

#### Line Integration Variants

##### Line Connect
- **Purpose**: Connect LINE account for social login
- **Usage**: Social authentication, account linking
- **Visual**: LINE brand colors and styling
- **Behavior**: Initiates LINE OAuth flow

##### Line Disconnect
- **Purpose**: Disconnect LINE account
- **Usage**: Account management, privacy settings
- **Visual**: Destructive styling to indicate removal
- **Behavior**: Removes LINE account connection

#### Search Variants

##### Search
- **Purpose**: Initiate search functionality
- **Usage**: Search interfaces, filter controls
- **Visual**: Search icon with appropriate styling
- **Behavior**: Opens search interface or triggers search

##### Search Selected
- **Purpose**: Indicate active search state
- **Usage**: Active search filters, current search context
- **Visual**: Highlighted state to show selection
- **Behavior**: Shows current search state

#### Option Variants

##### Option
- **Purpose**: Display available options
- **Usage**: Settings menus, configuration options
- **Visual**: Standard option styling
- **Behavior**: Opens options menu or panel

##### Option Selected
- **Purpose**: Indicate selected option
- **Usage**: Active settings, current configuration
- **Visual**: Highlighted state to show selection
- **Behavior**: Shows current option state

### Sizes

- **default**: Standard button size for most use cases
- **sm**: Small buttons for compact interfaces
- **lg**: Large buttons for emphasis
- **xlarge**: Extra large buttons for hero sections
- **icon**: Square buttons for icon-only display

### Use Cases

#### Social Authentication
- **Line Connect**: Primary social login option
- **Line Disconnect**: Account management interface
- **Benefits**: Streamlined social integration

#### Search Interfaces
- **Search Button**: Initiate search actions
- **Search Selected**: Show active search state
- **Benefits**: Clear search state indication

#### Settings and Options
- **Option Button**: Access configuration
- **Option Selected**: Show current settings
- **Benefits**: Intuitive option management

### Accessibility Features

- **Keyboard Navigation**: Full keyboard support
- **Screen Reader Support**: Proper ARIA labels and descriptions
- **Focus Management**: Clear focus indicators
- **State Announcements**: Screen reader feedback for button states
- **Color Contrast**: Meets WCAG accessibility standards

### Integration Guidelines

#### Social Login Flow
1. **Connect State**: Show "Connect LINE" button
2. **Loading State**: Show loading indicator during OAuth
3. **Connected State**: Show "Disconnect LINE" option
4. **Error Handling**: Provide clear error messages

#### Search Implementation
1. **Default State**: Show search button
2. **Active State**: Show selected search state
3. **Results State**: Maintain search context
4. **Clear State**: Allow search reset

#### Options Management
1. **Available Options**: Show option buttons
2. **Selected State**: Highlight current selection
3. **Change State**: Allow option modification
4. **Save State**: Confirm option changes

### Best Practices

1. **Use appropriate variants** for specific use cases
2. **Provide clear visual feedback** for button states
3. **Include loading states** for async operations
4. **Handle error states** gracefully
5. **Maintain consistent sizing** across interfaces
6. **Test keyboard navigation** for accessibility

### State Management

- **Loading States**: Show progress during async operations
- **Error States**: Display error messages and recovery options
- **Success States**: Confirm successful operations
- **Disabled States**: Prevent interaction when appropriate`,
      },
      source: {
        type: 'code',
        language: 'tsx',
        format: true,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["line", "lineDisconnect", "search", "searchSelected", "option", "optionSelected"],
      description: "계정 관련 버튼의 스타일 variant",
    },
    size: {
      control: { type: "select" },
      options: ["default", "sm", "lg", "icon", "xlarge"],
      description: "버튼의 크기",
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Line: Story = {
  args: {
    variant: "line",
    children: "Line 로그인",
  },
  parameters: {
    docs: {
      source: {
        code: `<AccountButton variant="line">Line 로그인</AccountButton>`,
      },
    },
  },
}

export const LineDisconnect: Story = {
  args: {
    variant: "lineDisconnect",
    children: "Line 연결 해제",
  },
}

export const Search: Story = {
  args: {
    variant: "search",
    children: "검색",
  },
}

export const SearchSelected: Story = {
  args: {
    variant: "searchSelected",
    children: "선택된 검색",
  },
}

export const Option: Story = {
  args: {
    variant: "option",
    children: "옵션",
  },
}

export const OptionSelected: Story = {
  args: {
    variant: "optionSelected",
    children: "선택된 옵션",
  },
}

export const Small: Story = {
  args: {
    variant: "line",
    size: "sm",
    children: "Small Line",
  },
}

export const Large: Story = {
  args: {
    variant: "line",
    size: "lg",
    children: "Large Line",
  },
}

export const XLarge: Story = {
  args: {
    variant: "line",
    size: "xlarge",
    children: "XLarge Line",
  },
}

export const Icon: Story = {
  args: {
    variant: "line",
    size: "icon",
    children: "L",
  },
}

export const Disabled: Story = {
  args: {
    variant: "line",
    disabled: true,
    children: "Disabled Line",
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        <AccountButton variant="line">Line 로그인</AccountButton>
        <AccountButton variant="lineDisconnect">Line 연결 해제</AccountButton>
      </div>
      <div className="flex gap-2">
        <AccountButton variant="search">검색</AccountButton>
        <AccountButton variant="searchSelected">선택된 검색</AccountButton>
      </div>
      <div className="flex gap-2">
        <AccountButton variant="option">옵션</AccountButton>
        <AccountButton variant="optionSelected">선택된 옵션</AccountButton>
      </div>
    </div>
  ),
}
