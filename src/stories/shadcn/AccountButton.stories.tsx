import type { Meta, StoryObj } from "@storybook/react"
import { AccountButton } from "@/components/ui/account-button"

const meta: Meta<typeof AccountButton> = {
  title: "shadcn/AccountButton",
  component: AccountButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["line", "lineDisconnect", "search", "searchSelected", "option", "optionSelected"],
    },
    size: {
      control: { type: "select" },
      options: ["default", "sm", "lg", "icon", "xlarge"],
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
