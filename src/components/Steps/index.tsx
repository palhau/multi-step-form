import { useState } from 'react';
import { CalendarStep } from './CalendarStep';
import { Button } from '../ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { ValueTypeStep } from './ValueTypeStep';
import { AmountStep } from './AmountStep';

export const Steps = () => {
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
    {
      id: 'SUMMARY',
      title: 'Summary',
    },
  ];

  const [currentStep, setCurrentStep] = useState(0);

  const handleNextStep = () => {
    setCurrentStep((prevState) => prevState + 1);
  };

  const handlePreviousStep = () => {
    setCurrentStep((prevState) => prevState - 1);
  };

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
          <ValueTypeStep />
        </section>
      )}
      {steps[currentStep].id === 'AMOUNT' && (
        <section>
          <h2 className="mb-6 font-bold text-center text-lg">
            {steps[currentStep].title}
          </h2>
          <AmountStep />
        </section>
      )}
      {steps[currentStep].id === 'SUMMARY' && (
        <section>
          <h2 className="mb-6 font-bold text-center text-lg">
            {steps[currentStep].title}
          </h2>
          <span>Summary Here!</span>
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
          disabled={currentStep >= 3}
        >
          <ArrowRight className="ml-auto h-8 w-8" />
        </Button>
      </div>
    </div>
  );
};
