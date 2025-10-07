import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../../components/ui/button';

const meta: Meta<typeof Button> = {
  title: 'shadcn/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Spotlite 디자인 시스템의 shadcn/ui Button 컴포넌트입니다. MUI 테마와 매칭된 커스텀 variant와 size 옵션을 제공합니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link', 'spotlite', 'spotliteLogin'],
      description: '버튼의 스타일 variant',
    },
    size: {
      control: { type: 'select' },
      options: ['default', 'sm', 'lg', 'icon', 'xlarge'],
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

// 기본 shadcn 버튼들
export const Primary: Story = {
  args: {
    variant: 'default',
    children: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outline',
    children: 'Outlined Button',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost Button',
  },
};

export const Link: Story = {
  args: {
    variant: 'link',
    children: 'Link Button',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Destructive Button',
  },
};

// Spotlite 커스텀 버튼들
export const Spotlite: Story = {
  args: {
    variant: 'spotlite',
    children: 'Spotlite Button',
  },
};

export const SpotliteLogin: Story = {
  args: {
    variant: 'spotliteLogin',
    children: 'Spotlite Login',
  },
};


// 크기별 버튼들
export const Small: Story = {
  args: {
    size: 'sm',
    variant: 'default',
    children: 'Small Button',
  },
};

export const Medium: Story = {
  args: {
    size: 'default',
    variant: 'default',
    children: 'Medium Button',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    variant: 'default',
    children: 'Large Button',
  },
};

export const XLarge: Story = {
  args: {
    size: 'xlarge',
    variant: 'default',
    children: 'XLarge Button',
  },
};

export const Icon: Story = {
  args: {
    size: 'icon',
    children: '🚀',
  },
};

// 상태별 버튼들
export const Disabled: Story = {
  args: {
    disabled: true,
    variant: 'default',
    children: 'Disabled Button',
  },
};

export const DisabledSpotlite: Story = {
  args: {
    disabled: true,
    variant: 'spotlite',
    children: 'Disabled Spotlite',
  },
};
