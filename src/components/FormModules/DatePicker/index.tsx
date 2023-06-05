import React from 'react';
import { Popover, PopoverTrigger, PopoverContent } from '../../ui/popover';
import { Button } from '../../ui/button';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { Calendar } from '../../ui/calendar';
import { SelectSingleEventHandler } from 'react-day-picker';

interface CalendarButtonProps {
  startDate?: Date;
  setStartDate: SelectSingleEventHandler;
  endDate?: Date;
  setEndDate: SelectSingleEventHandler;
}
export const DatePicker = ({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}: CalendarButtonProps) => {
  return (
    <div className="items-center">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={'outline'}
            className=" m-2 w-[240px] pl-3 text-left font-normal"
          >
            {startDate ? (
              <span>{format(startDate, 'PPP')}</span>
            ) : (
              <span>Pick the start Date</span>
            )}

            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0 bg-white" align="start">
          <Calendar
            mode="single"
            required
            selected={startDate}
            onSelect={setStartDate}
            initialFocus
          />
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={'outline'}
            className=" m-2 w-[240px] pl-3 text-left font-normal"
          >
            {endDate ? (
              <span>{format(endDate, 'PPP')}</span>
            ) : (
              <span>Pick the start Date</span>
            )}

            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0 bg-white" align="start">
          <Calendar
            mode="single"
            required
            selected={endDate}
            onSelect={setEndDate}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};
