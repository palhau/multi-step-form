import { useState } from 'react';

import { CalendarButton } from './CalendarButton';
import { ValueTypePicker } from './ValueTypePicker';

export const FormModule = () => {
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [valueType, setValueType] = useState<string>('fixed' || 'percentage');
  const onSubmit = () => {
    console.log('Enviado');
  };

  return (
    <div className="flex flex-col justify-start rounded-md w-[700px] h-64 p-8 bg-white">
      <div className="items-center">
        <h2 className="mb-2">Select the Dates: </h2>
        <CalendarButton
          onSubmit={onSubmit}
          text="Pick the start date"
          date={startDate}
          setDate={setStartDate}
        />
        <CalendarButton
          onSubmit={onSubmit}
          text="Pick the end date"
          date={endDate}
          setDate={setEndDate}
        />
      </div>
      <div className="flex items-start justify-items-start mt-4">
        <ValueTypePicker setSelection={setValueType} />
      </div>
    </div>
  );
};
