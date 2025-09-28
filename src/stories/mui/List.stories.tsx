import type { Meta, StoryObj } from '@storybook/react';
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListItemAvatar,
  ListSubheader,
  Divider,
  Avatar,
  Paper,
  Box,
  Typography,
  Stack,
  Checkbox,
  Switch,
  IconButton
} from '@mui/material';
import {
  Inbox,
  Drafts,
  Send,
  Delete,
  Star,
  StarBorder,
  Person,
  Settings,
  Notifications,
  Security,
  Help,
  Info,
  Home,
  Work,
  School
} from '@mui/icons-material';

const meta: Meta<typeof List> = {
  title: 'MUI/List',
  component: List,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Spotlite 디자인 시스템의 Material-UI List 컴포넌트입니다. Paper 내부에서 maxHeight가 70vh로 설정되어 있습니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    dense: {
      control: { type: 'boolean' },
      description: '조밀한 레이아웃 사용 여부',
    },
    disablePadding: {
      control: { type: 'boolean' },
      description: '패딩 제거 여부',
    },
    subheader: {
      control: { type: 'text' },
      description: 'List 서브헤더',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 List들
export const Default: Story = {
  render: () => (
    <Paper sx={{ width: 320 }}>
      <List>
        <ListItem>
          <ListItemIcon>
            <Inbox />
          </ListItemIcon>
          <ListItemText primary="받은편지함" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Drafts />
          </ListItemIcon>
          <ListItemText primary="임시보관함" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Send />
          </ListItemIcon>
          <ListItemText primary="보낸편지함" />
        </ListItem>
      </List>
    </Paper>
  ),
};

export const Dense: Story = {
  render: () => (
    <Paper sx={{ width: 320 }}>
      <List dense>
        <ListItem>
          <ListItemIcon>
            <Inbox />
          </ListItemIcon>
          <ListItemText primary="받은편지함" secondary="새 메시지 5개" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Drafts />
          </ListItemIcon>
          <ListItemText primary="임시보관함" secondary="저장된 메시지 2개" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Send />
          </ListItemIcon>
          <ListItemText primary="보낸편지함" secondary="최근 발송 10개" />
        </ListItem>
      </List>
    </Paper>
  ),
};

export const DisablePadding: Story = {
  render: () => (
    <Paper sx={{ width: 320 }}>
      <List disablePadding>
        <ListItem>
          <ListItemIcon>
            <Inbox />
          </ListItemIcon>
          <ListItemText primary="패딩이 제거된 List" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Drafts />
          </ListItemIcon>
          <ListItemText primary="전체 너비 사용" />
        </ListItem>
      </List>
    </Paper>
  ),
};

// Subheader가 있는 List
export const WithSubheader: Story = {
  render: () => (
    <Paper sx={{ width: 320 }}>
      <List subheader={<ListSubheader>메일함</ListSubheader>}>
        <ListItem>
          <ListItemIcon>
            <Inbox />
          </ListItemIcon>
          <ListItemText primary="받은편지함" secondary="읽지 않은 메시지 3개" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Drafts />
          </ListItemIcon>
          <ListItemText primary="임시보관함" secondary="저장된 메시지 7개" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Send />
          </ListItemIcon>
          <ListItemText primary="보낸편지함" secondary="발송 완료 12개" />
        </ListItem>
      </List>
    </Paper>
  ),
};

// 버튼이 있는 List
export const WithButtons: Story = {
  render: () => (
    <Paper sx={{ width: 320 }}>
      <List>
        <ListItemButton>
          <ListItemIcon>
            <Inbox />
          </ListItemIcon>
          <ListItemText primary="받은편지함" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <Drafts />
          </ListItemIcon>
          <ListItemText primary="임시보관함" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <Send />
          </ListItemIcon>
          <ListItemText primary="보낸편지함" />
        </ListItemButton>
      </List>
    </Paper>
  ),
};

// Avatar가 있는 List
export const WithAvatars: Story = {
  render: () => (
    <Paper sx={{ width: 320 }}>
      <List>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <Person />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="김철수" secondary="개발팀 팀장" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <Person />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="이영희" secondary="디자인팀 리드" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <Person />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="박민수" secondary="기획팀 매니저" />
        </ListItem>
      </List>
    </Paper>
  ),
};

// Checkbox가 있는 List
export const WithCheckboxes: Story = {
  render: () => (
    <Paper sx={{ width: 320 }}>
      <List>
        <ListItem>
          <ListItemIcon>
            <Checkbox edge="start" />
          </ListItemIcon>
          <ListItemText primary="작업 1: UI 디자인 완료" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Checkbox edge="start" checked />
          </ListItemIcon>
          <ListItemText primary="작업 2: API 연동" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Checkbox edge="start" />
          </ListItemIcon>
          <ListItemText primary="작업 3: 테스트 작성" />
        </ListItem>
      </List>
    </Paper>
  ),
};

// Switch가 있는 List
export const WithSwitches: Story = {
  render: () => (
    <Paper sx={{ width: 320 }}>
      <List subheader={<ListSubheader>알림 설정</ListSubheader>}>
        <ListItem>
          <ListItemIcon>
            <Notifications />
          </ListItemIcon>
          <ListItemText primary="푸시 알림" secondary="새로운 메시지 알림" />
          <Switch edge="end" defaultChecked />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Security />
          </ListItemIcon>
          <ListItemText primary="보안 알림" secondary="로그인 알림" />
          <Switch edge="end" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Settings />
          </ListItemIcon>
          <ListItemText primary="시스템 알림" secondary="업데이트 알림" />
          <Switch edge="end" defaultChecked />
        </ListItem>
      </List>
    </Paper>
  ),
};

// 긴 List (Spotlite maxHeight 70vh 적용)
export const LongList: Story = {
  render: () => (
    <Paper sx={{ width: 320 }}>
      <Typography variant="h6" sx={{ p: 2 }}>
        긴 List (maxHeight: 70vh 적용)
      </Typography>
      <List>
        {Array.from({ length: 50 }, (_, index) => (
          <ListItem key={index}>
            <ListItemIcon>
              {index % 3 === 0 ? <Inbox /> : index % 3 === 1 ? <Drafts /> : <Send />}
            </ListItemIcon>
            <ListItemText
              primary={`항목 ${index + 1}`}
              secondary={`이것은 ${index + 1}번째 항목입니다.`}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  ),
};

// Divider가 있는 List
export const WithDividers: Story = {
  render: () => (
    <Paper sx={{ width: 320 }}>
      <List>
        <ListItem>
          <ListItemIcon>
            <Inbox />
          </ListItemIcon>
          <ListItemText primary="받은편지함" secondary="새 메시지 5개" />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemIcon>
            <Drafts />
          </ListItemIcon>
          <ListItemText primary="임시보관함" secondary="저장된 메시지 2개" />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemIcon>
            <Send />
          </ListItemIcon>
          <ListItemText primary="보낸편지함" secondary="발송 완료 10개" />
        </ListItem>
      </List>
    </Paper>
  ),
};

// 복합 List (여러 섹션)
export const MultipleSubheaders: Story = {
  render: () => (
    <Paper sx={{ width: 350 }}>
      <List>
        <ListSubheader>개인 설정</ListSubheader>
        <ListItemButton>
          <ListItemIcon>
            <Person />
          </ListItemIcon>
          <ListItemText primary="프로필" secondary="개인 정보 관리" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <Security />
          </ListItemIcon>
          <ListItemText primary="보안" secondary="비밀번호 및 인증" />
        </ListItemButton>

        <Divider />

        <ListSubheader>앱 설정</ListSubheader>
        <ListItemButton>
          <ListItemIcon>
            <Notifications />
          </ListItemIcon>
          <ListItemText primary="알림" secondary="푸시 알림 설정" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <Settings />
          </ListItemIcon>
          <ListItemText primary="일반" secondary="언어 및 지역 설정" />
        </ListItemButton>

        <Divider />

        <ListSubheader>지원</ListSubheader>
        <ListItemButton>
          <ListItemIcon>
            <Help />
          </ListItemIcon>
          <ListItemText primary="도움말" secondary="사용법 및 FAQ" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <Info />
          </ListItemIcon>
          <ListItemText primary="정보" secondary="앱 버전 및 라이선스" />
        </ListItemButton>
      </List>
    </Paper>
  ),
};

// Interactive List
export const Interactive: Story = {
  render: () => (
    <Paper sx={{ width: 350 }}>
      <List>
        <ListItemButton>
          <ListItemIcon>
            <Star />
          </ListItemIcon>
          <ListItemText primary="즐겨찾기" secondary="중요한 항목들" />
          <IconButton edge="end">
            <StarBorder />
          </IconButton>
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary="홈" secondary="메인 대시보드" />
          <IconButton edge="end">
            <Info />
          </IconButton>
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <Work />
          </ListItemIcon>
          <ListItemText primary="업무" secondary="프로젝트 관리" />
          <IconButton edge="end">
            <Settings />
          </IconButton>
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <School />
          </ListItemIcon>
          <ListItemText primary="학습" secondary="강의 및 자료" />
          <IconButton edge="end">
            <Delete />
          </IconButton>
        </ListItemButton>
      </List>
    </Paper>
  ),
};

// Spotlite maxHeight 데모
export const SpotliteMaxHeight: Story = {
  render: () => (
    <Stack spacing={3} sx={{ width: 400 }}>
      <Box>
        <Typography variant="h6" gutterBottom>
          Spotlite List maxHeight 데모
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Paper 내부의 List는 maxHeight가 70vh로 제한되어 스크롤이 생깁니다.
        </Typography>
      </Box>

      <Paper sx={{ width: '100%' }}>
        <List subheader={<ListSubheader>매우 긴 목록 (50개 항목)</ListSubheader>}>
          {Array.from({ length: 50 }, (_, index) => (
            <ListItemButton key={index}>
              <ListItemAvatar>
                <Avatar>{index + 1}</Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={`사용자 ${index + 1}`}
                secondary={`이메일: user${index + 1}@example.com`}
              />
              <IconButton edge="end">
                {index % 2 === 0 ? <Star /> : <StarBorder />}
              </IconButton>
            </ListItemButton>
          ))}
        </List>
      </Paper>

      <Typography variant="body2" color="text.secondary">
        위 List는 Paper 내부에 있어서 Spotlite 테마의 maxHeight: 70vh 제한이 적용됩니다.
        항목이 많을 때 자동으로 스크롤이 생성되어 사용성을 향상시킵니다.
      </Typography>
    </Stack>
  ),
};