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
    sx: { px: 2 },
    children: (
      <>
        <Add sx={{ mr: 1 }} />
        추가
      </>
    ),
  },
};

export const ExtendedPrimary: Story = {
  args: {
    variant: 'extended',
    color: 'primary',
    sx: { px: 2 },
    children: (
      <>
        <Edit sx={{ mr: 1 }} />
        편집
      </>
    ),
  },
};

export const ExtendedSecondary: Story = {
  args: {
    variant: 'extended',
    color: 'secondary',
    sx: { px: 2 },
    children: (
      <>
        <Share sx={{ mr: 1 }} />
        공유
      </>
    ),
  },
};

// 상태별 Fab들
export const Disabled: Story = {
  args: {
    disabled: true,
    color: 'primary',
    children: <Add />,
  },
};

export const DisabledExtended: Story = {
  args: {
    disabled: true,
    variant: 'extended',
    color: 'primary',
    sx: { px: 2 },
    children: (
      <>
        <Add sx={{ mr: 1 }} />
        사용 불가
      </>
    ),
  },
};

// 모든 색상 조합 예시
export const AllColors: Story = {
  render: () => (
    <Stack direction="row" spacing={2} flexWrap="wrap" sx={{ p: 3, bgcolor: '#f5f5f5', borderRadius: 2 }}>
      <Box textAlign="center">
        <Fab>
          <Add />
        </Fab>
        <Box mt={1} fontSize="0.75rem" color="text.secondary">Default</Box>
      </Box>
      <Box textAlign="center">
        <Fab color="primary">
          <Edit />
        </Fab>
        <Box mt={1} fontSize="0.75rem" color="text.secondary">Primary</Box>
      </Box>
      <Box textAlign="center">
        <Fab color="secondary">
          <Favorite />
        </Fab>
        <Box mt={1} fontSize="0.75rem" color="text.secondary">Secondary</Box>
      </Box>
      <Box textAlign="center">
        <Fab color="error">
          <Delete />
        </Fab>
        <Box mt={1} fontSize="0.75rem" color="text.secondary">Error</Box>
      </Box>
      <Box textAlign="center">
        <Fab color="info">
          <Mail />
        </Fab>
        <Box mt={1} fontSize="0.75rem" color="text.secondary">Info</Box>
      </Box>
      <Box textAlign="center">
        <Fab color="success">
          <Navigation />
        </Fab>
        <Box mt={1} fontSize="0.75rem" color="text.secondary">Success</Box>
      </Box>
      <Box textAlign="center">
        <Fab color="warning">
          <Search />
        </Fab>
        <Box mt={1} fontSize="0.75rem" color="text.secondary">Warning</Box>
      </Box>
    </Stack>
  ),
};

// 모든 크기 조합 예시 (Spotlite 커스텀 large 포함)
export const AllSizes: Story = {
  render: () => (
    <Stack direction="row" spacing={4} alignItems="flex-end" sx={{ p: 3, bgcolor: '#f5f5f5', borderRadius: 2 }}>
      <Box textAlign="center">
        <Fab size="small" color="primary">
          <Add />
        </Fab>
        <Box mt={1} fontSize="0.75rem" color="text.secondary">Small</Box>
      </Box>
      <Box textAlign="center">
        <Fab size="medium" color="primary">
          <Add />
        </Fab>
        <Box mt={1} fontSize="0.75rem" color="text.secondary">Medium</Box>
      </Box>
      <Box textAlign="center">
        <Fab size="large" color="primary">
          <Add />
        </Fab>
        <Box mt={1} fontSize="0.75rem" color="text.secondary">Large (80x80)</Box>
      </Box>
    </Stack>
  ),
};

// Extended Fab 다양한 예시
export const ExtendedVariations: Story = {
  render: () => (
    <Stack direction="column" spacing={2} sx={{ p: 3, bgcolor: '#f5f5f5', borderRadius: 2, minWidth: 200 }}>
      <Fab variant="extended" color="primary" sx={{ px: 2 }}>
        <Add sx={{ mr: 1 }} />
        새로 만들기
      </Fab>
      <Fab variant="extended" color="secondary" sx={{ px: 2 }}>
        <Edit sx={{ mr: 1 }} />
        수정하기
      </Fab>
      <Fab variant="extended" color="success" sx={{ px: 2 }}>
        <Download sx={{ mr: 1 }} />
        다운로드
      </Fab>
      <Fab variant="extended" color="error" sx={{ px: 2 }}>
        <Delete sx={{ mr: 1 }} />
        삭제하기
      </Fab>
      <Fab variant="extended" color="info" sx={{ px: 2 }}>
        <Mail sx={{ mr: 1 }} />
        메일 보내기
      </Fab>
      <Fab variant="extended" disabled sx={{ px: 2 }}>
        <Settings sx={{ mr: 1 }} />
        사용 불가
      </Fab>
    </Stack>
  ),
};

// 실제 사용 예시
export const PracticalExample: Story = {
  render: () => (
    <Box sx={{
      position: 'relative',
      height: 400,
      width: '100%',
      maxWidth: 600,
      bgcolor: 'white',
      border: '1px solid #e0e0e0',
      borderRadius: 2,
      overflow: 'hidden'
    }}>
      {/* 헤더 */}
      <Box sx={{
        p: 2,
        borderBottom: '1px solid #e0e0e0',
        bgcolor: '#fafafa'
      }}>
        <h3 style={{ margin: 0 }}>Fab 실제 사용 예시</h3>
      </Box>

      {/* 콘텐츠 영역 */}
      <Box sx={{ p: 3, height: 'calc(100% - 68px)', overflow: 'auto' }}>
        <p>이 영역은 실제 애플리케이션의 콘텐츠를 시뮬레이션합니다.</p>
        <p>Fab 버튼들은 주요 액션을 위해 화면의 고정된 위치에 배치됩니다.</p>
        <ul>
          <li>우하단: 메인 액션 (새 항목 추가)</li>
          <li>좌하단: 보조 액션 (편집 모드)</li>
          <li>우상단: 공유하기</li>
        </ul>
      </Box>

      {/* 메인 액션 - 우하단 */}
      <Fab
        color="primary"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        onClick={() => alert('새 항목을 추가합니다')}
      >
        <Add />
      </Fab>

      {/* 보조 액션 - 좌하단 */}
      <Fab
        size="small"
        color="secondary"
        sx={{ position: 'absolute', bottom: 16, left: 16 }}
        onClick={() => alert('편집 모드로 전환합니다')}
      >
        <Edit />
      </Fab>

      {/* Extended Fab - 우상단 */}
      <Fab
        variant="extended"
        color="success"
        size="small"
        sx={{ position: 'absolute', top: 80, right: 16 }}
        onClick={() => alert('공유하기를 실행합니다')}
      >
        <Share sx={{ mr: 1 }} />
        공유
      </Fab>
    </Box>
  ),
};

// 아이콘별 사용 예시
export const IconExamples: Story = {
  render: () => (
    <Stack direction="row" spacing={2} flexWrap="wrap" sx={{ p: 3, bgcolor: '#f5f5f5', borderRadius: 2 }}>
      <Box textAlign="center">
        <Fab color="primary">
          <Add />
        </Fab>
        <Box mt={1} fontSize="0.75rem" color="text.secondary">추가</Box>
      </Box>
      <Box textAlign="center">
        <Fab color="secondary">
          <Edit />
        </Fab>
        <Box mt={1} fontSize="0.75rem" color="text.secondary">편집</Box>
      </Box>
      <Box textAlign="center">
        <Fab color="error">
          <Delete />
        </Fab>
        <Box mt={1} fontSize="0.75rem" color="text.secondary">삭제</Box>
      </Box>
      <Box textAlign="center">
        <Fab color="success">
          <Download />
        </Fab>
        <Box mt={1} fontSize="0.75rem" color="text.secondary">다운로드</Box>
      </Box>
      <Box textAlign="center">
        <Fab color="info">
          <Mail />
        </Fab>
        <Box mt={1} fontSize="0.75rem" color="text.secondary">메일</Box>
      </Box>
      <Box textAlign="center">
        <Fab color="warning">
          <Search />
        </Fab>
        <Box mt={1} fontSize="0.75rem" color="text.secondary">검색</Box>
      </Box>
      <Box textAlign="center">
        <Fab>
          <Settings />
        </Fab>
        <Box mt={1} fontSize="0.75rem" color="text.secondary">설정</Box>
      </Box>
      <Box textAlign="center">
        <Fab color="primary">
          <Favorite />
        </Fab>
        <Box mt={1} fontSize="0.75rem" color="text.secondary">좋아요</Box>
      </Box>
    </Stack>
  ),
};
