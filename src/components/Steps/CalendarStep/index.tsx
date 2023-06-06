import React, { useState } from 'react';
import { DatePicker } from '../../FormModules';
import { Button } from '../../ui/button';
import { Trash2 } from 'lucide-react';

export const CalendarStep = () => {
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [components, setComponents] = useState<React.ReactNode[]>([]);

  const addComponent = () => {
    setComponents((prevComponents) => [...prevComponents, DateComponent]);
  };

  const removeComponent = (index: number) => {
    setComponents((prevComponents) => {
      const updatedComponents = [...prevComponents];
      updatedComponents.splice(index, 1);
      return updatedComponents;
    });
  };

  const DateComponent = (
    <DatePicker
      startDate={startDate}
      setStartDate={setStartDate}
      endDate={endDate}
      setEndDate={setEndDate}
    />
  );

  return (
    <div className="items-center">
      <h2 className="mb-2">Select the Dates: </h2>
      {DateComponent}
      {components.map((component, index) => (
        <div id="index" className="flex flex-row items-center">
          {component}
          <Button
            onClick={() => removeComponent(index)}
            variant={'ghost'}
            className="w-[50px] pl-3 text-left font-normal"
          >
            <Trash2 className="ml-auto h-4 w-4" />
          </Button>
        </div>
      ))}
      <Button variant={'link'} onClick={addComponent}>
        + Add More Intervals
      </Button>
    </div>
  );
};
