import { useEffect, useState } from 'react';

import { CalendarButton } from './CalendarButton';
import { ValueTypePicker } from './ValueTypePicker';
import { AmountInput } from './AmountInput';

export const FormModule = () => {
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [amount, setAmount] = useState<string>();
  const [finalVlue, setFinalValue] = useState<number | string>();
  const [valueType, setValueType] = useState<string>('fixed' || 'percentage');
  const onSubmit = () => {
    console.log('Enviado');
  };
  useEffect(() => {
    const value = amount && Number.parseFloat(amount);
    switch (valueType) {
      case 'fixed':
        value && setFinalValue(value.toFixed());
        break;

      case 'percentage':
        let formatedValue =
          value &&
          Number(value / 100).toLocaleString(undefined, {
            style: 'percent',
            minimumFractionDigits: 2,
          });
        setFinalValue(formatedValue);
        break;
    }
    console.log(finalVlue);
  }, [amount, valueType, finalVlue]);

  return (
    <div className="flex flex-col justify-start rounded-md w-[700px] h-fit p-8 bg-white">
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

      <div className="flex items-start justify-items-start mt-4">
        <AmountInput setAmount={setAmount} />
      </div>
    </div>
  );
};
