import React, { useContext, useEffect, useState } from 'react';
import { DatePicker } from '../../FormModules';
import { Button } from '../../ui/button';
import { Trash2 } from 'lucide-react';
import FormStateContext from '../../../lib/formContext';
import { format } from 'date-fns';

export const CalendarStep = () => {
  const [components, setComponents] = useState<React.ReactNode[]>([]);
  const { form, setForm } = useContext(FormStateContext);

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

  const handleSave = (start: Date, end: Date) => {
    const newIntervals = [
      { start: format(start, 'PPP'), end: format(end, 'PPP') },
    ];
    setForm((prevForm) => ({
      ...prevForm,
      date: {
        ...prevForm.date,
        valid: newIntervals ? true : false,
        value: {
          ...prevForm.date.value,
          intervals: {
            ...prevForm.date.value.intervals,
            ...newIntervals,
          },
        },
      },
    }));
  };

  useEffect(() => {
    console.log(form.date);
  }, [form]);

  const DateComponent = <DatePicker onSave={handleSave} />;

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
