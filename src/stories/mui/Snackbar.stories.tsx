import type { Meta, StoryObj } from '@storybook/react';
import {
  Snackbar,
  Alert,
  Button,
  Box,
  Stack,
  Typography,
  IconButton,
  AlertTitle
} from '@mui/material';
import { Close, CheckCircle, ErrorOutline, WarningAmber, InfoOutlined } from '@mui/icons-material';
import { useState } from 'react';
import { SnackbarProvider, useSnackbar } from 'notistack';

const meta: Meta<typeof Snackbar> = {
  title: 'MUI/Snackbar',
  component: Snackbar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Spotlite 디자인 시스템의 Material-UI Snackbar 컴포넌트입니다. NotistackSnackbar 스타일이 severity별로 커스터마이즈되어 있습니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: { type: 'boolean' },
      description: 'Snackbar 표시 여부',
    },
    autoHideDuration: {
      control: { type: 'number' },
      description: '자동 숨김 시간 (ms)',
    },
    anchorOrigin: {
      control: { type: 'object' },
      description: 'Snackbar 위치',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 Snackbar들
export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    return (
      <>
        <Button variant="contained" onClick={handleClick}>
          기본 Snackbar 표시
        </Button>
        <Snackbar
          open={open}
          autoHideDuration={4000}
          onClose={handleClose}
          message="기본 스낵바 메시지입니다"
        />
      </>
    );
  },
};

export const WithAction: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    const action = (
      <>
        <Button color="secondary" size="small" onClick={handleClose}>
          실행취소
        </Button>
        <IconButton size="small" color="inherit" onClick={handleClose}>
          <Close fontSize="small" />
        </IconButton>
      </>
    );

    return (
      <>
        <Button variant="contained" onClick={handleClick}>
          액션이 있는 Snackbar
        </Button>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          message="항목이 삭제되었습니다"
          action={action}
        />
      </>
    );
  },
};

// Alert와 함께 사용하는 Snackbar들 (Spotlite 커스텀 스타일 적용)
export const SuccessAlert: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    return (
      <>
        <Button variant="contained" color="success" onClick={handleClick}>
          성공 알림
        </Button>
        <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success">
            작업이 성공적으로 완료되었습니다!
          </Alert>
        </Snackbar>
      </>
    );
  },
};

export const ErrorAlert: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    return (
      <>
        <Button variant="contained" color="error" onClick={handleClick}>
          에러 알림
        </Button>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error">
            <AlertTitle>오류 발생</AlertTitle>
            요청을 처리하는 중 문제가 발생했습니다. 다시 시도해주세요.
          </Alert>
        </Snackbar>
      </>
    );
  },
};

export const InfoAlert: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    return (
      <>
        <Button variant="contained" color="info" onClick={handleClick}>
          정보 알림
        </Button>
        <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="info">
            새로운 업데이트가 있습니다. 지금 확인해보세요.
          </Alert>
        </Snackbar>
      </>
    );
  },
};

export const WarningAlert: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    return (
      <>
        <Button variant="contained" color="warning" onClick={handleClick}>
          경고 알림
        </Button>
        <Snackbar open={open} autoHideDuration={7000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="warning">
            <AlertTitle>주의</AlertTitle>
            시스템 점검이 예정되어 있습니다. 작업을 저장해주세요.
          </Alert>
        </Snackbar>
      </>
    );
  },
};

// 위치별 Snackbar들
export const TopCenter: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    return (
      <>
        <Button variant="contained" onClick={handleClick}>
          상단 중앙 Snackbar
        </Button>
        <Snackbar
          open={open}
          autoHideDuration={4000}
          onClose={handleClose}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          message="상단 중앙에 표시되는 메시지입니다"
        />
      </>
    );
  },
};

export const TopRight: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    return (
      <>
        <Button variant="contained" onClick={handleClick}>
          상단 우측 Snackbar
        </Button>
        <Snackbar
          open={open}
          autoHideDuration={4000}
          onClose={handleClose}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          <Alert severity="info" onClose={handleClose}>
            상단 우측에 표시되는 알림입니다
          </Alert>
        </Snackbar>
      </>
    );
  },
};

export const BottomLeft: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    return (
      <>
        <Button variant="contained" onClick={handleClick}>
          하단 좌측 Snackbar
        </Button>
        <Snackbar
          open={open}
          autoHideDuration={4000}
          onClose={handleClose}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        >
          <Alert severity="success" onClose={handleClose}>
            하단 좌측에 표시되는 성공 메시지입니다
          </Alert>
        </Snackbar>
      </>
    );
  },
};

// 모든 severity 조합 예시
export const AllSeverities: Story = {
  render: () => {
    const [snackbars, setSnackbars] = useState({
      success: false,
      error: false,
      info: false,
      warning: false,
    });

    const handleOpen = (severity: keyof typeof snackbars) => {
      setSnackbars(prev => ({ ...prev, [severity]: true }));
    };

    const handleClose = (severity: keyof typeof snackbars) => {
      setSnackbars(prev => ({ ...prev, [severity]: false }));
    };

    return (
      <Box sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Spotlite Alert Severity 스타일
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom sx={{ mb: 3 }}>
          각 severity별로 Spotlite 테마의 커스텀 스타일이 적용됩니다.
        </Typography>

        <Stack direction="row" spacing={2} flexWrap="wrap">
          <Button
            variant="contained"
            color="success"
            onClick={() => handleOpen('success')}
          >
            Success Alert
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={() => handleOpen('error')}
          >
            Error Alert
          </Button>
          <Button
            variant="contained"
            color="info"
            onClick={() => handleOpen('info')}
          >
            Info Alert
          </Button>
          <Button
            variant="contained"
            color="warning"
            onClick={() => handleOpen('warning')}
          >
            Warning Alert
          </Button>
        </Stack>

        {/* Success Snackbar */}
        <Snackbar
          open={snackbars.success}
          autoHideDuration={4000}
          onClose={() => handleClose('success')}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          <Alert onClose={() => handleClose('success')} severity="success">
            성공! Spotlite success 스타일이 적용되었습니다.
          </Alert>
        </Snackbar>

        {/* Error Snackbar */}
        <Snackbar
          open={snackbars.error}
          autoHideDuration={6000}
          onClose={() => handleClose('error')}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <Alert onClose={() => handleClose('error')} severity="error">
            에러! Spotlite error 스타일 - border와 배경색이 커스터마이즈됩니다.
          </Alert>
        </Snackbar>

        {/* Info Snackbar */}
        <Snackbar
          open={snackbars.info}
          autoHideDuration={5000}
          onClose={() => handleClose('info')}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        >
          <Alert onClose={() => handleClose('info')} severity="info">
            정보! Spotlite info 스타일 - border와 배경색이 적용됩니다.
          </Alert>
        </Snackbar>

        {/* Warning Snackbar */}
        <Snackbar
          open={snackbars.warning}
          autoHideDuration={7000}
          onClose={() => handleClose('warning')}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        >
          <Alert onClose={() => handleClose('warning')} severity="warning">
            경고! Spotlite warning 스타일 - 커스텀 배경색과 텍스트 색상.
          </Alert>
        </Snackbar>
      </Box>
    );
  },
};

// Notistack 라이브러리 사용 예시
const NotistackDemo = () => {
  const { enqueueSnackbar } = useSnackbar();

  const handleClick = (variant: 'success' | 'error' | 'warning' | 'info') => {
    const messages = {
      success: 'Notistack Success - Spotlite 커스텀 스타일 적용',
      error: 'Notistack Error - Spotlite 에러 스타일',
      warning: 'Notistack Warning - Spotlite 경고 스타일',
      info: 'Notistack Info - Spotlite 정보 스타일',
    };

    enqueueSnackbar(messages[variant], {
      variant,
      autoHideDuration: 4000,
    });
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Notistack + Spotlite 테마
      </Typography>
      <Typography variant="body2" color="text.secondary" gutterBottom sx={{ mb: 3 }}>
        NotistackSnackbar 컴포넌트에 Spotlite 커스텀 스타일이 적용됩니다.
      </Typography>

      <Stack direction="row" spacing={2} flexWrap="wrap">
        <Button
          variant="contained"
          color="success"
          onClick={() => handleClick('success')}
        >
          Success Toast
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={() => handleClick('error')}
        >
          Error Toast
        </Button>
        <Button
          variant="contained"
          color="info"
          onClick={() => handleClick('info')}
        >
          Info Toast
        </Button>
        <Button
          variant="contained"
          color="warning"
          onClick={() => handleClick('warning')}
        >
          Warning Toast
        </Button>
      </Stack>
    </Box>
  );
};

export const NotistackIntegration: Story = {
  render: () => (
    <SnackbarProvider
      maxSnack={3}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
    >
      <NotistackDemo />
    </SnackbarProvider>
  ),
};

// 실제 사용 예시
export const PracticalExample: Story = {
  render: () => {
    const [snackbars, setSnackbars] = useState({
      save: false,
      delete: false,
      upload: false,
      network: false,
    });

    const handleAction = (action: keyof typeof snackbars) => {
      setSnackbars(prev => ({ ...prev, [action]: true }));
    };

    const handleClose = (action: keyof typeof snackbars) => {
      setSnackbars(prev => ({ ...prev, [action]: false }));
    };

    return (
      <Box sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          실제 사용 시나리오
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom sx={{ mb: 3 }}>
          다양한 상황에서 사용되는 Snackbar 알림들
        </Typography>

        <Stack spacing={2}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleAction('save')}
          >
            문서 저장
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={() => handleAction('delete')}
          >
            파일 삭제
          </Button>
          <Button
            variant="contained"
            color="info"
            onClick={() => handleAction('upload')}
          >
            파일 업로드
          </Button>
          <Button
            variant="contained"
            color="warning"
            onClick={() => handleAction('network')}
          >
            네트워크 오류 시뮬레이션
          </Button>
        </Stack>

        {/* 저장 성공 */}
        <Snackbar
          open={snackbars.save}
          autoHideDuration={3000}
          onClose={() => handleClose('save')}
        >
          <Alert onClose={() => handleClose('save')} severity="success">
            문서가 성공적으로 저장되었습니다!
          </Alert>
        </Snackbar>

        {/* 삭제 확인 */}
        <Snackbar
          open={snackbars.delete}
          autoHideDuration={5000}
          onClose={() => handleClose('delete')}
        >
          <Alert
            onClose={() => handleClose('delete')}
            severity="error"
            action={
              <Button color="inherit" size="small">
                실행취소
              </Button>
            }
          >
            파일이 삭제되었습니다.
          </Alert>
        </Snackbar>

        {/* 업로드 정보 */}
        <Snackbar
          open={snackbars.upload}
          autoHideDuration={4000}
          onClose={() => handleClose('upload')}
        >
          <Alert onClose={() => handleClose('upload')} severity="info">
            <AlertTitle>업로드 완료</AlertTitle>
            파일이 클라우드에 업로드되었습니다.
          </Alert>
        </Snackbar>

        {/* 네트워크 경고 */}
        <Snackbar
          open={snackbars.network}
          autoHideDuration={6000}
          onClose={() => handleClose('network')}
        >
          <Alert onClose={() => handleClose('network')} severity="warning">
            <AlertTitle>연결 문제</AlertTitle>
            네트워크 연결이 불안정합니다. 작업을 저장해주세요.
          </Alert>
        </Snackbar>
      </Box>
    );
  },
};