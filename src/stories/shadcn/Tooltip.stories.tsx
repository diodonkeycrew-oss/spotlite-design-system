import type { Meta, StoryObj } from '@storybook/react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../../components/ui/tooltip';
import { Button } from '../../components/ui/button';
import { Typography } from '../../components/ui/typography';
import { Badge } from '../../components/ui/badge';
import {
  Info,
  HelpCircle,
  Settings,
  User,
  Star,
  Heart,
  Share,
  Download,
  Edit,
  Trash2,
} from 'lucide-react';

const meta: Meta<typeof Tooltip> = {
  title: 'shadcn/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Spotlite 디자인 시스템의 shadcn/ui Tooltip 컴포넌트입니다. MUI Tooltip과 유사한 기능을 제공하며, Spotlite 테마 스타일이 적용되어 있습니다.',
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <TooltipProvider>
        <div className="flex items-center justify-center min-h-[200px]">
          <Story />
        </div>
      </TooltipProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 Tooltip
export const Default: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">기본 Tooltip</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>이것은 기본 Tooltip입니다.</p>
      </TooltipContent>
    </Tooltip>
  ),
};

// 아이콘 버튼과 함께
export const WithIconButton: Story = {
  render: () => (
    <div className="flex gap-4">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="icon">
            <Info className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>정보</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="icon">
            <Settings className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>설정</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="icon">
            <HelpCircle className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>도움말</p>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
};

// 다양한 위치의 Tooltip
export const Positioning: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-8 p-8">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Top</Button>
        </TooltipTrigger>
        <TooltipContent side="top">
          <p>상단 Tooltip</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Right</Button>
        </TooltipTrigger>
        <TooltipContent side="right">
          <p>우측 Tooltip</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Left</Button>
        </TooltipTrigger>
        <TooltipContent side="left">
          <p>좌측 Tooltip</p>
        </TooltipContent>
      </Tooltip>

      <div></div>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Bottom</Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">
          <p>하단 Tooltip</p>
        </TooltipContent>
      </Tooltip>

      <div></div>
    </div>
  ),
};

// 긴 텍스트 Tooltip
export const LongText: Story = {
  render: () => (
    <div className="flex gap-4">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">간단한 설명</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>이것은 비교적 간단한 Tooltip 텍스트입니다.</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">자세한 설명</Button>
        </TooltipTrigger>
        <TooltipContent className="max-w-xs">
          <p>
            이것은 더 자세한 설명을 포함하는 Tooltip입니다.
            여러 줄에 걸쳐 정보를 제공할 수 있으며,
            사용자에게 유용한 컨텍스트를 제공합니다.
          </p>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
};

// 다양한 요소에 적용된 Tooltip
export const VariousElements: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4 items-center">
      <Tooltip>
        <TooltipTrigger asChild>
          <Badge variant="info">배지에 Tooltip</Badge>
        </TooltipTrigger>
        <TooltipContent>
          <p>이 배지는 정보를 나타냅니다</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <span className="text-blue-600 underline cursor-help">
            링크 텍스트
          </span>
        </TooltipTrigger>
        <TooltipContent>
          <p>클릭하면 새 페이지로 이동합니다</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <div className="w-8 h-8 bg-gray-300 rounded-full cursor-help"></div>
        </TooltipTrigger>
        <TooltipContent>
          <p>사용자 아바타</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Typography variant="body2" className="cursor-help border-b border-dashed border-gray-400">
            도움말 텍스트
          </Typography>
        </TooltipTrigger>
        <TooltipContent>
          <p>추가 정보가 필요할 때 확인하세요</p>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
};

// 액션 버튼들에 적용된 Tooltip
export const ActionButtons: Story = {
  render: () => (
    <div className="flex gap-2">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="icon">
            <Star className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>즐겨찾기에 추가</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="icon">
            <Heart className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>좋아요</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="icon">
            <Share className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>공유하기</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="icon">
            <Download className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>다운로드</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="icon">
            <Edit className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>편집</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="destructive" size="icon">
            <Trash2 className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>삭제 (복구 불가능)</p>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
};

// 키보드 단축키를 포함한 Tooltip
export const WithKeyboardShortcuts: Story = {
  render: () => (
    <div className="flex gap-4">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">저장</Button>
        </TooltipTrigger>
        <TooltipContent>
          <div className="text-center">
            <p>문서 저장</p>
            <p className="text-xs mt-1 opacity-75">Ctrl+S</p>
          </div>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">복사</Button>
        </TooltipTrigger>
        <TooltipContent>
          <div className="text-center">
            <p>클립보드에 복사</p>
            <p className="text-xs mt-1 opacity-75">Ctrl+C</p>
          </div>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">붙여넣기</Button>
        </TooltipTrigger>
        <TooltipContent>
          <div className="text-center">
            <p>클립보드에서 붙여넣기</p>
            <p className="text-xs mt-1 opacity-75">Ctrl+V</p>
          </div>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">실행취소</Button>
        </TooltipTrigger>
        <TooltipContent>
          <div className="text-center">
            <p>마지막 작업 실행취소</p>
            <p className="text-xs mt-1 opacity-75">Ctrl+Z</p>
          </div>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
};

// 폼 요소에 적용된 도움말 Tooltip
export const FormHelp: Story = {
  render: () => (
    <div className="space-y-4 w-full max-w-md">
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <label htmlFor="email" className="text-sm font-medium">
            이메일 주소
          </label>
          <Tooltip>
            <TooltipTrigger asChild>
              <HelpCircle className="h-4 w-4 text-gray-400 cursor-help" />
            </TooltipTrigger>
            <TooltipContent>
              <p>유효한 이메일 주소를 입력하세요</p>
            </TooltipContent>
          </Tooltip>
        </div>
        <input
          id="email"
          type="email"
          className="w-full p-2 border rounded"
          placeholder="example@email.com"
        />
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <label htmlFor="password" className="text-sm font-medium">
            비밀번호
          </label>
          <Tooltip>
            <TooltipTrigger asChild>
              <HelpCircle className="h-4 w-4 text-gray-400 cursor-help" />
            </TooltipTrigger>
            <TooltipContent className="max-w-xs">
              <p>
                비밀번호는 최소 8자 이상이어야 하며,
                대문자, 소문자, 숫자, 특수문자를 포함해야 합니다.
              </p>
            </TooltipContent>
          </Tooltip>
        </div>
        <input
          id="password"
          type="password"
          className="w-full p-2 border rounded"
          placeholder="비밀번호 입력"
        />
      </div>
    </div>
  ),
};

// 실제 사용 시나리오
export const PracticalExamples: Story = {
  render: () => (
    <div className="space-y-6 w-full max-w-2xl">
      <Typography variant="h5" className="text-center">
        실제 사용 시나리오
      </Typography>

      <div className="space-y-6">
        {/* 사용자 프로필 카드 */}
        <div className="p-4 border rounded-lg">
          <div className="flex items-center gap-3">
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full cursor-help"></div>
              </TooltipTrigger>
              <TooltipContent>
                <div className="text-center">
                  <p className="font-medium">김개발</p>
                  <p className="text-xs opacity-75">Frontend Developer</p>
                  <p className="text-xs opacity-75">가입일: 2023.01.15</p>
                </div>
              </TooltipContent>
            </Tooltip>
            <div>
              <div className="flex items-center gap-2">
                <Typography variant="h6">김개발</Typography>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Badge variant="success" className="text-xs">
                      ✓ 인증
                    </Badge>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>이메일 인증이 완료된 사용자입니다</p>
                  </TooltipContent>
                </Tooltip>
              </div>
              <Typography variant="body2" className="text-gray-600">
                Frontend Developer
              </Typography>
            </div>
          </div>
        </div>

        {/* 대시보드 메트릭 */}
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 border rounded-lg">
            <div className="flex items-center justify-between">
              <Typography variant="h6">활성 사용자</Typography>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Info className="h-4 w-4 text-gray-400 cursor-help" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>지난 24시간 동안 로그인한 사용자 수</p>
                </TooltipContent>
              </Tooltip>
            </div>
            <Typography variant="h4" className="text-blue-600">
              1,234
            </Typography>
          </div>

          <div className="p-4 border rounded-lg">
            <div className="flex items-center justify-between">
              <Typography variant="h6">수익</Typography>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Info className="h-4 w-4 text-gray-400 cursor-help" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>이번 달 총 수익 (세전)</p>
                </TooltipContent>
              </Tooltip>
            </div>
            <Typography variant="h4" className="text-green-600">
              ₩567,890
            </Typography>
          </div>
        </div>

        {/* 툴바 예시 */}
        <div className="flex items-center justify-between p-3 border rounded-lg bg-gray-50">
          <Typography variant="h6">문서 편집기</Typography>
          <div className="flex gap-1">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon">
                  <strong>B</strong>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <div className="text-center">
                  <p>굵게</p>
                  <p className="text-xs opacity-75">Ctrl+B</p>
                </div>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon">
                  <em>I</em>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <div className="text-center">
                  <p>기울임</p>
                  <p className="text-xs opacity-75">Ctrl+I</p>
                </div>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon">
                  <u>U</u>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <div className="text-center">
                  <p>밑줄</p>
                  <p className="text-xs opacity-75">Ctrl+U</p>
                </div>
              </TooltipContent>
            </Tooltip>
          </div>
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
        Spotlite Tooltip 테마 특성
      </Typography>

      <div className="p-4 border rounded-lg bg-blue-50">
        <Typography variant="h6" className="mb-2">테마 특성</Typography>
        <ul className="space-y-1 text-sm text-gray-700">
          <li>• 배경색: #000000CC (80% 투명도 검은색)</li>
          <li>• borderRadius: 5px</li>
          <li>• 텍스트: 흰색</li>
          <li>• 기본 배치: bottom-start (MUI와 동일)</li>
          <li>• Radix UI 기반 구현</li>
          <li>• 접근성 최적화</li>
        </ul>
      </div>

      <div className="flex gap-4 justify-center">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Spotlite 스타일</Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Spotlite 테마가 적용된 Tooltip</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="secondary">MUI 호환</Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>MUI Tooltip과 동일한 사용 패턴</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </div>
  ),
};