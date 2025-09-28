import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Typography } from '@/components/ui/typography';
import { Badge } from '@/components/ui/badge';

const meta: Meta<typeof Dialog> = {
  title: 'shadcn/Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Spotlite 디자인 시스템의 shadcn/ui Dialog 컴포넌트입니다. MUI Dialog와 동일한 기능을 제공하며, borderRadius 10px가 적용되어 있습니다.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 Dialog
export const Default: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">기본 Dialog 열기</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>대화 상자</DialogTitle>
          <DialogDescription>
            이것은 기본 Dialog 컴포넌트입니다. shadcn/ui 기반으로 제작되었습니다.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <Typography variant="body2">
            Dialog 내용이 여기에 표시됩니다. 사용자와의 상호작용을 위한 다양한 요소들을 포함할 수 있습니다.
          </Typography>
        </div>
        <DialogFooter>
          <Button variant="secondary">취소</Button>
          <Button variant="default">확인</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

// 폼이 있는 Dialog
export const WithForm: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>프로필 편집</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>프로필 편집</DialogTitle>
          <DialogDescription>
            프로필 정보를 수정하세요. 완료되면 저장 버튼을 클릭하세요.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              이름
            </Label>
            <Input
              id="name"
              defaultValue="홍길동"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              이메일
            </Label>
            <Input
              id="email"
              defaultValue="hong@example.com"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">변경사항 저장</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

// 확인 Dialog
export const Confirmation: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive">계정 삭제</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>정말로 계정을 삭제하시겠습니까?</DialogTitle>
          <DialogDescription>
            이 작업은 되돌릴 수 없습니다. 계정과 모든 데이터가 영구적으로 삭제됩니다.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="secondary">취소</Button>
          <Button variant="destructive">삭제</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

// 정보 표시 Dialog
export const Information: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">앱 정보</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Spotlite Design System</DialogTitle>
          <DialogDescription>
            디자인 시스템 정보 및 버전 안내
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="flex items-center justify-between">
            <Typography variant="body2" className="font-medium">버전</Typography>
            <Badge variant="secondary">v1.0.0</Badge>
          </div>
          <div className="flex items-center justify-between">
            <Typography variant="body2" className="font-medium">라이센스</Typography>
            <Typography variant="body2">MIT</Typography>
          </div>
          <div className="flex items-center justify-between">
            <Typography variant="body2" className="font-medium">개발자</Typography>
            <Typography variant="body2">Spotlite Team</Typography>
          </div>
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <Typography variant="body2" className="text-gray-700">
              이 Dialog는 Radix UI를 기반으로 제작되었으며, Spotlite 테마의 borderRadius(10px)가 적용되어 있습니다.
            </Typography>
          </div>
        </div>
        <DialogFooter>
          <Button>확인</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

// 큰 콘텐츠가 있는 Dialog
export const LargeContent: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">이용약관 보기</Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>서비스 이용약관</DialogTitle>
          <DialogDescription>
            Spotlite 디자인 시스템 사용에 관한 약관입니다.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          {Array.from({ length: 10 }, (_, i) => (
            <div key={i} className="space-y-2">
              <Typography variant="h6">제{i + 1}조 (목적)</Typography>
              <Typography variant="body2" className="text-gray-700">
                이 약관은 Spotlite Design System("회사"라 함)이 제공하는 디자인 시스템 서비스("서비스"라 함)의
                이용조건 및 절차에 관한 사항과 기타 필요한 사항을 규정함을 목적으로 합니다.
                사용자는 본 약관에 동의함으로써 서비스를 이용할 수 있습니다.
              </Typography>
            </div>
          ))}
        </div>
        <DialogFooter>
          <Button variant="secondary">거부</Button>
          <Button>동의</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

// 다중 Dialog 예시
const MultipleDialogDemo = () => {
  const [step, setStep] = useState(1);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>단계별 가이드</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>설정 가이드 - 단계 {step}/3</DialogTitle>
          <DialogDescription>
            단계별로 설정을 완료해주세요.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          {step === 1 && (
            <div className="space-y-4">
              <Typography variant="h6">1단계: 기본 정보 입력</Typography>
              <div className="space-y-2">
                <Label htmlFor="username">사용자명</Label>
                <Input id="username" placeholder="사용자명을 입력하세요" />
              </div>
            </div>
          )}
          {step === 2 && (
            <div className="space-y-4">
              <Typography variant="h6">2단계: 선호도 설정</Typography>
              <div className="space-y-2">
                <Label htmlFor="theme">테마 선택</Label>
                <select id="theme" className="w-full p-2 border rounded">
                  <option>라이트 모드</option>
                  <option>다크 모드</option>
                </select>
              </div>
            </div>
          )}
          {step === 3 && (
            <div className="space-y-4">
              <Typography variant="h6">3단계: 완료</Typography>
              <Typography variant="body2" className="text-green-600">
                ✅ 모든 설정이 완료되었습니다!
              </Typography>
            </div>
          )}
        </div>
        <DialogFooter>
          {step > 1 && (
            <Button variant="secondary" onClick={() => setStep(step - 1)}>
              이전
            </Button>
          )}
          {step < 3 ? (
            <Button onClick={() => setStep(step + 1)}>
              다음
            </Button>
          ) : (
            <Button>완료</Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export const MultipleSteps: Story = {
  render: () => <MultipleDialogDemo />,
};

// Spotlite 테마 특성 데모
export const SpotliteThemeDemo: Story = {
  render: () => (
    <div className="space-y-4 p-6">
      <Typography variant="h5" className="text-center mb-4">
        Spotlite Dialog 테마 특성
      </Typography>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="w-full">
              기본 스타일
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Spotlite 테마 적용</DialogTitle>
              <DialogDescription>
                borderRadius 10px가 적용된 Dialog입니다.
              </DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                <Typography variant="body2" className="text-blue-800">
                  <strong>테마 특성:</strong><br />
                  • borderRadius: 10px (MUI Dialog와 동일)<br />
                  • Radix UI 기반 구현<br />
                  • 접근성 최적화<br />
                  • 애니메이션 지원
                </Typography>
              </div>
            </div>
            <DialogFooter>
              <Button>확인</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <Dialog>
          <DialogTrigger asChild>
            <Button variant="secondary" className="w-full">
              반응형 Dialog
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>반응형 설계</DialogTitle>
              <DialogDescription>
                화면 크기에 따라 적절히 조정됩니다.
              </DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <Typography variant="body2">
                모바일에서는 화면에 맞게, 데스크톱에서는 최대 너비가 제한되어 표시됩니다.
              </Typography>
            </div>
            <DialogFooter>
              <Button className="w-full sm:w-auto">확인</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  ),
};