import type { Meta, StoryObj } from '@storybook/react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../components/ui/accordion'

const meta: Meta<typeof Accordion> = {
  title: 'shadcn/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['single', 'multiple'],
    },
    collapsible: {
      control: { type: 'boolean' },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    type: 'single',
    collapsible: true,
  },
  render: (args) => (
    <div style={{ width: '400px' }}>
      <Accordion {...args} className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            Yes. It&apos;s animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
}

export const Multiple: Story = {
  args: {
    type: 'multiple',
  },
  render: (args) => (
    <div style={{ width: '400px' }}>
      <Accordion {...args} className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Multiple Accordion 1</AccordionTrigger>
          <AccordionContent>
            This accordion allows multiple items to be open at the same time.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Multiple Accordion 2</AccordionTrigger>
          <AccordionContent>
            You can expand both items simultaneously.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Multiple Accordion 3</AccordionTrigger>
          <AccordionContent>
            All three items can be open at once.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
}

export const Spotlite: Story = {
  args: {
    type: 'single',
    collapsible: true,
  },
  render: (args) => (
    <div style={{ width: '400px' }}>
      <Accordion {...args} className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger variant="spotlite">
            Spotlite Accordion 1
          </AccordionTrigger>
          <AccordionContent>
            This is a Spotlite-themed accordion with custom styling.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger variant="spotlite">
            Spotlite Accordion 2
          </AccordionTrigger>
          <AccordionContent>
            Another Spotlite-themed accordion item.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
}

export const Outlined: Story = {
  args: {
    type: 'single',
    collapsible: true,
  },
  render: (args) => (
    <div style={{ width: '400px' }}>
      <Accordion {...args} className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger variant="outlined">
            Outlined Accordion 1
          </AccordionTrigger>
          <AccordionContent>
            This is an outlined accordion with border styling.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger variant="outlined">
            Outlined Accordion 2
          </AccordionTrigger>
          <AccordionContent>
            Another outlined accordion item.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
}

export const Filled: Story = {
  args: {
    type: 'single',
    collapsible: true,
  },
  render: (args) => (
    <div style={{ width: '400px' }}>
      <Accordion {...args} className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger variant="filled">
            Filled Accordion 1
          </AccordionTrigger>
          <AccordionContent>
            This is a filled accordion with background color.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger variant="filled">
            Filled Accordion 2
          </AccordionTrigger>
          <AccordionContent>
            Another filled accordion item.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
}

export const Sizes: Story = {
  args: {
    type: 'single',
    collapsible: true,
  },
  render: (args) => (
    <div style={{ width: '400px' }}>
      <Accordion {...args} className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger size="small">
            Small Size Accordion
          </AccordionTrigger>
          <AccordionContent>
            This accordion has a small size with reduced padding.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger size="default">
            Default Size Accordion
          </AccordionTrigger>
          <AccordionContent>
            This accordion has the default size.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger size="large">
            Large Size Accordion
          </AccordionTrigger>
          <AccordionContent>
            This accordion has a large size with increased padding.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
}

export const MixedVariants: Story = {
  args: {
    type: 'single',
    collapsible: true,
  },
  render: (args) => (
    <div style={{ width: '400px' }}>
      <Accordion {...args} className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger variant="default">
            Default Variant
          </AccordionTrigger>
          <AccordionContent>
            This is the default variant with standard styling.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger variant="spotlite">
            Spotlite Variant
          </AccordionTrigger>
          <AccordionContent>
            This is the Spotlite variant with custom styling.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger variant="outlined">
            Outlined Variant
          </AccordionTrigger>
          <AccordionContent>
            This is the outlined variant with border styling.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger variant="filled">
            Filled Variant
          </AccordionTrigger>
          <AccordionContent>
            This is the filled variant with background color.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
}


