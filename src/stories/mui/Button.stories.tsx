import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@mui/material';

const meta: Meta<typeof Button> = {
  title: 'MUI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['text', 'outlined', 'contained', 'spotlite', 'spotliteLogin', 'line', 'lineDisconnect', 'search', 'searchSelected', 'option', 'optionSelected'],
      description: '버튼의 스타일 variant',
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'error', 'info', 'success', 'warning', 'negative', 'accent', 'minor'],
      description: '버튼의 색상',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large', 'xlarge'],
      description: '버튼의 크기',
    },
    disabled: {
      control: { type: 'boolean' },
      description: '버튼 비활성화 여부',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 MUI 버튼들
export const Primary: Story = {
  args: {
    variant: 'contained',
    color: 'primary',
    children: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'contained',
    color: 'secondary',
    children: 'Secondary Button',
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    color: 'primary',
    children: 'Outlined Button',
  },
};

export const Text: Story = {
  args: {
    variant: 'text',
    color: 'primary',
    children: 'Text Button',
  },
};

// Spotlite 커스텀 버튼들
export const Spotlite: Story = {
  args: {
    variant: 'spotlite',
    color: 'primary',
    children: 'Spotlite Button',
  },
};

export const SpotliteLogin: Story = {
  args: {
    variant: 'spotliteLogin',
    children: 'Spotlite Login',
  },
};

export const Line: Story = {
  args: {
    variant: 'line',
    children: 'Line Connect',
  },
};

export const LineDisconnect: Story = {
  args: {
    variant: 'lineDisconnect',
    children: 'Line Disconnect',
  },
};

export const Search: Story = {
  args: {
    variant: 'search',
    children: 'Search',
  },
};

export const SearchSelected: Story = {
  args: {
    variant: 'searchSelected',
    children: 'Search Selected',
  },
};

export const Option: Story = {
  args: {
    variant: 'option',
    children: 'Option',
  },
};

export const OptionSelected: Story = {
  args: {
    variant: 'optionSelected',
    children: 'Option Selected',
  },
};

// 크기별 버튼들
export const Small: Story = {
  args: {
    size: 'small',
    variant: 'contained',
    color: 'primary',
    children: 'Small Button',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
    variant: 'contained',
    color: 'primary',
    children: 'Medium Button',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    variant: 'contained',
    color: 'primary',
    children: 'Large Button',
  },
};

export const XLarge: Story = {
  args: {
    size: 'xlarge',
    variant: 'contained',
    color: 'primary',
    children: 'XLarge Button',
  },
};

// 색상별 버튼들
export const Accent: Story = {
  args: {
    variant: 'contained',
    color: 'accent',
    children: 'Accent Button',
  },
};

export const Negative: Story = {
  args: {
    variant: 'contained',
    color: 'negative',
    children: 'Negative Button',
  },
};

export const Minor: Story = {
  args: {
    variant: 'outlined',
    color: 'minor',
    children: 'Minor Button',
  },
};

// 상태별 버튼들
export const Disabled: Story = {
  args: {
    disabled: true,
    variant: 'contained',
    color: 'primary',
    children: 'Disabled Button',
  },
};

export const DisabledSpotlite: Story = {
  args: {
    disabled: true,
    variant: 'spotlite',
    color: 'primary',
    children: 'Disabled Spotlite',
  },
};
