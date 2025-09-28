import type { Meta, StoryObj } from '@storybook/react';
import {
  Popover,
  Button,
  Typography,
  Box,
  Paper,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  MenuList,
  MenuItem,
  Avatar,
  Stack,
  IconButton
} from '@mui/material';
import {
  Settings,
  Person,
  ExitToApp,
  NotificationsActive,
  Mail,
  Favorite,
  MoreVert,
  Edit,
  Delete,
  Share,
  Info
} from '@mui/icons-material';
import { useState, MouseEvent } from 'react';

const meta: Meta<typeof Popover> = {
  title: 'MUI/Popover',
  component: Popover,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Spotlite 디자인 시스템의 Material-UI Popover 컴포넌트입니다. 기본 anchorOrigin과 transformOrigin이 right-bottom으로 설정되어 있습니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: { type: 'boolean' },
      description: 'Popover 열림/닫힘 상태',
    },
    anchorOrigin: {
      control: { type: 'object' },
      description: 'Anchor 원점 설정 (기본값: bottom-right)',
    },
    transformOrigin: {
      control: { type: 'object' },
      description: 'Transform 원점 설정 (기본값: top-right)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 Popover (Spotlite 기본 설정)
export const Default: Story = {
  render: () => {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return (
      <>
        <Button variant="contained" onClick={handleClick}>
          기본 Popover 열기
        </Button>
        <Popover
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
        >
          <Box sx={{ p: 2, maxWidth: 200 }}>
            <Typography variant="h6" gutterBottom>
              기본 Popover
            </Typography>
            <Typography variant="body2">
              Spotlite 테마의 기본 설정으로
              bottom-right에서 top-right로 열립니다.
            </Typography>
          </Box>
        </Popover>
      </>
    );
  },
};

// 다양한 위치의 Popover들
export const BottomLeft: Story = {
  render: () => {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return (
      <>
        <Button variant="contained" onClick={handleClick}>
          Bottom Left
        </Button>
        <Popover
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
          <Box sx={{ p: 2 }}>
            <Typography>Bottom Left Popover</Typography>
          </Box>
        </Popover>
      </>
    );
  },
};

export const TopCenter: Story = {
  render: () => {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return (
      <>
        <Button variant="contained" onClick={handleClick}>
          Top Center
        </Button>
        <Popover
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
        >
          <Box sx={{ p: 2 }}>
            <Typography>Top Center Popover</Typography>
          </Box>
        </Popover>
      </>
    );
  },
};

// 메뉴 스타일 Popover
export const MenuStyle: Story = {
  render: () => {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return (
      <>
        <Button variant="contained" onClick={handleClick}>
          메뉴 열기
        </Button>
        <Popover
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
        >
          <MenuList>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <Edit fontSize="small" />
              </ListItemIcon>
              <ListItemText>편집</ListItemText>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <Share fontSize="small" />
              </ListItemIcon>
              <ListItemText>공유</ListItemText>
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <Delete fontSize="small" />
              </ListItemIcon>
              <ListItemText>삭제</ListItemText>
            </MenuItem>
          </MenuList>
        </Popover>
      </>
    );
  },
};

// 사용자 프로필 Popover
export const UserProfile: Story = {
  render: () => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

    const handleClick = (event: MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return (
      <>
        <IconButton onClick={handleClick}>
          <Avatar>
            <Person />
          </Avatar>
        </IconButton>
        <Popover
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
        >
          <Box sx={{ p: 3, minWidth: 250 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Avatar sx={{ mr: 2 }}>
                <Person />
              </Avatar>
              <Box>
                <Typography variant="subtitle1">김철수</Typography>
                <Typography variant="body2" color="text.secondary">
                  kim@example.com
                </Typography>
              </Box>
            </Box>

            <Divider sx={{ my: 1 }} />

            <List disablePadding>
              <ListItemButton onClick={handleClose}>
                <ListItemIcon>
                  <Person fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="프로필 보기" />
              </ListItemButton>
              <ListItemButton onClick={handleClose}>
                <ListItemIcon>
                  <Settings fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="설정" />
              </ListItemButton>
              <ListItemButton onClick={handleClose}>
                <ListItemIcon>
                  <ExitToApp fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="로그아웃" />
              </ListItemButton>
            </List>
          </Box>
        </Popover>
      </>
    );
  },
};

// 알림 Popover
export const Notifications: Story = {
  render: () => {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    const notifications = [
      { id: 1, title: '새로운 메시지', message: '김영희님이 메시지를 보냈습니다.', time: '2분 전' },
      { id: 2, title: '시스템 업데이트', message: '새로운 기능이 추가되었습니다.', time: '1시간 전' },
      { id: 3, title: '일정 알림', message: '회의가 30분 후에 시작됩니다.', time: '30분 전' },
    ];

    return (
      <>
        <IconButton onClick={handleClick} color="primary">
          <NotificationsActive />
        </IconButton>
        <Popover
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
        >
          <Box sx={{ width: 350, maxHeight: 400 }}>
            <Box sx={{ p: 2, borderBottom: 1, borderColor: 'divider' }}>
              <Typography variant="h6">알림</Typography>
            </Box>
            <List disablePadding>
              {notifications.map((notification) => (
                <ListItem key={notification.id} divider>
                  <ListItemIcon>
                    <Mail />
                  </ListItemIcon>
                  <ListItemText
                    primary={notification.title}
                    secondary={
                      <>
                        <Typography variant="body2" component="span">
                          {notification.message}
                        </Typography>
                        <br />
                        <Typography variant="caption" color="text.secondary">
                          {notification.time}
                        </Typography>
                      </>
                    }
                  />
                </ListItem>
              ))}
            </List>
            <Box sx={{ p: 1, textAlign: 'center', borderTop: 1, borderColor: 'divider' }}>
              <Button size="small" onClick={handleClose}>
                모든 알림 보기
              </Button>
            </Box>
          </Box>
        </Popover>
      </>
    );
  },
};

// 더보기 메뉴 Popover
export const MoreMenu: Story = {
  render: () => {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return (
      <Paper sx={{ p: 2, maxWidth: 300 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6">게시글 제목</Typography>
          <IconButton onClick={handleClick}>
            <MoreVert />
          </IconButton>
        </Box>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          이것은 샘플 게시글입니다. 더보기 버튼을 클릭하면 메뉴가 나타납니다.
        </Typography>

        <Popover
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
        >
          <MenuList>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <Favorite fontSize="small" />
              </ListItemIcon>
              <ListItemText>즐겨찾기 추가</ListItemText>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <Edit fontSize="small" />
              </ListItemIcon>
              <ListItemText>편집</ListItemText>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <Share fontSize="small" />
              </ListItemIcon>
              <ListItemText>공유</ListItemText>
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <Info fontSize="small" />
              </ListItemIcon>
              <ListItemText>신고</ListItemText>
            </MenuItem>
            <MenuItem onClick={handleClose} sx={{ color: 'error.main' }}>
              <ListItemIcon>
                <Delete fontSize="small" sx={{ color: 'error.main' }} />
              </ListItemIcon>
              <ListItemText>삭제</ListItemText>
            </MenuItem>
          </MenuList>
        </Popover>
      </Paper>
    );
  },
};

// 모든 위치 데모
export const AllPositions: Story = {
  render: () => {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    const [position, setPosition] = useState<string>('');

    const handleClick = (event: MouseEvent<HTMLButtonElement>, pos: string) => {
      setAnchorEl(event.currentTarget);
      setPosition(pos);
    };

    const handleClose = () => {
      setAnchorEl(null);
      setPosition('');
    };

    const open = Boolean(anchorEl);

    const positions = [
      { name: 'Top Left', anchor: { vertical: 'top' as const, horizontal: 'left' as const }, transform: { vertical: 'bottom' as const, horizontal: 'left' as const } },
      { name: 'Top Center', anchor: { vertical: 'top' as const, horizontal: 'center' as const }, transform: { vertical: 'bottom' as const, horizontal: 'center' as const } },
      { name: 'Top Right', anchor: { vertical: 'top' as const, horizontal: 'right' as const }, transform: { vertical: 'bottom' as const, horizontal: 'right' as const } },
      { name: 'Bottom Left', anchor: { vertical: 'bottom' as const, horizontal: 'left' as const }, transform: { vertical: 'top' as const, horizontal: 'left' as const } },
      { name: 'Bottom Center', anchor: { vertical: 'bottom' as const, horizontal: 'center' as const }, transform: { vertical: 'top' as const, horizontal: 'center' as const } },
      { name: 'Bottom Right (기본값)', anchor: { vertical: 'bottom' as const, horizontal: 'right' as const }, transform: { vertical: 'top' as const, horizontal: 'right' as const } },
    ];

    const currentPosition = positions.find(pos => pos.name === position);

    return (
      <Box sx={{ p: 4 }}>
        <Typography variant="h6" gutterBottom textAlign="center">
          Popover 위치별 예시
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom textAlign="center" sx={{ mb: 3 }}>
          각 버튼을 클릭하여 다양한 위치의 Popover를 확인하세요
        </Typography>

        <Stack spacing={2} sx={{ maxWidth: 400, mx: 'auto' }}>
          {positions.map((pos) => (
            <Button
              key={pos.name}
              variant={pos.name.includes('기본값') ? 'contained' : 'outlined'}
              onClick={(e) => handleClick(e, pos.name)}
              fullWidth
            >
              {pos.name}
            </Button>
          ))}
        </Stack>

        <Popover
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={currentPosition?.anchor}
          transformOrigin={currentPosition?.transform}
        >
          <Box sx={{ p: 2, minWidth: 150 }}>
            <Typography variant="subtitle2" gutterBottom>
              {position}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              anchorOrigin: {currentPosition?.anchor.vertical}-{currentPosition?.anchor.horizontal}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              transformOrigin: {currentPosition?.transform.vertical}-{currentPosition?.transform.horizontal}
            </Typography>
          </Box>
        </Popover>
      </Box>
    );
  },
};

// Spotlite 기본 설정 설명
export const SpotliteDefault: Story = {
  render: () => {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return (
      <Box sx={{ p: 3, textAlign: 'center' }}>
        <Typography variant="h5" gutterBottom>
          Spotlite Popover 기본 설정
        </Typography>

        <Paper sx={{ p: 3, mb: 3, textAlign: 'left' }}>
          <Typography variant="h6" gutterBottom>
            테마 설정
          </Typography>
          <Typography variant="body2" paragraph>
            Spotlite 테마에서는 Popover의 기본 위치가 다음과 같이 설정되어 있습니다:
          </Typography>
          <Box sx={{ pl: 2 }}>
            <Typography variant="body2" sx={{ fontFamily: 'monospace', mb: 1 }}>
              anchorOrigin: {`{ vertical: 'bottom', horizontal: 'right' }`}
            </Typography>
            <Typography variant="body2" sx={{ fontFamily: 'monospace' }}>
              transformOrigin: {`{ vertical: 'top', horizontal: 'right' }`}
            </Typography>
          </Box>
          <Typography variant="body2" sx={{ mt: 2 }}>
            이는 오른쪽 하단에서 나타나는 팝오버가 기본값임을 의미합니다.
          </Typography>
        </Paper>

        <Button variant="contained" size="large" onClick={handleClick}>
          Spotlite 기본 Popover 체험하기
        </Button>

        <Popover
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
        >
          <Box sx={{ p: 3, maxWidth: 300 }}>
            <Typography variant="h6" gutterBottom>
              Spotlite 기본 Popover
            </Typography>
            <Typography variant="body2" paragraph>
              이 Popover는 별도의 position 설정 없이 Spotlite 테마의 기본 설정을 사용합니다.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              버튼의 오른쪽 하단에서 나타나며, 팝오버의 오른쪽 상단이 기준점이 됩니다.
            </Typography>
          </Box>
        </Popover>
      </Box>
    );
  },
};