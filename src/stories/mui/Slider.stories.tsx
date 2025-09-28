import type { Meta, StoryObj } from '@storybook/react';
import { Slider, Box, Typography, Stack } from '@mui/material';
import { useState } from 'react';

const meta: Meta<typeof Slider> = {
  title: 'MUI/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Spotlite 디자인 시스템의 Material-UI Slider 컴포넌트입니다. markLabel의 색상과 크기가 커스터마이즈되어 있습니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'number' },
      description: 'Slider의 현재 값',
    },
    min: {
      control: { type: 'number' },
      description: '최소값',
    },
    max: {
      control: { type: 'number' },
      description: '최대값',
    },
    step: {
      control: { type: 'number' },
      description: '증감 단위',
    },
    disabled: {
      control: { type: 'boolean' },
      description: '비활성화 여부',
    },
    orientation: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
      description: 'Slider 방향',
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'error', 'info', 'success', 'warning'],
      description: 'Slider의 색상',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 Slider들
export const Default: Story = {
  args: {
    defaultValue: 30,
    min: 0,
    max: 100,
    sx: { width: 300 },
  },
};

export const Primary: Story = {
  args: {
    defaultValue: 50,
    color: 'primary',
    sx: { width: 300 },
  },
};

export const Secondary: Story = {
  args: {
    defaultValue: 40,
    color: 'secondary',
    sx: { width: 300 },
  },
};

export const Error: Story = {
  args: {
    defaultValue: 70,
    color: 'error',
    sx: { width: 300 },
  },
};

export const Info: Story = {
  args: {
    defaultValue: 60,
    color: 'info',
    sx: { width: 300 },
  },
};

export const Success: Story = {
  args: {
    defaultValue: 80,
    color: 'success',
    sx: { width: 300 },
  },
};

export const Warning: Story = {
  args: {
    defaultValue: 90,
    color: 'warning',
    sx: { width: 300 },
  },
};

// Step별 Slider들
export const WithStep: Story = {
  args: {
    defaultValue: 30,
    step: 10,
    min: 0,
    max: 100,
    sx: { width: 300 },
  },
};

export const SmallStep: Story = {
  args: {
    defaultValue: 2.5,
    step: 0.5,
    min: 0,
    max: 5,
    sx: { width: 300 },
  },
};

// Mark가 있는 Slider들 (Spotlite 커스텀 markLabel 스타일 적용)
export const WithMarks: Story = {
  args: {
    defaultValue: 50,
    step: 10,
    marks: true,
    min: 0,
    max: 100,
    sx: { width: 300 },
  },
};

export const WithCustomMarks: Story = {
  args: {
    defaultValue: 30,
    marks: [
      { value: 0, label: '0°C' },
      { value: 20, label: '20°C' },
      { value: 37, label: '37°C' },
      { value: 100, label: '100°C' },
    ],
    min: 0,
    max: 100,
    sx: { width: 300 },
  },
};

export const WithValueMarks: Story = {
  args: {
    defaultValue: 60,
    marks: [
      { value: 0, label: 'Low' },
      { value: 50, label: 'Medium' },
      { value: 100, label: 'High' },
    ],
    min: 0,
    max: 100,
    sx: { width: 300 },
  },
};

// Range Slider들
export const RangeSlider: Story = {
  args: {
    defaultValue: [20, 80],
    min: 0,
    max: 100,
    sx: { width: 300 },
  },
};

export const RangeWithMarks: Story = {
  args: {
    defaultValue: [30, 70],
    marks: true,
    step: 10,
    min: 0,
    max: 100,
    sx: { width: 300 },
  },
};

// 수직 Slider들
export const Vertical: Story = {
  args: {
    defaultValue: 30,
    orientation: 'vertical',
    sx: { height: 200 },
  },
};

export const VerticalWithMarks: Story = {
  args: {
    defaultValue: 50,
    orientation: 'vertical',
    marks: true,
    step: 10,
    min: 0,
    max: 100,
    sx: { height: 200 },
  },
};

// 상태별 Slider들
export const Disabled: Story = {
  args: {
    defaultValue: 30,
    disabled: true,
    sx: { width: 300 },
  },
};

export const DisabledWithMarks: Story = {
  args: {
    defaultValue: 50,
    disabled: true,
    marks: true,
    step: 10,
    sx: { width: 300 },
  },
};

// 제어된 Slider
export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState(30);

    return (
      <Box sx={{ width: 300 }}>
        <Typography gutterBottom>
          현재 값: {value}
        </Typography>
        <Slider
          value={value}
          onChange={(_, newValue) => setValue(newValue as number)}
          min={0}
          max={100}
        />
      </Box>
    );
  },
};

// 모든 색상 조합 예시
export const AllColors: Story = {
  render: () => (
    <Stack spacing={3} sx={{ width: 400 }}>
      <Box>
        <Typography variant="subtitle2" gutterBottom>Primary</Typography>
        <Slider defaultValue={30} color="primary" />
      </Box>
      <Box>
        <Typography variant="subtitle2" gutterBottom>Secondary</Typography>
        <Slider defaultValue={40} color="secondary" />
      </Box>
      <Box>
        <Typography variant="subtitle2" gutterBottom>Error</Typography>
        <Slider defaultValue={50} color="error" />
      </Box>
      <Box>
        <Typography variant="subtitle2" gutterBottom>Info</Typography>
        <Slider defaultValue={60} color="info" />
      </Box>
      <Box>
        <Typography variant="subtitle2" gutterBottom>Success</Typography>
        <Slider defaultValue={70} color="success" />
      </Box>
      <Box>
        <Typography variant="subtitle2" gutterBottom>Warning</Typography>
        <Slider defaultValue={80} color="warning" />
      </Box>
    </Stack>
  ),
};

// 마크 스타일 예시 (Spotlite 커스텀 markLabel 적용)
export const MarkStyles: Story = {
  render: () => (
    <Stack spacing={4} sx={{ width: 400 }}>
      <Box>
        <Typography variant="h6" gutterBottom>
          Spotlite 커스텀 Mark 스타일
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          markLabel의 색상이 secondary.dark, 크기가 0.7rem으로 설정되어 있습니다.
        </Typography>
      </Box>

      <Box>
        <Typography variant="subtitle2" gutterBottom>온도 조절</Typography>
        <Slider
          defaultValue={25}
          marks={[
            { value: 0, label: '0°C' },
            { value: 10, label: '10°C' },
            { value: 20, label: '20°C' },
            { value: 30, label: '30°C' },
            { value: 40, label: '40°C' },
          ]}
          min={0}
          max={40}
          step={5}
        />
      </Box>

      <Box>
        <Typography variant="subtitle2" gutterBottom>볼륨 조절</Typography>
        <Slider
          defaultValue={50}
          marks={[
            { value: 0, label: 'Mute' },
            { value: 25, label: 'Low' },
            { value: 50, label: 'Medium' },
            { value: 75, label: 'High' },
            { value: 100, label: 'Max' },
          ]}
          min={0}
          max={100}
          step={25}
        />
      </Box>

      <Box>
        <Typography variant="subtitle2" gutterBottom>속도 설정</Typography>
        <Slider
          defaultValue={3}
          marks={[
            { value: 1, label: '1x' },
            { value: 2, label: '2x' },
            { value: 3, label: '3x' },
            { value: 4, label: '4x' },
            { value: 5, label: '5x' },
          ]}
          min={1}
          max={5}
          step={1}
        />
      </Box>
    </Stack>
  ),
};

// 다양한 기능 조합 예시
export const VariousFeatures: Story = {
  render: () => (
    <Stack spacing={4} sx={{ width: 400 }}>
      <Box>
        <Typography variant="subtitle2" gutterBottom>기본 Slider</Typography>
        <Slider defaultValue={30} />
      </Box>

      <Box>
        <Typography variant="subtitle2" gutterBottom>Step이 있는 Slider</Typography>
        <Slider defaultValue={30} step={10} marks />
      </Box>

      <Box>
        <Typography variant="subtitle2" gutterBottom>Range Slider</Typography>
        <Slider defaultValue={[20, 70]} />
      </Box>

      <Box>
        <Typography variant="subtitle2" gutterBottom>비활성화된 Slider</Typography>
        <Slider defaultValue={50} disabled />
      </Box>

      <Box>
        <Typography variant="subtitle2" gutterBottom>커스텀 마크와 색상</Typography>
        <Slider
          defaultValue={75}
          color="success"
          marks={[
            { value: 0, label: 'Start' },
            { value: 50, label: 'Middle' },
            { value: 100, label: 'End' },
          ]}
        />
      </Box>
    </Stack>
  ),
};

// 수직 Slider 조합 예시
export const VerticalSliders: Story = {
  render: () => (
    <Box sx={{ display: 'flex', gap: 4, height: 300, alignItems: 'center' }}>
      <Box textAlign="center">
        <Typography variant="subtitle2" gutterBottom>Basic</Typography>
        <Slider
          defaultValue={30}
          orientation="vertical"
          sx={{ height: 200 }}
        />
      </Box>

      <Box textAlign="center">
        <Typography variant="subtitle2" gutterBottom>With Marks</Typography>
        <Slider
          defaultValue={50}
          orientation="vertical"
          marks
          step={10}
          sx={{ height: 200 }}
        />
      </Box>

      <Box textAlign="center">
        <Typography variant="subtitle2" gutterBottom>Range</Typography>
        <Slider
          defaultValue={[30, 70]}
          orientation="vertical"
          sx={{ height: 200 }}
        />
      </Box>

      <Box textAlign="center">
        <Typography variant="subtitle2" gutterBottom>Custom Color</Typography>
        <Slider
          defaultValue={80}
          orientation="vertical"
          color="error"
          marks={[
            { value: 0, label: '0' },
            { value: 50, label: '50' },
            { value: 100, label: '100' },
          ]}
          sx={{ height: 200 }}
        />
      </Box>
    </Box>
  ),
};

// 실제 사용 예시
export const PracticalExample: Story = {
  render: () => {
    const [volume, setVolume] = useState(50);
    const [brightness, setBrightness] = useState(75);
    const [priceRange, setPriceRange] = useState([100, 500]);

    return (
      <Box sx={{ padding: 4, width: 500 }}>
        <Typography variant="h6" gutterBottom>
          실제 사용 예시
        </Typography>

        <Stack spacing={4}>
          {/* 볼륨 조절 */}
          <Box>
            <Typography variant="subtitle2" gutterBottom>
              볼륨: {volume}%
            </Typography>
            <Slider
              value={volume}
              onChange={(_, newValue) => setVolume(newValue as number)}
              marks={[
                { value: 0, label: '🔇' },
                { value: 50, label: '🔉' },
                { value: 100, label: '🔊' },
              ]}
              color="primary"
            />
          </Box>

          {/* 밝기 조절 */}
          <Box>
            <Typography variant="subtitle2" gutterBottom>
              화면 밝기: {brightness}%
            </Typography>
            <Slider
              value={brightness}
              onChange={(_, newValue) => setBrightness(newValue as number)}
              marks={[
                { value: 0, label: '🌑' },
                { value: 50, label: '🌗' },
                { value: 100, label: '🌕' },
              ]}
              color="warning"
            />
          </Box>

          {/* 가격 범위 */}
          <Box>
            <Typography variant="subtitle2" gutterBottom>
              가격 범위: ${priceRange[0]} - ${priceRange[1]}
            </Typography>
            <Slider
              value={priceRange}
              onChange={(_, newValue) => setPriceRange(newValue as number[])}
              min={0}
              max={1000}
              marks={[
                { value: 0, label: '$0' },
                { value: 250, label: '$250' },
                { value: 500, label: '$500' },
                { value: 750, label: '$750' },
                { value: 1000, label: '$1000' },
              ]}
              color="success"
            />
          </Box>
        </Stack>
      </Box>
    );
  },
};