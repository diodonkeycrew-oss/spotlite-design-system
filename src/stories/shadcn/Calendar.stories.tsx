import type { Meta, StoryObj } from '@storybook/react';
import { Calendar } from '../../components/ui/calendar';
import { useState } from 'react';

const meta: Meta<typeof Calendar> = {
  title: 'shadcn/Calendar',
  component: Calendar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());

    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
    );
  },
};

export const MultipleMonths: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());

    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        numberOfMonths={2}
        className="rounded-md border"
      />
    );
  },
};

export const WithDropdown: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());

    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        captionLayout="dropdown"
        fromYear={2020}
        toYear={2030}
        className="rounded-md border"
      />
    );
  },
};

export const RangeSelection: Story = {
  render: () => {
    const [range, setRange] = useState<{ from: Date | undefined; to: Date | undefined }>({
      from: new Date(2024, 0, 1),
      to: new Date(2024, 0, 7),
    });

    return (
      <Calendar
        mode="range"
        selected={range}
        onSelect={setRange}
        className="rounded-md border"
      />
    );
  },
};

export const MultipleSelection: Story = {
  render: () => {
    const [dates, setDates] = useState<Date[] | undefined>([
      new Date(2024, 0, 1),
      new Date(2024, 0, 7),
      new Date(2024, 0, 15),
    ]);

    return (
      <Calendar
        mode="multiple"
        selected={dates}
        onSelect={setDates}
        className="rounded-md border"
      />
    );
  },
};

export const DisabledDates: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());

    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        disabled={(date) =>
          date.getDay() === 0 || date.getDay() === 6 // Disable weekends
        }
        className="rounded-md border"
      />
    );
  },
};

export const WithFooter: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());

    return (
      <div className="flex flex-col gap-4">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
        />
        <div className="text-sm text-muted-foreground">
          {date ? date.toLocaleDateString() : 'No date selected'}
        </div>
      </div>
    );
  },
};
