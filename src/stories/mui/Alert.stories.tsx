import type { Meta, StoryObj } from '@storybook/react';
import { Alert, AlertTitle, Button, Stack, Box } from '@mui/material';
import { CheckCircle, ErrorOutline, WarningAmber, InfoOutlined } from '@mui/icons-material';

const meta: Meta<typeof Alert> = {
  title: 'MUI/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Spotlite 디자인 시스템의 Material-UI Alert 컴포넌트입니다. 커스텀 severity별 스타일이 적용되어 있습니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    severity: {
      control: { type: 'select' },
      options: ['error', 'warning', 'info', 'success'],
      description: 'Alert의 심각도',
    },
    variant: {
      control: { type: 'select' },
      options: ['filled', 'outlined', 'standard'],
      description: 'Alert의 스타일 variant',
    },
    color: {
      control: { type: 'select' },
      options: ['error', 'warning', 'info', 'success'],
      description: 'Alert의 색상',
    },
    onClose: {
      action: 'closed',
      description: '닫기 버튼 클릭 시 호출되는 함수',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 Alert들 (Spotlite 커스텀 스타일 적용)
export const Info: Story = {
  args: {
    severity: 'info',
    children: '이것은 정보 알림입니다. Spotlite 테마가 적용되어 border와 배경색이 커스터마이즈되어 있습니다.',
  },
};

export const Warning: Story = {
  args: {
    severity: 'warning',
    children: '이것은 경고 알림입니다. Spotlite 테마의 warning.light 배경색이 적용되어 있습니다.',
  },
};

export const Error: Story = {
  args: {
    severity: 'error',
    children: '이것은 에러 알림입니다. Spotlite 테마의 error.main border와 배경색이 적용되어 있습니다.',
  },
};

export const Success: Story = {
  args: {
    severity: 'success',
    children: '이것은 성공 알림입니다. 기본 MUI 스타일이 적용되어 있습니다.',
  },
};

// 제목이 있는 Alert들
export const InfoWithTitle: Story = {
  args: {
    severity: 'info',
    children: (
      <>
        <AlertTitle>정보</AlertTitle>
        상세한 정보 내용이 여기에 표시됩니다.
      </>
    ),
  },
};

export const WarningWithTitle: Story = {
  args: {
    severity: 'warning',
    children: (
      <>
        <AlertTitle>주의</AlertTitle>
        이 작업을 계속하기 전에 확인이 필요합니다.
      </>
    ),
  },
};

export const ErrorWithTitle: Story = {
  args: {
    severity: 'error',
    children: (
      <>
        <AlertTitle>오류</AlertTitle>
        요청을 처리하는 중 문제가 발생했습니다.
      </>
    ),
  },
};

export const SuccessWithTitle: Story = {
  args: {
    severity: 'success',
    children: (
      <>
        <AlertTitle>성공</AlertTitle>
        작업이 성공적으로 완료되었습니다.
      </>
    ),
  },
};

// 닫기 버튼이 있는 Alert들
export const InfoClosable: Story = {
  args: {
    severity: 'info',
    onClose: () => alert('Info alert closed'),
    children: '닫기 버튼이 있는 정보 알림입니다.',
  },
};

export const WarningClosable: Story = {
  args: {
    severity: 'warning',
    onClose: () => alert('Warning alert closed'),
    children: '닫기 버튼이 있는 경고 알림입니다.',
  },
};

export const ErrorClosable: Story = {
  args: {
    severity: 'error',
    onClose: () => alert('Error alert closed'),
    children: '닫기 버튼이 있는 에러 알림입니다.',
  },
};

// 커스텀 아이콘이 있는 Alert들
export const InfoCustomIcon: Story = {
  args: {
    severity: 'info',
    icon: <InfoOutlined />,
    children: '커스텀 정보 아이콘이 있는 알림입니다.',
  },
};

export const WarningCustomIcon: Story = {
  args: {
    severity: 'warning',
    icon: <WarningAmber />,
    children: '커스텀 경고 아이콘이 있는 알림입니다.',
  },
};

export const ErrorCustomIcon: Story = {
  args: {
    severity: 'error',
    icon: <ErrorOutline />,
    children: '커스텀 에러 아이콘이 있는 알림입니다.',
  },
};

export const SuccessCustomIcon: Story = {
  args: {
    severity: 'success',
    icon: <CheckCircle />,
    children: '커스텀 성공 아이콘이 있는 알림입니다.',
  },
};

// 아이콘 없는 Alert들
export const InfoNoIcon: Story = {
  args: {
    severity: 'info',
    icon: false,
    children: '아이콘이 없는 정보 알림입니다.',
  },
};

export const WarningNoIcon: Story = {
  args: {
    severity: 'warning',
    icon: false,
    children: '아이콘이 없는 경고 알림입니다.',
  },
};

// 액션 버튼이 있는 Alert들
export const WithAction: Story = {
  args: {
    severity: 'info',
    action: (
      <Button color="inherit" size="small">
        실행취소
      </Button>
    ),
    children: '액션 버튼이 있는 알림입니다.',
  },
};

export const WithMultipleActions: Story = {
  args: {
    severity: 'warning',
    action: (
      <Box>
        <Button color="inherit" size="small" sx={{ mr: 1 }}>
          확인
        </Button>
        <Button color="inherit" size="small">
          취소
        </Button>
      </Box>
    ),
    children: '여러 액션 버튼이 있는 경고 알림입니다.',
  },
};

// Variant별 Alert들
export const StandardVariant: Story = {
  args: {
    severity: 'info',
    variant: 'standard',
    children: 'Standard variant Alert입니다.',
  },
};

export const FilledVariant: Story = {
  args: {
    severity: 'info',
    variant: 'filled',
    children: 'Filled variant Alert입니다.',
  },
};

export const OutlinedVariant: Story = {
  args: {
    severity: 'info',
    variant: 'outlined',
    children: 'Outlined variant Alert입니다.',
  },
};

// 모든 severity 조합 예시
export const AllSeverities: Story = {
  render: () => (
    <Stack spacing={2} sx={{ width: '100%', maxWidth: 600 }}>
      <Alert severity="info">
        <AlertTitle>정보</AlertTitle>
        Info Alert - Spotlite 커스텀 스타일이 적용된 정보 알림입니다.
      </Alert>
      <Alert severity="warning">
        <AlertTitle>경고</AlertTitle>
        Warning Alert - Spotlite 커스텀 스타일이 적용된 경고 알림입니다.
      </Alert>
      <Alert severity="error">
        <AlertTitle>오류</AlertTitle>
        Error Alert - Spotlite 커스텀 스타일이 적용된 에러 알림입니다.
      </Alert>
      <Alert severity="success">
        <AlertTitle>성공</AlertTitle>
        Success Alert - 기본 MUI 스타일이 적용된 성공 알림입니다.
      </Alert>
    </Stack>
  ),
};

// 모든 variant 조합 예시
export const AllVariants: Story = {
  render: () => (
    <Stack spacing={2} sx={{ width: '100%', maxWidth: 600 }}>
      <Alert severity="info" variant="standard">
        Standard variant - Spotlite Info 스타일
      </Alert>
      <Alert severity="info" variant="filled">
        Filled variant - Spotlite Info 스타일
      </Alert>
      <Alert severity="info" variant="outlined">
        Outlined variant - Spotlite Info 스타일
      </Alert>
      <Alert severity="warning" variant="standard">
        Standard variant - Spotlite Warning 스타일
      </Alert>
      <Alert severity="warning" variant="filled">
        Filled variant - Spotlite Warning 스타일
      </Alert>
      <Alert severity="warning" variant="outlined">
        Outlined variant - Spotlite Warning 스타일
      </Alert>
      <Alert severity="error" variant="standard">
        Standard variant - Spotlite Error 스타일
      </Alert>
      <Alert severity="error" variant="filled">
        Filled variant - Spotlite Error 스타일
      </Alert>
      <Alert severity="error" variant="outlined">
        Outlined variant - Spotlite Error 스타일
      </Alert>
    </Stack>
  ),
};