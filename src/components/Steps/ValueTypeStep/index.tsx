import React, { useContext, useState } from 'react';
import { Button } from '../../ui/button';
import { Trash2 } from 'lucide-react';
import { ValueTypePicker } from '../../FormModules';
import FormStateContext from '../../../lib/formContext';
import { useToast } from '../../ui/use-toast';

export const ValueTypeStep = () => {
  const [components, setComponents] = useState<React.ReactNode[]>([]);
  const { setForm } = useContext(FormStateContext);
  const { toast } = useToast();

  const addComponent = () => {
    setComponents((prevComponents) => [...prevComponents, TypesComponent]);
  };

  const removeComponent = (index: number) => {
    setComponents((prevComponents) => {
      const updatedComponents = [...prevComponents];
      updatedComponents.splice(index, 1);
      return updatedComponents;
    });
  };
  const handleSave = (type: string) => {
    try {
      setForm((prevForm) => ({
        ...prevForm,
        valueTypes: {
          ...prevForm.valueTypes,
          valid: type ? true : false,
          value: {
            types: [...prevForm.valueTypes.value.types, type],
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
  const TypesComponent = <ValueTypePicker onSave={handleSave} />;
  return (
    <div className="items-center bg-slate-500/20 p-4 rounded-xl ml-4 mr-4">
      <h2 className="mb-2">Select the Types: </h2>
      {TypesComponent}
      {components.map((component, index) => (
        <div id="index" className="flex flex-row items-center">
          {component}
          <Button
            onClick={() => removeComponent(index)}
            variant={'ghost'}
            className="w-[50px] pl-4 ml-4 text-left font-normal self-center"
          >
            <Trash2 className="ml-auto h-4 w-4" />
          </Button>
        </div>
      ))}
      <Button className="mt-4 ml-0" variant={'link'} onClick={addComponent}>
        + Add More Types
      </Button>
    </div>
  );
};
