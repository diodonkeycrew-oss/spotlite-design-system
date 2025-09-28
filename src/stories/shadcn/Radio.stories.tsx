import type { Meta, StoryObj } from '@storybook/react';
import { RadioGroup, RadioGroupItem } from '../../components/ui/radio';
import { Label } from '../../components/ui/label';
import { useState } from 'react';

const meta: Meta<typeof RadioGroup> = {
  title: 'shadcn/Radio',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'SHADCN Radio 컴포넌트 - MUI와 1:1 매칭되는 variant 구현',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [
        'default',
        'accent',
        'negative',
        'line',
        'minor',
      ],
      description: 'Radio variant',
    },
    size: {
      control: { type: 'select' },
      options: ['default', 'small', 'large'],
      description: 'Radio 크기',
    },
    disabled: {
      control: { type: 'boolean' },
      description: '비활성화 상태',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 Radio 스토리
export const Default: Story = {
  args: {
    variant: 'default',
    size: 'default',
    disabled: false,
  },
  render: (args) => (
    <div className="space-y-2">
      <Label>기본 Radio</Label>
      <RadioGroup defaultValue="option1">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option1" {...args} />
          <Label htmlFor="option1">옵션 1</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option2" {...args} />
          <Label htmlFor="option2">옵션 2</Label>
        </div>
      </RadioGroup>
    </div>
  ),
};

// Variant별 Radio 스토리
export const Variants: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label>Default</Label>
        <RadioGroup defaultValue="default1">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="default1" variant="default" />
            <Label htmlFor="default1">Default 1</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="default2" variant="default" />
            <Label htmlFor="default2">Default 2</Label>
          </div>
        </RadioGroup>
      </div>

      <div className="space-y-2">
        <Label>Accent</Label>
        <RadioGroup defaultValue="accent1">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="accent1" variant="accent" />
            <Label htmlFor="accent1">Accent 1</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="accent2" variant="accent" />
            <Label htmlFor="accent2">Accent 2</Label>
          </div>
        </RadioGroup>
      </div>

      <div className="space-y-2">
        <Label>Negative</Label>
        <RadioGroup defaultValue="negative1">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="negative1" variant="negative" />
            <Label htmlFor="negative1">Negative 1</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="negative2" variant="negative" />
            <Label htmlFor="negative2">Negative 2</Label>
          </div>
        </RadioGroup>
      </div>

      <div className="space-y-2">
        <Label>Line</Label>
        <RadioGroup defaultValue="line1">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="line1" variant="line" />
            <Label htmlFor="line1">Line 1</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="line2" variant="line" />
            <Label htmlFor="line2">Line 2</Label>
          </div>
        </RadioGroup>
      </div>

      <div className="space-y-2">
        <Label>Minor</Label>
        <RadioGroup defaultValue="minor1">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="minor1" variant="minor" />
            <Label htmlFor="minor1">Minor 1</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="minor2" variant="minor" />
            <Label htmlFor="minor2">Minor 2</Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  ),
};

// 크기별 Radio 스토리
export const Sizes: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label>Small</Label>
        <RadioGroup defaultValue="small1">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="small1" size="small" />
            <Label htmlFor="small1">Small Radio 1</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="small2" size="small" />
            <Label htmlFor="small2">Small Radio 2</Label>
          </div>
        </RadioGroup>
      </div>

      <div className="space-y-2">
        <Label>Default</Label>
        <RadioGroup defaultValue="default1">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="default1" size="default" />
            <Label htmlFor="default1">Default Radio 1</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="default2" size="default" />
            <Label htmlFor="default2">Default Radio 2</Label>
          </div>
        </RadioGroup>
      </div>

      <div className="space-y-2">
        <Label>Large</Label>
        <RadioGroup defaultValue="large1">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="large1" size="large" />
            <Label htmlFor="large1">Large Radio 1</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="large2" size="large" />
            <Label htmlFor="large2">Large Radio 2</Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  ),
};

// 상태별 Radio 스토리
export const States: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label>Normal</Label>
        <RadioGroup defaultValue="normal1">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="normal1" />
            <Label htmlFor="normal1">Normal Radio 1</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="normal2" />
            <Label htmlFor="normal2">Normal Radio 2</Label>
          </div>
        </RadioGroup>
      </div>

      <div className="space-y-2">
        <Label>Checked</Label>
        <RadioGroup defaultValue="checked1">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="checked1" />
            <Label htmlFor="checked1">Checked Radio 1</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="checked2" />
            <Label htmlFor="checked2">Unchecked Radio 2</Label>
          </div>
        </RadioGroup>
      </div>

      <div className="space-y-2">
        <Label>Disabled</Label>
        <RadioGroup defaultValue="disabled1" disabled>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="disabled1" disabled />
            <Label htmlFor="disabled1">Disabled Radio 1</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="disabled2" disabled />
            <Label htmlFor="disabled2">Disabled Radio 2</Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  ),
};

// 인터랙티브 Radio 스토리
export const Interactive: Story = {
  render: () => {
    const [value, setValue] = useState('option1');

    return (
      <div className="space-y-2">
        <Label>인터랙티브 Radio</Label>
        <RadioGroup
          value={value}
          onValueChange={setValue}
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option1" />
            <Label htmlFor="option1">옵션 1</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option2" />
            <Label htmlFor="option2">옵션 2</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option3" />
            <Label htmlFor="option3">옵션 3</Label>
          </div>
        </RadioGroup>
        <p className="text-sm text-muted-foreground">현재 선택된 값: {value}</p>
      </div>
    );
  },
};

// 수직/수평 배치 Radio 스토리
export const Layout: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label>수직 배치</Label>
        <RadioGroup defaultValue="vertical1">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="vertical1" />
            <Label htmlFor="vertical1">수직 옵션 1</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="vertical2" />
            <Label htmlFor="vertical2">수직 옵션 2</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="vertical3" />
            <Label htmlFor="vertical3">수직 옵션 3</Label>
          </div>
        </RadioGroup>
      </div>

      <div className="space-y-2">
        <Label>수평 배치</Label>
        <RadioGroup defaultValue="horizontal1" className="flex flex-row space-x-4">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="horizontal1" />
            <Label htmlFor="horizontal1">수평 옵션 1</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="horizontal2" />
            <Label htmlFor="horizontal2">수평 옵션 2</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="horizontal3" />
            <Label htmlFor="horizontal3">수평 옵션 3</Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  ),
};

// 사용 예시 스토리
export const Examples: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label>결제 방법 선택</Label>
        <RadioGroup defaultValue="card">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="card" variant="accent" />
            <Label htmlFor="card">신용카드</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="bank" variant="accent" />
            <Label htmlFor="bank">계좌이체</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="kakao" variant="accent" />
            <Label htmlFor="kakao">카카오페이</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="naver" variant="accent" />
            <Label htmlFor="naver">네이버페이</Label>
          </div>
        </RadioGroup>
      </div>

      <div className="space-y-2">
        <Label>알림 설정</Label>
        <RadioGroup defaultValue="all">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="all" variant="line" />
            <Label htmlFor="all">모든 알림 받기</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="important" variant="line" />
            <Label htmlFor="important">중요한 알림만</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="none" variant="line" />
            <Label htmlFor="none">알림 받지 않기</Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  ),
};

// MUI와 비교 스토리
export const Comparison: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label>MUI Primary vs SHADCN Default</Label>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm font-medium mb-2">MUI Primary</p>
            <RadioGroup defaultValue="mui1">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="mui1" variant="default" />
                <Label htmlFor="mui1">MUI Style 1</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="mui2" variant="default" />
                <Label htmlFor="mui2">MUI Style 2</Label>
              </div>
            </RadioGroup>
          </div>
          <div>
            <p className="text-sm font-medium mb-2">SHADCN Default</p>
            <RadioGroup defaultValue="shadcn1">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="shadcn1" variant="default" />
                <Label htmlFor="shadcn1">SHADCN Style 1</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="shadcn2" variant="default" />
                <Label htmlFor="shadcn2">SHADCN Style 2</Label>
              </div>
            </RadioGroup>
          </div>
        </div>
      </div>
    </div>
  ),
};


