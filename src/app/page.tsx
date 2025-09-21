import { Container, Typography, Box, Button, Grid } from '@mui/material'
import { PlayArrow, Code, Palette } from '@mui/icons-material'

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 8, textAlign: 'center' }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Spotlite Design System
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          Next.js와 Material-UI로 구축된 현대적인 디자인 시스템
        </Typography>

        <Grid container spacing={4} sx={{ mt: 4 }}>
          <Grid item xs={12} md={4}>
            <Box sx={{ p: 3, border: 1, borderColor: 'divider', borderRadius: 2 }}>
              <Palette sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                컴포넌트
              </Typography>
              <Typography variant="body2" color="text.secondary">
                재사용 가능한 UI 컴포넌트 라이브러리
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box sx={{ p: 3, border: 1, borderColor: 'divider', borderRadius: 2 }}>
              <Code sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                개발자 친화적
              </Typography>
              <Typography variant="body2" color="text.secondary">
                TypeScript와 완벽한 타입 지원
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box sx={{ p: 3, border: 1, borderColor: 'divider', borderRadius: 2 }}>
              <PlayArrow sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                빠른 개발
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Next.js App Router로 최적화된 성능
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ mt: 6 }}>
          <Button variant="contained" size="large" sx={{ mr: 2 }}>
            시작하기
          </Button>
          <Button variant="outlined" size="large" sx={{ mr: 2 }}>
            문서 보기
          </Button>
          <Button
            variant="outlined"
            size="large"
            component="a"
            href="/shadcn"
            sx={{ textDecoration: 'none' }}
          >
            shadcn/ui 보기
          </Button>
        </Box>
      </Box>
    </Container>
  )
}
