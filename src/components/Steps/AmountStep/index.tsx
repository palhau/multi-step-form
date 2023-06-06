import React, { useContext, useState } from 'react';
import { Button } from '../../ui/button';
import { Trash2 } from 'lucide-react';
import { AmountInput } from '../../FormModules';
import FormStateContext from '../../../lib/formContext';
import { useToast } from '../../ui/use-toast';

export const AmountStep = () => {
  const [components, setComponents] = useState<React.ReactNode[]>([]);
  const { setForm } = useContext(FormStateContext);
  const { toast } = useToast();

  const addComponent = () => {
    setComponents((prevComponents) => [...prevComponents, AmountComponent]);
  };

  const removeComponent = (index: number) => {
    setComponents((prevComponents) => {
      const updatedComponents = [...prevComponents];
      updatedComponents.splice(index, 1);
      return updatedComponents;
    });
  };

  const handleSave = (amount: string) => {
    try {
      setForm((prevForm) => ({
        ...prevForm,
        amount: {
          ...prevForm.amount,
          valid: amount ? true : false,
          value: {
            amounts: [...prevForm.amount.value.amounts, amount],
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
  const AmountComponent = <AmountInput onSave={handleSave} />;
  return (
    <div className="items-center">
      <h2 className="mb-2">Input the amount: </h2>
      {AmountComponent}
      {components.map((component, index) => (
        <div id="index" className="flex flex-row items-center">
          {component}
          <Button
            onClick={() => removeComponent(index)}
            variant={'ghost'}
            className="w-[50px] pl-4 ml-4 text-left font-normal self-end"
          >
            <Trash2 className="ml-auto h-4 w-4" />
          </Button>
        </div>
      ))}
      <Button className="mt-4 ml-0" variant={'link'} onClick={addComponent}>
        + Add More Amounts
      </Button>
    </div>
  );
};
