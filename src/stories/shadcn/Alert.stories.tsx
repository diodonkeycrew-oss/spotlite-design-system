import type { Meta, StoryObj } from '@storybook/react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Typography } from '@/components/ui/typography';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  AlertCircle,
  CheckCircle2,
  Info as InfoIcon,
  Triangle,
  X,
  Lightbulb,
  Shield,
  Zap,
} from 'lucide-react';

const meta: Meta<typeof Alert> = {
  title: 'shadcn/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Spotlite 디자인 시스템의 shadcn/ui Alert 컴포넌트입니다. MUI Alert와 유사한 기능을 제공하며, 다양한 severity 스타일을 지원합니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'destructive', 'success', 'warning', 'info'],
      description: 'Alert의 시각적 스타일',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 Alert들
export const Default: Story = {
  args: {
    children: (
      <>
        <InfoIcon className="h-4 w-4" />
        <AlertTitle>기본 알림</AlertTitle>
        <AlertDescription>
          이것은 기본 Alert 컴포넌트입니다. 일반적인 정보를 표시할 때 사용합니다.
        </AlertDescription>
      </>
    ),
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: (
      <>
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>오류</AlertTitle>
        <AlertDescription>
          중요한 오류가 발생했습니다. 즉시 조치가 필요합니다.
        </AlertDescription>
      </>
    ),
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    children: (
      <>
        <CheckCircle2 className="h-4 w-4" />
        <AlertTitle>성공</AlertTitle>
        <AlertDescription>
          작업이 성공적으로 완료되었습니다!
        </AlertDescription>
      </>
    ),
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    children: (
      <>
        <Triangle className="h-4 w-4" />
        <AlertTitle>경고</AlertTitle>
        <AlertDescription>
          주의가 필요한 상황입니다. 확인 후 진행하세요.
        </AlertDescription>
      </>
    ),
  },
};

export const Info: Story = {
  args: {
    variant: 'info',
    children: (
      <>
        <InfoIcon className="h-4 w-4" />
        <AlertTitle>정보</AlertTitle>
        <AlertDescription>
          유용한 정보를 제공합니다. 참고하시기 바랍니다.
        </AlertDescription>
      </>
    ),
  },
};

// 제목 없는 Alert들
export const WithoutTitle: Story = {
  render: () => (
    <div className="space-y-4 w-full max-w-md">
      <Alert variant="default">
        <InfoIcon className="h-4 w-4" />
        <AlertDescription>
          제목 없는 기본 알림입니다. 간단한 메시지를 전달할 때 사용합니다.
        </AlertDescription>
      </Alert>

      <Alert variant="success">
        <CheckCircle2 className="h-4 w-4" />
        <AlertDescription>
          파일이 성공적으로 저장되었습니다.
        </AlertDescription>
      </Alert>

      <Alert variant="warning">
        <Triangle className="h-4 w-4" />
        <AlertDescription>
          네트워크 연결이 불안정합니다.
        </AlertDescription>
      </Alert>
    </div>
  ),
};

// 아이콘 없는 Alert들
export const WithoutIcon: Story = {
  render: () => (
    <div className="space-y-4 w-full max-w-md">
      <Alert variant="default">
        <AlertTitle>아이콘 없는 알림</AlertTitle>
        <AlertDescription>
          아이콘 없이도 깔끔하게 정보를 전달할 수 있습니다.
        </AlertDescription>
      </Alert>

      <Alert variant="info">
        <AlertDescription>
          간단한 정보성 메시지입니다.
        </AlertDescription>
      </Alert>
    </div>
  ),
};

// 다양한 아이콘과 함께
export const WithVariousIcons: Story = {
  render: () => (
    <div className="space-y-4 w-full max-w-lg">
      <Alert variant="info">
        <Lightbulb className="h-4 w-4" />
        <AlertTitle>팁</AlertTitle>
        <AlertDescription>
          키보드 단축키 Ctrl+S를 사용하여 빠르게 저장할 수 있습니다.
        </AlertDescription>
      </Alert>

      <Alert variant="warning">
        <Shield className="h-4 w-4" />
        <AlertTitle>보안 알림</AlertTitle>
        <AlertDescription>
          비밀번호가 7일 후 만료됩니다. 미리 변경하는 것을 권장합니다.
        </AlertDescription>
      </Alert>

      <Alert variant="success">
        <Zap className="h-4 w-4" />
        <AlertTitle>업그레이드 완료</AlertTitle>
        <AlertDescription>
          시스템이 최신 버전으로 업그레이드되었습니다. 새로운 기능을 확인해보세요.
        </AlertDescription>
      </Alert>
    </div>
  ),
};

// 긴 콘텐츠가 있는 Alert
export const LongContent: Story = {
  render: () => (
    <div className="space-y-4 w-full max-w-2xl">
      <Alert variant="info">
        <InfoIcon className="h-4 w-4" />
        <AlertTitle>중요한 업데이트 안내</AlertTitle>
        <AlertDescription>
          <div className="space-y-2">
            <p>
              다음 주 화요일(2024년 1월 15일) 오전 2시부터 6시까지 시스템 점검이 예정되어 있습니다.
              점검 시간 동안에는 서비스 이용이 제한될 수 있습니다.
            </p>
            <p>
              <strong>점검 내용:</strong>
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>보안 패치 적용</li>
              <li>데이터베이스 최적화</li>
              <li>새로운 기능 배포</li>
              <li>성능 개선 작업</li>
            </ul>
            <p>
              불편을 드려 죄송하며, 더 나은 서비스를 위한 작업이니 양해 부탁드립니다.
            </p>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  ),
};

// 모든 variant 비교
export const AllVariants: Story = {
  render: () => (
    <div className="space-y-6 w-full max-w-2xl">
      <Typography variant="h5" className="text-center">
        Alert Variant 비교
      </Typography>

      <div className="space-y-4">
        <Alert variant="default">
          <InfoIcon className="h-4 w-4" />
          <AlertTitle>Default Alert</AlertTitle>
          <AlertDescription>
            기본 스타일의 Alert입니다. 일반적인 정보 전달에 사용됩니다.
          </AlertDescription>
        </Alert>

        <Alert variant="info">
          <InfoIcon className="h-4 w-4" />
          <AlertTitle>Info Alert</AlertTitle>
          <AlertDescription>
            유용한 정보를 제공하는 파란색 스타일의 Alert입니다.
          </AlertDescription>
        </Alert>

        <Alert variant="success">
          <CheckCircle2 className="h-4 w-4" />
          <AlertTitle>Success Alert</AlertTitle>
          <AlertDescription>
            성공적인 작업 완료를 알리는 녹색 스타일의 Alert입니다.
          </AlertDescription>
        </Alert>

        <Alert variant="warning">
          <Triangle className="h-4 w-4" />
          <AlertTitle>Warning Alert</AlertTitle>
          <AlertDescription>
            주의가 필요한 상황을 알리는 노란색 스타일의 Alert입니다.
          </AlertDescription>
        </Alert>

        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Destructive Alert</AlertTitle>
          <AlertDescription>
            오류나 위험한 상황을 알리는 빨간색 스타일의 Alert입니다.
          </AlertDescription>
        </Alert>
      </div>
    </div>
  ),
};

// 실제 사용 시나리오들
export const PracticalExamples: Story = {
  render: () => (
    <div className="space-y-6 w-full max-w-2xl">
      <Typography variant="h5" className="text-center">
        실제 사용 시나리오
      </Typography>

      <div className="space-y-4">
        {/* 파일 업로드 성공 */}
        <Alert variant="success">
          <CheckCircle2 className="h-4 w-4" />
          <AlertTitle>업로드 완료</AlertTitle>
          <AlertDescription>
            문서.pdf 파일이 성공적으로 업로드되었습니다. (2.3MB)
          </AlertDescription>
        </Alert>

        {/* 폼 검증 오류 */}
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>입력 오류</AlertTitle>
          <AlertDescription>
            <div className="space-y-1">
              <div>다음 필드를 확인해주세요:</div>
              <ul className="list-disc list-inside ml-4">
                <li>이메일 형식이 올바르지 않습니다</li>
                <li>비밀번호는 8자 이상이어야 합니다</li>
              </ul>
            </div>
          </AlertDescription>
        </Alert>

        {/* 시스템 점검 안내 */}
        <Alert variant="warning">
          <Shield className="h-4 w-4" />
          <AlertTitle>시스템 점검 예정</AlertTitle>
          <AlertDescription className="flex items-center justify-between">
            <span>내일 오전 2시부터 4시까지 서비스가 중단됩니다.</span>
            <Badge variant="warning" className="ml-2">
              2시간 남음
            </Badge>
          </AlertDescription>
        </Alert>

        {/* 새 기능 안내 */}
        <Alert variant="info">
          <Lightbulb className="h-4 w-4" />
          <AlertTitle>새로운 기능 출시</AlertTitle>
          <AlertDescription className="flex items-center justify-between">
            <span>다크 모드가 추가되었습니다. 설정에서 변경할 수 있습니다.</span>
            <Button variant="outline" size="sm" className="ml-2">
              설정 이동
            </Button>
          </AlertDescription>
        </Alert>
      </div>
    </div>
  ),
};

// shadcn vs MUI 스타일 비교
export const StyleComparison: Story = {
  render: () => (
    <div className="space-y-6 w-full max-w-2xl">
      <Typography variant="h5" className="text-center">
        shadcn Alert 특성
      </Typography>

      <div className="grid gap-4">
        <div className="p-4 border rounded-lg bg-gray-50">
          <Typography variant="h6" className="mb-2">shadcn/ui Alert 특징</Typography>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>• Tailwind CSS 기반 스타일링</li>
            <li>• 커스터마이징 가능한 variant 시스템</li>
            <li>• 접근성 최적화 (role="alert")</li>
            <li>• 아이콘과 텍스트의 유연한 배치</li>
            <li>• MUI Alert와 유사한 사용 패턴</li>
          </ul>
        </div>

        <Alert variant="info">
          <InfoIcon className="h-4 w-4" />
          <AlertTitle>Spotlite 테마 적용</AlertTitle>
          <AlertDescription>
            이 Alert는 Spotlite 디자인 시스템의 색상과 스타일이 적용되어
            MUI Alert과 일관된 사용자 경험을 제공합니다.
          </AlertDescription>
        </Alert>
      </div>
    </div>
  ),
};