import React, { useContext, useState } from 'react';
import { DatePicker } from '../../FormModules';
import { Button } from '../../ui/button';
import { Trash2 } from 'lucide-react';
import FormStateContext from '../../../lib/formContext';
import { format } from 'date-fns';
import { useToast } from '../../ui/use-toast';

export const CalendarStep = () => {
  const [components, setComponents] = useState<React.ReactNode[]>([]);
  const { setForm } = useContext(FormStateContext);
  const { toast } = useToast();

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
    try {
      setForm((prevForm) => ({
        ...prevForm,
        date: {
          ...prevForm.date,
          valid: start && end ? true : false,
          value: {
            intervals: [
              ...prevForm.date.value.intervals,
              { start: format(start, 'PPP'), end: format(end, 'PPP') },
            ],
          },
        },
      }));
      toast({
        variant: 'success',
        title: 'Success!',
        description: 'Date Interval Saved',
      });
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Error!',
        description: `Error message: ${error}`,
      });
    }
  };

  const DateComponent = <DatePicker onSave={handleSave} />;

  return (
    <div className="items-center bg-slate-500/20 p-4 rounded-xl ml-4 mr-4">
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
