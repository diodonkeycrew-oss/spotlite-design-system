import { Container, Typography, Box, Grid } from '@mui/material'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Download, Star, Heart, Share2 } from 'lucide-react'

export default function ShadcnPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        shadcn/ui 컴포넌트
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Tailwind CSS와 Radix UI를 기반으로 한 shadcn/ui 컴포넌트들을 확인해보세요.
      </Typography>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          버튼 컴포넌트
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 4 }}>
          <Button>기본 버튼</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </Box>

        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 4 }}>
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
          <Button size="icon">
            <Download className="h-4 w-4" />
          </Button>
        </Box>
      </Box>

      <Box sx={{ mt: 6 }}>
        <Typography variant="h4" gutterBottom>
          카드 컴포넌트
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Card>
              <CardHeader>
                <CardTitle>프로젝트 카드</CardTitle>
                <CardDescription>
                  프로젝트에 대한 간단한 설명입니다.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  이 카드는 shadcn/ui의 Card 컴포넌트를 사용하여 만들어졌습니다.
                  Tailwind CSS를 사용하여 스타일링되었습니다.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card>
              <CardHeader>
                <CardTitle>기능 카드</CardTitle>
                <CardDescription>
                  다양한 기능들을 소개합니다.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  반응형 디자인과 접근성을 고려한 컴포넌트입니다.
                  TypeScript로 완전히 타입이 지정되어 있습니다.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card>
              <CardHeader>
                <CardTitle>통계 카드</CardTitle>
                <CardDescription>
                  프로젝트 통계 정보입니다.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  MUI와 shadcn/ui를 함께 사용할 수 있는 예시입니다.
                  두 라이브러리의 장점을 모두 활용할 수 있습니다.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ mt: 6 }}>
        <Typography variant="h4" gutterBottom>
          배지 컴포넌트
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 4 }}>
          <Badge>기본</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="outline">Outline</Badge>
        </Box>

        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 4 }}>
          <Badge className="flex items-center gap-1">
            <Star className="h-3 w-3" />
            별점
          </Badge>
          <Badge className="flex items-center gap-1">
            <Heart className="h-3 w-3" />
            좋아요
          </Badge>
          <Badge className="flex items-center gap-1">
            <Share2 className="h-3 w-3" />
            공유
          </Badge>
        </Box>
      </Box>

      <Box sx={{ mt: 6, p: 3, border: 1, borderColor: 'divider', borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom>
          MUI + shadcn/ui 조합
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          이 페이지는 Material-UI의 Container, Typography, Grid 컴포넌트와
          shadcn/ui의 Button, Card, Badge 컴포넌트를 함께 사용한 예시입니다.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          두 라이브러리를 함께 사용하면 더욱 풍부한 UI 컴포넌트 라이브러리를 구축할 수 있습니다.
        </Typography>
      </Box>
    </Container>
  )
}
