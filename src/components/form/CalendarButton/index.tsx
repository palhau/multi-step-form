import React from 'react';
import { Popover, PopoverTrigger, PopoverContent } from '../../ui/popover';
import { Button } from '../../ui/button';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { Calendar } from '../../ui/calendar';
import { SelectSingleEventHandler } from 'react-day-picker';

interface CalendarButtonProps {
  onSubmit: () => void;
  date?: Date;
  setDate: SelectSingleEventHandler;
  text: string;
}
export const CalendarButton = ({
  onSubmit,
  date,
  setDate,
  text,
}: CalendarButtonProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          className=" m-2 w-[240px] pl-3 text-left font-normal"
          onClick={onSubmit}
        >
          {date ? <span>{format(date, 'PPP')}</span> : <span>{text}</span>}

          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 bg-white" align="start">
        <Calendar
          mode="single"
          required
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
};
