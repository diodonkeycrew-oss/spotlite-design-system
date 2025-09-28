import type { Meta, StoryObj } from '@storybook/react';
import { Chip, Avatar, Stack, Box } from '@mui/material';
import { Face, Done } from '@mui/icons-material';

const meta: Meta<typeof Chip> = {
  title: 'MUI/Chip',
  component: Chip,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Spotlite 디자인 시스템의 Material-UI Chip 컴포넌트입니다. fontWeight가 700으로 설정되고 커스텀 색상 옵션을 제공합니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['filled', 'outlined'],
      description: 'Chip의 스타일 variant',
    },
    color: {
      control: { type: 'select' },
      options: ['default', 'primary', 'secondary', 'error', 'info', 'success', 'warning', 'accent', 'minor', 'negative'],
      description: 'Chip의 색상 (커스텀 컬러 포함)',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium'],
      description: 'Chip의 크기',
    },
    clickable: {
      control: { type: 'boolean' },
      description: '클릭 가능 여부',
    },
    disabled: {
      control: { type: 'boolean' },
      description: '비활성화 여부',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 Chip들
export const Default: Story = {
  args: {
    label: 'Default Chip',
  },
};

export const Primary: Story = {
  args: {
    label: 'Primary Chip',
    color: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary Chip',
    color: 'secondary',
  },
};

export const Error: Story = {
  args: {
    label: 'Error Chip',
    color: 'error',
  },
};

export const Info: Story = {
  args: {
    label: 'Info Chip',
    color: 'info',
  },
};

export const Success: Story = {
  args: {
    label: 'Success Chip',
    color: 'success',
  },
};

export const Warning: Story = {
  args: {
    label: 'Warning Chip',
    color: 'warning',
  },
};

// Spotlite 커스텀 색상 Chip들
export const Accent: Story = {
  args: {
    label: 'Accent Chip',
    color: 'accent',
  },
};

export const Minor: Story = {
  args: {
    label: 'Minor Chip',
    color: 'minor',
  },
};

export const Negative: Story = {
  args: {
    label: 'Negative Chip',
    color: 'negative',
  },
};

// Variant별 Chip들
export const Filled: Story = {
  args: {
    label: 'Filled Chip',
    variant: 'filled',
    color: 'primary',
  },
};

export const Outlined: Story = {
  args: {
    label: 'Outlined Chip',
    variant: 'outlined',
    color: 'primary',
  },
};

// 크기별 Chip들
export const Small: Story = {
  args: {
    label: 'Small Chip',
    size: 'small',
    color: 'primary',
  },
};

export const Medium: Story = {
  args: {
    label: 'Medium Chip',
    size: 'medium',
    color: 'primary',
  },
};

// 클릭 가능한 Chip들
export const Clickable: Story = {
  args: {
    label: 'Clickable Chip',
    clickable: true,
    color: 'primary',
    onClick: () => alert('Chip clicked!'),
  },
};

export const ClickableOutlined: Story = {
  args: {
    label: 'Clickable Outlined',
    clickable: true,
    variant: 'outlined',
    color: 'accent',
    onClick: () => alert('Outlined chip clicked!'),
  },
};

// 삭제 가능한 Chip들
export const Deletable: Story = {
  args: {
    label: 'Deletable Chip',
    color: 'primary',
    onDelete: () => alert('Chip deleted!'),
  },
};

export const DeletableOutlined: Story = {
  args: {
    label: 'Deletable Outlined',
    variant: 'outlined',
    color: 'secondary',
    onDelete: () => alert('Outlined chip deleted!'),
  },
};

// 아이콘이 있는 Chip들
export const WithIcon: Story = {
  args: {
    label: 'With Icon',
    icon: <Face />,
    color: 'primary',
  },
};

export const WithDeleteIcon: Story = {
  args: {
    label: 'With Delete Icon',
    deleteIcon: <Done />,
    color: 'success',
    onDelete: () => alert('Custom delete icon clicked!'),
  },
};

// 아바타가 있는 Chip들
export const WithAvatar: Story = {
  args: {
    label: 'With Avatar',
    avatar: <Avatar>A</Avatar>,
    color: 'primary',
  },
};

export const WithImageAvatar: Story = {
  args: {
    label: 'Image Avatar',
    avatar: <Avatar src="https://via.placeholder.com/40" alt="Avatar" />,
    color: 'secondary',
  },
};

// 상태별 Chip들
export const Disabled: Story = {
  args: {
    label: 'Disabled Chip',
    disabled: true,
    color: 'primary',
  },
};

export const DisabledClickable: Story = {
  args: {
    label: 'Disabled Clickable',
    disabled: true,
    clickable: true,
    color: 'primary',
  },
};

export const DisabledDeletable: Story = {
  args: {
    label: 'Disabled Deletable',
    disabled: true,
    color: 'primary',
    onDelete: () => alert('This should not trigger!'),
  },
};

// 모든 컬러 조합 예시
export const AllColors: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 600 }}>
      <Stack direction="row" spacing={1} flexWrap="wrap">
        <Chip label="Default" />
        <Chip label="Primary" color="primary" />
        <Chip label="Secondary" color="secondary" />
        <Chip label="Error" color="error" />
        <Chip label="Info" color="info" />
        <Chip label="Success" color="success" />
        <Chip label="Warning" color="warning" />
      </Stack>
      <Stack direction="row" spacing={1} flexWrap="wrap">
        <Chip label="Accent" color="accent" />
        <Chip label="Minor" color="minor" />
        <Chip label="Negative" color="negative" />
      </Stack>
      <Stack direction="row" spacing={1} flexWrap="wrap">
        <Chip label="Outlined Default" variant="outlined" />
        <Chip label="Outlined Primary" variant="outlined" color="primary" />
        <Chip label="Outlined Accent" variant="outlined" color="accent" />
        <Chip label="Outlined Minor" variant="outlined" color="minor" />
        <Chip label="Outlined Negative" variant="outlined" color="negative" />
      </Stack>
    </Box>
  ),
};

// 다양한 기능 조합 예시
export const VariousFeatures: Story = {
  render: () => (
    <Stack direction="column" spacing={2}>
      <Stack direction="row" spacing={1} flexWrap="wrap">
        <Chip label="Basic" />
        <Chip label="Clickable" clickable onClick={() => alert('Clicked!')} />
        <Chip label="Deletable" onDelete={() => alert('Deleted!')} />
        <Chip label="Both" clickable onDelete={() => alert('Deleted!')} onClick={() => alert('Clicked!')} />
      </Stack>
      <Stack direction="row" spacing={1} flexWrap="wrap">
        <Chip label="With Icon" icon={<Face />} />
        <Chip label="With Avatar" avatar={<Avatar>A</Avatar>} />
        <Chip label="Small Size" size="small" />
        <Chip label="Disabled" disabled />
      </Stack>
    </Stack>
  ),
};