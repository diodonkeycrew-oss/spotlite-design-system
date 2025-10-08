import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import {
  Toast,
  ToastAction,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from '../../components/ui/toast';
import { Button } from '../../components/ui/button';
import { Typography } from '../../components/ui/typography';
import { Badge } from '../../components/ui/badge';
import {
  CheckCircle2,
  AlertCircle,
  Info,
  AlertTriangle,
  Upload,
  Download,
  Trash2,
  Save,
} from 'lucide-react';

const meta: Meta<typeof Toast> = {
  title: 'shadcn/Toast',
  component: Toast,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Spotlite 디자인 시스템의 shadcn/ui Toast 컴포넌트입니다. MUI Snackbar와 유사한 기능을 제공하며, 다양한 알림 스타일을 지원합니다.',
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ToastProvider>
        <div className="relative">
          <Story />
          <ToastViewport />
        </div>
      </ToastProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Toast Hook 구현
const useToast = () => {
  const [toasts, setToasts] = useState<Array<{
    id: string;
    title?: string;
    description?: string;
    variant?: 'default' | 'destructive' | 'success' | 'warning' | 'info';
    action?: React.ReactNode;
  }>>([]);

  const addToast = (toast: Omit<typeof toasts[0], 'id'>) => {
    const id = Math.random().toString(36).substr(2, 9);
    setToasts(prev => [...prev, { ...toast, id }]);

    // 자동으로 5초 후 제거
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 5000);
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  return { toasts, addToast, removeToast };
};

// 기본 Toast
export const Default: Story = {
  render: () => {
    const { toasts, addToast, removeToast } = useToast();

    return (
      <div className="space-y-4">
        <Button
          onClick={() =>
            addToast({
              title: '기본 알림',
              description: '이것은 기본 Toast 알림입니다.',
            })
          }
        >
          기본 Toast 표시
        </Button>

        {toasts.map((toast) => (
          <Toast key={toast.id} variant={toast.variant}>
            {toast.title && <ToastTitle>{toast.title}</ToastTitle>}
            {toast.description && <ToastDescription>{toast.description}</ToastDescription>}
            {toast.action}
            <ToastClose onClick={() => removeToast(toast.id)} />
          </Toast>
        ))}
      </div>
    );
  },
};

// 성공 Toast
export const Success: Story = {
  render: () => {
    const { toasts, addToast, removeToast } = useToast();

    return (
      <div className="space-y-4">
        <Button
          variant="default"
          onClick={() =>
            addToast({
              variant: 'success',
              title: '성공!',
              description: '작업이 성공적으로 완료되었습니다.',
            })
          }
        >
          성공 Toast 표시
        </Button>

        {toasts.map((toast) => (
          <Toast key={toast.id} variant={toast.variant}>
            <CheckCircle2 className="h-4 w-4" />
            {toast.title && <ToastTitle>{toast.title}</ToastTitle>}
            {toast.description && <ToastDescription>{toast.description}</ToastDescription>}
            <ToastClose onClick={() => removeToast(toast.id)} />
          </Toast>
        ))}
      </div>
    );
  },
};

// 오류 Toast
export const Error: Story = {
  render: () => {
    const { toasts, addToast, removeToast } = useToast();

    return (
      <div className="space-y-4">
        <Button
          variant="destructive"
          onClick={() =>
            addToast({
              variant: 'destructive',
              title: '오류 발생',
              description: '요청을 처리하는 중 문제가 발생했습니다.',
              action: <ToastAction altText="다시 시도">다시 시도</ToastAction>,
            })
          }
        >
          오류 Toast 표시
        </Button>

        {toasts.map((toast) => (
          <Toast key={toast.id} variant={toast.variant}>
            <AlertCircle className="h-4 w-4" />
            {toast.title && <ToastTitle>{toast.title}</ToastTitle>}
            {toast.description && <ToastDescription>{toast.description}</ToastDescription>}
            {toast.action}
            <ToastClose onClick={() => removeToast(toast.id)} />
          </Toast>
        ))}
      </div>
    );
  },
};

// 경고 Toast
export const Warning: Story = {
  render: () => {
    const { toasts, addToast, removeToast } = useToast();

    return (
      <div className="space-y-4">
        <Button
          variant="outline"
          onClick={() =>
            addToast({
              variant: 'warning',
              title: '주의',
              description: '시스템 점검이 예정되어 있습니다. 작업을 저장해주세요.',
            })
          }
        >
          경고 Toast 표시
        </Button>

        {toasts.map((toast) => (
          <Toast key={toast.id} variant={toast.variant}>
            <AlertTriangle className="h-4 w-4" />
            {toast.title && <ToastTitle>{toast.title}</ToastTitle>}
            {toast.description && <ToastDescription>{toast.description}</ToastDescription>}
            <ToastClose onClick={() => removeToast(toast.id)} />
          </Toast>
        ))}
      </div>
    );
  },
};

// 정보 Toast
export const Information: Story = {
  render: () => {
    const { toasts, addToast, removeToast } = useToast();

    return (
      <div className="space-y-4">
        <Button
          variant="secondary"
          onClick={() =>
            addToast({
              variant: 'info',
              title: '정보',
              description: '새로운 업데이트가 있습니다. 지금 확인해보세요.',
              action: <ToastAction altText="확인하기">확인하기</ToastAction>,
            })
          }
        >
          정보 Toast 표시
        </Button>

        {toasts.map((toast) => (
          <Toast key={toast.id} variant={toast.variant}>
            <Info className="h-4 w-4" />
            {toast.title && <ToastTitle>{toast.title}</ToastTitle>}
            {toast.description && <ToastDescription>{toast.description}</ToastDescription>}
            {toast.action}
            <ToastClose onClick={() => removeToast(toast.id)} />
          </Toast>
        ))}
      </div>
    );
  },
};

// 액션이 있는 Toast
export const WithAction: Story = {
  render: () => {
    const { toasts, addToast, removeToast } = useToast();

    return (
      <div className="space-y-4">
        <Button
          onClick={() =>
            addToast({
              title: '파일 삭제됨',
              description: '문서.pdf가 삭제되었습니다.',
              action: (
                <ToastAction altText="실행취소">실행취소</ToastAction>
              ),
            })
          }
        >
          액션 Toast 표시
        </Button>

        {toasts.map((toast) => (
          <Toast key={toast.id} variant={toast.variant}>
            <Trash2 className="h-4 w-4" />
            {toast.title && <ToastTitle>{toast.title}</ToastTitle>}
            {toast.description && <ToastDescription>{toast.description}</ToastDescription>}
            {toast.action}
            <ToastClose onClick={() => removeToast(toast.id)} />
          </Toast>
        ))}
      </div>
    );
  },
};

// 제목 없는 Toast
export const WithoutTitle: Story = {
  render: () => {
    const { toasts, addToast, removeToast } = useToast();

    return (
      <div className="space-y-4">
        <div className="flex gap-2">
          <Button
            size="sm"
            onClick={() =>
              addToast({
                variant: 'success',
                description: '변경사항이 저장되었습니다.',
              })
            }
          >
            저장 완료
          </Button>

          <Button
            size="sm"
            variant="outline"
            onClick={() =>
              addToast({
                variant: 'info',
                description: '네트워크 연결이 복구되었습니다.',
              })
            }
          >
            연결 복구
          </Button>
        </div>

        {toasts.map((toast) => (
          <Toast key={toast.id} variant={toast.variant}>
            {toast.variant === 'success' && <CheckCircle2 className="h-4 w-4" />}
            {toast.variant === 'info' && <Info className="h-4 w-4" />}
            {toast.description && <ToastDescription>{toast.description}</ToastDescription>}
            <ToastClose onClick={() => removeToast(toast.id)} />
          </Toast>
        ))}
      </div>
    );
  },
};

// 실제 사용 시나리오들
export const PracticalExamples: Story = {
  render: () => {
    const { toasts, addToast, removeToast } = useToast();

    const scenarios = [
      {
        label: '파일 업로드',
        icon: Upload,
        action: () =>
          addToast({
            variant: 'success',
            title: '업로드 완료',
            description: '이미지.jpg가 성공적으로 업로드되었습니다.',
          }),
      },
      {
        label: '다운로드 시작',
        icon: Download,
        action: () =>
          addToast({
            variant: 'info',
            title: '다운로드 시작',
            description: '파일 다운로드가 시작되었습니다.',
            action: <ToastAction altText="취소">취소</ToastAction>,
          }),
      },
      {
        label: '자동 저장',
        icon: Save,
        action: () =>
          addToast({
            variant: 'default',
            description: '문서가 자동으로 저장되었습니다.',
          }),
      },
      {
        label: '네트워크 오류',
        icon: AlertCircle,
        action: () =>
          addToast({
            variant: 'destructive',
            title: '연결 오류',
            description: '서버에 연결할 수 없습니다. 잠시 후 다시 시도해주세요.',
            action: <ToastAction altText="다시 시도">다시 시도</ToastAction>,
          }),
      },
    ];

    return (
      <div className="space-y-6 w-full max-w-2xl">
        <Typography variant="h5" className="text-center">
          실제 사용 시나리오
        </Typography>

        <div className="grid grid-cols-2 gap-4">
          {scenarios.map((scenario, index) => (
            <Button
              key={index}
              variant="outline"
              className="flex items-center gap-2 h-auto p-4"
              onClick={scenario.action}
            >
              <scenario.icon className="h-5 w-5" />
              <div className="text-left">
                <div className="font-medium">{scenario.label}</div>
                <div className="text-xs text-gray-500">클릭하여 Toast 표시</div>
              </div>
            </Button>
          ))}
        </div>

        {toasts.map((toast) => (
          <Toast key={toast.id} variant={toast.variant}>
            {toast.variant === 'success' && <CheckCircle2 className="h-4 w-4" />}
            {toast.variant === 'destructive' && <AlertCircle className="h-4 w-4" />}
            {toast.variant === 'info' && <Info className="h-4 w-4" />}
            {toast.variant === 'warning' && <AlertTriangle className="h-4 w-4" />}
            {toast.title && <ToastTitle>{toast.title}</ToastTitle>}
            {toast.description && <ToastDescription>{toast.description}</ToastDescription>}
            {toast.action}
            <ToastClose onClick={() => removeToast(toast.id)} />
          </Toast>
        ))}
      </div>
    );
  },
};

// 다중 Toast 관리
export const MultipleToasts: Story = {
  render: () => {
    const { toasts, addToast, removeToast } = useToast();

    const showMultipleToasts = () => {
      const toastConfigs = [
        { variant: 'info' as const, title: '작업 시작', description: '파일 처리를 시작합니다.' },
        { variant: 'warning' as const, title: '주의', description: '일부 파일에 오류가 있습니다.' },
        { variant: 'success' as const, title: '완료', description: '모든 작업이 완료되었습니다.' },
      ];

      toastConfigs.forEach((config, index) => {
        setTimeout(() => addToast(config), index * 1000);
      });
    };

    return (
      <div className="space-y-4">
        <div className="flex gap-2">
          <Button onClick={showMultipleToasts}>
            순차 Toast 표시
          </Button>
          <Button
            variant="outline"
            onClick={() => {
              addToast({ variant: 'success', description: 'Toast 1' });
              addToast({ variant: 'info', description: 'Toast 2' });
              addToast({ variant: 'warning', description: 'Toast 3' });
            }}
          >
            동시 Toast 표시
          </Button>
        </div>

        <div className="p-4 border rounded-lg bg-gray-50">
          <Typography variant="body2" className="text-gray-600">
            활성 Toast: <Badge variant="secondary">{toasts.length}개</Badge>
          </Typography>
        </div>

        {toasts.map((toast) => (
          <Toast key={toast.id} variant={toast.variant}>
            {toast.variant === 'success' && <CheckCircle2 className="h-4 w-4" />}
            {toast.variant === 'info' && <Info className="h-4 w-4" />}
            {toast.variant === 'warning' && <AlertTriangle className="h-4 w-4" />}
            {toast.title && <ToastTitle>{toast.title}</ToastTitle>}
            {toast.description && <ToastDescription>{toast.description}</ToastDescription>}
            <ToastClose onClick={() => removeToast(toast.id)} />
          </Toast>
        ))}
      </div>
    );
  },
};

// 모든 variant 비교
export const AllVariants: Story = {
  render: () => {
    const { toasts, addToast, removeToast } = useToast();

    const variants = [
      { variant: 'default' as const, label: 'Default', description: '기본 Toast 스타일' },
      { variant: 'success' as const, label: 'Success', description: '성공적인 작업 완료' },
      { variant: 'info' as const, label: 'Info', description: '유용한 정보 제공' },
      { variant: 'warning' as const, label: 'Warning', description: '주의가 필요한 상황' },
      { variant: 'destructive' as const, label: 'Error', description: '오류 또는 실패 상황' },
    ];

    return (
      <div className="space-y-6 w-full max-w-2xl">
        <Typography variant="h5" className="text-center">
          Toast Variant 비교
        </Typography>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {variants.map((item) => (
            <Button
              key={item.variant}
              variant="outline"
              className="h-auto p-4 text-left"
              onClick={() =>
                addToast({
                  variant: item.variant,
                  title: item.label,
                  description: item.description,
                })
              }
            >
              <div>
                <div className="font-medium">{item.label} Toast</div>
                <div className="text-xs text-gray-500">{item.description}</div>
              </div>
            </Button>
          ))}
        </div>

        {toasts.map((toast) => (
          <Toast key={toast.id} variant={toast.variant}>
            {toast.variant === 'success' && <CheckCircle2 className="h-4 w-4" />}
            {toast.variant === 'destructive' && <AlertCircle className="h-4 w-4" />}
            {toast.variant === 'info' && <Info className="h-4 w-4" />}
            {toast.variant === 'warning' && <AlertTriangle className="h-4 w-4" />}
            {toast.title && <ToastTitle>{toast.title}</ToastTitle>}
            {toast.description && <ToastDescription>{toast.description}</ToastDescription>}
            <ToastClose onClick={() => removeToast(toast.id)} />
          </Toast>
        ))}
      </div>
    );
  },
};

// MUI Snackbar 대응 기능 데모
export const SnackbarCompatibility: Story = {
  render: () => (
    <div className="space-y-6 w-full max-w-2xl">
      <Typography variant="h5" className="text-center">
        MUI Snackbar 대응 기능
      </Typography>

      <div className="p-4 border rounded-lg bg-blue-50">
        <Typography variant="h6" className="mb-2">Toast vs MUI Snackbar</Typography>
        <Typography variant="body2" className="text-gray-700">
          shadcn Toast는 MUI Snackbar의 대부분 기능을 제공합니다:
          • 다양한 severity 스타일 (success, error, warning, info)
          • 액션 버튼 지원
          • 자동 숨김 기능
          • 위치 조정 (top-right, bottom-left 등)
          • 스택형 알림 지원
        </Typography>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 border rounded-lg">
          <Typography variant="h6" className="mb-2">Snackbar 스타일</Typography>
          <div className="space-y-2">
            <Badge variant="success">Success (MUI severity)</Badge>
            <Badge variant="info">Info (MUI severity)</Badge>
            <Badge variant="warning">Warning (MUI severity)</Badge>
            <Badge variant="destructive">Error (MUI severity)</Badge>
          </div>
        </div>

        <div className="p-4 border rounded-lg">
          <Typography variant="h6" className="mb-2">고급 기능</Typography>
          <ul className="text-sm space-y-1 text-gray-700">
            <li>• 알림 스택 관리</li>
            <li>• 자동 위치 조정</li>
            <li>• 키보드 접근성</li>
            <li>• 스와이프 제스처 지원</li>
            <li>• NotistackSnackbar 호환</li>
          </ul>
        </div>
      </div>

      <div className="text-center">
        <Typography variant="body2" className="text-gray-600">
          Spotlite 테마의 커스텀 severity 스타일이 적용되어
          MUI Snackbar와 일관된 사용자 경험을 제공합니다.
        </Typography>
      </div>
    </div>
  ),
};