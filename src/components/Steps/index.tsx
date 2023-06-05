import { useEffect, useState } from 'react';

import { DatePicker, ValueTypePicker, AmountInput } from '../FormModules';
import { CalendarStep } from './CalendarStep';
import { Button } from '../ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const Steps = () => {
  const [amount, setAmount] = useState<string>();
  const [finalVlue, setFinalValue] = useState<number | string>();
  const [valueType, setValueType] = useState<string>('fixed' || 'percentage');
  const onSubmit = () => {
    console.log('Enviado');
  };

  const steps = [
    {
      id: 'DATE',
      title: 'Date Selection',
    },
    {
      id: 'TYPE',
      title: 'Value Type',
    },
    {
      id: 'AMOUNT',
      title: 'Insert the value amount',
    },
  ];

  const [currentStep, setCurrentStep] = useState(0);

  const handleNextStep = () => {
    setCurrentStep((prevState) => prevState + 1);
  };

  const handlePreviousStep = () => {
    setCurrentStep((prevState) => prevState - 1);
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
    <div className="flex flex-col justify-start rounded-xl w-[700px] h-fit p-8 bg-white">
      {steps[currentStep].id === 'DATE' && (
        <section>
          <h2 className="mb-6 font-bold text-center text-lg">
            {steps[currentStep].title}
          </h2>
          <CalendarStep />
        </section>
      )}
      {steps[currentStep].id === 'TYPE' && (
        <section>
          <h2 className="mb-6 font-bold text-center text-lg">
            {steps[currentStep].title}
          </h2>
          <ValueTypePicker setSelection={setValueType} />
        </section>
      )}
      {steps[currentStep].id === 'AMOUNT' && (
        <section>
          <h2 className="mb-6 font-bold text-center text-lg">
            {steps[currentStep].title}
          </h2>
          <AmountInput setAmount={setAmount} />
        </section>
      )}
      <div className="w-full mt-8 flex flex-row justify-between">
        <Button
          variant={'ghost'}
          onClick={handlePreviousStep}
          disabled={currentStep <= 0}
        >
          <ArrowLeft className="ml-auto h-8 w-8" />
        </Button>
        <Button
          variant={'ghost'}
          onClick={handleNextStep}
          disabled={currentStep >= 2}
        >
          <ArrowRight className="ml-auto h-8 w-8" />
        </Button>
      </div>
    </div>
  );
};
