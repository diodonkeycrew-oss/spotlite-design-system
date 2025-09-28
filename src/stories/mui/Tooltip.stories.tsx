import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip, Button, IconButton, Fab, Box, Stack, Typography } from '@mui/material';
import { Add, Delete, Help, Info, Settings, Star } from '@mui/icons-material';

const meta: Meta<typeof Tooltip> = {
  title: 'MUI/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Spotlite 디자인 시스템의 Material-UI Tooltip 컴포넌트입니다. 기본 placement가 bottom-start이고 커스텀 배경색과 borderRadius가 적용되어 있습니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: { type: 'text' },
      description: 'Tooltip에 표시될 텍스트',
    },
    placement: {
      control: { type: 'select' },
      options: [
        'bottom-end', 'bottom-start', 'bottom',
        'left-end', 'left-start', 'left',
        'right-end', 'right-start', 'right',
        'top-end', 'top-start', 'top'
      ],
      description: 'Tooltip 위치 (기본값: bottom-start)',
    },
    arrow: {
      control: { type: 'boolean' },
      description: '화살표 표시 여부',
    },
    open: {
      control: { type: 'boolean' },
      description: 'Tooltip 표시 상태 (제어 모드)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 Tooltip들
export const Default: Story = {
  args: {
    title: '기본 Tooltip입니다',
    children: <Button variant="contained">Hover me</Button>,
  },
};

export const WithArrow: Story = {
  args: {
    title: '화살표가 있는 Tooltip입니다',
    arrow: true,
    children: <Button variant="contained">Arrow Tooltip</Button>,
  },
};

export const LongText: Story = {
  args: {
    title: '이것은 매우 긴 텍스트를 가진 Tooltip입니다. 여러 줄에 걸쳐 표시될 수 있습니다.',
    children: <Button variant="contained">Long Text Tooltip</Button>,
  },
};

// Placement별 Tooltip들 (Spotlite 기본값: bottom-start)
export const BottomStart: Story = {
  args: {
    title: 'Bottom Start (기본값)',
    placement: 'bottom-start',
    children: <Button variant="contained">Bottom Start</Button>,
  },
};

export const Bottom: Story = {
  args: {
    title: 'Bottom Center',
    placement: 'bottom',
    children: <Button variant="contained">Bottom</Button>,
  },
};

export const BottomEnd: Story = {
  args: {
    title: 'Bottom End',
    placement: 'bottom-end',
    children: <Button variant="contained">Bottom End</Button>,
  },
};

export const TopStart: Story = {
  args: {
    title: 'Top Start',
    placement: 'top-start',
    children: <Button variant="contained">Top Start</Button>,
  },
};

export const Top: Story = {
  args: {
    title: 'Top Center',
    placement: 'top',
    children: <Button variant="contained">Top</Button>,
  },
};

export const TopEnd: Story = {
  args: {
    title: 'Top End',
    placement: 'top-end',
    children: <Button variant="contained">Top End</Button>,
  },
};

export const LeftStart: Story = {
  args: {
    title: 'Left Start',
    placement: 'left-start',
    children: <Button variant="contained">Left Start</Button>,
  },
};

export const Left: Story = {
  args: {
    title: 'Left Center',
    placement: 'left',
    children: <Button variant="contained">Left</Button>,
  },
};

export const LeftEnd: Story = {
  args: {
    title: 'Left End',
    placement: 'left-end',
    children: <Button variant="contained">Left End</Button>,
  },
};

export const RightStart: Story = {
  args: {
    title: 'Right Start',
    placement: 'right-start',
    children: <Button variant="contained">Right Start</Button>,
  },
};

export const Right: Story = {
  args: {
    title: 'Right Center',
    placement: 'right',
    children: <Button variant="contained">Right</Button>,
  },
};

export const RightEnd: Story = {
  args: {
    title: 'Right End',
    placement: 'right-end',
    children: <Button variant="contained">Right End</Button>,
  },
};

// 다양한 컴포넌트와 함께 사용하는 Tooltip들
export const WithIconButton: Story = {
  args: {
    title: '아이콘 버튼 Tooltip',
    children: (
      <IconButton color="primary">
        <Add />
      </IconButton>
    ),
  },
};

export const WithFab: Story = {
  args: {
    title: 'Floating Action Button',
    children: (
      <Fab color="primary">
        <Star />
      </Fab>
    ),
  },
};

export const WithText: Story = {
  args: {
    title: '텍스트에도 Tooltip을 적용할 수 있습니다',
    children: (
      <Typography
        component="span"
        sx={{ textDecoration: 'underline', cursor: 'help' }}
      >
        도움말이 필요한 텍스트
      </Typography>
    ),
  },
};

// 제어된 Tooltip
export const Controlled: Story = {
  args: {
    title: '항상 표시되는 Tooltip',
    open: true,
    children: <Button variant="contained">Always Visible</Button>,
  },
};

// 다양한 아이콘과 함께 사용하는 예시
export const WithHelpIcon: Story = {
  args: {
    title: '도움말 정보를 제공합니다',
    children: (
      <IconButton size="small">
        <Help />
      </IconButton>
    ),
  },
};

export const WithInfoIcon: Story = {
  args: {
    title: '추가 정보가 있습니다',
    children: (
      <IconButton size="small" color="info">
        <Info />
      </IconButton>
    ),
  },
};

export const WithDeleteIcon: Story = {
  args: {
    title: '이 항목을 삭제합니다',
    children: (
      <IconButton color="error">
        <Delete />
      </IconButton>
    ),
  },
};

export const WithSettingsIcon: Story = {
  args: {
    title: '설정 메뉴를 엽니다',
    children: (
      <IconButton>
        <Settings />
      </IconButton>
    ),
  },
};

// 모든 placement 조합 예시
export const AllPlacements: Story = {
  render: () => (
    <Box sx={{ padding: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
      {/* Top row */}
      <Stack direction="row" spacing={2}>
        <Tooltip title="Top Start" placement="top-start">
          <Button variant="outlined" size="small">Top Start</Button>
        </Tooltip>
        <Tooltip title="Top" placement="top">
          <Button variant="outlined" size="small">Top</Button>
        </Tooltip>
        <Tooltip title="Top End" placement="top-end">
          <Button variant="outlined" size="small">Top End</Button>
        </Tooltip>
      </Stack>

      {/* Middle row */}
      <Stack direction="row" spacing={8} alignItems="center">
        <Stack spacing={1}>
          <Tooltip title="Left Start" placement="left-start">
            <Button variant="outlined" size="small">Left Start</Button>
          </Tooltip>
          <Tooltip title="Left" placement="left">
            <Button variant="outlined" size="small">Left</Button>
          </Tooltip>
          <Tooltip title="Left End" placement="left-end">
            <Button variant="outlined" size="small">Left End</Button>
          </Tooltip>
        </Stack>

        <Box textAlign="center">
          <Typography variant="h6" gutterBottom>
            Tooltip Placements
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Hover over buttons to see tooltips
          </Typography>
        </Box>

        <Stack spacing={1}>
          <Tooltip title="Right Start" placement="right-start">
            <Button variant="outlined" size="small">Right Start</Button>
          </Tooltip>
          <Tooltip title="Right" placement="right">
            <Button variant="outlined" size="small">Right</Button>
          </Tooltip>
          <Tooltip title="Right End" placement="right-end">
            <Button variant="outlined" size="small">Right End</Button>
          </Tooltip>
        </Stack>
      </Stack>

      {/* Bottom row */}
      <Stack direction="row" spacing={2}>
        <Tooltip title="Bottom Start (기본값)" placement="bottom-start">
          <Button variant="contained" size="small">Bottom Start</Button>
        </Tooltip>
        <Tooltip title="Bottom" placement="bottom">
          <Button variant="outlined" size="small">Bottom</Button>
        </Tooltip>
        <Tooltip title="Bottom End" placement="bottom-end">
          <Button variant="outlined" size="small">Bottom End</Button>
        </Tooltip>
      </Stack>
    </Box>
  ),
};

// 화살표와 함께 사용하는 예시
export const WithArrows: Story = {
  render: () => (
    <Stack direction="row" spacing={4} sx={{ padding: 4 }}>
      <Tooltip title="Top with arrow" placement="top" arrow>
        <Button variant="contained">Top Arrow</Button>
      </Tooltip>
      <Tooltip title="Bottom with arrow" placement="bottom" arrow>
        <Button variant="contained">Bottom Arrow</Button>
      </Tooltip>
      <Tooltip title="Left with arrow" placement="left" arrow>
        <Button variant="contained">Left Arrow</Button>
      </Tooltip>
      <Tooltip title="Right with arrow" placement="right" arrow>
        <Button variant="contained">Right Arrow</Button>
      </Tooltip>
    </Stack>
  ),
};

// 실제 사용 예시
export const PracticalExample: Story = {
  render: () => (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h6" gutterBottom>
        실제 사용 예시
      </Typography>

      <Stack spacing={3}>
        {/* 도구 모음 */}
        <Box>
          <Typography variant="subtitle2" gutterBottom>
            도구 모음
          </Typography>
          <Stack direction="row" spacing={1}>
            <Tooltip title="새 항목 추가">
              <IconButton color="primary">
                <Add />
              </IconButton>
            </Tooltip>
            <Tooltip title="설정">
              <IconButton>
                <Settings />
              </IconButton>
            </Tooltip>
            <Tooltip title="도움말">
              <IconButton color="info">
                <Help />
              </IconButton>
            </Tooltip>
            <Tooltip title="삭제" placement="top">
              <IconButton color="error">
                <Delete />
              </IconButton>
            </Tooltip>
          </Stack>
        </Box>

        {/* 양식 필드 */}
        <Box>
          <Typography variant="subtitle2" gutterBottom>
            양식 필드
          </Typography>
          <Stack direction="row" spacing={2} alignItems="center">
            <Typography>
              사용자 이름
            </Typography>
            <Tooltip title="사용자 이름은 3-20자 사이여야 하며, 영문과 숫자만 사용 가능합니다">
              <IconButton size="small">
                <Info fontSize="small" />
              </IconButton>
            </Tooltip>
          </Stack>
        </Box>

        {/* Floating Action Button */}
        <Box sx={{ position: 'relative', height: 100 }}>
          <Typography variant="subtitle2" gutterBottom>
            Floating Action Button
          </Typography>
          <Tooltip title="즐겨찾기에 추가" placement="left">
            <Fab
              color="primary"
              size="small"
              sx={{ position: 'absolute', bottom: 0, right: 0 }}
            >
              <Star />
            </Fab>
          </Tooltip>
        </Box>
      </Stack>
    </Box>
  ),
};