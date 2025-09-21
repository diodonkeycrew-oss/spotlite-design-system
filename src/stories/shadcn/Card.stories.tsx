import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';

const meta: Meta<typeof Card> = {
  title: 'shadcn/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'shadcn/ui Card 컴포넌트입니다. 콘텐츠를 카드 형태로 표시합니다.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Basic Card</CardTitle>
        <CardDescription>기본 카드 컴포넌트입니다.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>이것은 기본 카드의 콘텐츠 영역입니다.</p>
      </CardContent>
    </Card>
  ),
};

export const WithFooter: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card with Footer</CardTitle>
        <CardDescription>푸터가 있는 카드입니다.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>카드의 메인 콘텐츠 영역입니다.</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Save</Button>
      </CardFooter>
    </Card>
  ),
};

export const Simple: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardContent className="pt-6">
        <div className="text-2xl font-bold">$45,231.89</div>
        <p className="text-xs text-muted-foreground">
          +20.1% from last month
        </p>
      </CardContent>
    </Card>
  ),
};

export const WithImage: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card with Image</CardTitle>
        <CardDescription>이미지가 포함된 카드입니다.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="w-full h-48 bg-muted rounded-md flex items-center justify-center">
          <span className="text-muted-foreground">Image Placeholder</span>
        </div>
        <p className="mt-4">이미지 아래의 설명 텍스트입니다.</p>
      </CardContent>
    </Card>
  ),
};
