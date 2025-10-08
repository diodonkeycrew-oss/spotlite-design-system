import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '../../components/ui/badge';
import { Typography } from '../../components/ui/typography';
import { Button } from '../../components/ui/button';
import {
  X,
  Star,
  CheckCircle2,
  AlertCircle,
  Info as InfoIcon,
  Users,
  Calendar,
  Tag,
  Zap,
} from 'lucide-react';

const meta: Meta<typeof Badge> = {
  title: 'shadcn/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Spotlite 디자인 시스템의 shadcn/ui Badge 컴포넌트입니다. MUI Chip과 유사한 기능을 제공하며, 다양한 variant와 크기를 지원합니다.',
      },
      source: {
        type: 'code',
        language: 'tsx',
        format: true,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'secondary', 'destructive', 'outline'],
      description: 'Badge의 시각적 스타일',
    },
    size: {
      control: { type: 'select' },
      options: ['default', 'sm', 'lg'],
      description: 'Badge 크기',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 Badge들
export const Default: Story = {
  args: {
    children: '기본 Badge',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Destructive',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline',
  },
};


// 크기별 Badge들
export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Badge size="sm">Small</Badge>
      <Badge size="default">Default</Badge>
      <Badge size="lg">Large</Badge>
    </div>
  ),
};

// 아이콘과 함께 사용하는 Badge들
export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="default" className="flex items-center gap-1">
        <CheckCircle2 className="h-3 w-3" />
        완료
      </Badge>
      <Badge variant="secondary" className="flex items-center gap-1">
        <AlertCircle className="h-3 w-3" />
        대기중
      </Badge>
      <Badge variant="outline" className="flex items-center gap-1">
        <InfoIcon className="h-3 w-3" />
        정보
      </Badge>
      <Badge variant="destructive" className="flex items-center gap-1">
        <X className="h-3 w-3" />
        오류
      </Badge>
      <Badge variant="default" className="flex items-center gap-1">
        <Star className="h-3 w-3" />
        즐겨찾기
      </Badge>
    </div>
  ),
};

// 숫자 Badge들 (알림 개수 등)
export const NumberBadges: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <div className="relative">
          <Button variant="outline">메시지</Button>
          <Badge variant="destructive" className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs">
            3
          </Badge>
        </div>
        <div className="relative">
          <Button variant="outline">알림</Button>
          <Badge variant="outline" className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs">
            12
          </Badge>
        </div>
        <div className="relative">
          <Button variant="outline">업무</Button>
          <Badge variant="secondary" className="absolute -top-2 -right-2 h-6 w-6 flex items-center justify-center p-0 text-xs">
            99+
          </Badge>
        </div>
      </div>

      <div className="flex gap-2">
        <Badge variant="destructive">new</Badge>
        <Badge variant="default">hot</Badge>
        <Badge variant="outline">beta</Badge>
        <Badge variant="secondary">sale</Badge>
      </div>
    </div>
  ),
};

// 상태 표시 Badge들
export const StatusBadges: Story = {
  render: () => (
    <div className="space-y-4 w-full max-w-md">
      <div className="flex items-center justify-between p-3 border rounded-lg">
        <span>서버 상태</span>
        <Badge variant="default">온라인</Badge>
      </div>
      <div className="flex items-center justify-between p-3 border rounded-lg">
        <span>배포 상태</span>
        <Badge variant="secondary">진행중</Badge>
      </div>
      <div className="flex items-center justify-between p-3 border rounded-lg">
        <span>테스트 결과</span>
        <Badge variant="destructive">실패</Badge>
      </div>
      <div className="flex items-center justify-between p-3 border rounded-lg">
        <span>코드 리뷰</span>
        <Badge variant="outline">대기</Badge>
      </div>
      <div className="flex items-center justify-between p-3 border rounded-lg">
        <span>문서 상태</span>
        <Badge variant="secondary">초안</Badge>
      </div>
    </div>
  ),
};

// 태그 형태의 Badge들
export const TagBadges: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <Typography variant="h6" className="mb-2">프로젝트 태그</Typography>
        <div className="flex flex-wrap gap-2">
          <Badge variant="default" className="flex items-center gap-1">
            <Tag className="h-3 w-3" />
            React
          </Badge>
          <Badge variant="outline" className="flex items-center gap-1">
            <Tag className="h-3 w-3" />
            TypeScript
          </Badge>
          <Badge variant="default" className="flex items-center gap-1">
            <Tag className="h-3 w-3" />
            Storybook
          </Badge>
          <Badge variant="secondary" className="flex items-center gap-1">
            <Tag className="h-3 w-3" />
            Tailwind
          </Badge>
        </div>
      </div>

      <div>
        <Typography variant="h6" className="mb-2">우선순위</Typography>
        <div className="flex gap-2">
          <Badge variant="destructive" size="sm">높음</Badge>
          <Badge variant="secondary" size="sm">보통</Badge>
          <Badge variant="secondary" size="sm">낮음</Badge>
        </div>
      </div>

      <div>
        <Typography variant="h6" className="mb-2">카테고리</Typography>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline">Frontend</Badge>
          <Badge variant="outline">Backend</Badge>
          <Badge variant="outline">DevOps</Badge>
          <Badge variant="outline">Design</Badge>
          <Badge variant="outline">QA</Badge>
        </div>
      </div>
    </div>
  ),
};

// 모든 variant 비교
export const AllVariants: Story = {
  render: () => (
    <div className="space-y-6 w-full max-w-2xl">
      <Typography variant="h5" className="text-center">
        Badge Variant 비교
      </Typography>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-3">
          <Typography variant="h6">기본 Variant</Typography>
          <div className="space-y-2">
            <Badge variant="default">Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="outline">Outline</Badge>
          </div>
        </div>

        <div className="space-y-3">
          <Typography variant="h6">기본 Variant</Typography>
          <div className="space-y-2">
            <Badge variant="default">Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="outline">Outline</Badge>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <Typography variant="h6">크기 비교</Typography>
        <div className="flex items-center gap-4">
          <Badge variant="outline" size="sm">Small</Badge>
          <Badge variant="outline" size="default">Default</Badge>
          <Badge variant="outline" size="lg">Large</Badge>
        </div>
      </div>
    </div>
  ),
};

// 실제 사용 예시
export const PracticalExamples: Story = {
  render: () => (
    <div className="space-y-6 w-full max-w-2xl">
      <Typography variant="h5" className="text-center">
        실제 사용 시나리오
      </Typography>

      <div className="space-y-6">
        {/* 사용자 프로필 */}
        <div className="p-4 border rounded-lg">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
            <div>
              <div className="flex items-center gap-2">
                <Typography variant="h6">김개발</Typography>
                <Badge variant="default" size="sm">
                  <CheckCircle2 className="h-3 w-3 mr-1" />
                  인증됨
                </Badge>
              </div>
              <Typography variant="body2" className="text-gray-600">
                Frontend Developer
              </Typography>
            </div>
          </div>
          <div className="flex gap-2">
            <Badge variant="default" size="sm">Pro</Badge>
            <Badge variant="outline" size="sm">팀 리더</Badge>
            <Badge variant="secondary" size="sm">5년 경력</Badge>
          </div>
        </div>

        {/* 파일 목록 */}
        <div className="space-y-2">
          <Typography variant="h6">파일 목록</Typography>
          {[
            { name: 'components.tsx', status: 'default', label: '완료' },
            { name: 'utils.ts', status: 'secondary', label: '수정중' },
            { name: 'types.d.ts', status: 'outline', label: '리뷰중' },
            { name: 'api.ts', status: 'destructive', label: '오류' },
          ].map((file, index) => (
            <div key={index} className="flex items-center justify-between p-3 border rounded">
              <span>{file.name}</span>
              <Badge variant={file.status as any} size="sm">
                {file.label}
              </Badge>
            </div>
          ))}
        </div>

        {/* 대시보드 카드 */}
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 border rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <Typography variant="h6">활성 사용자</Typography>
              <Badge variant="default" className="flex items-center gap-1">
                <Users className="h-3 w-3" />
                1,234
              </Badge>
            </div>
            <Typography variant="body2" className="text-gray-600">
              전일 대비 +12%
            </Typography>
          </div>

          <div className="p-4 border rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <Typography variant="h6">이벤트</Typography>
              <Badge variant="secondary" className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                3개
              </Badge>
            </div>
            <Typography variant="body2" className="text-gray-600">
              오늘 예정된 이벤트
            </Typography>
          </div>
        </div>
      </div>
    </div>
  ),
};

// MUI Chip 대응 기능 데모
export const ChipLikeFeatures: Story = {
  render: () => (
    <div className="space-y-6 w-full max-w-2xl">
      <Typography variant="h5" className="text-center">
        MUI Chip 대응 기능
      </Typography>

      <div className="space-y-4">
        <div className="p-4 border rounded-lg bg-blue-50">
          <Typography variant="h6" className="mb-2">Badge vs MUI Chip</Typography>
          <Typography variant="body2" className="text-gray-700">
            shadcn Badge는 MUI Chip의 대부분 기능을 제공합니다:
            • 다양한 variant (MUI severity 대응)
            • 크기 옵션 (small, medium, large)
            • 아이콘 지원
            • 커스텀 스타일링
          </Typography>
        </div>

        <div>
          <Typography variant="h6" className="mb-2">Chip 스타일 구현</Typography>
          <div className="flex flex-wrap gap-2">
            <Badge variant="default" className="rounded-full">
              <Zap className="h-3 w-3 mr-1" />
              Default Chip
            </Badge>
            <Badge variant="secondary" className="rounded-full">
              Secondary Chip
            </Badge>
            <Badge variant="destructive" className="rounded-full">
              Destructive Chip
            </Badge>
          </div>
        </div>

        <div>
          <Typography variant="h6" className="mb-2">삭제 가능한 Badge (Chip 스타일)</Typography>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="flex items-center gap-1 pr-1">
              React
              <X className="h-3 w-3 cursor-pointer hover:bg-gray-200 rounded" />
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1 pr-1">
              TypeScript
              <X className="h-3 w-3 cursor-pointer hover:bg-blue-200 rounded" />
            </Badge>
            <Badge variant="default" className="flex items-center gap-1 pr-1">
              Storybook
              <X className="h-3 w-3 cursor-pointer hover:bg-green-200 rounded" />
            </Badge>
          </div>
        </div>
      </div>
    </div>
  ),
};