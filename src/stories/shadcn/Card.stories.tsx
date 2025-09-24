import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Typography } from '../../components/ui/typography';

const meta: Meta<typeof Card> = {
  title: 'shadcn/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Spotlite 디자인 시스템의 shadcn/ui Card 컴포넌트입니다. MUI 테마와 매칭된 스타일링이 적용됩니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: { type: 'text' },
      description: 'Card 내용',
    },
    className: {
      control: { type: 'text' },
      description: '추가 CSS 클래스',
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
          <CardTitle>Card 제목</CardTitle>
          <CardDescription>
            Card 설명 텍스트입니다.
          </CardDescription>
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
        <CardFooter>
          <Button variant="outline">
            액션 버튼
          </Button>
        </CardFooter>
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
          <CardTitle>완전한 Card</CardTitle>
          <CardDescription>
            헤더, 본문, 푸터가 모두 포함된 Card입니다.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Typography variant="body1" className="mb-4">
            Card 본문 내용입니다. 여러 줄의 텍스트를 포함할 수 있습니다.
          </Typography>
          <Typography variant="body2" color="secondary">
            보조 텍스트입니다.
          </Typography>
        </CardContent>
        <CardFooter className="justify-between">
          <Button variant="outline">
            취소
          </Button>
          <Button variant="default">
            확인
          </Button>
        </CardFooter>
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
          <CardTitle>Spotlite 테마 Card</CardTitle>
          <CardDescription>
            Spotlite 디자인 시스템의 테마가 적용된 Card입니다.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Typography variant="spotliteBody" className="mb-4">
            Spotlite Typography가 적용된 본문입니다.
          </Typography>
          <Typography variant="spotliteCaption" color="secondary">
            Spotlite Caption 스타일입니다.
          </Typography>
        </CardContent>
        <CardFooter>
          <Button variant="spotlite">
            Spotlite 버튼
          </Button>
        </CardFooter>
      </>
    ),
  },
};

// Multiple Cards
export const MultipleCards: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Card 1</CardTitle>
        </CardHeader>
        <CardContent>
          <Typography variant="body1">
            첫 번째 Card입니다.
          </Typography>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Card 2</CardTitle>
        </CardHeader>
        <CardContent>
          <Typography variant="body1">
            두 번째 Card입니다.
          </Typography>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Card 3</CardTitle>
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

// Color variants
export const PrimaryCard: Story = {
  args: {
    children: (
      <>
        <CardHeader>
          <CardTitle>Primary Card</CardTitle>
          <CardDescription>
            Primary 색상이 적용된 Card입니다.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Typography variant="body1" color="primary">
            Primary 색상 텍스트입니다.
          </Typography>
        </CardContent>
        <CardFooter>
          <Button variant="default">
            Primary 버튼
          </Button>
        </CardFooter>
      </>
    ),
  },
};

export const AccentCard: Story = {
  args: {
    children: (
      <>
        <CardHeader>
          <CardTitle>Accent Card</CardTitle>
          <CardDescription>
            Accent 색상이 적용된 Card입니다.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Typography variant="body1" color="accent">
            Accent 색상 텍스트입니다.
          </Typography>
        </CardContent>
        <CardFooter>
          <Button variant="outline">
            Accent 버튼
          </Button>
        </CardFooter>
      </>
    ),
  },
};

export const LineCard: Story = {
  args: {
    children: (
      <>
        <CardHeader>
          <CardTitle>Line Card</CardTitle>
          <CardDescription>
            Line 색상이 적용된 Card입니다.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Typography variant="body1" color="line">
            Line 색상 텍스트입니다.
          </Typography>
        </CardContent>
        <CardFooter>
          <Button variant="line">
            Line 버튼
          </Button>
        </CardFooter>
      </>
    ),
  },
};
