import type { Meta, StoryObj } from '@storybook/react';
import { Container, Box, Typography, Paper, Stack, Grid } from '@mui/material';

const meta: Meta<typeof Container> = {
  title: 'MUI/Container',
  component: Container,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Spotlite 디자인 시스템의 Material-UI Container 컴포넌트입니다. 기본 maxWidth가 xl로 설정되고 paddingTop이 적용되어 있습니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    maxWidth: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl', false],
      description: 'Container의 최대 너비 (기본값: xl)',
    },
    fixed: {
      control: { type: 'boolean' },
      description: '고정 너비 사용 여부',
    },
    disableGutters: {
      control: { type: 'boolean' },
      description: '좌우 패딩 제거 여부',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 컨테이너 내용을 시각화하기 위한 공통 콘텐츠
const DemoContent = ({ title, description }: { title: string; description: string }) => (
  <Paper sx={{ p: 3, backgroundColor: '#f5f5f5', border: '2px dashed #ddd' }}>
    <Typography variant="h5" gutterBottom>
      {title}
    </Typography>
    <Typography variant="body1" color="text.secondary">
      {description}
    </Typography>
    <Box sx={{ mt: 2, p: 2, backgroundColor: 'white', borderRadius: 1 }}>
      <Typography variant="body2">
        현재 Container의 경계를 보여주는 영역입니다. 이 영역을 통해 Container의 최대 너비와 패딩을 확인할 수 있습니다.
      </Typography>
    </Box>
  </Paper>
);

// 기본 Container (Spotlite 기본값: xl maxWidth)
export const Default: Story = {
  render: () => (
    <Container>
      <DemoContent
        title="기본 Container (xl maxWidth)"
        description="Spotlite 테마의 기본 설정으로 maxWidth가 xl로 설정되어 있습니다."
      />
    </Container>
  ),
};

// maxWidth별 Container들
export const MaxWidthXS: Story = {
  render: () => (
    <Container maxWidth="xs">
      <DemoContent
        title="XS Container"
        description="maxWidth가 xs로 설정된 매우 작은 Container입니다."
      />
    </Container>
  ),
};

export const MaxWidthSM: Story = {
  render: () => (
    <Container maxWidth="sm">
      <DemoContent
        title="SM Container"
        description="maxWidth가 sm으로 설정된 작은 Container입니다."
      />
    </Container>
  ),
};

export const MaxWidthMD: Story = {
  render: () => (
    <Container maxWidth="md">
      <DemoContent
        title="MD Container"
        description="maxWidth가 md로 설정된 중간 크기 Container입니다."
      />
    </Container>
  ),
};

export const MaxWidthLG: Story = {
  render: () => (
    <Container maxWidth="lg">
      <DemoContent
        title="LG Container"
        description="maxWidth가 lg로 설정된 큰 Container입니다."
      />
    </Container>
  ),
};

export const MaxWidthXL: Story = {
  render: () => (
    <Container maxWidth="xl">
      <DemoContent
        title="XL Container (Spotlite 기본값)"
        description="maxWidth가 xl로 설정된 매우 큰 Container입니다. Spotlite 테마의 기본값입니다."
      />
    </Container>
  ),
};

export const MaxWidthFalse: Story = {
  render: () => (
    <Container maxWidth={false}>
      <DemoContent
        title="Full Width Container"
        description="maxWidth가 false로 설정되어 전체 너비를 사용하는 Container입니다."
      />
    </Container>
  ),
};

// 고정 너비 Container
export const Fixed: Story = {
  render: () => (
    <Container fixed>
      <DemoContent
        title="Fixed Container"
        description="fixed 속성이 적용된 Container로 브레이크포인트에 따른 고정 너비를 사용합니다."
      />
    </Container>
  ),
};

// Gutters 제거된 Container
export const DisableGutters: Story = {
  render: () => (
    <Container disableGutters>
      <DemoContent
        title="No Gutters Container"
        description="disableGutters 속성으로 좌우 패딩이 제거된 Container입니다."
      />
    </Container>
  ),
};

// 모든 maxWidth 비교 예시
export const AllMaxWidths: Story = {
  render: () => (
    <Stack spacing={4} sx={{ backgroundColor: '#fafafa', minHeight: '100vh', py: 4 }}>
      <Typography variant="h4" textAlign="center" gutterBottom>
        Container MaxWidth 비교
      </Typography>

      <Container maxWidth="xs">
        <Paper sx={{ p: 2, textAlign: 'center', backgroundColor: '#e3f2fd' }}>
          <Typography variant="h6">XS Container</Typography>
          <Typography variant="body2">최대 너비: 444px</Typography>
        </Paper>
      </Container>

      <Container maxWidth="sm">
        <Paper sx={{ p: 2, textAlign: 'center', backgroundColor: '#f3e5f5' }}>
          <Typography variant="h6">SM Container</Typography>
          <Typography variant="body2">최대 너비: 600px</Typography>
        </Paper>
      </Container>

      <Container maxWidth="md">
        <Paper sx={{ p: 2, textAlign: 'center', backgroundColor: '#e8f5e8' }}>
          <Typography variant="h6">MD Container</Typography>
          <Typography variant="body2">최대 너비: 900px</Typography>
        </Paper>
      </Container>

      <Container maxWidth="lg">
        <Paper sx={{ p: 2, textAlign: 'center', backgroundColor: '#fff3e0' }}>
          <Typography variant="h6">LG Container</Typography>
          <Typography variant="body2">최대 너비: 1200px</Typography>
        </Paper>
      </Container>

      <Container maxWidth="xl">
        <Paper sx={{ p: 2, textAlign: 'center', backgroundColor: '#fce4ec' }}>
          <Typography variant="h6">XL Container (Spotlite 기본값)</Typography>
          <Typography variant="body2">최대 너비: 1600px</Typography>
        </Paper>
      </Container>

      <Container maxWidth={false}>
        <Paper sx={{ p: 2, textAlign: 'center', backgroundColor: '#f1f8e9' }}>
          <Typography variant="h6">Full Width Container</Typography>
          <Typography variant="body2">최대 너비: 제한 없음</Typography>
        </Paper>
      </Container>
    </Stack>
  ),
};

// 실제 레이아웃 예시
export const LayoutExample: Story = {
  render: () => (
    <Box sx={{ backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      {/* 헤더 */}
      <Box sx={{ backgroundColor: 'primary.main', color: 'white', py: 2 }}>
        <Container>
          <Typography variant="h4">Spotlite 웹사이트</Typography>
          <Typography variant="subtitle1">Container를 사용한 레이아웃 예시</Typography>
        </Container>
      </Box>

      {/* 메인 콘텐츠 */}
      <Container sx={{ py: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h5" gutterBottom>
                메인 콘텐츠 영역
              </Typography>
              <Typography variant="body1" paragraph>
                이 영역은 Spotlite Container의 기본 설정(xl maxWidth)을 사용하여
                적절한 여백과 최대 너비를 가지고 있습니다.
              </Typography>
              <Typography variant="body1" paragraph>
                Container는 paddingTop이 theme.spacing(2)로 설정되어 있어
                상단에 적절한 여백이 자동으로 적용됩니다.
              </Typography>
              <Typography variant="body1">
                반응형 디자인을 지원하여 화면 크기에 따라 적절한 너비로 조정됩니다.
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                사이드바
              </Typography>
              <Typography variant="body2" paragraph>
                사이드바 콘텐츠도 동일한 Container 내에서
                Grid 시스템과 함께 사용됩니다.
              </Typography>
              <Typography variant="body2">
                이렇게 Container와 Grid를 조합하여
                다양한 레이아웃을 구성할 수 있습니다.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* 푸터 */}
      <Box sx={{ backgroundColor: 'grey.800', color: 'white', py: 3, mt: 4 }}>
        <Container>
          <Typography variant="body2" textAlign="center">
            © 2024 Spotlite. Container maxWidth: xl (기본값)
          </Typography>
        </Container>
      </Box>
    </Box>
  ),
};

// Spotlite 테마 특성 설명
export const SpotliteThemeFeatures: Story = {
  render: () => (
    <Container>
      <Box sx={{ py: 4 }}>
        <Typography variant="h4" gutterBottom textAlign="center">
          Spotlite Container 테마 특성
        </Typography>

        <Stack spacing={4} sx={{ mt: 4 }}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              1. 기본 maxWidth: xl
            </Typography>
            <Typography variant="body1" paragraph>
              Spotlite 테마에서는 Container의 기본 maxWidth가 'xl'로 설정되어 있습니다.
              이는 최대 1600px의 너비를 의미하며, 대부분의 화면에서 충분한 콘텐츠 공간을 제공합니다.
            </Typography>
            <Box sx={{ p: 2, backgroundColor: 'info.light', borderRadius: 1 }}>
              <Typography variant="body2">
                기본값: maxWidth="xl" (1600px)
              </Typography>
            </Box>
          </Paper>

          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              2. 상단 패딩 자동 적용
            </Typography>
            <Typography variant="body1" paragraph>
              paddingTop이 theme.spacing(2)로 설정되어 있어, 모든 Container에
              자동으로 상단 여백이 적용됩니다.
            </Typography>
            <Box sx={{ p: 2, backgroundColor: 'success.light', borderRadius: 1 }}>
              <Typography variant="body2">
                paddingTop: theme.spacing(2) (16px)
              </Typography>
            </Box>
          </Paper>

          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              3. 반응형 지원
            </Typography>
            <Typography variant="body1" paragraph>
              모바일에서는 paddingTop이 동일하게 유지되며,
              화면 크기에 따라 Container의 너비가 자동으로 조정됩니다.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              브레이크포인트: xs(0px), sm(600px), md(900px), lg(1200px), xl(1600px)
            </Typography>
          </Paper>
        </Stack>
      </Box>
    </Container>
  ),
};