import type { Meta, StoryObj } from '@storybook/react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material'
import { ExpandMore } from '@mui/icons-material'

const meta: Meta<typeof Accordion> = {
  title: 'MUI/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'outlined', 'filled'],
    },
    expanded: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    defaultExpanded: true,
  },
  render: (args) => (
    <div style={{ width: '400px' }}>
      <Accordion {...args}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <strong>Accordion 1</strong>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <strong>Accordion 2</strong>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <strong>Accordion 3</strong>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
    </div>
  ),
}

export const Outlined: Story = {
  args: {
    variant: 'outlined',
  },
  render: (args) => (
    <div style={{ width: '400px' }}>
      <Accordion {...args}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <strong>Outlined Accordion 1</strong>
        </AccordionSummary>
        <AccordionDetails>
          This is an outlined accordion with border styling.
        </AccordionDetails>
      </Accordion>
      <Accordion variant="outlined">
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <strong>Outlined Accordion 2</strong>
        </AccordionSummary>
        <AccordionDetails>
          Another outlined accordion item.
        </AccordionDetails>
      </Accordion>
    </div>
  ),
}

export const Filled: Story = {
  args: {
    variant: 'filled',
  },
  render: (args) => (
    <div style={{ width: '400px' }}>
      <Accordion {...args}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <strong>Filled Accordion 1</strong>
        </AccordionSummary>
        <AccordionDetails>
          This is a filled accordion with background color.
        </AccordionDetails>
      </Accordion>
      <Accordion variant="filled">
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <strong>Filled Accordion 2</strong>
        </AccordionSummary>
        <AccordionDetails>
          Another filled accordion item.
        </AccordionDetails>
      </Accordion>
    </div>
  ),
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => (
    <div style={{ width: '400px' }}>
      <Accordion {...args}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <strong>Disabled Accordion</strong>
        </AccordionSummary>
        <AccordionDetails>
          This accordion is disabled and cannot be expanded.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <strong>Enabled Accordion</strong>
        </AccordionSummary>
        <AccordionDetails>
          This accordion is enabled and can be expanded.
        </AccordionDetails>
      </Accordion>
    </div>
  ),
}

export const Multiple: Story = {
  args: {
    multiple: true,
  },
  render: (args) => (
    <div style={{ width: '400px' }}>
      <Accordion {...args}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <strong>Multiple Accordion 1</strong>
        </AccordionSummary>
        <AccordionDetails>
          This accordion allows multiple items to be open at the same time.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <strong>Multiple Accordion 2</strong>
        </AccordionSummary>
        <AccordionDetails>
          You can expand both items simultaneously.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <strong>Multiple Accordion 3</strong>
        </AccordionSummary>
        <AccordionDetails>
          All three items can be open at once.
        </AccordionDetails>
      </Accordion>
    </div>
  ),
}

export const Spotlite: Story = {
  args: {
    variant: 'outlined',
  },
  render: (args) => (
    <div style={{ width: '400px' }}>
      <Accordion {...args}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{
            backgroundColor: '#000000',
            color: '#ffffff',
            '&:hover': {
              backgroundColor: '#333333',
            },
          }}
        >
          <strong>Spotlite Accordion 1</strong>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: '#f5f5f5' }}>
          This is a Spotlite-themed accordion with black background and white text.
        </AccordionDetails>
      </Accordion>
      <Accordion variant="outlined">
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel2-content"
          id="panel2-header"
          sx={{
            backgroundColor: '#5058e3',
            color: '#ffffff',
            '&:hover': {
              backgroundColor: '#4040c7',
            },
          }}
        >
          <strong>Accent Accordion 2</strong>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: '#f0f0ff' }}>
          This is an accent-themed accordion with blue background.
        </AccordionDetails>
      </Accordion>
    </div>
  ),
}


