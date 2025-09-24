import type { Meta, StoryObj } from '@storybook/react';
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Button
} from '@mui/material';

const meta: Meta<typeof Card> = {
  title: 'mui/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Spotlite 디자인 시스템의 MUI Card 컴포넌트입니다. 테마에 맞춘 스타일링이 적용됩니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: { type: 'text' },
      description: 'Card 내용',
    },
    elevation: {
      control: { type: 'number', min: 0, max: 24 },
      description: 'Card 그림자 레벨',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 Card
export const Default: Story = {
  args: {
    children: (
      <CardContent>
        <Typography variant="body1">
          기본 Card 컴포넌트입니다.
        </Typography>
      </CardContent>
    ),
  },
};

// Card with Header
export const WithHeader: Story = {
  args: {
    children: (
      <>
        <CardHeader>
          <Typography variant="h5" component="h3">
            Card 제목
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Card 설명 텍스트입니다.
          </Typography>
        </CardHeader>
        <CardContent>
          <Typography variant="body1">
            Card 본문 내용입니다.
          </Typography>
        </CardContent>
      </>
    ),
  },
};

// Card with Footer
export const WithFooter: Story = {
  args: {
    children: (
      <>
        <CardContent>
          <Typography variant="body1">
            Card 본문 내용입니다.
          </Typography>
        </CardContent>
        <CardContent sx={{ pt: 0 }}>
          <Button variant="outlined">
            액션 버튼
          </Button>
        </CardContent>
      </>
    ),
  },
};

// Complete Card
export const Complete: Story = {
  args: {
    children: (
      <>
        <CardHeader>
          <Typography variant="h5" component="h3">
            완전한 Card
          </Typography>
          <Typography variant="body2" color="text.secondary">
            헤더, 본문, 푸터가 모두 포함된 Card입니다.
          </Typography>
        </CardHeader>
        <CardContent>
          <Typography variant="body1" paragraph>
            Card 본문 내용입니다. 여러 줄의 텍스트를 포함할 수 있습니다.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            보조 텍스트입니다.
          </Typography>
        </CardContent>
        <CardContent sx={{ pt: 0, display: 'flex', justifyContent: 'space-between' }}>
          <Button variant="outlined">
            취소
          </Button>
          <Button variant="contained">
            확인
          </Button>
        </CardContent>
      </>
    ),
  },
};

// Spotlite themed Card
export const SpotliteThemed: Story = {
  args: {
    children: (
      <>
        <CardHeader>
          <Typography variant="h5" component="h3">
            Spotlite 테마 Card
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Spotlite 디자인 시스템의 테마가 적용된 Card입니다.
          </Typography>
        </CardHeader>
        <CardContent>
          <Typography variant="spotliteBody" paragraph>
            Spotlite Typography가 적용된 본문입니다.
          </Typography>
          <Typography variant="spotliteCaption" color="text.secondary">
            Spotlite Caption 스타일입니다.
          </Typography>
        </CardContent>
        <CardContent sx={{ pt: 0 }}>
          <Button variant="spotlite">
            Spotlite 버튼
          </Button>
        </CardContent>
      </>
    ),
  },
};

// Multiple Cards
export const MultipleCards: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
      <Card>
        <CardHeader>
          <Typography variant="h5" component="h3">
            Card 1
          </Typography>
        </CardHeader>
        <CardContent>
          <Typography variant="body1">
            첫 번째 Card입니다.
          </Typography>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <Typography variant="h5" component="h3">
            Card 2
          </Typography>
        </CardHeader>
        <CardContent>
          <Typography variant="body1">
            두 번째 Card입니다.
          </Typography>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <Typography variant="h5" component="h3">
            Card 3
          </Typography>
        </CardHeader>
        <CardContent>
          <Typography variant="body1">
            세 번째 Card입니다.
          </Typography>
        </CardContent>
      </Card>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};
