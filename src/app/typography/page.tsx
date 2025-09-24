import { Container, Box, Grid } from '@mui/material'
import { Typography } from '@/components/ui/typography'

export default function TypographyPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Typography 컴포넌트
      </Typography>
      <Typography variant="body1" color="secondary" paragraph>
        MUI Typography와 shadcn Typography를 비교해보세요.
      </Typography>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          기본 Typography Variants
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 4 }}>
          <Typography variant="h1">Heading 1 - Main Heading</Typography>
          <Typography variant="h2">Heading 2 - Sub Heading</Typography>
          <Typography variant="h3">Heading 3 - Subsection Heading</Typography>
          <Typography variant="h4">Heading 4 - Detailed Section Heading</Typography>
          <Typography variant="h5">Heading 5 - Small Heading</Typography>
          <Typography variant="h6">Heading 6 - Smallest Heading</Typography>
          <Typography variant="body1">Body 1 - Main content text</Typography>
          <Typography variant="body2">Body 2 - Secondary content text</Typography>
          <Typography variant="caption">Caption - Small text</Typography>
        </Box>
      </Box>

      <Box sx={{ mt: 6 }}>
        <Typography variant="h4" gutterBottom>
          Spotlite 커스텀 Variants
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 4 }}>
          <Typography variant="spotliteBody">Spotlite Body - Main content</Typography>
          <Typography variant="spotliteBodyStrong">Spotlite Body Strong - Emphasized content</Typography>
          <Typography variant="spotliteCaption">Spotlite Caption - Secondary info</Typography>
          <Typography variant="spotliteCaptionStrong">Spotlite Caption Strong - Emphasized caption</Typography>
          <Typography variant="spotliteCaptionSmall">Spotlite Caption Small - Smallest text</Typography>
        </Box>
      </Box>

      <Box sx={{ mt: 6 }}>
        <Typography variant="h4" gutterBottom>
          색상 Variants
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ p: 2, border: 1, borderColor: 'divider', borderRadius: 1 }}>
              <Typography variant="h6" gutterBottom>Primary</Typography>
              <Typography variant="body2" color="primary">
                Primary color text (#000000)
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ p: 2, border: 1, borderColor: 'divider', borderRadius: 1 }}>
              <Typography variant="h6" gutterBottom>Secondary</Typography>
              <Typography variant="body2" color="secondary">
                Secondary color text (#5A5A5A)
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ p: 2, border: 1, borderColor: 'divider', borderRadius: 1 }}>
              <Typography variant="h6" gutterBottom>Accent</Typography>
              <Typography variant="body2" color="accent">
                Accent color text (#5058e3)
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ p: 2, border: 1, borderColor: 'divider', borderRadius: 1 }}>
              <Typography variant="h6" gutterBottom>Negative</Typography>
              <Typography variant="body2" color="negative">
                Negative color text (#D32F2F)
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ p: 2, border: 1, borderColor: 'divider', borderRadius: 1 }}>
              <Typography variant="h6" gutterBottom>Line</Typography>
              <Typography variant="body2" color="line">
                Line color text (#06C755)
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ p: 2, border: 1, borderColor: 'divider', borderRadius: 1 }}>
              <Typography variant="h6" gutterBottom>Success</Typography>
              <Typography variant="body2" color="success">
                Success color text (#5058e3)
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ mt: 6 }}>
        <Typography variant="h4" gutterBottom>
          반응형 Typography
        </Typography>
        <Box sx={{ p: 3, border: 1, borderColor: 'divider', borderRadius: 2 }}>
          <Typography variant="h1" gutterBottom>
            반응형 제목 (3rem → 2rem on mobile)
          </Typography>
          <Typography variant="body1" color="secondary">
            이 텍스트는 모바일에서 작아집니다. (1rem → 0.9rem on mobile)
          </Typography>
        </Box>
      </Box>

      <Box sx={{ mt: 6, p: 3, border: 1, borderColor: 'divider', borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom>
          MUI + shadcn Typography 조합
        </Typography>
        <Typography variant="body2" color="secondary" paragraph>
          이 페이지는 Material-UI의 Container, Grid 컴포넌트와
          shadcn Typography 컴포넌트를 함께 사용한 예시입니다.
        </Typography>
        <Typography variant="body2" color="secondary">
          두 라이브러리의 Typography 시스템을 함께 사용하면 더욱 풍부한 타이포그래피를 구축할 수 있습니다.
        </Typography>
      </Box>
    </Container>
  )
}
