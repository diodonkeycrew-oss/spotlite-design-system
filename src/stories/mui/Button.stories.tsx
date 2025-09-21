import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@mui/material';

const meta: Meta<typeof Button> = {
  title: 'MUI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Material-UI Button 컴포넌트입니다. 다양한 variant와 color 옵션을 제공합니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['text', 'outlined', 'contained'],
      description: '버튼의 스타일 variant',
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'error', 'info', 'success', 'warning'],
      description: '버튼의 색상',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
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

export const Large: Story = {
  args: {
    size: 'large',
    variant: 'contained',
    color: 'primary',
    children: 'Large Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    variant: 'contained',
    color: 'primary',
    children: 'Small Button',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    variant: 'contained',
    color: 'primary',
    children: 'Disabled Button',
  },
};
