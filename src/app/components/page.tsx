import { Container, Typography, Box, Grid, Card, CardContent, Button } from '@mui/material'
import { Add, Edit, Delete } from '@mui/icons-material'

export default function ComponentsPage() {
  const components = [
    { name: 'Button', description: '다양한 스타일의 버튼 컴포넌트', icon: <Add /> },
    { name: 'Input', description: '폼 입력을 위한 입력 필드', icon: <Edit /> },
    { name: 'Card', description: '콘텐츠를 담는 카드 컴포넌트', icon: <Delete /> },
  ]

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        컴포넌트 라이브러리
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        재사용 가능한 UI 컴포넌트들을 탐색하고 사용해보세요.
      </Typography>

      <Grid container spacing={3} sx={{ mt: 2 }}>
        {components.map((component, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  {component.icon}
                  <Typography variant="h6" sx={{ ml: 1 }}>
                    {component.name}
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {component.description}
                </Typography>
                <Button variant="outlined" size="small">
                  보기
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
