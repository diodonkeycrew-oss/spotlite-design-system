import type { Meta, StoryObj } from '@storybook/react';
import {
  FormLabel,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  Checkbox,
  TextField,
  Switch,
  Box,
  Stack,
  Typography,
  Select,
  MenuItem,
  InputLabel,
  FormGroup,
  FormHelperText
} from '@mui/material';

const meta: Meta<typeof FormLabel> = {
  title: 'MUI/FormLabel',
  component: FormLabel,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Spotlite 디자인 시스템의 Material-UI FormLabel 컴포넌트입니다. text.primary 색상과 fontWeight 700이 적용되어 있습니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    component: {
      control: { type: 'select' },
      options: ['label', 'legend'],
      description: 'FormLabel의 HTML 컴포넌트',
    },
    required: {
      control: { type: 'boolean' },
      description: '필수 필드 표시 여부',
    },
    error: {
      control: { type: 'boolean' },
      description: '에러 상태 표시 여부',
    },
    focused: {
      control: { type: 'boolean' },
      description: '포커스 상태 표시 여부',
    },
    disabled: {
      control: { type: 'boolean' },
      description: '비활성화 상태 표시 여부',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 FormLabel들
export const Default: Story = {
  args: {
    children: '기본 폼 라벨',
  },
};

export const Required: Story = {
  args: {
    required: true,
    children: '필수 입력 항목',
  },
};

export const Error: Story = {
  args: {
    error: true,
    children: '에러 상태 라벨',
  },
};

export const Focused: Story = {
  args: {
    focused: true,
    children: '포커스된 라벨',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: '비활성화된 라벨',
  },
};

// 컴포넌트별 FormLabel 사용 예시
export const WithTextField: Story = {
  render: () => (
    <FormControl>
      <FormLabel>사용자 이름</FormLabel>
      <TextField
        variant="outlined"
        placeholder="이름을 입력하세요"
        sx={{ mt: 1 }}
      />
    </FormControl>
  ),
};

export const WithRequiredTextField: Story = {
  render: () => (
    <FormControl required>
      <FormLabel required>이메일 주소</FormLabel>
      <TextField
        type="email"
        variant="outlined"
        placeholder="email@example.com"
        sx={{ mt: 1 }}
      />
      <FormHelperText>이메일 주소는 필수 입력 항목입니다.</FormHelperText>
    </FormControl>
  ),
};

export const WithErrorTextField: Story = {
  render: () => (
    <FormControl error>
      <FormLabel error>비밀번호</FormLabel>
      <TextField
        type="password"
        variant="outlined"
        placeholder="비밀번호를 입력하세요"
        error
        sx={{ mt: 1 }}
      />
      <FormHelperText>비밀번호는 8자 이상이어야 합니다.</FormHelperText>
    </FormControl>
  ),
};

export const WithRadioGroup: Story = {
  render: () => (
    <FormControl>
      <FormLabel>성별</FormLabel>
      <RadioGroup defaultValue="male" sx={{ mt: 1 }}>
        <FormControlLabel value="male" control={<Radio />} label="남성" />
        <FormControlLabel value="female" control={<Radio />} label="여성" />
        <FormControlLabel value="other" control={<Radio />} label="기타" />
      </RadioGroup>
    </FormControl>
  ),
};

export const WithCheckboxGroup: Story = {
  render: () => (
    <FormControl>
      <FormLabel>관심 분야</FormLabel>
      <FormGroup sx={{ mt: 1 }}>
        <FormControlLabel control={<Checkbox />} label="프론트엔드 개발" />
        <FormControlLabel control={<Checkbox />} label="백엔드 개발" />
        <FormControlLabel control={<Checkbox />} label="디자인" />
        <FormControlLabel control={<Checkbox />} label="기획" />
      </FormGroup>
    </FormControl>
  ),
};

export const WithSelect: Story = {
  render: () => (
    <FormControl sx={{ minWidth: 200 }}>
      <FormLabel>거주 지역</FormLabel>
      <Select defaultValue="" sx={{ mt: 1 }}>
        <MenuItem value="">선택하세요</MenuItem>
        <MenuItem value="seoul">서울</MenuItem>
        <MenuItem value="busan">부산</MenuItem>
        <MenuItem value="daegu">대구</MenuItem>
        <MenuItem value="incheon">인천</MenuItem>
      </Select>
    </FormControl>
  ),
};

export const WithSwitch: Story = {
  render: () => (
    <FormControl>
      <FormLabel>알림 설정</FormLabel>
      <FormGroup sx={{ mt: 1 }}>
        <FormControlLabel
          control={<Switch defaultChecked />}
          label="이메일 알림"
        />
        <FormControlLabel
          control={<Switch />}
          label="SMS 알림"
        />
        <FormControlLabel
          control={<Switch defaultChecked />}
          label="푸시 알림"
        />
      </FormGroup>
    </FormControl>
  ),
};

// 다양한 상태 조합 예시
export const AllStates: Story = {
  render: () => (
    <Stack spacing={3} sx={{ width: 400 }}>
      <Box>
        <Typography variant="h6" gutterBottom>
          FormLabel 상태별 예시
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Spotlite 테마가 적용된 FormLabel의 다양한 상태를 확인할 수 있습니다.
        </Typography>
      </Box>

      <FormControl>
        <FormLabel>기본 상태</FormLabel>
        <TextField variant="outlined" placeholder="입력하세요" sx={{ mt: 1 }} />
      </FormControl>

      <FormControl required>
        <FormLabel required>필수 입력 (Required)</FormLabel>
        <TextField variant="outlined" placeholder="필수 입력하세요" sx={{ mt: 1 }} />
      </FormControl>

      <FormControl error>
        <FormLabel error>에러 상태 (Error)</FormLabel>
        <TextField
          variant="outlined"
          placeholder="에러가 있는 입력"
          error
          sx={{ mt: 1 }}
        />
        <FormHelperText>에러 메시지가 여기에 표시됩니다.</FormHelperText>
      </FormControl>

      <FormControl disabled>
        <FormLabel disabled>비활성화 상태 (Disabled)</FormLabel>
        <TextField
          variant="outlined"
          placeholder="비활성화된 입력"
          disabled
          sx={{ mt: 1 }}
        />
      </FormControl>

      <FormControl focused>
        <FormLabel focused>포커스 상태 (Focused)</FormLabel>
        <TextField
          variant="outlined"
          placeholder="포커스된 입력"
          sx={{ mt: 1 }}
        />
      </FormControl>
    </Stack>
  ),
};

// 복합 폼 예시
export const ComplexForm: Story = {
  render: () => (
    <Box sx={{ width: 500, padding: 3, border: '1px solid #ddd', borderRadius: 2 }}>
      <Typography variant="h5" gutterBottom>
        사용자 정보 입력
      </Typography>

      <Stack spacing={3}>
        {/* 개인 정보 */}
        <Box>
          <Typography variant="h6" gutterBottom>
            개인 정보
          </Typography>

          <Stack spacing={2}>
            <FormControl required>
              <FormLabel required>이름</FormLabel>
              <TextField
                variant="outlined"
                placeholder="이름을 입력하세요"
                sx={{ mt: 1 }}
              />
            </FormControl>

            <FormControl required>
              <FormLabel required>이메일</FormLabel>
              <TextField
                type="email"
                variant="outlined"
                placeholder="email@example.com"
                sx={{ mt: 1 }}
              />
            </FormControl>

            <FormControl>
              <FormLabel>전화번호</FormLabel>
              <TextField
                variant="outlined"
                placeholder="010-0000-0000"
                sx={{ mt: 1 }}
              />
            </FormControl>
          </Stack>
        </Box>

        {/* 추가 정보 */}
        <Box>
          <Typography variant="h6" gutterBottom>
            추가 정보
          </Typography>

          <Stack spacing={2}>
            <FormControl>
              <FormLabel>성별</FormLabel>
              <RadioGroup defaultValue="" sx={{ mt: 1 }}>
                <FormControlLabel value="male" control={<Radio />} label="남성" />
                <FormControlLabel value="female" control={<Radio />} label="여성" />
                <FormControlLabel value="other" control={<Radio />} label="기타" />
              </RadioGroup>
            </FormControl>

            <FormControl>
              <FormLabel>관심 분야</FormLabel>
              <FormGroup sx={{ mt: 1 }}>
                <FormControlLabel control={<Checkbox />} label="웹 개발" />
                <FormControlLabel control={<Checkbox />} label="모바일 개발" />
                <FormControlLabel control={<Checkbox />} label="UI/UX 디자인" />
              </FormGroup>
            </FormControl>

            <FormControl>
              <FormLabel>알림 설정</FormLabel>
              <FormGroup sx={{ mt: 1 }}>
                <FormControlLabel
                  control={<Switch defaultChecked />}
                  label="이메일 알림 수신"
                />
                <FormControlLabel
                  control={<Switch />}
                  label="마케팅 정보 수신"
                />
              </FormGroup>
            </FormControl>
          </Stack>
        </Box>
      </Stack>
    </Box>
  ),
};

// FormLabel 스타일 비교 (Spotlite vs 기본)
export const StyleComparison: Story = {
  render: () => (
    <Stack spacing={4} sx={{ width: 400 }}>
      <Box>
        <Typography variant="h6" gutterBottom>
          Spotlite FormLabel 스타일
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          color: text.primary, fontWeight: 700 적용
        </Typography>
      </Box>

      <Box>
        <FormControl>
          <FormLabel>일반 라벨</FormLabel>
          <TextField variant="outlined" placeholder="입력하세요" sx={{ mt: 1 }} />
        </FormControl>
      </Box>

      <Box>
        <FormControl required>
          <FormLabel required>필수 라벨</FormLabel>
          <TextField variant="outlined" placeholder="필수 입력" sx={{ mt: 1 }} />
        </FormControl>
      </Box>

      <Box>
        <FormControl error>
          <FormLabel error>에러 라벨</FormLabel>
          <TextField variant="outlined" placeholder="에러 상태" error sx={{ mt: 1 }} />
        </FormControl>
      </Box>

      <Box>
        <FormControl>
          <FormLabel>폰트 굵기 테스트</FormLabel>
          <Typography variant="body2" sx={{ mt: 1 }}>
            Spotlite 테마에서는 FormLabel의 fontWeight가 700으로 설정되어
            다른 텍스트보다 굵게 표시됩니다.
          </Typography>
        </FormControl>
      </Box>
    </Stack>
  ),
};