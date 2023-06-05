import { useState } from 'react';

import { CalendarButton } from './CalendarButton';

export const FormModule = () => {
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const onSubmit = () => {
    console.log('Enviado');
  };

  return (
    <div className="flex flex-col justify-center items-center rounded-md w-[700px] h-64 p-8 bg-white">
      <div className="flex flex-row justify-between">
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
    </div>
  );
};
