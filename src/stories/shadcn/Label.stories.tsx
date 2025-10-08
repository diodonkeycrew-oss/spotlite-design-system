import type { Meta, StoryObj } from '@storybook/react';
import { Label } from '../../components/ui/label';
import { Input } from '../../components/ui/input';
import { Typography } from '../../components/ui/typography';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { RadioGroup, RadioGroupItem } from '../../components/ui/radio';
import { HelpCircle, AlertCircle } from 'lucide-react';

const meta: Meta<typeof Label> = {
  title: 'shadcn/Label',
  component: Label,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Spotlite 디자인 시스템의 shadcn/ui Label 컴포넌트입니다. MUI FormLabel과 유사한 기능을 제공하며, 폼 요소의 라벨로 사용됩니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    htmlFor: {
      control: { type: 'text' },
      description: '연결할 폼 요소의 ID',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 Label
export const Default: Story = {
  args: {
    children: '기본 라벨',
  },
};

// Input과 함께 사용
export const WithInput: Story = {
  render: () => (
    <div className="space-y-2 w-64">
      <Label htmlFor="email">이메일 주소</Label>
      <Input
        id="email"
        type="email"
        placeholder="example@email.com"
      />
    </div>
  ),
};

// 필수 필드 표시
export const Required: Story = {
  render: () => (
    <div className="space-y-4 w-64">
      <div className="space-y-2">
        <Label htmlFor="name">
          이름 <span className="text-red-500">*</span>
        </Label>
        <Input id="name" placeholder="이름을 입력하세요" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">
          비밀번호 <Badge variant="destructive" className="text-xs ml-1">필수</Badge>
        </Label>
        <Input id="password" type="password" placeholder="비밀번호 입력" />
      </div>
    </div>
  ),
};

// 도움말이 있는 Label
export const WithHelp: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Label htmlFor="username">사용자명</Label>
          <HelpCircle className="h-4 w-4 text-gray-400" />
        </div>
        <Input id="username" placeholder="영문, 숫자 조합 4-20자" />
        <Typography variant="body2" className="text-gray-500 text-xs">
          영문 소문자, 숫자, 언더스코어만 사용 가능합니다.
        </Typography>
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Label htmlFor="website">웹사이트</Label>
          <Badge variant="secondary" className="text-xs">선택사항</Badge>
        </div>
        <Input id="website" placeholder="https://example.com" />
        <Typography variant="body2" className="text-gray-500 text-xs">
          개인 웹사이트 또는 포트폴리오 링크를 입력하세요.
        </Typography>
      </div>
    </div>
  ),
};

// 오류 상태 Label
export const WithError: Story = {
  render: () => (
    <div className="space-y-4 w-64">
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Label htmlFor="email-error" className="text-red-600">
            이메일 주소
          </Label>
          <AlertCircle className="h-4 w-4 text-red-500" />
        </div>
        <Input
          id="email-error"
          type="email"
          className="border-red-500 focus:border-red-500"
          placeholder="example@email.com"
        />
        <Typography variant="body2" className="text-red-600 text-xs">
          올바른 이메일 형식이 아닙니다.
        </Typography>
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone-error" className="text-red-600">
          전화번호 <span className="text-red-500">*</span>
        </Label>
        <Input
          id="phone-error"
          className="border-red-500"
          placeholder="010-0000-0000"
        />
        <Typography variant="body2" className="text-red-600 text-xs">
          전화번호는 필수 입력 항목입니다.
        </Typography>
      </div>
    </div>
  ),
};

// 다양한 폼 요소와 함께
export const WithVariousInputs: Story = {
  render: () => (
    <div className="space-y-6 w-96">
      {/* 텍스트 입력 */}
      <div className="space-y-2">
        <Label htmlFor="description">설명</Label>
        <textarea
          id="description"
          className="w-full p-2 border rounded-md resize-none"
          rows={3}
          placeholder="프로젝트에 대한 설명을 입력하세요..."
        />
      </div>

      {/* 선택 박스 */}
      <div className="space-y-2">
        <Label htmlFor="category">카테고리</Label>
        <select id="category" className="w-full p-2 border rounded-md">
          <option>선택하세요</option>
          <option>웹 개발</option>
          <option>모바일 앱</option>
          <option>데스크톱 앱</option>
          <option>기타</option>
        </select>
      </div>

      {/* 라디오 그룹 */}
      <div className="space-y-3">
        <Label>우선순위</Label>
        <RadioGroup defaultValue="medium">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="high" id="high" />
            <Label htmlFor="high">높음</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="medium" id="medium" />
            <Label htmlFor="medium">보통</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="low" id="low" />
            <Label htmlFor="low">낮음</Label>
          </div>
        </RadioGroup>
      </div>

      {/* 체크박스 */}
      <div className="space-y-2">
        <Label>알림 설정</Label>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="email-notify" className="rounded" />
            <Label htmlFor="email-notify">이메일 알림</Label>
          </div>
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="sms-notify" className="rounded" />
            <Label htmlFor="sms-notify">SMS 알림</Label>
          </div>
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="push-notify" className="rounded" defaultChecked />
            <Label htmlFor="push-notify">푸시 알림</Label>
          </div>
        </div>
      </div>
    </div>
  ),
};

// 복잡한 폼 예시
export const ComplexForm: Story = {
  render: () => (
    <div className="space-y-6 w-full max-w-2xl">
      <Typography variant="h5">프로젝트 생성</Typography>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* 기본 정보 */}
        <div className="space-y-4">
          <Typography variant="h6">기본 정보</Typography>

          <div className="space-y-2">
            <Label htmlFor="project-name">
              프로젝트 이름 <span className="text-red-500">*</span>
            </Label>
            <Input id="project-name" placeholder="프로젝트 이름 입력" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="project-desc">프로젝트 설명</Label>
            <textarea
              id="project-desc"
              className="w-full p-2 border rounded-md resize-none"
              rows={3}
              placeholder="프로젝트에 대한 간단한 설명..."
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="repository">저장소 URL</Label>
            <Input
              id="repository"
              placeholder="https://github.com/username/repo"
            />
            <Typography variant="body2" className="text-gray-500 text-xs">
              선택사항: GitHub, GitLab 등의 저장소 링크
            </Typography>
          </div>
        </div>

        {/* 설정 */}
        <div className="space-y-4">
          <Typography variant="h6">프로젝트 설정</Typography>

          <div className="space-y-2">
            <Label htmlFor="tech-stack">기술 스택</Label>
            <select id="tech-stack" className="w-full p-2 border rounded-md">
              <option>React + TypeScript</option>
              <option>Vue.js + JavaScript</option>
              <option>Angular + TypeScript</option>
              <option>Next.js + TypeScript</option>
              <option>기타</option>
            </select>
          </div>

          <div className="space-y-3">
            <Label>프로젝트 타입</Label>
            <RadioGroup defaultValue="web">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="web" id="web" />
                <Label htmlFor="web">웹 애플리케이션</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="mobile" id="mobile" />
                <Label htmlFor="mobile">모바일 앱</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="desktop" id="desktop" />
                <Label htmlFor="desktop">데스크톱 앱</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label>추가 기능</Label>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="auth" className="rounded" />
                <Label htmlFor="auth">사용자 인증</Label>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="database" className="rounded" />
                <Label htmlFor="database">데이터베이스 연동</Label>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="api" className="rounded" defaultChecked />
                <Label htmlFor="api">REST API</Label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-2 pt-6 border-t">
        <Button variant="outline">취소</Button>
        <Button>프로젝트 생성</Button>
      </div>
    </div>
  ),
};

// 다양한 크기의 Label
export const Sizes: Story = {
  render: () => (
    <div className="space-y-6 w-80">
      <div className="space-y-2">
        <Label className="text-xs">작은 라벨 (text-xs)</Label>
        <Input placeholder="작은 라벨과 함께" />
      </div>

      <div className="space-y-2">
        <Label className="text-sm">기본 라벨 (text-sm)</Label>
        <Input placeholder="기본 크기 라벨과 함께" />
      </div>

      <div className="space-y-2">
        <Label className="text-base">중간 라벨 (text-base)</Label>
        <Input placeholder="중간 크기 라벨과 함께" />
      </div>

      <div className="space-y-2">
        <Label className="text-lg">큰 라벨 (text-lg)</Label>
        <Input placeholder="큰 라벨과 함께" />
      </div>
    </div>
  ),
};

// 스타일 변형
export const StyleVariants: Story = {
  render: () => (
    <div className="space-y-6 w-80">
      <div className="space-y-2">
        <Label className="font-normal">일반 폰트 (font-normal)</Label>
        <Input placeholder="일반 굵기" />
      </div>

      <div className="space-y-2">
        <Label className="font-medium">중간 굵기 (font-medium)</Label>
        <Input placeholder="중간 굵기" />
      </div>

      <div className="space-y-2">
        <Label className="font-semibold">준굵게 (font-semibold)</Label>
        <Input placeholder="준굵게" />
      </div>

      <div className="space-y-2">
        <Label className="font-bold">굵게 (font-bold)</Label>
        <Input placeholder="굵게" />
      </div>

      <div className="space-y-2">
        <Label className="text-gray-600">회색 라벨</Label>
        <Input placeholder="회색 라벨" />
      </div>

      <div className="space-y-2">
        <Label className="text-blue-600">파란색 라벨</Label>
        <Input placeholder="파란색 라벨" />
      </div>
    </div>
  ),
};

// Spotlite 테마 특성 설명
export const SpotliteThemeFeatures: Story = {
  render: () => (
    <div className="space-y-6 w-full max-w-2xl">
      <Typography variant="h5" className="text-center">
        Spotlite Label 테마 특성
      </Typography>

      <div className="p-4 border rounded-lg bg-blue-50">
        <Typography variant="h6" className="mb-2">테마 특성</Typography>
        <ul className="space-y-1 text-sm text-gray-700">
          <li>• MUI FormLabel과 유사한 기능 제공</li>
          <li>• text.primary 색상 적용</li>
          <li>• fontWeight 700 (굵게) 기본 설정</li>
          <li>• 접근성 최적화 (htmlFor 속성 지원)</li>
          <li>• 다양한 폼 요소와 연동 가능</li>
          <li>• 커스터마이징 가능한 스타일</li>
        </ul>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <Typography variant="h6">MUI FormLabel 호환</Typography>
          <div className="space-y-2">
            <Label htmlFor="mui-compat">
              Spotlite 스타일 라벨
            </Label>
            <Input id="mui-compat" placeholder="MUI와 동일한 스타일" />
            <Typography variant="body2" className="text-gray-600 text-xs">
              MUI FormLabel의 text.primary와 fontWeight 700 적용
            </Typography>
          </div>
        </div>

        <div className="space-y-4">
          <Typography variant="h6">접근성 최적화</Typography>
          <div className="space-y-2">
            <Label htmlFor="a11y-example">
              스크린 리더 최적화
            </Label>
            <Input id="a11y-example" placeholder="접근성 지원" />
            <Typography variant="body2" className="text-gray-600 text-xs">
              htmlFor 속성으로 폼 요소와 연결
            </Typography>
          </div>
        </div>
      </div>

      <div className="text-center">
        <Typography variant="body2" className="text-gray-600">
          shadcn Label은 MUI FormLabel과 일관된 사용자 경험을 제공하며,
          Spotlite 디자인 시스템의 테마가 적용되어 있습니다.
        </Typography>
      </div>
    </div>
  ),
};