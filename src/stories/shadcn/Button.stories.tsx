import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../../components/ui/button';

const meta: Meta<typeof Button> = {
  title: 'shadcn/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `# Button

Buttons allow users to take actions, and make choices, with a single tap.

Buttons communicate actions that users can take. They are typically placed throughout your UI, in places like:

- Modal windows
- Forms
- Cards
- Toolbars

## Basic button

The Button comes with multiple variants: default, destructive, outline, secondary, ghost, link, and custom Spotlite variants.

### Variant Usage Guide

#### Default Button
- **Purpose**: Primary actions that are the main focus
- **Usage**: Submit forms, confirm actions, primary CTAs
- **Visual**: Solid background with high emphasis

#### Secondary Button
- **Purpose**: Secondary actions that support primary actions
- **Usage**: Cancel buttons, alternative actions, secondary CTAs
- **Visual**: Muted background with medium emphasis

#### Outline Button
- **Purpose**: Important actions that aren't primary
- **Usage**: Alternative to primary buttons, secondary navigation
- **Visual**: Border with transparent background

#### Ghost Button
- **Purpose**: Subtle actions with minimal visual weight
- **Usage**: Toolbar actions, card actions, subtle interactions
- **Visual**: Transparent background, appears on hover

#### Link Button
- **Purpose**: Navigation actions that look like links
- **Usage**: Navigation links, external links, text-based actions
- **Visual**: Text-only appearance with underline on hover

#### Destructive Button
- **Purpose**: Dangerous or destructive actions
- **Usage**: Delete actions, remove items, destructive operations
- **Visual**: Red/destructive color scheme

#### Spotlite Custom Variants
- **spotlite**: Custom primary button for Spotlite branding
- **spotliteLogin**: Special login button with Spotlite styling

## Sizes

- **sm**: Small buttons for compact spaces
- **default**: Standard button size
- **lg**: Large buttons for emphasis
- **xlarge**: Extra large buttons for hero sections
- **icon**: Square buttons for icons only

## States

- **Default**: Normal interactive state
- **Disabled**: Non-interactive state for unavailable actions
- **Loading**: Shows loading state during async operations

## Accessibility

- All buttons are keyboard accessible
- Screen reader friendly with proper ARIA labels
- Focus indicators for keyboard navigation
- Proper semantic HTML structure`,
      },
      source: {
        type: 'code',
        language: 'tsx',
        format: true,
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
  parameters: {
    docs: {
      source: {
        code: `<Button variant="default">Primary Button</Button>`,
      },
    },
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

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        <Button variant="default">Default Button</Button>
        <Button variant="secondary">Secondary Button</Button>
        <Button variant="outline">Outline Button</Button>
      </div>
      <div className="flex gap-2">
        <Button variant="ghost">Ghost Button</Button>
        <Button variant="link">Link Button</Button>
        <Button variant="destructive">Destructive Button</Button>
      </div>
      <div className="flex gap-2">
        <Button variant="spotlite">Spotlite Button</Button>
        <Button variant="spotliteLogin">Spotlite Login</Button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: `<div className="flex flex-col gap-4">
  <div className="flex gap-2">
    <Button variant="default">Default Button</Button>
    <Button variant="secondary">Secondary Button</Button>
    <Button variant="outline">Outline Button</Button>
  </div>
  <div className="flex gap-2">
    <Button variant="ghost">Ghost Button</Button>
    <Button variant="link">Link Button</Button>
    <Button variant="destructive">Destructive Button</Button>
  </div>
  <div className="flex gap-2">
    <Button variant="spotlite">Spotlite Button</Button>
    <Button variant="spotliteLogin">Spotlite Login</Button>
  </div>
</div>`,
      },
    },
  },
};
