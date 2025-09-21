import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '../../components/ui/badge';

const meta: Meta<typeof Badge> = {
  title: 'shadcn/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'shadcn/ui Badge 컴포넌트입니다. 상태나 라벨을 표시하는 데 사용됩니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'secondary', 'destructive', 'outline'],
      description: '배지의 스타일 variant',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Badge',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Destructive',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline',
  },
};

export const Status: Story = {
  render: () => (
    <div className="flex gap-2">
      <Badge variant="default">Active</Badge>
      <Badge variant="secondary">Pending</Badge>
      <Badge variant="destructive">Error</Badge>
      <Badge variant="outline">Draft</Badge>
    </div>
  ),
};

export const WithNumbers: Story = {
  render: () => (
    <div className="flex gap-2">
      <Badge>1</Badge>
      <Badge variant="secondary">2</Badge>
      <Badge variant="destructive">3</Badge>
      <Badge variant="outline">4</Badge>
    </div>
  ),
};

export const LongText: Story = {
  args: {
    children: 'This is a longer badge text',
  },
};
