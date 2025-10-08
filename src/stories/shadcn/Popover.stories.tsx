import type { Meta, StoryObj } from '@storybook/react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '../../components/ui/popover';
import { Button } from '../../components/ui/button';
import { Typography } from '../../components/ui/typography';
import { Badge } from '../../components/ui/badge';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import {
  Settings,
  User,
  Calendar,
  Filter,
  Share,
  MoreHorizontal,
  ChevronDown,
  Info,
  Bell,
  Search,
} from 'lucide-react';

const meta: Meta<typeof Popover> = {
  title: 'shadcn/Popover',
  component: Popover,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Spotlite 디자인 시스템의 shadcn/ui Popover 컴포넌트입니다. MUI Popover와 유사한 기능을 제공하며, 다양한 콘텐츠를 표시할 수 있습니다.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 Popover
export const Default: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">기본 Popover</Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="space-y-2">
          <Typography variant="h6">Popover 제목</Typography>
          <Typography variant="body2" className="text-gray-600">
            이것은 기본 Popover 컨텐츠입니다. 다양한 정보나 액션을 포함할 수 있습니다.
          </Typography>
        </div>
      </PopoverContent>
    </Popover>
  ),
};

// 사용자 프로필 Popover
export const UserProfile: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2">
          <User className="h-4 w-4" />
          사용자 프로필
          <ChevronDown className="h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
            <div>
              <Typography variant="h6">김개발</Typography>
              <Typography variant="body2" className="text-gray-600">
                Frontend Developer
              </Typography>
            </div>
          </div>

          <div className="flex gap-2">
            <Badge variant="success" size="sm">Pro</Badge>
            <Badge variant="info" size="sm">팀 리더</Badge>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">이메일:</span>
              <span>kim@example.com</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">가입일:</span>
              <span>2023.01.15</span>
            </div>
          </div>

          <div className="flex gap-2 pt-2 border-t">
            <Button variant="outline" size="sm" className="flex-1">
              프로필 수정
            </Button>
            <Button size="sm" className="flex-1">
              설정
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
};

// 설정 메뉴 Popover
export const SettingsMenu: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="icon">
          <Settings className="h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-56">
        <div className="space-y-1">
          {[
            { icon: User, label: '계정 설정', badge: null },
            { icon: Bell, label: '알림 설정', badge: '3' },
            { icon: Settings, label: '일반 설정', badge: null },
            { icon: Info, label: '도움말', badge: 'new' },
          ].map((item, index) => (
            <button
              key={index}
              className="w-full flex items-center justify-between p-2 text-sm hover:bg-gray-100 rounded"
            >
              <div className="flex items-center gap-2">
                <item.icon className="h-4 w-4" />
                <span>{item.label}</span>
              </div>
              {item.badge && (
                <Badge
                  variant={item.badge === 'new' ? 'destructive' : 'secondary'}
                  size="sm"
                >
                  {item.badge}
                </Badge>
              )}
            </button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  ),
};

// 필터 Popover
export const FilterMenu: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2">
          <Filter className="h-4 w-4" />
          필터
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="space-y-4">
          <Typography variant="h6">필터 옵션</Typography>

          <div className="space-y-3">
            <div>
              <Label htmlFor="status">상태</Label>
              <select id="status" className="w-full p-2 border rounded mt-1">
                <option>전체</option>
                <option>활성</option>
                <option>비활성</option>
                <option>대기중</option>
              </select>
            </div>

            <div>
              <Label htmlFor="category">카테고리</Label>
              <select id="category" className="w-full p-2 border rounded mt-1">
                <option>전체</option>
                <option>개발</option>
                <option>디자인</option>
                <option>기획</option>
              </select>
            </div>

            <div>
              <Label htmlFor="date">날짜 범위</Label>
              <div className="flex gap-2 mt-1">
                <Input type="date" className="flex-1" />
                <Input type="date" className="flex-1" />
              </div>
            </div>
          </div>

          <div className="flex gap-2 pt-2 border-t">
            <Button variant="outline" size="sm" className="flex-1">
              초기화
            </Button>
            <Button size="sm" className="flex-1">
              적용
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
};

// 공유 메뉴 Popover
export const ShareMenu: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2">
          <Share className="h-4 w-4" />
          공유
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-72">
        <div className="space-y-4">
          <Typography variant="h6">문서 공유</Typography>

          <div className="space-y-2">
            <Label htmlFor="email">이메일로 공유</Label>
            <div className="flex gap-2">
              <Input
                id="email"
                placeholder="email@example.com"
                className="flex-1"
              />
              <Button size="sm">초대</Button>
            </div>
          </div>

          <div className="space-y-2">
            <Label>링크 공유</Label>
            <div className="flex gap-2">
              <Input
                value="https://example.com/doc/123"
                readOnly
                className="flex-1"
              />
              <Button variant="outline" size="sm">복사</Button>
            </div>
          </div>

          <div className="space-y-2">
            <Label>권한 설정</Label>
            <select className="w-full p-2 border rounded">
              <option>읽기 전용</option>
              <option>편집 가능</option>
              <option>관리자</option>
            </select>
          </div>

          <div className="flex gap-2 pt-2 border-t">
            <Button variant="outline" size="sm" className="flex-1">
              취소
            </Button>
            <Button size="sm" className="flex-1">
              공유
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
};

// 액션 메뉴 Popover
export const ActionMenu: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-48">
        <div className="space-y-1">
          {[
            { label: '편집', shortcut: 'Ctrl+E' },
            { label: '복사', shortcut: 'Ctrl+C' },
            { label: '이동', shortcut: 'Ctrl+X' },
            { label: '이름 변경', shortcut: 'F2' },
            { label: '삭제', shortcut: 'Del', destructive: true },
          ].map((action, index) => (
            <button
              key={index}
              className={`w-full flex items-center justify-between p-2 text-sm hover:bg-gray-100 rounded ${
                action.destructive ? 'text-red-600 hover:bg-red-50' : ''
              }`}
            >
              <span>{action.label}</span>
              <span className="text-xs text-gray-400">{action.shortcut}</span>
            </button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  ),
};

// 캘린더 날짜 선택 Popover
export const DatePicker: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2">
          <Calendar className="h-4 w-4" />
          날짜 선택
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="space-y-4">
          <Typography variant="h6">날짜 및 시간 선택</Typography>

          <div className="space-y-3">
            <div>
              <Label htmlFor="date">날짜</Label>
              <Input type="date" id="date" className="mt-1" />
            </div>

            <div>
              <Label htmlFor="time">시간</Label>
              <Input type="time" id="time" className="mt-1" />
            </div>

            <div>
              <Label>빠른 선택</Label>
              <div className="grid grid-cols-2 gap-2 mt-1">
                <Button variant="outline" size="sm">오늘</Button>
                <Button variant="outline" size="sm">내일</Button>
                <Button variant="outline" size="sm">다음 주</Button>
                <Button variant="outline" size="sm">다음 달</Button>
              </div>
            </div>
          </div>

          <div className="flex gap-2 pt-2 border-t">
            <Button variant="outline" size="sm" className="flex-1">
              취소
            </Button>
            <Button size="sm" className="flex-1">
              선택
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
};

// 검색 Popover
export const SearchPopover: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2">
          <Search className="h-4 w-4" />
          고급 검색
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-96">
        <div className="space-y-4">
          <Typography variant="h6">고급 검색</Typography>

          <div className="space-y-3">
            <div>
              <Label htmlFor="keyword">키워드</Label>
              <Input id="keyword" placeholder="검색어 입력" className="mt-1" />
            </div>

            <div>
              <Label htmlFor="author">작성자</Label>
              <Input id="author" placeholder="작성자명" className="mt-1" />
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <Label htmlFor="from">시작일</Label>
                <Input type="date" id="from" className="mt-1" />
              </div>
              <div>
                <Label htmlFor="to">종료일</Label>
                <Input type="date" id="to" className="mt-1" />
              </div>
            </div>

            <div>
              <Label>파일 형식</Label>
              <div className="flex gap-2 mt-1">
                <Badge variant="outline" className="cursor-pointer">PDF</Badge>
                <Badge variant="outline" className="cursor-pointer">DOC</Badge>
                <Badge variant="outline" className="cursor-pointer">XLS</Badge>
                <Badge variant="outline" className="cursor-pointer">이미지</Badge>
              </div>
            </div>
          </div>

          <div className="flex gap-2 pt-2 border-t">
            <Button variant="outline" size="sm" className="flex-1">
              초기화
            </Button>
            <Button size="sm" className="flex-1">
              검색
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
};

// 다양한 위치 테스트
export const Positioning: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-8 p-8">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Top</Button>
        </PopoverTrigger>
        <PopoverContent side="top" className="w-48">
          <Typography variant="body2">상단에 표시되는 Popover</Typography>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Right</Button>
        </PopoverTrigger>
        <PopoverContent side="right" className="w-48">
          <Typography variant="body2">우측에 표시되는 Popover</Typography>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Left</Button>
        </PopoverTrigger>
        <PopoverContent side="left" className="w-48">
          <Typography variant="body2">좌측에 표시되는 Popover</Typography>
        </PopoverContent>
      </Popover>

      <div></div>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Bottom (기본)</Button>
        </PopoverTrigger>
        <PopoverContent className="w-48">
          <Typography variant="body2">하단에 표시되는 Popover (기본값)</Typography>
        </PopoverContent>
      </Popover>

      <div></div>
    </div>
  ),
};

// 실제 사용 시나리오 모음
export const PracticalExamples: Story = {
  render: () => (
    <div className="space-y-6 w-full max-w-4xl">
      <Typography variant="h5" className="text-center">
        실제 사용 시나리오
      </Typography>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* 사용자 메뉴 */}
        <div className="p-4 border rounded-lg">
          <Typography variant="h6" className="mb-2">사용자 메뉴</Typography>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-full">
                <User className="h-4 w-4 mr-2" />
                김개발님
                <ChevronDown className="h-4 w-4 ml-auto" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-56">
              <div className="space-y-1">
                <button className="w-full text-left p-2 hover:bg-gray-100 rounded">프로필 보기</button>
                <button className="w-full text-left p-2 hover:bg-gray-100 rounded">설정</button>
                <button className="w-full text-left p-2 hover:bg-gray-100 rounded text-red-600">로그아웃</button>
              </div>
            </PopoverContent>
          </Popover>
        </div>

        {/* 필터 메뉴 */}
        <div className="p-4 border rounded-lg">
          <Typography variant="h6" className="mb-2">필터 메뉴</Typography>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-full">
                <Filter className="h-4 w-4 mr-2" />
                필터 적용
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-64">
              <div className="space-y-2">
                <Typography variant="body2" className="font-medium">상태</Typography>
                <div className="space-y-1">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    활성
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    비활성
                  </label>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>

        {/* 공유 메뉴 */}
        <div className="p-4 border rounded-lg">
          <Typography variant="h6" className="mb-2">공유 메뉴</Typography>
          <Popover>
            <PopoverTrigger asChild>
              <Button className="w-full">
                <Share className="h-4 w-4 mr-2" />
                공유하기
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-64">
              <div className="space-y-2">
                <Input placeholder="이메일 주소" />
                <Button size="sm" className="w-full">초대 보내기</Button>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  ),
};

// Spotlite 테마 특성 설명
export const SpotliteThemeFeatures: Story = {
  render: () => (
    <div className="space-y-6 w-full max-w-2xl">
      <Typography variant="h5" className="text-center">
        Spotlite Popover 테마 특성
      </Typography>

      <div className="p-4 border rounded-lg bg-blue-50">
        <Typography variant="h6" className="mb-2">테마 특성</Typography>
        <ul className="space-y-1 text-sm text-gray-700">
          <li>• Radix UI 기반 구현으로 접근성 최적화</li>
          <li>• MUI Popover와 유사한 사용 패턴</li>
          <li>• 기본 위치: bottom-right (MUI와 동일)</li>
          <li>• 자동 위치 조정 (화면 경계 감지)</li>
          <li>• 키보드 내비게이션 지원</li>
          <li>• 포커스 트랩 기능</li>
          <li>• 애니메이션 및 트랜지션 지원</li>
        </ul>
      </div>

      <div className="flex justify-center">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">
              Spotlite 테마 Popover 체험
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="space-y-2">
              <Typography variant="h6">Spotlite 테마 적용</Typography>
              <Typography variant="body2" className="text-gray-600">
                이 Popover는 Spotlite 디자인 시스템의 테마가 적용되어
                MUI Popover와 일관된 사용자 경험을 제공합니다.
              </Typography>
              <Badge variant="info" className="mt-2">
                MUI 호환
              </Badge>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  ),
};