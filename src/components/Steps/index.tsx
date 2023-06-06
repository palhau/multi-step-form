import { useContext, useState } from 'react';
import { CalendarStep } from './CalendarStep';
import { Button } from '../ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { ValueTypeStep } from './ValueTypeStep';
import { AmountStep } from './AmountStep';
import FormStateContext from '../../lib/formContext';
import { Badge } from '../ui/badge';

export const Steps = () => {
  const { form } = useContext(FormStateContext);
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
    <div className="flex flex-col justify-start rounded-xl w-[700px] h-fit pt-8 pb-8 bg-white">
      <section className="items-center m-auto mb-8 mt-0">
        <Badge className="text-base" variant="step">
          {currentStep <= 2 ? (
            <span>STEP: {currentStep + 1}</span>
          ) : (
            'Completed'
          )}
        </Badge>
      </section>
      {steps[currentStep].id === 'DATE' && (
        <section>
          <h2 className="mb-6 font-bold text-center text-xl">
            {steps[currentStep].title}
          </h2>
          <CalendarStep />
        </section>
      )}
      {steps[currentStep].id === 'TYPE' && (
        <section>
          <h2 className="mb-6 font-bold text-center text-xl">
            {steps[currentStep].title}
          </h2>
          <ValueTypeStep />
        </section>
      )}
      {steps[currentStep].id === 'AMOUNT' && (
        <section>
          <h2 className="mb-6 font-bold text-center text-xl">
            {steps[currentStep].title}
          </h2>
          <AmountStep />
        </section>
      )}
      {steps[currentStep].id === 'SUMMARY' && (
        <section>
          <h2 className="mb-6 font-bold text-center text-xl">
            {steps[currentStep].title}
          </h2>
          <div className="flex flex-col flex-wrap p-4 bg-black/25 ml-4 mr-4">
            <pre>{JSON.stringify(form, null, 2)}</pre>
          </div>
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

        {currentStep < 2 && (
          <Button
            variant={'ghost'}
            onClick={handleNextStep}
            disabled={currentStep >= 3}
          >
            <ArrowRight className="ml-auto h-8 w-8" />
          </Button>
        )}

        {currentStep === 2 && (
          <Button
            variant={'outline'}
            className="rounded-xl w-40 mr-4 hover:bg-blue-500"
            onClick={handleNextStep}
            disabled={currentStep >= 3}
          >
            Finish
          </Button>
        )}
      </div>
    </div>
  );
};
