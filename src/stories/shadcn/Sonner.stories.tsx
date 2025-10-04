import type { Meta, StoryObj } from '@storybook/react';
import { Toaster } from '../../components/ui/sonner';
import { Button } from '../../components/ui/button';
import { toast } from 'sonner';

const meta: Meta<typeof Toaster> = {
  title: 'shadcn/Sonner',
  component: Toaster,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Toaster />
      <Button onClick={() => toast('Event has been created')}>
        Show Toast
      </Button>
    </div>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Toaster />
      <Button
        onClick={() =>
          toast('Event has been created', {
            description: 'Sunday, December 03, 2023 at 9:00 AM',
          })
        }
      >
        Show Toast with Description
      </Button>
    </div>
  ),
};

export const Success: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Toaster />
      <Button onClick={() => toast.success('Event has been created')}>
        Show Success Toast
      </Button>
    </div>
  ),
};

export const Error: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Toaster />
      <Button onClick={() => toast.error('Event creation failed')}>
        Show Error Toast
      </Button>
    </div>
  ),
};

export const Warning: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Toaster />
      <Button onClick={() => toast.warning('Warning: Check your input')}>
        Show Warning Toast
      </Button>
    </div>
  ),
};

export const Info: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Toaster />
      <Button onClick={() => toast.info('New update available')}>
        Show Info Toast
      </Button>
    </div>
  ),
};

export const WithAction: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Toaster />
      <Button
        onClick={() =>
          toast('Event has been created', {
            action: {
              label: 'Undo',
              onClick: () => toast('Undo clicked'),
            },
          })
        }
      >
        Show Toast with Action
      </Button>
    </div>
  ),
};

export const WithCancel: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Toaster />
      <Button
        onClick={() =>
          toast('Event has been created', {
            cancel: {
              label: 'Cancel',
              onClick: () => toast('Cancel clicked'),
            },
          })
        }
      >
        Show Toast with Cancel
      </Button>
    </div>
  ),
};

export const Promise: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Toaster />
      <Button
        onClick={() => {
          const promise = () =>
            new Promise((resolve) => setTimeout(() => resolve({ name: 'Sonner' }), 2000));

          toast.promise(promise, {
            loading: 'Loading...',
            success: (data: any) => {
              return `${data.name} toast has been added`;
            },
            error: 'Error',
          });
        }}
      >
        Show Promise Toast
      </Button>
    </div>
  ),
};

export const AllTypes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Toaster />
      <div className="flex flex-wrap gap-2">
        <Button onClick={() => toast('Default toast')}>Default</Button>
        <Button onClick={() => toast.success('Success toast')}>Success</Button>
        <Button onClick={() => toast.error('Error toast')}>Error</Button>
        <Button onClick={() => toast.warning('Warning toast')}>Warning</Button>
        <Button onClick={() => toast.info('Info toast')}>Info</Button>
      </div>
    </div>
  ),
};
