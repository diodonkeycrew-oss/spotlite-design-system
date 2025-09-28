import type { Meta, StoryObj } from '@storybook/react';
import { Fab, Stack, Box } from '@mui/material';
import {
  Add,
  Edit,
  Favorite,
  Navigation,
  Share,
  Delete,
  Mail,
  Phone,
  Home,
  Settings,
  Search,
  Download
} from '@mui/icons-material';

const meta: Meta<typeof Fab> = {
  title: 'MUI/Fab',
  component: Fab,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Spotlite 디자인 시스템의 Material-UI Fab(Floating Action Button) 컴포넌트입니다. boxShadow가 제거되고 커스텀 배경색과 hover 효과가 적용되어 있습니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Fab의 크기 (large는 Spotlite 커스텀 80x80)',
    },
    color: {
      control: { type: 'select' },
      options: ['default', 'primary', 'secondary', 'error', 'info', 'success', 'warning'],
      description: 'Fab의 색상',
    },
    variant: {
      control: { type: 'select' },
      options: ['circular', 'extended'],
      description: 'Fab의 스타일 variant',
    },
    disabled: {
      control: { type: 'boolean' },
      description: '비활성화 여부',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 Fab들
export const Default: Story = {
  args: {
    children: <Add />,
  },
};

export const Primary: Story = {
  args: {
    color: 'primary',
    children: <Add />,
  },
};

export const Secondary: Story = {
  args: {
    color: 'secondary',
    children: <Edit />,
  },
};

export const Error: Story = {
  args: {
    color: 'error',
    children: <Delete />,
  },
};

export const Info: Story = {
  args: {
    color: 'info',
    children: <Mail />,
  },
};

export const Success: Story = {
  args: {
    color: 'success',
    children: <Favorite />,
  },
};

export const Warning: Story = {
  args: {
    color: 'warning',
    children: <Navigation />,
  },
};

// 크기별 Fab들 (Spotlite 커스텀 large 포함)
export const Small: Story = {
  args: {
    size: 'small',
    color: 'primary',
    children: <Add />,
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
    color: 'primary',
    children: <Add />,
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    color: 'primary',
    children: <Add />,
  },
};

// Extended Fab들
export const Extended: Story = {
  args: {
    variant: 'extended',
    children: (
      <>
        <Add sx={{ mr: 1 }} />
        추가하기
      </>
    ),
  },
};

export const ExtendedPrimary: Story = {
  args: {
    variant: 'extended',
    color: 'primary',
    children: (
      <>
        <Edit sx={{ mr: 1 }} />
        편집하기
      </>
    ),
  },
};

export const ExtendedSecondary: Story = {
  args: {
    variant: 'extended',
    color: 'secondary',
    children: (
      <>
        <Share sx={{ mr: 1 }} />
        공유하기
      </>
    ),
  },
};

// 다양한 아이콘이 있는 Fab들
export const WithEditIcon: Story = {
  args: {
    color: 'primary',
    children: <Edit />,
  },
};

export const WithFavoriteIcon: Story = {
  args: {
    color: 'error',
    children: <Favorite />,
  },
};

export const WithNavigationIcon: Story = {
  args: {
    color: 'info',
    children: <Navigation />,
  },
};

export const WithShareIcon: Story = {
  args: {
    color: 'success',
    children: <Share />,
  },
};

export const WithMailIcon: Story = {
  args: {
    color: 'secondary',
    children: <Mail />,
  },
};

export const WithPhoneIcon: Story = {
  args: {
    color: 'warning',
    children: <Phone />,
  },
};

export const WithHomeIcon: Story = {
  args: {
    children: <Home />,
  },
};

export const WithSettingsIcon: Story = {
  args: {
    color: 'primary',
    children: <Settings />,
  },
};

export const WithSearchIcon: Story = {
  args: {
    color: 'info',
    children: <Search />,
  },
};

export const WithDownloadIcon: Story = {
  args: {
    color: 'success',
    children: <Download />,
  },
};

// 상태별 Fab들
export const Disabled: Story = {
  args: {
    disabled: true,
    children: <Add />,
  },
};

export const DisabledPrimary: Story = {
  args: {
    disabled: true,
    color: 'primary',
    children: <Edit />,
  },
};

export const DisabledExtended: Story = {
  args: {
    disabled: true,
    variant: 'extended',
    children: (
      <>
        <Add sx={{ mr: 1 }} />
        비활성화됨
      </>
    ),
  },
};

// 모든 색상 조합 예시
export const AllColors: Story = {
  render: () => (
    <Stack direction="row" spacing={2} flexWrap="wrap">
      <Fab>
        <Add />
      </Fab>
      <Fab color="primary">
        <Edit />
      </Fab>
      <Fab color="secondary">
        <Favorite />
      </Fab>
      <Fab color="error">
        <Delete />
      </Fab>
      <Fab color="info">
        <Mail />
      </Fab>
      <Fab color="success">
        <Navigation />
      </Fab>
      <Fab color="warning">
        <Share />
      </Fab>
    </Stack>
  ),
};

// 모든 크기 조합 예시 (Spotlite 커스텀 large 포함)
export const AllSizes: Story = {
  render: () => (
    <Stack direction="row" spacing={2} alignItems="center">
      <Box textAlign="center">
        <Fab size="small" color="primary">
          <Add />
        </Fab>
        <Box mt={1} fontSize="0.75rem">Small</Box>
      </Box>
      <Box textAlign="center">
        <Fab size="medium" color="primary">
          <Add />
        </Fab>
        <Box mt={1} fontSize="0.75rem">Medium</Box>
      </Box>
      <Box textAlign="center">
        <Fab size="large" color="primary">
          <Add />
        </Fab>
        <Box mt={1} fontSize="0.75rem">Large (80x80)</Box>
      </Box>
    </Stack>
  ),
};

// Extended Fab 다양한 예시
export const ExtendedVariations: Story = {
  render: () => (
    <Stack direction="column" spacing={2}>
      <Fab variant="extended">
        <Add sx={{ mr: 1 }} />
        기본 Extended
      </Fab>
      <Fab variant="extended" color="primary">
        <Edit sx={{ mr: 1 }} />
        Primary Extended
      </Fab>
      <Fab variant="extended" color="secondary">
        <Share sx={{ mr: 1 }} />
        Secondary Extended
      </Fab>
      <Fab variant="extended" color="success">
        <Download sx={{ mr: 1 }} />
        Success Extended
      </Fab>
      <Fab variant="extended" disabled>
        <Settings sx={{ mr: 1 }} />
        Disabled Extended
      </Fab>
    </Stack>
  ),
};

// 실제 사용 예시
export const PracticalExample: Story = {
  render: () => (
    <Box sx={{ position: 'relative', height: 300, width: 400, border: '1px dashed #ccc', borderRadius: 2 }}>
      <Box sx={{ p: 2 }}>
        <h3>실제 사용 예시</h3>
        <p>이 영역은 콘텐츠 영역을 시뮬레이션합니다.</p>
        <p>Fab은 일반적으로 화면의 고정된 위치에 배치됩니다.</p>
      </Box>

      {/* 우하단 기본 액션 */}
      <Fab
        color="primary"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        onClick={() => alert('메인 액션 실행!')}
      >
        <Add />
      </Fab>

      {/* 좌하단 보조 액션 */}
      <Fab
        size="small"
        color="secondary"
        sx={{ position: 'absolute', bottom: 16, left: 16 }}
        onClick={() => alert('보조 액션 실행!')}
      >
        <Edit />
      </Fab>

      {/* 상단 Extended Fab */}
      <Fab
        variant="extended"
        color="success"
        sx={{ position: 'absolute', top: 16, right: 16 }}
        onClick={() => alert('Extended 액션 실행!')}
      >
        <Share sx={{ mr: 1 }} />
        공유하기
      </Fab>
    </Box>
  ),
};