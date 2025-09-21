import { Container, Typography, Box, Grid, Paper, Chip } from '@mui/material'
import { Palette, ColorLens, Brush } from '@mui/icons-material'

export default function DesignPage() {
  const colors = [
    { name: 'Primary', value: '#1976d2', description: '주요 색상' },
    { name: 'Secondary', value: '#dc004e', description: '보조 색상' },
    { name: 'Success', value: '#2e7d32', description: '성공 상태' },
    { name: 'Warning', value: '#ed6c02', description: '경고 상태' },
    { name: 'Error', value: '#d32f2f', description: '오류 상태' },
  ]

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        디자인 시스템
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        일관된 디자인을 위한 색상, 타이포그래피, 간격 가이드라인을 확인하세요.
      </Typography>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
          <Palette sx={{ mr: 1 }} />
          색상 팔레트
        </Typography>

        <Grid container spacing={2}>
          {colors.map((color, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper sx={{ p: 2 }}>
                <Box
                  sx={{
                    width: '100%',
                    height: 60,
                    backgroundColor: color.value,
                    borderRadius: 1,
                    mb: 2,
                  }}
                />
                <Typography variant="h6" gutterBottom>
                  {color.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {color.description}
                </Typography>
                <Chip label={color.value} size="small" />
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box sx={{ mt: 6 }}>
        <Typography variant="h4" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
          <Brush sx={{ mr: 1 }} />
          타이포그래피
        </Typography>

        <Paper sx={{ p: 3 }}>
          <Typography variant="h1" gutterBottom>Heading 1</Typography>
          <Typography variant="h2" gutterBottom>Heading 2</Typography>
          <Typography variant="h3" gutterBottom>Heading 3</Typography>
          <Typography variant="h4" gutterBottom>Heading 4</Typography>
          <Typography variant="h5" gutterBottom>Heading 5</Typography>
          <Typography variant="h6" gutterBottom>Heading 6</Typography>
          <Typography variant="body1" gutterBottom>
            Body 1 - 기본 본문 텍스트입니다. 가독성을 위해 적절한 간격과 크기를 유지합니다.
          </Typography>
          <Typography variant="body2" gutterBottom>
            Body 2 - 보조 정보나 설명 텍스트에 사용됩니다.
          </Typography>
        </Paper>
      </Box>
    </Container>
  )
}
