import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Slider } from '@/components/ui/slider';
import { Typography } from '@/components/ui/typography';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Volume2, VolumeX, Settings, Brightness4 } from 'lucide-react';

const meta: Meta<typeof Slider> = {
  title: 'shadcn/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Spotlite 디자인 시스템의 shadcn/ui Slider 컴포넌트입니다. MUI Slider와 유사한 기능을 제공하며, 다양한 설정 옵션을 지원합니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    defaultValue: {
      control: { type: 'array' },
      description: 'Slider의 기본값',
    },
    max: {
      control: { type: 'number' },
      description: '최대값',
    },
    min: {
      control: { type: 'number' },
      description: '최소값',
    },
    step: {
      control: { type: 'number' },
      description: '단계값',
    },
    disabled: {
      control: { type: 'boolean' },
      description: '비활성화 여부',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 Slider
export const Default: Story = {
  args: {
    defaultValue: [50],
    max: 100,
    step: 1,
  },
  render: (args) => (
    <div className="w-[300px]">
      <Slider {...args} />
    </div>
  ),
};

// 값 표시가 있는 Slider
export const WithValue: Story = {
  render: () => {
    const [value, setValue] = useState([50]);

    return (
      <div className="w-[300px] space-y-4">
        <div className="flex justify-between">
          <Typography variant="body2">값:</Typography>
          <Badge variant="secondary">{value[0]}</Badge>
        </div>
        <Slider
          value={value}
          onValueChange={setValue}
          max={100}
          step={1}
        />
      </div>
    );
  },
};

// 범위 Slider
export const Range: Story = {
  render: () => {
    const [value, setValue] = useState([20, 80]);

    return (
      <div className="w-[300px] space-y-4">
        <div className="flex justify-between">
          <Typography variant="body2">범위:</Typography>
          <Badge variant="info">{value[0]} - {value[1]}</Badge>
        </div>
        <Slider
          value={value}
          onValueChange={setValue}
          max={100}
          step={1}
        />
      </div>
    );
  },
};

// 단계가 있는 Slider
export const WithSteps: Story = {
  render: () => {
    const [value, setValue] = useState([5]);

    return (
      <div className="w-[300px] space-y-4">
        <div className="flex justify-between">
          <Typography variant="body2">레벨:</Typography>
          <Badge variant="accent">{value[0]}</Badge>
        </div>
        <Slider
          value={value}
          onValueChange={setValue}
          max={10}
          min={1}
          step={1}
        />
        <div className="flex justify-between text-xs text-gray-500">
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
          <span>6</span>
          <span>7</span>
          <span>8</span>
          <span>9</span>
          <span>10</span>
        </div>
      </div>
    );
  },
};

// 비활성화된 Slider
export const Disabled: Story = {
  args: {
    defaultValue: [25],
    max: 100,
    step: 1,
    disabled: true,
  },
  render: (args) => (
    <div className="w-[300px] space-y-2">
      <Typography variant="body2" className="text-gray-500">
        비활성화된 Slider
      </Typography>
      <Slider {...args} />
    </div>
  ),
};

// 볼륨 컨트롤 예시
export const VolumeControl: Story = {
  render: () => {
    const [volume, setVolume] = useState([75]);

    return (
      <div className="w-[300px] space-y-4">
        <div className="flex items-center gap-3">
          {volume[0] === 0 ? (
            <VolumeX className="h-5 w-5 text-gray-500" />
          ) : (
            <Volume2 className="h-5 w-5 text-gray-700" />
          )}
          <Typography variant="h6">볼륨</Typography>
          <Badge variant={volume[0] > 80 ? 'warning' : volume[0] > 50 ? 'info' : 'secondary'}>
            {volume[0]}%
          </Badge>
        </div>
        <Slider
          value={volume}
          onValueChange={setVolume}
          max={100}
          step={1}
        />
        <div className="flex justify-between text-xs text-gray-500">
          <span>조용히</span>
          <span>크게</span>
        </div>
      </div>
    );
  },
};

// 밝기 조절 예시
export const BrightnessControl: Story = {
  render: () => {
    const [brightness, setBrightness] = useState([60]);

    return (
      <div className="w-[300px] space-y-4">
        <div className="flex items-center gap-3">
          <Brightness4 className="h-5 w-5 text-yellow-600" />
          <Typography variant="h6">화면 밝기</Typography>
          <Badge variant="warning">{brightness[0]}%</Badge>
        </div>
        <Slider
          value={brightness}
          onValueChange={setBrightness}
          max={100}
          step={5}
        />
        <div className="flex justify-between text-xs text-gray-500">
          <span>어둡게</span>
          <span>밝게</span>
        </div>
      </div>
    );
  },
};

// 가격 범위 필터
export const PriceRange: Story = {
  render: () => {
    const [priceRange, setPriceRange] = useState([10000, 50000]);

    return (
      <div className="w-[300px] space-y-4">
        <div className="flex items-center justify-between">
          <Typography variant="h6">가격 범위</Typography>
          <Typography variant="body2" className="font-medium">
            ₩{priceRange[0].toLocaleString()} - ₩{priceRange[1].toLocaleString()}
          </Typography>
        </div>
        <Slider
          value={priceRange}
          onValueChange={setPriceRange}
          max={100000}
          min={0}
          step={5000}
        />
        <div className="flex justify-between text-xs text-gray-500">
          <span>₩0</span>
          <span>₩100,000</span>
        </div>
      </div>
    );
  },
};

// 온도 조절
export const TemperatureControl: Story = {
  render: () => {
    const [temperature, setTemperature] = useState([22]);

    const getTemperatureColor = (temp: number) => {
      if (temp < 18) return 'text-blue-600';
      if (temp < 25) return 'text-green-600';
      if (temp < 30) return 'text-yellow-600';
      return 'text-red-600';
    };

    const getTemperatureVariant = (temp: number): 'info' | 'success' | 'warning' | 'destructive' => {
      if (temp < 18) return 'info';
      if (temp < 25) return 'success';
      if (temp < 30) return 'warning';
      return 'destructive';
    };

    return (
      <div className="w-[300px] space-y-4">
        <div className="flex items-center justify-between">
          <Typography variant="h6">온도 설정</Typography>
          <Badge variant={getTemperatureVariant(temperature[0])}>
            {temperature[0]}°C
          </Badge>
        </div>
        <Slider
          value={temperature}
          onValueChange={setTemperature}
          max={35}
          min={10}
          step={1}
        />
        <div className="flex justify-between text-xs text-gray-500">
          <span>10°C</span>
          <span>35°C</span>
        </div>
        <Typography
          variant="body2"
          className={`text-center ${getTemperatureColor(temperature[0])}`}
        >
          {temperature[0] < 18 && '🥶 추움'}
          {temperature[0] >= 18 && temperature[0] < 25 && '😊 적당함'}
          {temperature[0] >= 25 && temperature[0] < 30 && '😅 따뜻함'}
          {temperature[0] >= 30 && '🥵 더움'}
        </Typography>
      </div>
    );
  },
};

// 다중 Slider 설정 패널
export const SettingsPanel: Story = {
  render: () => {
    const [settings, setSettings] = useState({
      volume: [75],
      brightness: [60],
      quality: [3],
    });

    const updateSetting = (key: keyof typeof settings, value: number[]) => {
      setSettings(prev => ({ ...prev, [key]: value }));
    };

    const qualityLabels = ['낮음', '보통', '높음', '최고', '울트라'];

    return (
      <div className="w-[350px] space-y-6 p-4 border rounded-lg">
        <div className="flex items-center gap-2">
          <Settings className="h-5 w-5" />
          <Typography variant="h6">미디어 설정</Typography>
        </div>

        {/* 볼륨 */}
        <div className="space-y-2">
          <div className="flex justify-between">
            <Typography variant="body2">볼륨</Typography>
            <Badge variant="secondary">{settings.volume[0]}%</Badge>
          </div>
          <Slider
            value={settings.volume}
            onValueChange={(value) => updateSetting('volume', value)}
            max={100}
            step={1}
          />
        </div>

        {/* 밝기 */}
        <div className="space-y-2">
          <div className="flex justify-between">
            <Typography variant="body2">밝기</Typography>
            <Badge variant="warning">{settings.brightness[0]}%</Badge>
          </div>
          <Slider
            value={settings.brightness}
            onValueChange={(value) => updateSetting('brightness', value)}
            max={100}
            step={5}
          />
        </div>

        {/* 화질 */}
        <div className="space-y-2">
          <div className="flex justify-between">
            <Typography variant="body2">화질</Typography>
            <Badge variant="info">{qualityLabels[settings.quality[0]]}</Badge>
          </div>
          <Slider
            value={settings.quality}
            onValueChange={(value) => updateSetting('quality', value)}
            max={4}
            min={0}
            step={1}
          />
          <div className="flex justify-between text-xs text-gray-500">
            {qualityLabels.map((label, index) => (
              <span key={index}>{label}</span>
            ))}
          </div>
        </div>

        <div className="flex gap-2 pt-2">
          <Button variant="outline" className="flex-1">초기화</Button>
          <Button className="flex-1">적용</Button>
        </div>
      </div>
    );
  },
};

// Spotlite 테마 특성 데모
export const SpotliteThemeDemo: Story = {
  render: () => (
    <div className="space-y-6 w-full max-w-2xl">
      <Typography variant="h5" className="text-center">
        Spotlite Slider 테마 특성
      </Typography>

      <div className="p-4 border rounded-lg bg-blue-50">
        <Typography variant="h6" className="mb-2">테마 특성</Typography>
        <ul className="space-y-1 text-sm text-gray-700">
          <li>• Radix UI 기반 구현으로 접근성 최적화</li>
          <li>• MUI Slider와 유사한 사용 패턴</li>
          <li>• Tailwind CSS 기반 스타일링</li>
          <li>• 커스터마이징 가능한 색상 및 크기</li>
          <li>• 키보드 내비게이션 지원</li>
          <li>• 터치 디바이스 최적화</li>
        </ul>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <Typography variant="h6">단일 값 Slider</Typography>
          <div className="space-y-2">
            <Slider defaultValue={[33]} max={100} step={1} />
            <Typography variant="body2" className="text-gray-600">
              하나의 값을 선택할 때 사용
            </Typography>
          </div>
        </div>

        <div className="space-y-4">
          <Typography variant="h6">범위 Slider</Typography>
          <div className="space-y-2">
            <Slider defaultValue={[25, 75]} max={100} step={1} />
            <Typography variant="body2" className="text-gray-600">
              범위를 선택할 때 사용
            </Typography>
          </div>
        </div>
      </div>

      <div className="text-center">
        <Typography variant="body2" className="text-gray-600">
          MUI Slider의 markLabel 스타일 (secondary.dark, 0.7rem)과 호환되는
          shadcn Slider 구현으로 일관된 사용자 경험을 제공합니다.
        </Typography>
      </div>
    </div>
  ),
};