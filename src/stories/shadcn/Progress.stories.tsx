import type { Meta, StoryObj } from '@storybook/react';
import { Progress } from '../../components/ui/progress';
import { useEffect, useState } from 'react';

const meta: Meta<typeof Progress> = {
  title: 'shadcn/Progress',
  component: Progress,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Progress value={50} className="w-[300px]" />,
};

export const Zero: Story = {
  render: () => <Progress value={0} className="w-[300px]" />,
};

export const Full: Story = {
  render: () => <Progress value={100} className="w-[300px]" />,
};

export const Animated: Story = {
  render: () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
      const timer = setTimeout(() => setProgress(66), 500);
      return () => clearTimeout(timer);
    }, []);

    return <Progress value={progress} className="w-[300px]" />;
  },
};

export const Indeterminate: Story = {
  render: () => <Progress value={undefined} className="w-[300px]" />,
};
