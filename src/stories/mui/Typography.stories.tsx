import type { Meta, StoryObj } from '@storybook/react';
import { SpotliteTypography, SpotliteTypographyExamples } from '../../components/examples/SpotliteTypography';

const meta: Meta<typeof SpotliteTypography> = {
  title: 'mui/Typography',
  component: SpotliteTypography,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Spotlite 디자인 시스템의 MUI Typography 컴포넌트입니다. 커스텀 variant 옵션과 다양한 폰트 패밀리를 지원합니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'h4', 'body', 'bodyStrong', 'caption', 'captionStrong', 'captionSmall'],
      description: 'Typography의 스타일 variant',
    },
    as: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'div'],
      description: '렌더링할 HTML 태그',
    },
    children: {
      control: { type: 'text' },
      description: 'Typography 텍스트 내용',
    },
    className: {
      control: { type: 'text' },
      description: '추가 CSS 클래스',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 Typography
export const Default: Story = {
  args: {
    variant: 'body',
    children: '기본 Typography 텍스트입니다.',
  },
};

// Heading variants
export const H1: Story = {
  args: {
    variant: 'h1',
    as: 'h1',
    children: 'H1 제목입니다',
  },
};

export const H2: Story = {
  args: {
    variant: 'h2',
    as: 'h2',
    children: 'H2 제목입니다',
  },
};

export const H3: Story = {
  args: {
    variant: 'h3',
    as: 'h3',
    children: 'H3 제목입니다',
  },
};

export const H4: Story = {
  args: {
    variant: 'h4',
    as: 'h4',
    children: 'H4 제목입니다',
  },
};

// Body variants
export const Body: Story = {
  args: {
    variant: 'body',
    children: 'Body 텍스트입니다. 이것은 일반적인 본문 텍스트입니다.',
  },
};

export const BodyStrong: Story = {
  args: {
    variant: 'bodyStrong',
    children: 'Body Strong 텍스트입니다. 이것은 강조된 본문 텍스트입니다.',
  },
};

// Caption variants
export const Caption: Story = {
  args: {
    variant: 'caption',
    children: 'Caption 텍스트입니다.',
  },
};

export const CaptionStrong: Story = {
  args: {
    variant: 'captionStrong',
    children: 'Caption Strong 텍스트입니다.',
  },
};

export const CaptionSmall: Story = {
  args: {
    variant: 'captionSmall',
    children: 'Caption Small 텍스트입니다.',
  },
};

// 색상 variants
export const PrimaryColor: Story = {
  args: {
    variant: 'h3',
    className: 'text-spotlite-text-primary',
    children: 'Primary 색상 텍스트입니다.',
  },
};

export const SecondaryColor: Story = {
  args: {
    variant: 'h3',
    className: 'text-spotlite-text-secondary',
    children: 'Secondary 색상 텍스트입니다.',
  },
};

export const AccentColor: Story = {
  args: {
    variant: 'h3',
    className: 'text-accent',
    children: 'Accent 색상 텍스트입니다.',
  },
};

export const NegativeColor: Story = {
  args: {
    variant: 'h3',
    className: 'text-negative',
    children: 'Negative/Error 색상 텍스트입니다.',
  },
};

// 폰트 패밀리 variants
export const MetropolisFont: Story = {
  args: {
    variant: 'body',
    className: 'font-metropolis',
    children: 'Metropolis 폰트 패밀리 텍스트입니다.',
  },
};

export const PretendardFont: Story = {
  args: {
    variant: 'body',
    className: 'font-pretendard',
    children: 'Pretendard 폰트 패밀리 텍스트입니다.',
  },
};

export const RobotoFont: Story = {
  args: {
    variant: 'body',
    className: 'font-roboto',
    children: 'Roboto 폰트 패밀리 텍스트입니다.',
  },
};

export const FigtreeFont: Story = {
  args: {
    variant: 'body',
    className: 'font-figtree',
    children: 'Figtree 폰트 패밀리 텍스트입니다.',
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
  render: () => <SpotliteTypographyExamples />,
  parameters: {
    layout: 'padded',
  },
};
