import type { Meta, StoryObj } from '@storybook/react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
  Button,
  TextField
} from '@mui/material';
import { useState } from 'react';

const meta: Meta<typeof Dialog> = {
  title: 'MUI/Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Spotlite 디자인 시스템의 Material-UI Dialog 컴포넌트입니다. 커스텀 borderRadius(10px)가 적용되어 있습니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: { type: 'boolean' },
      description: '다이얼로그 열림/닫힘 상태',
    },
    maxWidth: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl', false],
      description: '다이얼로그 최대 너비',
    },
    fullScreen: {
      control: { type: 'boolean' },
      description: '전체 화면 모드',
    },
    fullWidth: {
      control: { type: 'boolean' },
      description: '전체 너비 사용',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 다이얼로그
export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button variant="contained" onClick={() => setOpen(true)}>
          Open Dialog
        </Button>
        <Dialog open={open} onClose={() => setOpen(false)}>
          <DialogTitle>기본 다이얼로그</DialogTitle>
          <DialogContent>
            <DialogContentText>
              이것은 기본 다이얼로그입니다. Spotlite 테마가 적용되어 borderRadius가 10px로 설정되어 있습니다.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen(false)}>취소</Button>
            <Button variant="contained" onClick={() => setOpen(false)}>
              확인
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  },
};

// 알림 다이얼로그
export const Alert: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button variant="contained" color="error" onClick={() => setOpen(true)}>
          Delete Item
        </Button>
        <Dialog open={open} onClose={() => setOpen(false)}>
          <DialogTitle>삭제 확인</DialogTitle>
          <DialogContent>
            <DialogContentText>
              정말로 이 항목을 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen(false)}>취소</Button>
            <Button variant="contained" color="error" onClick={() => setOpen(false)}>
              삭제
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  },
};

// 폼 다이얼로그
export const Form: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button variant="contained" onClick={() => setOpen(true)}>
          Add Contact
        </Button>
        <Dialog open={open} onClose={() => setOpen(false)} maxWidth="sm" fullWidth>
          <DialogTitle>연락처 추가</DialogTitle>
          <DialogContent>
            <DialogContentText>
              새로운 연락처를 추가하려면 아래 정보를 입력해주세요.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              label="이름"
              fullWidth
              variant="outlined"
              sx={{ mb: 2 }}
            />
            <TextField
              margin="dense"
              label="이메일"
              type="email"
              fullWidth
              variant="outlined"
              sx={{ mb: 2 }}
            />
            <TextField
              margin="dense"
              label="전화번호"
              fullWidth
              variant="outlined"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen(false)}>취소</Button>
            <Button variant="contained" onClick={() => setOpen(false)}>
              추가
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  },
};

// 최대 너비 설정
export const MaxWidthXS: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button variant="contained" onClick={() => setOpen(true)}>
          Open XS Dialog
        </Button>
        <Dialog open={open} onClose={() => setOpen(false)} maxWidth="xs" fullWidth>
          <DialogTitle>XS 크기 다이얼로그</DialogTitle>
          <DialogContent>
            <DialogContentText>
              이 다이얼로그는 maxWidth가 xs로 설정되어 있습니다.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen(false)}>닫기</Button>
          </DialogActions>
        </Dialog>
      </>
    );
  },
};

export const MaxWidthSM: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button variant="contained" onClick={() => setOpen(true)}>
          Open SM Dialog
        </Button>
        <Dialog open={open} onClose={() => setOpen(false)} maxWidth="sm" fullWidth>
          <DialogTitle>SM 크기 다이얼로그</DialogTitle>
          <DialogContent>
            <DialogContentText>
              이 다이얼로그는 maxWidth가 sm으로 설정되어 있습니다.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen(false)}>닫기</Button>
          </DialogActions>
        </Dialog>
      </>
    );
  },
};

export const MaxWidthMD: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button variant="contained" onClick={() => setOpen(true)}>
          Open MD Dialog
        </Button>
        <Dialog open={open} onClose={() => setOpen(false)} maxWidth="md" fullWidth>
          <DialogTitle>MD 크기 다이얼로그</DialogTitle>
          <DialogContent>
            <DialogContentText>
              이 다이얼로그는 maxWidth가 md로 설정되어 있습니다.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen(false)}>닫기</Button>
          </DialogActions>
        </Dialog>
      </>
    );
  },
};

// 전체 화면 다이얼로그
export const FullScreen: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button variant="contained" onClick={() => setOpen(true)}>
          Open Full Screen Dialog
        </Button>
        <Dialog open={open} onClose={() => setOpen(false)} fullScreen>
          <DialogTitle>전체 화면 다이얼로그</DialogTitle>
          <DialogContent>
            <DialogContentText>
              이 다이얼로그는 전체 화면으로 표시됩니다. 모바일 환경에서 유용합니다.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen(false)}>닫기</Button>
          </DialogActions>
        </Dialog>
      </>
    );
  },
};

// Spotlite 버튼 스타일 적용
export const SpotliteStyle: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button variant="spotlite" onClick={() => setOpen(true)}>
          Open Spotlite Dialog
        </Button>
        <Dialog open={open} onClose={() => setOpen(false)} maxWidth="sm" fullWidth>
          <DialogTitle>Spotlite 스타일 다이얼로그</DialogTitle>
          <DialogContent>
            <DialogContentText>
              이 다이얼로그는 Spotlite 커스텀 버튼 스타일을 사용합니다.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button variant="outlined" onClick={() => setOpen(false)}>취소</Button>
            <Button variant="spotlite" onClick={() => setOpen(false)}>
              확인
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  },
};