import type { Meta, StoryObj } from '@storybook/react';
import {
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
  FormHelperText
} from '@mui/material';
import { useState } from 'react';

const meta: Meta<typeof Radio> = {
  title: 'MUI/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'MUI Radio 컴포넌트 - theme.ts의 모든 variant와 color 지원',
      },
    },
  },
  argTypes: {
    color: {
      control: { type: 'select' },
      options: [
        'primary',
        'secondary',
        'error',
        'info',
        'success',
        'warning',
        'negative',
        'accent',
        'minor',
      ],
      description: 'Radio 색상',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium'],
      description: 'Radio 크기',
    },
    disabled: {
      control: { type: 'boolean' },
      description: '비활성화 상태',
    },
    checked: {
      control: { type: 'boolean' },
      description: '선택 상태',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 Radio 스토리
export const Default: Story = {
  args: {
    color: 'primary',
    size: 'medium',
    disabled: false,
    checked: false,
  },
  render: (args) => (
    <FormControl>
      <FormLabel>기본 Radio</FormLabel>
      <RadioGroup>
        <FormControlLabel
          value="option1"
          control={<Radio {...args} />}
          label="옵션 1"
        />
        <FormControlLabel
          value="option2"
          control={<Radio {...args} />}
          label="옵션 2"
        />
      </RadioGroup>
    </FormControl>
  ),
};

// 색상별 Radio 스토리
export const Colors: Story = {
  render: () => (
    <div className="space-y-4">
      <FormControl>
        <FormLabel>Primary</FormLabel>
        <RadioGroup>
          <FormControlLabel value="primary1" control={<Radio color="primary" />} label="Primary 1" />
          <FormControlLabel value="primary2" control={<Radio color="primary" />} label="Primary 2" />
        </RadioGroup>
      </FormControl>

      <FormControl>
        <FormLabel>Secondary</FormLabel>
        <RadioGroup>
          <FormControlLabel value="secondary1" control={<Radio color="secondary" />} label="Secondary 1" />
          <FormControlLabel value="secondary2" control={<Radio color="secondary" />} label="Secondary 2" />
        </RadioGroup>
      </FormControl>

      <FormControl>
        <FormLabel>Accent</FormLabel>
        <RadioGroup>
          <FormControlLabel value="accent1" control={<Radio color="accent" />} label="Accent 1" />
          <FormControlLabel value="accent2" control={<Radio color="accent" />} label="Accent 2" />
        </RadioGroup>
      </FormControl>

      <FormControl>
        <FormLabel>Negative</FormLabel>
        <RadioGroup>
          <FormControlLabel value="negative1" control={<Radio color="negative" />} label="Negative 1" />
          <FormControlLabel value="negative2" control={<Radio color="negative" />} label="Negative 2" />
        </RadioGroup>
      </FormControl>

      <FormControl>
        <FormLabel>Line</FormLabel>
        <RadioGroup>
          <FormControlLabel value="line1" control={<Radio color="line" />} label="Line 1" />
          <FormControlLabel value="line2" control={<Radio color="line" />} label="Line 2" />
        </RadioGroup>
      </FormControl>
    </div>
  ),
};

// 크기별 Radio 스토리
export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <FormControl>
        <FormLabel>Small</FormLabel>
        <RadioGroup>
          <FormControlLabel value="small1" control={<Radio size="small" />} label="Small Radio 1" />
          <FormControlLabel value="small2" control={<Radio size="small" />} label="Small Radio 2" />
        </RadioGroup>
      </FormControl>

      <FormControl>
        <FormLabel>Medium</FormLabel>
        <RadioGroup>
          <FormControlLabel value="medium1" control={<Radio size="medium" />} label="Medium Radio 1" />
          <FormControlLabel value="medium2" control={<Radio size="medium" />} label="Medium Radio 2" />
        </RadioGroup>
      </FormControl>
    </div>
  ),
};

// 상태별 Radio 스토리
export const States: Story = {
  render: () => (
    <div className="space-y-4">
      <FormControl>
        <FormLabel>Normal</FormLabel>
        <RadioGroup>
          <FormControlLabel value="normal1" control={<Radio />} label="Normal Radio 1" />
          <FormControlLabel value="normal2" control={<Radio />} label="Normal Radio 2" />
        </RadioGroup>
      </FormControl>

      <FormControl>
        <FormLabel>Checked</FormLabel>
        <RadioGroup>
          <FormControlLabel value="checked1" control={<Radio checked />} label="Checked Radio 1" />
          <FormControlLabel value="checked2" control={<Radio />} label="Unchecked Radio 2" />
        </RadioGroup>
      </FormControl>

      <FormControl>
        <FormLabel>Disabled</FormLabel>
        <RadioGroup>
          <FormControlLabel value="disabled1" control={<Radio disabled />} label="Disabled Radio 1" />
          <FormControlLabel value="disabled2" control={<Radio disabled />} label="Disabled Radio 2" />
        </RadioGroup>
      </FormControl>

      <FormControl>
        <FormLabel>Disabled Checked</FormLabel>
        <RadioGroup>
          <FormControlLabel value="disabledChecked1" control={<Radio disabled checked />} label="Disabled Checked 1" />
          <FormControlLabel value="disabledChecked2" control={<Radio disabled />} label="Disabled Unchecked 2" />
        </RadioGroup>
      </FormControl>
    </div>
  ),
};

// 인터랙티브 Radio 스토리
export const Interactive: Story = {
  render: () => {
    const [value, setValue] = useState('option1');

    return (
      <FormControl>
        <FormLabel>인터랙티브 Radio</FormLabel>
        <RadioGroup
          value={value}
          onChange={(e) => setValue(e.target.value)}
        >
          <FormControlLabel value="option1" control={<Radio />} label="옵션 1" />
          <FormControlLabel value="option2" control={<Radio />} label="옵션 2" />
          <FormControlLabel value="option3" control={<Radio />} label="옵션 3" />
        </RadioGroup>
        <FormHelperText>현재 선택된 값: {value}</FormHelperText>
      </FormControl>
    );
  },
};

// 에러 상태 Radio 스토리
export const Error: Story = {
  render: () => (
    <FormControl error>
      <FormLabel>에러 상태 Radio</FormLabel>
      <RadioGroup>
        <FormControlLabel value="error1" control={<Radio color="error" />} label="에러 Radio 1" />
        <FormControlLabel value="error2" control={<Radio color="error" />} label="에러 Radio 2" />
      </RadioGroup>
      <FormHelperText>에러 메시지가 표시됩니다</FormHelperText>
    </FormControl>
  ),
};

// 수직/수평 배치 Radio 스토리
export const Layout: Story = {
  render: () => (
    <div className="space-y-6">
      <FormControl>
        <FormLabel>수직 배치</FormLabel>
        <RadioGroup>
          <FormControlLabel value="vertical1" control={<Radio />} label="수직 옵션 1" />
          <FormControlLabel value="vertical2" control={<Radio />} label="수직 옵션 2" />
          <FormControlLabel value="vertical3" control={<Radio />} label="수직 옵션 3" />
        </RadioGroup>
      </FormControl>

      <FormControl>
        <FormLabel>수평 배치</FormLabel>
        <RadioGroup row>
          <FormControlLabel value="horizontal1" control={<Radio />} label="수평 옵션 1" />
          <FormControlLabel value="horizontal2" control={<Radio />} label="수평 옵션 2" />
          <FormControlLabel value="horizontal3" control={<Radio />} label="수평 옵션 3" />
        </RadioGroup>
      </FormControl>
    </div>
  ),
};

// 사용 예시 스토리
export const Examples: Story = {
  render: () => (
    <div className="space-y-6">
      <FormControl>
        <FormLabel>결제 방법 선택</FormLabel>
        <RadioGroup>
          <FormControlLabel value="card" control={<Radio color="primary" />} label="신용카드" />
          <FormControlLabel value="bank" control={<Radio color="primary" />} label="계좌이체" />
          <FormControlLabel value="kakao" control={<Radio color="primary" />} label="카카오페이" />
          <FormControlLabel value="naver" control={<Radio color="primary" />} label="네이버페이" />
        </RadioGroup>
      </FormControl>

      <FormControl>
        <FormLabel>알림 설정</FormLabel>
        <RadioGroup>
          <FormControlLabel value="all" control={<Radio color="accent" />} label="모든 알림 받기" />
          <FormControlLabel value="important" control={<Radio color="accent" />} label="중요한 알림만" />
          <FormControlLabel value="none" control={<Radio color="accent" />} label="알림 받지 않기" />
        </RadioGroup>
      </FormControl>
    </div>
  ),
};


