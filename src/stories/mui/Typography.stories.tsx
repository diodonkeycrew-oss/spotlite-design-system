import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from '@mui/material';

const meta: Meta<typeof Typography> = {
  title: 'MUI/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Material-UI Typography 컴포넌트입니다. 텍스트 스타일링을 위한 다양한 variant를 제공합니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'caption', 'button', 'overline'],
      description: '텍스트의 variant',
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'error', 'info', 'success', 'warning', 'text.primary', 'text.secondary'],
      description: '텍스트의 색상',
    },
    align: {
      control: { type: 'select' },
      options: ['left', 'center', 'right', 'justify'],
      description: '텍스트 정렬',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Heading1: Story = {
  args: {
    variant: 'h1',
    children: 'Heading 1',
  },
};

export const Heading2: Story = {
  args: {
    variant: 'h2',
    children: 'Heading 2',
  },
};

export const Heading3: Story = {
  args: {
    variant: 'h3',
    children: 'Heading 3',
  },
};

export const Body1: Story = {
  args: {
    variant: 'body1',
    children: 'Body 1 텍스트입니다. 일반적인 본문 텍스트에 사용됩니다.',
  },
};

export const Body2: Story = {
  args: {
    variant: 'body2',
    children: 'Body 2 텍스트입니다. 보조 텍스트나 설명에 사용됩니다.',
  },
};

export const Caption: Story = {
  args: {
    variant: 'caption',
    children: 'Caption 텍스트입니다.',
  },
};

export const Button: Story = {
  args: {
    variant: 'button',
    children: 'BUTTON TEXT',
  },
};

export const Colored: Story = {
  args: {
    variant: 'h4',
    color: 'primary',
    children: 'Primary Color Text',
  },
};

export const Centered: Story = {
  args: {
    variant: 'h5',
    align: 'center',
    children: 'Centered Text',
  },
};
