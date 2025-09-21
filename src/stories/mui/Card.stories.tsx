import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardContent, CardActions, Typography, Button } from '@mui/material';

const meta: Meta<typeof Card> = {
  title: 'MUI/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Material-UI Card 컴포넌트입니다. 콘텐츠를 카드 형태로 표시합니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    elevation: {
      control: { type: 'number', min: 0, max: 24 },
      description: '카드의 그림자 깊이 (0-24)',
    },
    variant: {
      control: { type: 'select' },
      options: ['elevation', 'outlined'],
      description: '카드의 variant',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: (args) => (
    <Card {...args} sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Basic Card
        </Typography>
        <Typography variant="body2" color="text.secondary">
          이것은 기본 카드 컴포넌트입니다. 다양한 콘텐츠를 포함할 수 있습니다.
        </Typography>
      </CardContent>
    </Card>
  ),
  args: {
    elevation: 1,
  },
};

export const WithActions: Story = {
  render: (args) => (
    <Card {...args} sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Card with Actions
        </Typography>
        <Typography variant="body2" color="text.secondary">
          액션 버튼이 포함된 카드입니다.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  ),
  args: {
    elevation: 2,
  },
};

export const Outlined: Story = {
  render: (args) => (
    <Card {...args} sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Outlined Card
        </Typography>
        <Typography variant="body2" color="text.secondary">
          테두리가 있는 카드입니다.
        </Typography>
      </CardContent>
    </Card>
  ),
  args: {
    variant: 'outlined',
  },
};

export const HighElevation: Story = {
  render: (args) => (
    <Card {...args} sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          High Elevation
        </Typography>
        <Typography variant="body2" color="text.secondary">
          높은 그림자 효과가 적용된 카드입니다.
        </Typography>
      </CardContent>
    </Card>
  ),
  args: {
    elevation: 8,
  },
};
