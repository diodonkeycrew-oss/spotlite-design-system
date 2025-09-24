import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from '../../components/ui/typography';

const meta: Meta<typeof Typography> = {
  title: 'shadcn/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Spotlite 디자인 시스템의 shadcn/ui Typography 컴포넌트입니다. MUI 테마와 매칭된 커스텀 variant와 color 옵션을 제공합니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [
        'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
        'body1', 'body2', 'caption',
        'spotliteBody', 'spotliteBodyStrong',
        'spotliteCaption', 'spotliteCaptionStrong', 'spotliteCaptionSmall'
      ],
      description: 'Typography의 스타일 variant',
    },
    color: {
      control: { type: 'select' },
      options: [
        'primary', 'secondary', 'accent', 'minor', 'negative',
        'line', 'success', 'warning', 'error', 'info'
      ],
      description: 'Typography의 색상',
    },
    as: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'div'],
      description: '렌더링할 HTML 태그',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 Typography
export const Default: Story = {
  args: {
    children: '기본 Typography 텍스트입니다.',
  },
};

// Heading variants
export const H1: Story = {
  args: {
    variant: 'h1',
    children: 'H1 제목입니다',
  },
};

export const H2: Story = {
  args: {
    variant: 'h2',
    children: 'H2 제목입니다',
  },
};

export const H3: Story = {
  args: {
    variant: 'h3',
    children: 'H3 제목입니다',
  },
};

export const H4: Story = {
  args: {
    variant: 'h4',
    children: 'H4 제목입니다',
  },
};

export const H5: Story = {
  args: {
    variant: 'h5',
    children: 'H5 제목입니다',
  },
};

export const H6: Story = {
  args: {
    variant: 'h6',
    children: 'H6 제목입니다',
  },
};

// Body variants
export const Body1: Story = {
  args: {
    variant: 'body1',
    children: 'Body1 텍스트입니다. 이것은 일반적인 본문 텍스트입니다.',
  },
};

export const Body2: Story = {
  args: {
    variant: 'body2',
    children: 'Body2 텍스트입니다. 이것은 작은 본문 텍스트입니다.',
  },
};

// Caption variants
export const Caption: Story = {
  args: {
    variant: 'caption',
    children: 'Caption 텍스트입니다.',
  },
};

// Spotlite 커스텀 variants
export const SpotliteBody: Story = {
  args: {
    variant: 'spotliteBody',
    children: 'Spotlite Body 텍스트입니다.',
  },
};

export const SpotliteBodyStrong: Story = {
  args: {
    variant: 'spotliteBodyStrong',
    children: 'Spotlite Body Strong 텍스트입니다.',
  },
};

export const SpotliteCaption: Story = {
  args: {
    variant: 'spotliteCaption',
    children: 'Spotlite Caption 텍스트입니다.',
  },
};

export const SpotliteCaptionStrong: Story = {
  args: {
    variant: 'spotliteCaptionStrong',
    children: 'Spotlite Caption Strong 텍스트입니다.',
  },
};

export const SpotliteCaptionSmall: Story = {
  args: {
    variant: 'spotliteCaptionSmall',
    children: 'Spotlite Caption Small 텍스트입니다.',
  },
};

// Color variants
export const PrimaryColor: Story = {
  args: {
    variant: 'h3',
    color: 'primary',
    children: 'Primary 색상 텍스트입니다.',
  },
};

export const SecondaryColor: Story = {
  args: {
    variant: 'h3',
    color: 'secondary',
    children: 'Secondary 색상 텍스트입니다.',
  },
};

export const LineColor: Story = {
  args: {
    variant: 'h3',
    color: 'line',
    children: 'Line 색상 텍스트입니다.',
  },
};

export const ErrorColor: Story = {
  args: {
    variant: 'h3',
    color: 'error',
    children: 'Error 색상 텍스트입니다.',
  },
};

// Custom HTML tag
export const CustomTag: Story = {
  args: {
    variant: 'h1',
    as: 'div',
    children: 'H1 스타일이지만 div 태그로 렌더링됩니다.',
  },
};

// 모든 variant 보기
export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <Typography variant="h1">H1 제목</Typography>
      <Typography variant="h2">H2 제목</Typography>
      <Typography variant="h3">H3 제목</Typography>
      <Typography variant="h4">H4 제목</Typography>
      <Typography variant="h5">H5 제목</Typography>
      <Typography variant="h6">H6 제목</Typography>
      <Typography variant="body1">Body1 텍스트</Typography>
      <Typography variant="body2">Body2 텍스트</Typography>
      <Typography variant="caption">Caption 텍스트</Typography>
      <Typography variant="spotliteBody">Spotlite Body 텍스트</Typography>
      <Typography variant="spotliteBodyStrong">Spotlite Body Strong 텍스트</Typography>
      <Typography variant="spotliteCaption">Spotlite Caption 텍스트</Typography>
      <Typography variant="spotliteCaptionStrong">Spotlite Caption Strong 텍스트</Typography>
      <Typography variant="spotliteCaptionSmall">Spotlite Caption Small 텍스트</Typography>
    </div>
  ),
};
